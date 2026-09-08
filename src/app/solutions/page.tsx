import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";

export const metadata = { title: "Solutions" };

const solutions = [
  {
    problem: "Our systems can't talk to each other",
    solution:
      "Integration adapters for outbound HTTP systems: one adapter file per external system, with mapping, timeouts, error translation, and audit logging.",
    level: "Level B",
    note: "Requires project-specific adaptation and client test-environment access.",
  },
  {
    problem: "High-risk actions need a human check",
    solution:
      "An approval gate in front of critical operations: proposals require explicit human approval before execution, deny-by-default, with a full audit trail.",
    level: "Level B",
    note: "Requires project-specific adaptation. Single-level approval; a human-control layer, not a full workflow suite.",
  },
  {
    problem: "We can't prove who did what",
    solution:
      "Business action audit: traceable database-level records of critical actions, separate from application logs, with query interfaces.",
    level: "Level B",
    note: "Requires project-specific adaptation. Not a regulatory-grade audit system.",
  },
  {
    problem: "Events pile up with no reliable processing",
    solution:
      "Event pipeline: idempotent webhook intake, queue-based processing, retries, and processed-event tracking.",
    level: "Level B",
    note: "Requires project-specific adaptation and production hardening.",
  },
  {
    problem: "We need AI in the loop — but under control",
    solution:
      "Controlled AI integration: AI-proposed actions wrapped in the same approval gate and audit trail as any other high-risk operation.",
    level: "Level B core",
    note: "Core approval/audit layer is Level B. Advanced AI reasoning capabilities are Experimental only — see Capabilities.",
  },
  {
    problem: "New projects take months before writing real features",
    solution:
      "Bootstrap from an engineering baseline: configuration, logging, probes, migrations, containers, and one-command test verification on day one.",
    level: "Level B",
    note: "Validated by automated tests and a full template replication exercise.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="SOLUTIONS"
        title="Start from the business problem"
        description="Each solution below maps to engineering assets with a published evidence level (B — requires adaptation; advanced AI capabilities are Experimental). No capability is offered without evidence."
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((s) => (
            <div key={s.problem} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <p className="text-sm font-medium text-primary">
                {s.problem}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.solution}</p>
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
            <Link href="/contact">Request Assessment</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
