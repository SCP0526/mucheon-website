import Link from "next/link";
import { notFound } from "next/navigation";
import { CompassIcon, EyeIcon, LayersIcon, ShieldCheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { getDict, isLocale, p } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ locale: string }> };

const icons = [LayersIcon, ShieldCheckIcon, EyeIcon, CompassIcon];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  const t = getDict(l);
  return pageMeta(l, "/about", t.about.title, t.about.metaDescription);
}

export default async function LocaleAboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <main className="relative">
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={
          <>
            MUCHEON <span className="text-primary">{t.about.headingSuffix}</span>
          </>
        }
        description={t.about.description}
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <p className="leading-7 text-muted-foreground">{t.about.p1}</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="mt-4 leading-7 text-muted-foreground">{t.about.p2}</p>
          </BlurFade>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          {t.about.stance.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <BlurFade key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border/60 bg-card/40 p-6">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Button size="lg" asChild>
            <Link href={p(locale, "/contact")}>{t.about.cta}</Link>
          </Button>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}