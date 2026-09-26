import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { getDict, isLocale, p } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  const t = getDict(l);
  return pageMeta(l, "/capabilities", t.capabilities.title, t.capabilities.description);
}

export default async function LocaleCapabilitiesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.capabilities.title}
        title={t.capabilities.heading}
        description={t.capabilities.description}
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
          {t.capabilities.bTitle}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {t.capabilities.itemsB.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <p className="mt-3 text-xs text-muted-foreground/80">{c.note}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-sm font-semibold tracking-wide text-primary uppercase">
          {t.capabilities.cTitle}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {t.capabilities.itemsC.map((c) => (
            <div key={c.name} className="rounded-xl border border-dashed border-primary/40 bg-card/20 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{c.name}</h3>
                <span className="rounded-full border border-primary/50 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Experimental
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <p className="mt-3 text-xs text-muted-foreground/80">{c.status}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.capabilities.transparencyTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {t.capabilities.transparency.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <Button className="mt-6" asChild>
            <Link href={p(locale, "/contact")}>{t.capabilities.cta}</Link>
          </Button>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}