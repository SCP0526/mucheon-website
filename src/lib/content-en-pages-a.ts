/** EN content dictionary (part 2: solutions + capabilities). */
export const enPagesA = {
  solutions: {
    title: "Solutions",
    heading: "Start from the business problem",
    description:
      "Six purchasable work packages (WP-01 Legacy Modernization · WP-02 Data Integration · WP-03 API / System Integration · WP-04 Data Migration · WP-05 Workflow Automation · WP-06 Controlled AI / Human Approval). Each maps to engineering assets with a published evidence level; WP-02 and WP-04 are delivered in-project on the mapping-and-validation chain demonstrated in case A-01. No capability is offered without evidence.",
    problemLabel: "Problem:",
    approachLabel: "Approach:",
    fitLabel: "Fit / Not fit:",
    cta: "Request Assessment",
    cards: [
      {
        wp: "WP-03 · API / System Integration",
        problem: "Our systems can't talk to each other",
        approach:
          "Integration adapters for outbound HTTP systems: one adapter file per external system, with mapping, timeouts, error translation, and audit logging.",
        level: "Level B",
        note: "Requires project-specific adaptation and client test-environment access.",
        fit: "Fits: connecting new outbound calls to external systems. Not: bidirectional real-time sync or building a brand-new business system.",
      },
      {
        wp: "WP-06 · Controlled AI / Human Approval — approval layer",
        problem: "High-risk actions need a human check",
        approach:
          "An approval gate in front of critical operations: proposals require explicit human approval before execution, deny-by-default, with a full audit trail.",
        level: "Level B",
        note: "Requires project-specific adaptation. Single-level approval; a human-control layer, not a full workflow suite.",
        fit: "Fits: putting a human checkpoint in front of critical actions. Not: a general-purpose BPM / workflow-suite replacement.",
      },
      {
        wp: "WP-06 · Controlled AI / Human Approval — audit layer",
        problem: "We can't prove who did what",
        approach:
          "Business action audit: traceable database-level records of critical actions, separate from application logs, with query interfaces.",
        level: "Level B",
        note: "Requires project-specific adaptation. Not a regulatory-grade audit system.",
        fit: "Fits: making critical actions traceable and reviewable. Not: regulator-grade, tamper-proof audit archiving.",
      },
      {
        wp: "WP-05 · Workflow Automation",
        problem: "Events pile up with no reliable processing",
        approach:
          "Event pipeline: idempotent webhook intake, queue-based processing, retries, and processed-event tracking.",
        level: "Level B",
        note: "Requires project-specific adaptation and production hardening.",
        fit: "Fits: reliable processing of recurring events behind human-controlled gates. Not: long-running multi-team workflow orchestration.",
      },
      {
        wp: "WP-06 · Controlled AI / Human Approval",
        problem: "We need AI in the loop — but under control",
        approach:
          "Controlled AI integration: AI-proposed actions wrapped in the same approval gate and audit trail as any other high-risk operation.",
        level: "Level B core",
        note: "Core approval/audit layer is Level B. Advanced AI reasoning capabilities are Experimental only — see Capabilities.",
        fit: "Fits: AI-proposed actions that always pass a human decision before execution. Not: autonomous agents acting without approval.",
      },
      {
        wp: "WP-01 · Legacy Modernization",
        problem: "New projects take months before writing real features",
        approach:
          "Bootstrap from an engineering baseline: configuration, logging, probes, migrations, containers, and one-command test verification on day one.",
        level: "Level B",
        note: "Validated by automated tests and a full template replication exercise.",
        fit: "Fits: modernization projects that need a verifiable engineering baseline from day one. Not: an off-the-shelf legacy product we install as-is.",
      },
    ],
  },
} as const;