import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
}

/**
 * Hook to manage SEO meta tags dynamically
 * Usage: useSEO({ title: "Page Title", description: "Page description" })
 */
export function useSEO({
  title,
  description,
  keywords = "",
  ogImage = "https://devtoolshub.com/og-image.png",
  ogType = "website",
  canonicalUrl = "",
  author = "DevTools Hub",
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
    updateMetaTag("author", author);

    // Open Graph tags
    updatePropertyTag("og:title", title);
    updatePropertyTag("og:description", description);
    updatePropertyTag("og:type", ogType);
    updatePropertyTag("og:image", ogImage);

    // Twitter tags
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector("link[rel='canonical']");
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    return () => {
      // Cleanup if needed
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, author]);
}

/**
 * Add JSON-LD structured data to the page for better SEO
 */
export function useStructuredData(structuredData: Record<string, unknown>) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [structuredData]);
}
