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
  return pageMeta(l, "/cases", t.casesPage.title, t.casesPage.description);
}

export default async function LocaleCasesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.casesPage.eyebrow}
        title={t.casesPage.heading}
        description={t.casesPage.description}
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        {/* Truth boundary */}
        <div className="rounded-xl border border-border/60 p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {t.casesPage.boundary.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-medium text-primary/90">
            {t.casesPage.status}
          </p>
        </div>

        {/* Case cards — content mirrors the Evidence page and the Case Registry, facts unchanged */}
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
              <p className="mt-2 text-xs text-foreground/80">{c.value}</p>
              <p className="mt-auto pt-4 text-xs font-medium text-primary/90">
                {t.evidence.caseNote}
              </p>
            </div>
          ))}
        </div>

        {/* Registry facts */}
        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.casesPage.factsTitle}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {t.casesPage.facts.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href={p(locale, "/project-entry")}>{t.casesPage.projectCta}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={p(locale, "/evidence")}>{t.casesPage.evidenceLink}</Link>
          </Button>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}
