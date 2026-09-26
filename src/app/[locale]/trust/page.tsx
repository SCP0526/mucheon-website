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
  return pageMeta(l, "/trust", t.trustPage.title, t.trustPage.description);
}

export default async function LocaleTrustPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  const hrefs = [p(locale, "/terms"), p(locale, "/terms"), p(locale, "/privacy"), p(locale, "/evidence")];

  return (
    <>
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.trustPage.eyebrow}
        title={t.trustPage.heading}
        description={t.trustPage.description}
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {t.trustPage.sections.map((s, i) => (
            <div key={s.h} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <h2 className="font-semibold">{s.h}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.p}</p>
              <Link
                href={hrefs[i]}
                className="mt-4 inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {s.linkText} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <p className="text-sm text-muted-foreground">{t.trustPage.more}</p>
          <Button className="mt-6" asChild>
            <Link href={p(locale, "/contact")}>{t.trustPage.cta}</Link>
          </Button>
        </div>

        {/* Working with us — commercial basis (facts only; entity details live in the contract) */}
        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.trustPage.engagementTitle}
          </h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {t.trustPage.engagement.map((e) => (
              <div key={e.h}>
                <h3 className="text-sm font-semibold">{e.h}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery, acceptance & liability — summary level, details live in the contract */}
        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.trustPage.deliveryTitle}
          </h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {t.trustPage.delivery.map((e) => (
              <div key={e.h}>
                <h3 className="text-sm font-semibold">{e.h}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Honest boundary: not in place vs. provided on request */}
        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.trustPage.boundaryTitle}
          </h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">{t.trustPage.notInPlaceTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.trustPage.notInPlace.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{t.trustPage.onRequestTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.trustPage.onRequest.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Basis & status — real-world basis is reference-only; no certifications; current public baseline */}
        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.trustPage.basisTitle}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{t.trustPage.basisNote}</p>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}
