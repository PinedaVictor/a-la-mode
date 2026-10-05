// Per-route <title>, meta description, and canonical URL. Read at runtime by
// RouteMeta (client-side navigation) and at build time by scripts/prerender.mjs
// (static HTML for crawlers), so both always agree. Keep titles ~60 chars and
// descriptions ~155.

export const SITE_URL = "https://pinedavictor.com";
export const SITE_NAME = "Victor Pineda";
export const OG_IMAGE = `${SITE_URL}/images/victor-pineda.jpeg`;

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
};

export const seoRoutes: RouteSeo[] = [
  {
    path: "/",
    title: "Victor Pineda | Software Engineer & Founder, Dreamlike Digital",
    description:
      "Software engineer and founder of Dreamlike Digital. I build software, make art, and travel, then share free trip guides with the real costs."
  },
  {
    path: "/building",
    title: "Building Software & Select Client Work | Victor Pineda",
    description:
      "What I'm building: web apps, open source like vexal, and experiments. Need something built? I take on select projects through Dreamlike Digital."
  },
  {
    path: "/projects",
    title: "Projects: Web Apps, Open Source & Tools | Victor Pineda",
    description:
      "Web apps, open-source tools, and experiments I've built, including vexal.io, zvite.io, and Durtles, a Python CLI for batch file processing."
  },
  {
    path: "/references",
    title: "Client References | Victor Pineda",
    description:
      "What clients say about working with Victor Pineda, software engineer and founder of Dreamlike Digital."
  },
  {
    path: "/travel",
    title: "Travel Videos: Iraq, Taiwan, Vietnam & More | Victor Pineda",
    description:
      "Travel videos from Iraq, Taiwan, Vietnam's Cao Bang Loop, Thailand, and Puerto Rico, with routes, safety tips, and where to stay."
  },
  {
    path: "/travel-guides",
    title: "Free Travel Guides: Iraq, Taiwan & Japan | Victor Pineda",
    description:
      "Free downloadable itineraries from my trips to Iraq, Taiwan, and Japan, with day-by-day routes, tips, and cost breakdowns for most trips."
  }
];

export const canonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

// Unknown paths render the NotFound page; dist/404.html is prerendered from it.
export const notFoundSeo: RouteSeo = {
  path: "/this-page-does-not-exist",
  title: "Page Not Found | Victor Pineda",
  description: "This page doesn't exist. Head home to see what Victor Pineda is building."
};

// Structured data telling Google which Victor Pineda this site is about.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victor Pineda",
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Dreamlike Digital",
    url: "https://dreamlikedigital.com"
  },
  sameAs: [
    "https://www.linkedin.com/in/pinedavictor095/",
    "https://github.com/PinedaVictor",
    "https://www.youtube.com/@vicblvd",
    "https://dreamlikedigital.com",
    "https://www.vexal.io",
    "https://buymeacoffee.com/victorpineda"
  ]
};
