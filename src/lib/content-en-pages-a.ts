/** EN content dictionary (part 2: solutions + capabilities). */
export const enPagesA = {
  solutions: {
    title: "Solutions",
    heading: "Start from the business problem",
    description:
      "Each solution below maps to engineering assets with a published evidence level (B — requires adaptation; advanced AI capabilities are Experimental). No capability is offered without evidence.",
    problemLabel: "Problem:",
    approachLabel: "Approach:",
    cta: "Request Assessment",
    cards: [
      {
        problem: "Our systems can't talk to each other",
        approach:
          "Integration adapters for outbound HTTP systems: one adapter file per external system, with mapping, timeouts, error translation, and audit logging.",
        level: "Level B",
        note: "Requires project-specific adaptation and client test-environment access.",
      },
      {
        problem: "High-risk actions need a human check",
        approach:
          "An approval gate in front of critical operations: proposals require explicit human approval before execution, deny-by-default, with a full audit trail.",
        level: "Level B",
        note: "Requires project-specific adaptation. Single-level approval; a human-control layer, not a full workflow suite.",
      },
      {
        problem: "We can't prove who did what",
        approach:
          "Business action audit: traceable database-level records of critical actions, separate from application logs, with query interfaces.",
        level: "Level B",
        note: "Requires project-specific adaptation. Not a regulatory-grade audit system.",
      },
      {
        problem: "Events pile up with no reliable processing",
        approach:
          "Event pipeline: idempotent webhook intake, queue-based processing, retries, and processed-event tracking.",
        level: "Level B",
        note: "Requires project-specific adaptation and production hardening.",
      },
      {
        problem: "We need AI in the loop — but under control",
        approach:
          "Controlled AI integration: AI-proposed actions wrapped in the same approval gate and audit trail as any other high-risk operation.",
        level: "Level B core",
        note: "Core approval/audit layer is Level B. Advanced AI reasoning capabilities are Experimental only — see Capabilities.",
      },
      {
        problem: "New projects take months before writing real features",
        approach:
          "Bootstrap from an engineering baseline: configuration, logging, probes, migrations, containers, and one-command test verification on day one.",
        level: "Level B",
        note: "Validated by automated tests and a full template replication exercise.",
      },
    ],
  },
} as const;