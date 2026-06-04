import { useEffect } from "react";

const SITE_URL = "https://dpg-enterprises.vercel.app";
const SITE_NAME = "DPG Enterprises";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
}

/**
 * SEO component that dynamically updates <head> meta tags.
 *
 * Since this is a React SPA (not Next.js SSR), we use direct DOM manipulation
 * to set per-page titles and meta descriptions. This ensures:
 * - Googlebot (which executes JS) sees unique titles/descriptions per page.
 * - The browser tab always shows the correct page title.
 * - Canonical URLs are set correctly for every route.
 *
 * Note: Social media crawlers (WhatsApp, Facebook, Twitter) do NOT execute
 * JavaScript, so they will always read the fallback tags from index.html.
 * This is expected behavior for SPAs.
 */
export default function SEO({ title, description, path = "/", keywords, ogImage }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    // ── Title ──
    document.title = fullTitle;

    // ── Helper to set or create a <meta> tag ──
    function setMeta(attr: string, key: string, content: string) {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    // ── Standard Meta ──
    setMeta("name", "description", description);
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // ── Canonical URL ──
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // ── Open Graph ──
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);

    // ── Twitter Card ──
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, keywords, ogImage]);

  return null;
}
