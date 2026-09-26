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
  return pageMeta(l, "/how-we-work", t.howWeWork.title, t.howWeWork.description);
}

export default async function LocaleHowWeWorkPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.howWeWork.title}
        title={t.howWeWork.heading}
        description={t.howWeWork.description}
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <ol className="space-y-5">
          {t.howWeWork.steps.map((s, i) => (
            <li key={s.name} className="flex gap-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/40 text-sm font-semibold text-primary">
                {i + 1}
              </span>
              <div>
                <h2 className="font-semibold">{s.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.howWeWork.principles.map((pr) => (
            <div key={pr.name} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                {pr.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{pr.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button size="lg" asChild>
            <Link href={p(locale, "/contact")}>{t.howWeWork.cta}</Link>
          </Button>
        </div>

        {/* Engagement models — commercial basis, mirrors Trust page and commercial boundaries */}
        <div className="mt-14">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.howWeWork.engagementTitle}
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {t.howWeWork.engagementModels.map((m) => (
              <div key={m.name} className="rounded-xl border border-border/60 bg-card/40 p-6">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground/80">{t.howWeWork.levelNote}</p>
        </div>

        {/* How a project starts + cross-links */}
        <div className="mt-8 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.howWeWork.startTitle}
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
            {t.howWeWork.startSteps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-primary">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">{t.howWeWork.deliveryNote}</p>
          <p className="mt-4 text-sm">
            <Link
              href={p(locale, "/capabilities")}
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t.howWeWork.catalogueLink} →
            </Link>
          </p>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}