import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GridPattern } from "@/components/velora/grid-pattern";
import { BlurFade } from "@/components/velora/blur-fade";

const flow = [
  "Business Problems",
  "Systems",
  "Integration",
  "Automation",
  "AI",
  "Human Control",
  "Delivery",
  "Operation",
];

const principles = [
  {
    title: "Design Principles",
    items: ["Minimal × Industrial", "Black / Deep Blue", "Evidence-driven trust"],
  },
  {
    title: "Visual Direction",
    items: ["Control tower metaphor", "Holographic data flow", "Engineering precision"],
  },
  {
    title: "Motion Strategy",
    items: ["Static > Light motion", "Ultra-slow rotation only", "No heavy 3D / particles"],
  },
  {
    title: "Evidence & Transparency",
    items: [
      "Claims follow evidence matrix",
      "Max B-level on homepage",
      "C-level marked Experimental",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* HERO — left copy / right control-tower visual placeholder */}
        <section className="relative overflow-hidden">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-36 pb-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-44">
            {/* LEFT — copy zone (placeholder text, P1.02 fills final copy) */}
            <div>
              <BlurFade direction="down">
                <span className="text-sm font-medium tracking-wide text-primary">
                  AI ENGINEERING & DIGITAL TRANSFORMATION PARTNER
                </span>
              </BlurFade>
              <BlurFade direction="down">
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance lg:text-6xl">
                  We Engineer Intelligent Systems
                </h1>
              </BlurFade>
              <BlurFade direction="down">
                <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                  We solve complex business problems through system
                  integration, automation, and trusted AI — with human control
                  at every step. Every capability we ship is validated by
                  automated tests, and every claim follows our published
                  evidence boundaries.
                </p>
              </BlurFade>
              <BlurFade direction="down">
                <ol className="mt-8 flex max-w-xl flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium tracking-wide text-muted-foreground">
                  {flow.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="uppercase text-primary/90">{step}</span>
                      {i < flow.length - 1 && (
                        <ArrowRightIcon className="size-3 text-muted-foreground/60" />
                      )}
                    </li>
                  ))}
                </ol>
              </BlurFade>
              <BlurFade direction="down">
                <Button size="lg" className="mt-10" asChild>
                  <Link href="/contact">
                    Request Assessment
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </BlurFade>
            </div>

            {/* RIGHT — control tower visual (pure CSS, static-first, light motion only) */}
            <div className="relative hidden aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card/30 lg:flex">
              <GridPattern
                width={32}
                height={32}
                className="fill-transparent stroke-border/40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
              />
              {/* holographic data panels */}
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
              {/* data flow beams */}
              <div className="animate-beam-flow absolute left-[10%] right-[30%] top-[52%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="animate-beam-flow absolute bottom-[30%] left-[18%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent [animation-delay:2s]" />
              <div className="animate-beam-flow absolute left-[24%] right-[24%] bottom-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent [animation-delay:4s]" />
              {/* control tower core: concentric rings, ultra-slow counter-rotation */}
              <div className="relative flex size-56 items-center justify-center">
                <div className="animate-spin-slowest absolute inset-0 rounded-full border border-primary/25 [mask-image:conic-gradient(black_0deg,transparent_40deg,black_120deg,transparent_170deg,black_250deg,transparent_300deg)]" />
                <div className="animate-spin-slower absolute inset-6 rounded-full border-2 border-primary/35 [mask-image:conic-gradient(black_0deg,transparent_60deg,black_160deg,transparent_230deg)]" />
                <div className="animate-spin-slowest absolute inset-14 rounded-full border border-primary/30 [mask-image:conic-gradient(black_0deg,transparent_90deg,black_200deg)] [animation-delay:2s]" />
                <div className="animate-float-gentle relative flex size-24 items-center justify-center rounded-full border border-primary/50 bg-primary/15 shadow-[0_0_80px_-10px] shadow-primary/40">
                  <div className="size-10 rounded-full border border-primary/60 bg-primary/25" />
                </div>
              </div>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-widest text-muted-foreground/60 uppercase">
                Control Tower — engineering capability metaphor
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES ROW */}
        <section className="border-t border-border/40">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {principles.map((p) => (
              <div key={p.title}>
                <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {p.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
