import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GridPattern } from "@/components/velora/grid-pattern";
import { BlurFade } from "@/components/velora/blur-fade";
import { getDict, isLocale, p } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = getDict(isLocale(locale) ? locale : "en");
  return pageMeta(
    isLocale(locale) ? locale : "en",
    "",
    t.meta?.home?.title ?? "MUCHEON",
    t.home.sub,
  );
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="flex-1">
        {/* HERO — copy / control-tower visual */}
        <section className="relative overflow-hidden">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-36 pb-20 md:grid-cols-2 md:items-center lg:px-8 lg:pt-44">
            {/* LEFT — copy zone */}
            <div>
              <BlurFade direction="down">
                <span className="text-sm font-medium tracking-wide text-primary">
                  {t.home.eyebrow}
                </span>
              </BlurFade>
              <BlurFade direction="down">
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  {t.home.h1}
                </h1>
              </BlurFade>
              <BlurFade direction="down">
                <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                  {t.home.sub}
                </p>
              </BlurFade>
              <BlurFade direction="down">
                <Button size="lg" className="mt-10" asChild>
                  <Link href={p(locale, "/contact")}>
                    {t.nav.requestAssessment}
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </BlurFade>
            </div>

            {/* RIGHT — control tower visual (pure CSS, static-first, light motion only) */}
            <div
              aria-hidden
              className="relative hidden aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card/30 md:flex"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_40px] shadow-background/60" />
              <GridPattern
                width={32}
                height={32}
                className="fill-transparent stroke-border/40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
              />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
              <div className="absolute left-3 top-3 size-5 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute right-3 top-3 size-5 border-r-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-3 left-3 size-5 border-b-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-3 right-3 size-5 border-b-2 border-r-2 border-primary/40" />
              <div className="absolute size-[19rem] rounded-full opacity-25 lg:size-[22rem] [background:repeating-conic-gradient(var(--primary)_0deg,var(--primary)_2deg,transparent_2deg,transparent_6deg)] [mask-image:repeating-conic-gradient(black_0deg,black_1deg,transparent_1deg,transparent_6deg)]" />
              <div className="animate-spin-slowest absolute size-[19rem] rounded-full lg:size-[22rem] [background:conic-gradient(from_0deg,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60deg)] [mask-image:radial-gradient(circle,black_0%,black_60%,transparent_72%)]" />
              <div className="animate-float-gentle absolute left-[8%] top-[14%] h-16 w-24 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <div className="m-2 h-1 w-10 rounded bg-primary/40" />
                <div className="m-2 mt-1 h-1 w-14 rounded bg-primary/25" />
                <div className="m-2 mt-1 h-1 w-8 rounded bg-primary/25" />
              </div>
              <div className="animate-float-gentle absolute right-[8%] top-[18%] h-20 w-28 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm [animation-delay:1.5s]">
                <div className="m-2 h-1 w-12 rounded bg-primary/40" />
                <div className="m-2 mt-1 h-1 w-16 rounded bg-primary/25" />
                <div className="m-2 mt-1 h-8 w-20 rounded-sm bg-primary/10" />
              </div>
              <div className="animate-float-gentle absolute bottom-[12%] right-[14%] h-14 w-32 rounded-lg border border-primary/25 bg-primary/5 backdrop-blur-sm [animation-delay:3s]">
                <div className="m-2 h-1 w-20 rounded bg-primary/35" />
                <div className="m-2 mt-1 h-1 w-14 rounded bg-primary/25" />
              </div>
              <div className="animate-beam-flow absolute left-[10%] right-[30%] top-[52%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="animate-beam-flow absolute bottom-[30%] left-[18%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent [animation-delay:2s]" />
              <div className="animate-beam-flow absolute left-[24%] right-[24%] bottom-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent [animation-delay:4s]" />
              <div className="relative flex size-56 items-center justify-center">
                <div className="animate-spin-slowest absolute inset-0 rounded-full border border-primary/25 [mask-image:conic-gradient(black_0deg,transparent_40deg,black_120deg,transparent_170deg,black_250deg,transparent_300deg)]" />
                <div className="animate-spin-slower absolute inset-6 rounded-full border-2 border-primary/35 [mask-image:conic-gradient(black_0deg,transparent_60deg,black_160deg,transparent_230deg)]" />
                <div className="animate-spin-slowest absolute inset-14 rounded-full border border-primary/30 [mask-image:conic-gradient(black_0deg,transparent_90deg,black_200deg)] [animation-delay:2s]" />
                <div className="absolute inset-24 rounded-full bg-primary/10 blur-xl" />
                <div className="animate-float-gentle relative flex size-24 items-center justify-center rounded-full border border-primary/50 bg-primary/15 shadow-[0_0_80px_-10px] shadow-primary/40">
                  <div className="size-10 rounded-full border border-primary/60 bg-gradient-to-br from-primary/40 to-primary/10" />
                </div>
                <span className="animate-float-gentle absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-background px-2 py-0.5 text-[9px] font-medium tracking-widest text-primary/90 uppercase">
                  Integration
                </span>
                <span className="animate-float-gentle absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-background px-2 py-0.5 text-[9px] font-medium tracking-widest text-primary/90 uppercase [animation-delay:2s]">
                  Approval
                </span>
                <span className="animate-float-gentle absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-primary/40 bg-background px-2 py-0.5 text-[9px] font-medium tracking-widest text-primary/90 uppercase [animation-delay:4s]">
                  Automation
                </span>
                <span className="animate-float-gentle absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-background px-2 py-0.5 text-[9px] font-medium tracking-widest text-primary/90 uppercase [animation-delay:6s]">
                  Trusted AI
                </span>
              </div>
              <p className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-widest text-muted-foreground/70 uppercase lg:block">
                Integration · Approval · Automation · Trusted AI
              </p>
            </div>
          </div>
        </section>

        {/* STORY — explicit problem → approach → evidence path */}
        <section className="border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {t.home.story.map((s) => (
                <div key={s.label}>
                  <span className="text-xs font-semibold tracking-widest text-primary/70 uppercase">
                    {s.label}
                  </span>
                  <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST — customer-facing evidence anchor */}
        <section className="border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {t.home.trust.title}
                </h2>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                  {t.home.trust.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {t.home.trust.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="outline" size="lg" className="justify-self-start lg:justify-self-end" asChild>
                <Link href={p(locale, "/evidence")}>
                  {t.home.trust.cta}
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}