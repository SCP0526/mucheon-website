import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";
import { ogLocale, p, type Locale } from "@/lib/i18n";

/** Language-aware metadata: canonical + hreflang alternates + OG. */
export function pageMeta(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const base = siteConfig.url;
  const canonical = `${base}${p(locale, path)}`;
  const enUrl = `${base}/en${path || ""}`;
  const zhUrl = `${base}/zh${path || ""}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: enUrl, zh: zhUrl, "x-default": enUrl },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      locale: ogLocale[locale],
    },
  };
}