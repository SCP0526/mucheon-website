import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Project Entry — MUCHEON",
  description:
    "Enter with a business problem, not a finished spec. Describe the problem, and we respond with an honest assessment of what is reusable, what needs adaptation, and what does not exist yet.",
};

const include = [
  "The business problem, in your own words — no technical spec required",
  "Systems involved (even roughly): what must talk to what",
  "Where a human must stay in control of decisions or actions",
  "Any hard constraints: compliance, deadlines, environment",
];

const response = [
  "Which parts map to validated assets (Level B) — and what adaptation they need",
  "Which parts would be Experimental, if any",
  "Which parts we would decline or defer because no evidence exists yet",
  "A proposed set of acceptance criteria before any commitment",
];

export default function ProjectEntryPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="PROJECT ENTRY"
        title="Enter with a problem, not a spec"
        description="Tell us the business problem. You get back an honest assessment — what is reusable, what needs adaptation, what does not exist — before any commitment."
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-border/60 bg-card/40 p-6">
            <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
              What to include
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {include.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary">→</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-6">
            <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
              What you get back
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {response.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary">→</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">
            No obligation at this stage — the assessment is bounded by our
            published evidence matrix, and we will tell you when something is
            outside it.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <Link href="/contact">Describe Your Problem</Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
