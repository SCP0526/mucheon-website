"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobeIcon } from "lucide-react";

import { getDict, p, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Language switcher: swaps the locale segment of the current path.
 * If the current path has no locale segment (internal reference pages),
 * it falls back to the other locale's home page.
 */
export function LanguageSwitcher({
  locale,
  variant = "desktop",
}: {
  locale: Locale;
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname() ?? "/";
  const other: Locale = locale === "en" ? "zh" : "en";
  const match = pathname.match(/^\/(en|zh)(\/.*)?$/);
  const rest = match ? (match[2] ?? "") : "";
  const target = match ? `/${other}${rest}` : p(other, "");
  const t = getDict(locale).switcher;

  const otherLabel = other === "en" ? t.en : t.zh;

  if (variant === "mobile") {
    return (
      <Link
        href={target}
        className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label={`${t.label}: ${otherLabel}`}
      >
        <GlobeIcon className="size-4" />
        <span
          className={cn(
            "font-medium",
            other === "zh" ? "text-primary" : "text-foreground",
          )}
        >
          {otherLabel}
        </span>
        <span className="text-xs opacity-60">({locale === "en" ? "current: EN" : "当前：中文"})</span>
      </Link>
    );
  }

  return (
    <Link
      href={target}
      className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      aria-label={`${t.label}: ${otherLabel}`}
    >
      <GlobeIcon className="size-4" />
      <span
        className={cn(
          "font-medium",
          other === "zh" && "text-primary",
        )}
      >
        {otherLabel}
      </span>
    </Link>
  );
}