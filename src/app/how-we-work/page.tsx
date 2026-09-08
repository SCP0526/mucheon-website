import { PageHeader } from "@/components/page-header";

export const metadata = { title: "How We Work" };

const steps = [
  {
    name: "Discovery",
    body: "We map the business problem, existing systems, and constraints — before proposing any technology.",
  },
  {
    name: "Assessment",
    body: "We state plainly what is reusable from validated assets, what requires adaptation, and what does not exist yet. No capability is promised without evidence.",
  },
  {
    name: "Solution Design",
    body: "Acceptance criteria are agreed first. Human-control points (approvals, audit trails) are designed in, not bolted on.",
  },
  {
    name: "Delivery",
    body: "Iterative delivery verified by automated tests — the same test entry that validated our engineering baseline. You can re-run the verification yourself.",
  },
  {
    name: "Operation",
    body: "Health/readiness probes, audit trails, and a transparent handover so your team can operate and verify independently.",
  },
];

const principles = [
  {
    name: "Human control",
    body: "High-risk actions pass an explicit approval gate. Deny-by-default is the design posture.",
  },
  {
    name: "Audit by default",
    body: "Critical actions leave traceable records — reviewable by your team, not just ours.",
  },
  {
    name: "Mature assets first",
    body: "We reuse validated engineering assets before writing anything new, and say so when something must be built from scratch.",
  },
  {
    name: "Honest boundaries",
    body: "Our claims stop at Template Validated: automated tests plus a full replication exercise. Experimental capabilities are labeled as such.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="HOW WE WORK"
        title="A process built on verifiable steps"
        description="Discovery → Assessment → Solution Design → Delivery → Operation. Human control and auditability are part of the process, not add-ons."
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <ol className="space-y-5">
          {steps.map((s, i) => (
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
          {principles.map((p) => (
            <div key={p.name} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
