import { CompassIcon, EyeIcon, LayersIcon, ShieldCheckIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";

export const metadata = {
  title: "Company — MUCHEON",
  description:
    "MUCHEON (木醇) is an AI engineering partnership: mature assets first, human control by design, and claims bounded by published evidence.",
};

const stance = [
  {
    icon: <LayersIcon className="size-6" />,
    title: "Mature assets first",
    body: "We start from engineering assets that already pass automated tests — configuration, logging, migrations, probes, approval gates, audit trails — and build outward. We say plainly when something must be written new.",
  },
  {
    icon: <ShieldCheckIcon className="size-6" />,
    title: "Human control by design",
    body: "High-risk operations pass explicit approval gates. Deny-by-default and audit trails are design postures, not add-ons.",
  },
  {
    icon: <EyeIcon className="size-6" />,
    title: "Evidence-driven claims",
    body: "Our claims stop at Template Validated: automated tests plus a full template replication exercise. Experimental work is labeled as such — never packaged as proven delivery.",
  },
  {
    icon: <CompassIcon className="size-6" />,
    title: "Acceptance before promises",
    body: "Every engagement starts with agreed acceptance criteria. If a goal cannot be verified, we do not commit to it.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="COMPANY"
        title={
          <>
            MUCHEON <span className="text-primary">(木醇)</span>
          </>
        }
        description="An AI engineering partnership. We solve complex business problems through system integration, automation, and trusted AI — with human control at every step and claims bounded by published evidence."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <p className="leading-7 text-muted-foreground">
              MUCHEON exists because enterprise AI fails most often not in the
              model, but in the plumbing: integrations that cannot be verified,
              automations without accountability, and claims that outrun the
              evidence. We take the opposite posture — mature engineering
              assets first, human control by design, and every public claim
              traceable to a test, a demo, or a documented boundary.
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="mt-4 leading-7 text-muted-foreground">
              We are deliberate about what we do not claim: no customer logos,
              no production-scale case studies, no invented track record. What
              we offer instead is a verifiable way of working — acceptance
              criteria agreed up front, delivery proven by tests you can
              re-run, and boundaries written down.
            </p>
          </BlurFade>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          {stance.map((s, i) => (
            <BlurFade key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border/60 bg-card/40 p-6">
                <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                  {s.icon}
                </div>
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
