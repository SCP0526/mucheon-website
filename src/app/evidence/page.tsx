import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";

export const metadata = { title: "Evidence" };

const cases = [
  {
    id: "C-01",
    level: "Level C — Engineering Module",
    name: "Adapter Module",
    problem:
      "Problem: every client system used to require rewriting connection, retry and error handling from scratch for outbound integration.",
    capability:
      "Capability: reusable outbound adapter pattern — request/response mapping, retries, error translation, and outbound audit entries.",
    evidence: "Evidence: 10 passing tests. Matured to Template Validated (automated tests plus one full template replication exercise).",
    limitation:
      "Known limitation: mock transport only — no live external system integration; HTTP(S) synchronous calls.",
  },
  {
    id: "C-02",
    level: "Level C — Engineering Module",
    name: "Audit + Approval",
    problem:
      "Problem: high-risk business actions lacked a human checkpoint and a traceable record of who decided what.",
    capability:
      "Capability: business audit records plus an approval gate with deny-by-default execution checks and a strict state machine.",
    evidence: "Evidence: 14 passing tests. Matured to Template Validated (automated tests plus one full template replication exercise).",
    limitation:
      "Known limitation: single-level approval; decided_by is an asserted value (no identity system); service layer only.",
  },
  {
    id: "B-01",
    level: "Level B — Solution Demonstration",
    name: "Controlled Automation Flow",
    problem:
      "Problem: event-driven automation needs a controlled path — actions must not run just because an event arrived.",
    capability:
      "Capability: end-to-end governed flow — idempotent event intake → approval gate → gated execution → audit trail → follow-up event.",
    evidence: "Evidence: 18 passing tests (end-to-end flow). Matured to Template Validated (automated tests plus one full template replication exercise).",
    limitation:
      "Known limitation: case-local in-memory event layer (not the XP-4 Redis implementation) — no PEL, no dead-letter queue, simple requeue.",
  },
];

export default function EvidencePage() {
  return (
    <>
      <PageHeader
        eyebrow="EVIDENCE"
        title="Evidence, in plain terms"
        description="The demonstrations behind our capability claims — what we built, what it proves, and what it does not."
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-8">
        <div className="rounded-xl border border-border/60 p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              All items below are <strong className="text-foreground">internal engineering demonstrations</strong> and
              reconstruction exercises. <strong className="text-foreground">Not a client project</strong> applies to
              every entry — no customer names, no production deployments, no ROI figures.
            </li>
            <li>
              Evidence matures at most to <strong className="text-foreground">Template Validated</strong>:
              automated tests plus one full template replication exercise. Zero production or customer deployments
              are claimed anywhere on this site.
            </li>
          </ul>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.id} className="flex flex-col rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium tracking-wide text-primary">{c.id}</span>
                <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {c.level}
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.problem}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.capability}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.evidence}</p>
              <p className="mt-2 text-xs text-muted-foreground/80">{c.limitation}</p>
              <p className="mt-auto pt-4 text-xs font-medium text-primary/90">
                Internal engineering demonstration · Not a client project
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-border/60 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
            Full evidence packages
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Each demonstration maintains an internal evidence package: capability, architecture, implementation,
            test results, evidence pointers, known limitations, licenses and reproduction steps. Packages are shared
            on request during an assessment.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/contact">Request Assessment</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
