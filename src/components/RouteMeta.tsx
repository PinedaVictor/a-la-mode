import { type FC, useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { canonicalUrl, notFoundSeo, seoRoutes } from "../configs/seo";

// Finds the head tag, creating it if missing, and sets one attribute.
const upsert = (
  tag: "meta" | "link",
  key: [string, string],
  attr: "content" | "href",
  value: string
) => {
  const [keyAttr, keyValue] = key;
  let el = document.head.querySelector(`${tag}[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const remove = (selector: string) =>
  document.head.querySelector(selector)?.remove();

// Keeps the head tags in sync on client-side navigation. The prerendered HTML
// already has the right tags on first load; this covers in-app route changes,
// including to and from the 404 page (which has no canonical and is noindex).
export const RouteMeta: FC = () => {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const path =
      pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const route = seoRoutes.find((r) => r.path === path);
    const { title, description } = route ?? notFoundSeo;

    document.title = title;
    upsert("meta", ["name", "description"], "content", description);
    upsert("meta", ["property", "og:title"], "content", title);
    upsert("meta", ["property", "og:description"], "content", description);

    if (route) {
      const url = canonicalUrl(path);
      upsert("link", ["rel", "canonical"], "href", url);
      upsert("meta", ["property", "og:url"], "content", url);
      remove('meta[name="robots"]');
    } else {
      remove('link[rel="canonical"]');
      remove('meta[property="og:url"]');
      upsert("meta", ["name", "robots"], "content", "noindex");
    }
  }, [pathname]);

  return null;
};
