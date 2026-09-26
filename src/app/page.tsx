"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SparklesIcon } from "lucide-react";

import { getDict } from "@/lib/i18n";

/**
 * Language gateway for "/" (static export cannot server-redirect).
 * Client-side negotiation: browser language zh* 鈫?/zh, otherwise /en.
 * Static EN/ZH links remain as the no-JS fallback.
 */
export default function GatewayPage() {
  useEffect(() => {
    const target = navigator.language?.toLowerCase().startsWith("zh") ? "/zh" : "/en";
    window.location.replace(target);
  }, []);

  const t = getDict("en").gateway;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="flex items-center gap-2 text-lg font-semibold">
        <SparklesIcon className="size-5 text-primary" />
        MUCHEON
      </span>
      <p className="text-sm text-muted-foreground">{t.choose}</p>
      <div className="flex items-center gap-4">
        <Link
          href="/en"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
        >
          {t.en}
        </Link>
        <Link
          href="/zh"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
        >
          {t.zh}
        </Link>
      </div>
    </main>
  );
}
