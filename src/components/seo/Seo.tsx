import { useEffect } from "react";

const SITE_NAME = "DevTools Hub";
const SITE_URL = "https://devtool-hub-frondend.onrender.com";

const SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "DevTools Hub — Free Developer Tools",
    description: "Fast, free developer tools for JSON, Base64, JWT, UUID, hashes, URLs, timestamps, QR codes and regex.",
  },
  "/tools/json": {
    title: "JSON Formatter & Validator — DevTools Hub",
    description: "Format, minify and validate JSON quickly with DevTools Hub.",
  },
  "/tools/base64": {
    title: "Base64 Encoder & Decoder — DevTools Hub",
    description: "Encode and decode Base64 text quickly and safely.",
  },
  "/tools/jwt": {
    title: "JWT Decoder & Validator — DevTools Hub",
    description: "Decode and inspect JSON Web Tokens with DevTools Hub.",
  },
  "/tools/uuid": {
    title: "UUID Generator — DevTools Hub",
    description: "Generate UUID v1 and v4 identifiers instantly.",
  },
  "/tools/password": {
    title: "Password Generator — DevTools Hub",
    description: "Generate strong random passwords with configurable options.",
  },
  "/tools/hash": {
    title: "Hash Generator — DevTools Hub",
    description: "Generate MD5, SHA-1, SHA-256 and SHA-512 hashes.",
  },
  "/tools/url": {
    title: "URL Encoder & Decoder — DevTools Hub",
    description: "Encode and decode URLs quickly with an easy developer utility.",
  },
  "/tools/timestamp": {
    title: "Unix Timestamp Converter — DevTools Hub",
    description: "Convert ISO dates to Unix timestamps and back.",
  },
  "/tools/qr": {
    title: "QR Code Generator — DevTools Hub",
    description: "Generate QR codes from text or URLs instantly.",
  },
  "/tools/regex": {
    title: "Regex Tester — DevTools Hub",
    description: "Test regular expressions against text with instant results.",
  },
};

export default function Seo({ path }: { path: string }) {
  useEffect(() => {
    const meta = SEO[path] ?? {
      title: SITE_NAME,
      description: "Free online developer tools for everyday engineering workflows.",
    };

    document.title = meta.title;

    const setMeta = (name: string, content: string) => {
      let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta("description", meta.description);
    setMeta("robots", "index,follow,max-image-preview:large");

    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
    let canonical = document.head.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setMeta("og:title", meta.title);
    setMeta("og:description", meta.description);
    setMeta("og:type", "website");
    setMeta("og:url", canonicalUrl);
  }, [path]);

  return null;
}
