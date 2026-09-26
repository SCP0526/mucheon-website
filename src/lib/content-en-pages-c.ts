/** EN content dictionary (part 4: evidence + how-we-work). */
export const enPagesC = {
  evidence: {
    title: "Evidence",
    heading: "Evidence, in plain terms",
    description:
      "The demonstrations behind our capability claims — what we built, what it proves, and what it does not.",
    disclaimer: [
      "All items below are internal engineering demonstrations and reconstruction exercises. Not a client project applies to every entry — no customer names, no production deployments, no ROI figures.",
      "Evidence matures at most to Template Validated: automated tests plus one full template replication exercise. Zero production or customer deployments are claimed anywhere on this site.",
    ],
    packagesTitle: "Full evidence packages",
    packagesBody:
      "Each demonstration maintains an internal evidence package: capability, architecture, implementation, test results, evidence pointers, known limitations, licenses and reproduction steps. Packages are shared on request during an assessment.",
    cta: "Request Assessment",
    caseNote: "Internal engineering demonstration · Not a client project",
    cases: [
      {
        id: "C-01",
        level: "Level C — Engineering Module",
        name: "Adapter Module",
        problem:
          "Problem: every client system used to require rewriting connection, retry and error handling from scratch for outbound integration.",
        capability:
          "Capability: reusable outbound adapter pattern — request/response mapping, retries, error translation, and outbound audit entries.",
        evidence:
          "Evidence: 10 passing tests. Matured to Template Validated (automated tests plus one full template replication exercise).",
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
        evidence:
          "Evidence: 14 passing tests. Matured to Template Validated (automated tests plus one full template replication exercise).",
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
        evidence:
          "Evidence: 18 passing tests (end-to-end flow). Matured to Template Validated (automated tests plus one full template replication exercise).",
        limitation:
          "Known limitation: case-local in-memory event layer (not the XP-4 Redis implementation) — no PEL, no dead-letter queue, simple requeue.",
      },
      {
        id: "A-02",
        level: "Level A — Modernization Scenario (Independent Reconstruction)",
        name: "Legacy Modernization + Controlled AI",
        problem:
          "Problem: modernizing legacy systems with AI assistance needs a controlled path — an AI proposal must never reach execution without a recorded human decision.",
        capability:
          "Capability: full controlled loop — deterministic legacy analysis and context retrieval → mandatory structured proposal schema → human control (approve / reject / request revision / escalate) → state machine → sandbox-only execution → validation → bounded recovery (retry / rollback / isolate / terminal) → append-only audit chain.",
        evidence:
          "Evidence: 28 passing tests — engineering behavior verified. Case-level automated evidence (Level L3). No real LLM in the loop — proposals come from a deterministic mock generator, disclosed as such.",
        limitation:
          "Known limitation: independent reconstruction — not a client project. Execution stays inside an explicitly labeled in-memory SANDBOX working copy (mock transport); the legacy system is a simulated fixture; no production-readiness claim.",
      },
      {
        id: "A-01",
        level: "Level A — Modernization Scenario (Independent Reconstruction)",
        name: "Legacy Data + Integration Modernization",
        problem:
          "Problem: heterogeneous legacy data sources — database tables, event streams, batch files — cannot be safely consolidated for downstream analytics.",
        capability:
          "Capability: three heterogeneous sources → source-specific adapters → idempotent ingestion → auditable schema mapping → deterministic transformation → validation hard gate (failures quarantined, never reaching the unified layer) → unified clean layer → bounded recovery → full lineage and append-only audit → read-only readiness interface.",
        evidence:
          "Evidence: 29 passing tests — engineering behavior verified. Case-level automated evidence (Level L3). Runs in a reconstruction/test environment (in-memory SQLite), not a production database architecture.",
        limitation:
          "Known limitation: independent reconstruction — not a client project. Reconstruction/test environment only (in-memory SQLite, mock transports, synthetic data); the readiness interface exposes clean data only — no AI functionality; no production-scale capability claimed.",
      },
    ],
  },
  howWeWork: {
    title: "How We Work",
    heading: "A process built on verifiable steps",
    description:
      "Discovery → Assessment → Solution Design → Delivery → Operation. Human control and auditability are part of the process, not add-ons.",
    cta: "Request Assessment",
    steps: [
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
    ],
    principles: [
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
    ],
    engagementTitle: "Ways to engage",
    engagementModels: [
      {
        name: "Fixed-scope project",
        body: "A defined build on validated assets: written scope and acceptance criteria agreed before any commitment; scope changes only through written change requests.",
      },
      {
        name: "Co-development (scoped exploration)",
        body: "For capabilities not yet in place — such as RAG pipelines, event-driven architectures, or identity systems: acceptance criteria are defined first, then the project is assessed. No off-the-shelf promises.",
      },
      {
        name: "Maintenance & support",
        body: "Post-delivery support with scope, duration and response times priced in a proposal. Managed operations or hosting are not part of the default offering.",
      },
    ],
    startTitle: "How a project starts",
    startSteps: [
      "Describe the problem in your own words — the Project Entry page tells you what to include.",
      "Discovery & Scope: we map systems and constraints, then agree deliverables and objective acceptance criteria in writing.",
      "Assessment & Proposal: what is reusable, what needs adaptation, what does not exist — quoted per deliverable.",
    ],
    deliveryNote: "Delivery and acceptance follow the same written path: acceptance is signed before handover, with known limitations acknowledged at sign-off. Details are on the Trust page.",
    catalogueLink: "See the capability catalogue",
    levelNote: "These engagement models describe our current public commercial baseline (LEVEL 2); the final terms of any project are set in the signed contract and may be more specific.",
  },
} as const;