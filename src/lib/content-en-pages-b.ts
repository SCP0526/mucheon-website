/** EN content dictionary (part 3: capabilities). */
export const enPagesB = {
  capabilities: {
    title: "Capabilities",
    heading: "Capabilities, with evidence",
    description:
      "Every capability maps to a published evidence level. Nothing here is claimed as production-proven or customer-deployed.",
    bTitle: "Level B — Reusable assets, requires adaptation",
    cTitle: "Level C — Experimental demos",
    transparencyTitle: "Evidence & transparency",
    transparency: [
      "Matured at most to Template Validated: automated tests plus one full template replication exercise. No production-scale or customer deployments claimed.",
      "Capabilities without published evidence (e.g., authentication systems, observability platforms) are not offered off-the-shelf; they require a scoped project with agreed acceptance criteria.",
    ],
    cta: "Request Assessment",
    itemsB: [
      {
        name: "System Integration",
        body: "Outbound HTTP integrations on a reusable adapter pattern: mapping, timeouts, error translation, outbound audit.",
        note: "Requires project-specific adaptation. Validated by automated tests (mock transport); live integration runs in the client's test environment.",
      },
      {
        name: "Controlled AI (Approval / Human-in-loop)",
        body: "High-risk actions pass an approval gate: proposal → human approve/reject → execute → audit trail. Deny-by-default.",
        note: "Requires project-specific adaptation. Single-level approval; capability validation demo, 16 passing tests.",
      },
      {
        name: "Business Audit",
        body: "Database-level records of critical business actions — who, what, when, result — separate from app logs.",
        note: "Requires project-specific adaptation. Not regulatory-grade (no tamper-proofing).",
      },
      {
        name: "Event Automation",
        body: "Idempotent webhook intake, Redis Streams queue, worker pipeline with retries and processed-event tracking.",
        note: "Requires project-specific adaptation and hardening. Capability validation demo, 12 passing tests.",
      },
      {
        name: "Project Bootstrap",
        body: "Engineering baseline for new projects: unified config, structured logs, health/ready probes, migrations, containers, one-command tests.",
        note: "Validated by automated tests (55 passing) and a full template replication exercise.",
      },
      {
        name: "Private Deployment Support",
        body: "Single-machine Docker Compose deployment with readiness verification in the target environment.",
        note: "Requires project-specific adaptation. Compose form factor only; K8s operations out of current scope.",
      },
    ],
    itemsC: [
      {
        name: "RAG / Knowledge Q&A",
        body: "Document ingestion, chunking, retrieval with cited sources; retrieval-only mode without external keys.",
        status:
          "Experimental — capability validation demo (12 passing tests). Generative answers and semantic vector search not yet field-tested.",
      },
      {
        name: "Agent Runtime (Controlled)",
        body: "Governed action pipeline: proposal state machine, tool allow-list, approval gate, audit log.",
        status:
          "Experimental — capability validation demo (16 passing tests). LLM-generated reasoning not yet field-tested.",
      },
    ],
  },
} as const;