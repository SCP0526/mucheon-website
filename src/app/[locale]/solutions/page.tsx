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
  return pageMeta(l, "/solutions", t.solutions.title, t.solutions.description);
}

export default async function LocaleSolutionsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.solutions.title}
        title={t.solutions.heading}
        description={t.solutions.description}
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {t.solutions.cards.map((s) => (
            <div key={s.problem} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <p className="text-sm font-medium text-primary">
                <span className="mr-1.5 text-xs tracking-wide text-muted-foreground/70 uppercase">
                  {t.solutions.problemLabel}
                </span>
                {s.problem}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="mr-1.5 text-xs tracking-wide text-muted-foreground/70 uppercase">
                  {t.solutions.approachLabel}
                </span>
                {s.approach}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/80">
                <span className="rounded-full border border-border px-2 py-0.5 font-medium">
                  {s.level}
                </span>
                <span>{s.note}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild>
            <Link href={p(locale, "/contact")}>{t.solutions.cta}</Link>
          </Button>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}