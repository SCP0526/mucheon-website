import type { MetadataRoute } from "next";

import { componentsMeta } from "@/lib/components-meta";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/solutions",
    "/capabilities",
    "/evidence",
    "/how-we-work",
    "/project-entry",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const componentPages = componentsMeta.map((c) => ({
    url: `${BASE}/components/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...componentPages];
}
