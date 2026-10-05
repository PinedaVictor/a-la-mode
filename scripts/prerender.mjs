// Build-time prerender: serves dist/ with `vite preview`, renders each route in
// headless Chrome, and writes static HTML (real content + per-route head tags)
// so crawlers don't see an empty <div id="root">. Runs after `vite build`.
//
//   /           -> dist/index.html
//   /building   -> dist/building.html   (served at /building via cleanUrls)

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { preview } from "vite";
import puppeteer from "puppeteer";
import {
  seoRoutes,
  canonicalUrl,
  personJsonLd,
  notFoundSeo
} from "../src/configs/seo.ts";

const DIST = resolve(import.meta.dirname, "../dist");
const PORT = 4179;
// Fail the build if a route renders (nearly) empty. The shared header alone is
// ~25 chars, so anything under this means the page body didn't render.
const MIN_TEXT_CHARS = 60;

// Never send analytics hits or load video players from the build machine.
const BLOCKED_HOSTS = [
  "googletagmanager.com",
  "google-analytics.com",
  "analytics.google.com",
  "youtube.com",
  "youtube-nocookie.com",
  "ytimg.com",
  "doubleclick.net"
];

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const setHead = (html, { path, title, description }, { notFound = false } = {}) => {
  const url = canonicalUrl(path);
  const replacements = [
    [/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`],
    [
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapeAttr(description)}" />`
    ],
    [
      /<link rel="canonical"[^>]*\/>/,
      `<link rel="canonical" href="${url}" />`
    ],
    [
      /<meta property="og:title"[^>]*\/>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`
    ],
    [
      /<meta property="og:description"[^>]*\/>/,
      `<meta property="og:description" content="${escapeAttr(description)}" />`
    ],
    [/<meta property="og:url"[^>]*\/>/, `<meta property="og:url" content="${url}" />`]
  ];
  for (const [pattern, value] of replacements) {
    if (!pattern.test(html)) throw new Error(`index.html is missing ${pattern}`);
    // Function replacers: a string replacement would treat "$&", "$$", etc.
    // in titles or page content as special patterns.
    html = html.replace(pattern, () => value);
  }
  if (notFound) {
    // A 404 has no canonical URL and should never be indexed.
    return html
      .replace(/\s*<link rel="canonical"[^>]*\/>/, "")
      .replace(/\s*<meta property="og:url"[^>]*\/>/, "")
      .replace("</head>", () => '    <meta name="robots" content="noindex" />\n  </head>');
  }
  const jsonLd = `<script type="application/ld+json">${JSON.stringify(personJsonLd)}</script>`;
  return html.replace("</head>", () => `    ${jsonLd}\n  </head>`);
};

// Scripts and iframes (YouTube, beehiiv, Clerk) are re-created by the live app;
// baking them in would double-load them before React takes over.
const cleanSnapshot = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "");

const outFile = (path) =>
  resolve(DIST, path === "/" ? "index.html" : `${path.slice(1)}.html`);

// Every router route needs an seo.ts entry: without one it gets no HTML file,
// and Firebase would serve it to crawlers as a 404 while it works fine in the
// browser. Fail the build instead of shipping that silently.
const routeTree = await readFile(
  resolve(import.meta.dirname, "../src/routeTree.gen.ts"),
  "utf8"
);
const routerPaths = new Set(
  [...routeTree.matchAll(/^\s*path: '([^']+)'/gm)].map((m) => m[1])
);
const seoPaths = new Set(seoRoutes.map((r) => r.path));
const missingSeo = [...routerPaths].filter((p) => !seoPaths.has(p));
const unknownSeo = [...seoPaths].filter((p) => !routerPaths.has(p));
if (routerPaths.size === 0 || missingSeo.length || unknownSeo.length) {
  throw new Error(
    `src/configs/seo.ts is out of sync with the router. ` +
      `Missing from seo.ts: [${missingSeo.join(", ")}]. ` +
      `Not a route: [${unknownSeo.join(", ")}].`
  );
}

// Firebase Hosting serves dist/404.html, with a 404 status, for any path
// that has no file.
const jobs = [
  ...seoRoutes.map((route) => ({ route, file: outFile(route.path) })),
  { route: notFoundSeo, file: resolve(DIST, "404.html"), notFound: true }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes.map((r) => `  <url><loc>${canonicalUrl(r.path)}</loc></url>`).join("\n")}
</urlset>
`;

// Keep the untouched Vite shell so re-running prerender without a fresh build
// doesn't use an already-prerendered index.html as its template. Dotfiles are
// excluded from deploys by firebase.json's "**/.*" ignore.
const SHELL = resolve(DIST, ".spa-shell.html");
const template = await readFile(SHELL, "utf8").catch(async () => {
  const shell = await readFile(resolve(DIST, "index.html"), "utf8");
  await writeFile(SHELL, shell);
  return shell;
});
if (!template.includes('<div id="root"></div>')) {
  throw new Error("dist shell is already prerendered; run `vite build` first");
}
const server = await preview({
  preview: { port: PORT, strictPort: true },
  logLevel: "warn"
});
const browser = await puppeteer.launch();
const rendered = [];

try {
  for (const { route, file, notFound } of jobs) {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const host = new URL(req.url()).hostname;
      if (BLOCKED_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://localhost:${PORT}${route.path}`, {
      waitUntil: "networkidle2",
      timeout: 30000
    });
    await page.waitForFunction(
      (min) => (document.getElementById("root")?.innerText.trim().length ?? 0) >= min,
      { timeout: 15000 },
      MIN_TEXT_CHARS
    );

    const rootHtml = cleanSnapshot(
      await page.$eval("#root", (el) => el.innerHTML)
    );
    const textLength = await page.$eval("#root", (el) => el.innerText.trim().length);
    await page.close();

    const html = setHead(template, route, { notFound }).replace(
      '<div id="root"></div>',
      () => `<div id="root">${rootHtml}</div>`
    );
    rendered.push({ route, file, html, textLength });
  }

  // Write only after every route rendered, so the preview server keeps
  // serving the untouched SPA shell while we snapshot.
  for (const { file, html, textLength } of rendered) {
    await writeFile(file, html);
    console.log(`prerendered ${file.slice(DIST.length + 1).padEnd(20)} ${textLength} chars of text`);
  }
  await writeFile(resolve(DIST, "sitemap.xml"), sitemap);
  console.log(`wrote sitemap.xml with ${seoRoutes.length} URLs`);
} finally {
  await browser.close();
  await new Promise((done) => server.httpServer.close(done));
}
