import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { getDict, isLocale, p } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ locale: string }> };

function LegalPage({ locale, kind }: { locale: "en" | "zh"; kind: "privacy" | "terms" }) {
  const t = getDict(locale)[kind];
  return (
    <main className="relative">
      <SiteHeader locale={locale} />
      <PageHeader eyebrow={t.title} title={t.heading} description={t.description} />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="rounded-xl border border-border/60 bg-muted/30 p-4 text-sm text-muted-foreground">
            {t.updated}
          </p>
          <div className="mt-10 space-y-8">
            {t.sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-semibold">{s.h}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  const t = getDict(l);
  return pageMeta(l, "/privacy", t.privacy.title, t.privacy.description);
}

export default async function LocalePrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <LegalPage locale={raw} kind="privacy" />;
}