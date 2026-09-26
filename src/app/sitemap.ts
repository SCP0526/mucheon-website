import type { MetadataRoute } from "next";

import { componentsMeta } from "@/lib/components-meta";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/solutions",
    "/capabilities",
    "/evidence",
    "/cases",
    "/trust",
    "/how-we-work",
    "/project-entry",
    "/privacy",
    "/terms",
  ];

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => {
      const url = `${BASE}/${locale}${path}`;
      return {
        url,
        changeFrequency: "weekly" as const,
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: {
            en: `${BASE}/en${path}`,
            zh: `${BASE}/zh${path}`,
            "x-default": `${BASE}/en${path}`,
          },
        },
      };
    }),
  );

  // Internal technical reference pages (robots-disallowed) stay locale-neutral.
  const componentPages: MetadataRoute.Sitemap = componentsMeta.map((c) => ({
    url: `${BASE}/components/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...componentPages];
}

const locales = ["en", "zh"] as const;
