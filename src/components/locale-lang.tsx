"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Keeps <html lang> in sync with the locale route (static-export friendly). */
export function LocaleLang() {
  const pathname = usePathname() ?? "/";
  useEffect(() => {
    const zh = pathname.startsWith("/zh");
    document.documentElement.lang = zh ? "zh-CN" : "en";
  }, [pathname]);
  return null;
}