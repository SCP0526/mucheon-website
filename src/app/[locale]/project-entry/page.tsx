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
  return pageMeta(l, "/project-entry", t.projectEntry.title, t.projectEntry.description);
}

export default async function LocaleProjectEntryPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <main className="relative">
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.projectEntry.title}
        title={t.projectEntry.heading}
        description={t.projectEntry.description}
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-border/60 bg-card/40 p-6">
            <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
              {t.projectEntry.includeTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {t.projectEntry.include.map((li) => (
                <li key={li} className="flex gap-2">
                  <span className="text-primary">→</span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-6">
            <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
              {t.projectEntry.backTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {t.projectEntry.back.map((li) => (
                <li key={li} className="flex gap-2">
                  <span className="text-primary">→</span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">{t.projectEntry.note}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href={p(locale, "/contact")}>{t.projectEntry.cta}</Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              {t.projectEntry.preferEmail}{" "}
              <a
                href="mailto:schen1062@gmail.com?subject=Assessment%20inquiry%20%E2%80%94%20MUCHEON"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                schen1062@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}