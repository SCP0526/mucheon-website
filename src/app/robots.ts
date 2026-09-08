import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Internal technical reference pages — no public navigation entry,
        // keep them out of search indexing.
        disallow: ["/components", "/components/*", "/themes"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
