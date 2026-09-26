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
  return pageMeta(l, "/evidence", t.evidence.title, t.evidence.description);
}

export default async function LocaleEvidencePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.evidence.title}
        title={t.evidence.heading}
        description={t.evidence.description}
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <div className="rounded-xl border border-border/60 p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {t.evidence.disclaimer.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.evidence.cases.map((c) => (
            <div key={c.id} className="flex flex-col rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium tracking-wide text-primary">{c.id}</span>
                <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {c.level}
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.problem}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.capability}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.evidence}</p>
              <p className="mt-2 text-xs text-muted-foreground/80">{c.limitation}</p>
              <p className="mt-auto pt-4 text-xs font-medium text-primary/90">
                {t.evidence.caseNote}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm">
          <Link
            href={p(locale, "/cases")}
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            {t.casesPage.seeAll} →
          </Link>
        </p>

        <div className="mt-14 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.evidence.packagesTitle}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t.evidence.packagesBody}
          </p>
          <Button className="mt-6" asChild>
            <Link href={p(locale, "/contact")}>{t.evidence.cta}</Link>
          </Button>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}