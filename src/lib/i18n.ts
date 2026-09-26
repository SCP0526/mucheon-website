export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

import { enCore } from "@/lib/content-en-core";
import { enPagesA } from "@/lib/content-en-pages-a";
import { enPagesB } from "@/lib/content-en-pages-b";
import { enPagesC } from "@/lib/content-en-pages-c";
import { enPagesD } from "@/lib/content-en-pages-d";
import { zhCore } from "@/lib/content-zh-core";
import { zhPagesA } from "@/lib/content-zh-pages-a";
import { zhPagesB } from "@/lib/content-zh-pages-b";
import { zhPagesC } from "@/lib/content-zh-pages-c";
import { zhPagesD } from "@/lib/content-zh-pages-d";

const en = { ...enCore, ...enPagesA, ...enPagesB, ...enPagesC, ...enPagesD };
const zh = { ...zhCore, ...zhPagesA, ...zhPagesB, ...zhPagesC, ...zhPagesD };

/** Recursively widen literal types so EN/ZH dicts share one structural type. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type Dict = Widen<typeof en>;

const dicts: Record<Locale, Dict> = { en, zh };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/** Locale-aware path: p("zh", "/solutions") → "/zh/solutions"; p("en", "") → "/en" */
export function p(locale: Locale, path: string): string {
  return `/${locale}${path || ""}`;
}

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};