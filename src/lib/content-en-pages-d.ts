/** EN content dictionary (part 5: project-entry + contact + about + form + gateway). */
export const enPagesD = {
  projectEntry: {
    title: "Project Entry",
    heading: "Enter with a problem, not a spec",
    description:
      "Tell us the business problem. You get back an honest assessment — what is reusable, what needs adaptation, what does not exist — before any commitment.",
    includeTitle: "What to include",
    include: [
      "The business problem, in your own words — no technical spec required",
      "Systems involved (even roughly): what must talk to what",
      "Where a human must stay in control of decisions or actions",
      "Any hard constraints: compliance, deadlines, environment",
    ],
    backTitle: "What you get back",
    back: [
      "Which parts map to validated assets (Level B) — and what adaptation they need",
      "Which parts would be Experimental, if any",
      "Which parts we would decline or defer because no evidence exists yet",
      "A proposed set of acceptance criteria before any commitment",
    ],
    note: "No obligation at this stage — the assessment is bounded by our published evidence matrix, and we will tell you when something is outside it.",
    cta: "Request Assessment",
    preferEmail: "Prefer email?",
  },
  contact: {
    title: "Contact",
    heading: "Describe your problem",
    description:
      "Describe your business problem to start an assessment. Low commitment, high transparency.",
    emailTitle: "Email",
    emailBody: "For assessments and general questions.",
    nextTitle: "What happens next",
    nextBody:
      "We reply with an evidence-bounded assessment: what maps to validated assets, what needs adaptation, and what we would decline. Nothing is committed before acceptance criteria are agreed.",
    prepare: "Not sure what to prepare?",
    prepareLink: "See Project Entry",
  },
  about: {
    title: "Company",
    eyebrow: "COMPANY",
    metaDescription:
      "MUCHEON (木醇) is an AI engineering partnership: mature assets first, human control by design, and claims bounded by published evidence.",
    headingSuffix: "(木醇)",
    description:
      "An AI engineering partnership. We solve complex business problems through system integration, automation, and trusted AI — with human control at every step and claims bounded by published evidence.",
    p1: "MUCHEON exists because enterprise AI fails most often not in the model, but in the plumbing: integrations that cannot be verified, automations without accountability, and claims that outrun the evidence. We take the opposite posture — mature engineering assets first, human control by design, and every public claim traceable to a test, a demo, or a documented boundary.",
    p2: "We are deliberate about what we do not claim: no customer logos, no production-scale case studies, no invented track record. What we offer instead is a verifiable way of working — acceptance criteria agreed up front, delivery proven by tests you can re-run, and boundaries written down.",
    cta: "Request Assessment",
    stance: [
      {
        title: "Mature assets first",
        body: "We start from engineering assets that already pass automated tests — configuration, logging, migrations, probes, approval gates, audit trails — and build outward. We say plainly when something must be written new.",
      },
      {
        title: "Human control by design",
        body: "High-risk operations pass explicit approval gates. Deny-by-default and audit trails are design postures, not add-ons.",
      },
      {
        title: "Evidence-driven claims",
        body: "Our claims stop at Template Validated: automated tests plus a full template replication exercise. Experimental work is labeled as such — never packaged as proven delivery.",
      },
      {
        title: "Acceptance before promises",
        body: "Every engagement starts with agreed acceptance criteria. If a goal cannot be verified, we do not commit to it.",
      },
    ],
  },
  form: {
    name: "Name",
    namePlaceholder: "Ada Lovelace",
    email: "Email",
    emailPlaceholder: "ada@example.com",
    problem: "Problem",
    problemPlaceholder: "Describe the business problem in your own words — no technical spec required.",
    existingSystem: "Existing system (optional)",
    existingSystemPlaceholder: "What systems are involved? What must talk to what?",
    desiredOutcome: "Desired outcome (optional)",
    desiredOutcomePlaceholder: "What would success look like, concretely?",
    constraints: "Constraints (optional)",
    constraintsPlaceholder: "Compliance, deadlines, environment, budget boundaries…",
    send: "Send message",
    sending: "Sending…",
    sentTitle: "Message sent",
    sentBody:
      "Thanks for reaching out — we'll get back to you with an evidence-bounded assessment.",
    sendAnother: "Send another",
    mailtoButton: "Email us instead",
    mailtoSubject: "Assessment inquiry — MUCHEON",
    fallbackNotice:
      "Email is the fastest way to reach us right now — your message goes straight to our assessment inbox. The form above activates automatically once our online form service is connected.",
    errorNotice: "Something went wrong sending your message. Please try again, or",
    errorLink: "email us directly",
    privacyNote: "Sent directly to our assessment inbox — no CRM, no data resale.",
  },
  privacy: {
    title: "Privacy Policy",
    heading: "Privacy Policy",
    description:
      "How MUCHEON handles information you send us through this website — minimal collection, no tracking, no resale.",
    updated: "This is a minimal good-faith summary, not legal advice. LEGAL REVIEW REQUIRED before it is relied upon.",
    sections: [
      {
        h: "What we collect",
        p: "Only what you choose to send us: when you contact us by email (or, once enabled, through the contact form), you share your name, email address, and the business problem you describe. We collect nothing else. This website does not require an account and does not ask for payment details.",
      },
      {
        h: "How this website handles technical data",
        p: "This is a static website. We do not run analytics, advertising, or cross-site tracking, and we do not set tracking cookies. Your browser may store a local display preference (such as theme) on your own device; this stays on your device and is not sent to us.",
      },
      {
        h: "How we use your information",
        p: "Solely to respond to your inquiry and, if you choose to proceed, to prepare the assessment described on this site. We do not sell your information, add you to marketing lists, or use it for automated decision-making.",
      },
      {
        h: "Third parties",
        p: "Today: our email inbox (a Gmail account) is the only channel through which your message reaches us. If a form service is connected in the future, this page will name that service and what it receives before it goes live. We use no analytics or advertising providers.",
      },
      {
        h: "Retention and deletion",
        p: "We keep correspondence only as long as needed for the assessment conversation and any follow-up you request. You may ask us to delete your information at any time by emailing us; we will confirm once done.",
      },
      {
        h: "Security",
        p: "Your message travels by standard email transport to our inbox. We take reasonable care with what we receive, but no email or website system is perfectly secure, and we do not claim certifications we do not hold.",
      },
      {
        h: "Cross-border processing",
        p: "Email is handled by infrastructure that may be located outside your country. By contacting us, you acknowledge this. If your organization requires a specific data-handling arrangement, tell us before sending anything sensitive.",
      },
      {
        h: "Contact and updates",
        p: "For any privacy question or deletion request, email schen1062@gmail.com. If this policy changes, the updated version will be posted on this page.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    heading: "Terms of Use",
    description:
      "The ground rules for using this website — what the content is, what it is not, and how the boundary is drawn.",
    updated: "These terms govern the use of this website only. LEGAL REVIEW REQUIRED before it is relied upon.",
    sections: [
      {
        h: "Purpose of this website",
        p: "This website describes MUCHEON's engineering approach and capabilities, and offers a way to request an assessment. Using the site does not create any engagement, contract, or obligation on either side.",
      },
      {
        h: "Nature of the content",
        p: "All capability demonstrations referenced here are internal engineering demonstrations and reconstruction exercises — not client projects. No customer names, production deployments, or ROI figures are claimed anywhere on this site.",
      },
      {
        h: "Evidence boundary",
        p: "Evidence for our capabilities matures at most to Template Validated: automated tests plus a full template replication exercise. Experimental capabilities are labeled as such. Claims stop at this boundary by design.",
      },
      {
        h: "Intellectual property and third-party assets",
        p: "Site content is © MUCHEON unless stated otherwise. The site is built with open-source components (including Next.js, Tailwind CSS, Radix UI, and shadcn/ui) used under their respective licenses. No third-party brand endorsement is claimed or implied.",
      },
      {
        h: "Submissions",
        p: "Please do not send confidential or regulated information unsolicited. Describe your problem in general terms first; what you send is handled per the Privacy Policy. We may use what you share to prepare the assessment you asked for.",
      },
      {
        h: "No warranty",
        p: "Website content is provided as-is, without warranties of any kind, to the maximum extent permitted by applicable law. Demonstrations show what was verified in a test environment; they are not a guarantee of results in your environment.",
      },
      {
        h: "Limitation of liability",
        p: "To the maximum extent permitted by applicable law, MUCHEON is not liable for indirect or consequential damages arising from the use of this website.",
      },
      {
        h: "These terms are not a contract for services",
        p: "Engagements are governed by separately agreed documents (scope, acceptance criteria, and terms agreed in writing). Nothing on this website — including these terms — constitutes an offer, an MSA, an SOW, or legal advice.",
      },
      {
        h: "Changes and contact",
        p: "We may update this page as the site evolves. Questions: schen1062@gmail.com.",
      },
    ],
  },
  casesPage: {
    title: "Cases",
    eyebrow: "CASES",
    heading: "Cases — and what they are",
    description:
      "The five documented engineering demonstrations behind our capability claims. Every entry is an internal engineering demonstration / independent reconstruction — not a client project.",
    boundary: [
      "All cases are internal engineering demonstrations and reconstruction exercises — Independent Reconstruction / Not a client project. No customer names, no contracts, no production deployments.",
      "No case is claimed as a production or customer deployment anywhere. Evidence matures at most to Template Validated: automated tests plus one full template replication exercise.",
      "A-level entries (A-01 / A-02) run in a reconstruction/test environment — engineering behavior verified only, no production-scale capability claimed.",
    ],
    factsTitle: "Registry facts",
    facts: [
      "C-01 · Adapter Module — 10 passing tests (pytest, 2026-09-06) · Level C, Engineering Module · ~90% reuse of the engineering baseline, ~10% new tests and demo",
      "C-02 · Audit + Approval — 14 passing tests (pytest, 2026-09-06) · Level C, Engineering Module · ~90% reuse, ~10% new tests and demo",
      "B-01 · Controlled Automation Flow — 18 passing tests (pytest, 2026-09-06) · Level B, Solution Demonstration · ~80% reuse (safety_kit copied byte-for-byte), ~20% new (in-memory event layer + orchestration)",
      "A-02 · Legacy Modernization + Controlled AI — 28 passing tests (pytest, 2026-09-13) · Level A, Modernization Scenario · ~70% reuse (audit/approval/adapter copied or minimally extended), ~30% new (legacy analysis, proposal schema, sandbox, four-state recovery) · Independent Reconstruction — no real LLM in the loop; sandbox-only execution",
      "A-01 · Legacy Data + Integration Modernization — 29 passing tests (pytest, 2026-09-14) · Level A, Modernization Scenario · ~50% reuse / ~50% new (three heterogeneous sources, mapping, validation gate, unified layer, lineage) · Independent Reconstruction — reconstruction/test environment (in-memory SQLite); engineering behavior verified, not production readiness",
    ],
    status: "Status of every case: Completed / Internal Demo Only",
    evidenceLink: "See the evidence in detail",
    projectCta: "Enter with your problem",
    seeAll: "See all cases",
  },
  trustPage: {
    title: "Trust",
    eyebrow: "TRUST",
    heading: "Trust, stated as facts",
    description:
      "Where we stand on intellectual property, open source, data, and security — as an index of facts and existing policies, not certifications we do not hold.",
    sections: [
      {
        h: "Intellectual property",
        p: "Original site content is © MUCHEON. Engineering assets were developed in-house and validated by automated tests; reusable foundations follow our published reuse records. The IP boundary is described in the Terms of Use.",
        linkText: "Terms of Use",
      },
      {
        h: "Open source usage",
        p: "This website is built on open-source components — including the MIT-licensed Velora UI template, Next.js, Tailwind CSS and shadcn/ui — used under their respective licenses. Third-party assets are adopted only after a license, security, maintenance, fit and cost review. Our review practice references published guidance such as OpenChain (ISO/IEC 5230) — as a reference only; we do not claim conformance.",
        linkText: "See Terms of Use",
      },
      {
        h: "Data & privacy",
        p: "The contact form forwards to email only; no marketing tracking is added. What you send is handled per the Privacy Policy, which also covers cross-border email processing. Where a project involves cross-border personal-data transfers, an appropriate mechanism (such as the EU Standard Contractual Clauses) would be agreed in writing per project — this is not legal advice.",
        linkText: "Privacy Policy",
      },
      {
        h: "Security & reliability",
        p: "Capability verification is bounded by automated tests and published known limitations. We claim no security certifications and publish no assurance reports. Our engineering practice is informed by published guidance such as NIST's Cybersecurity Framework — a reference, not a certification. Detailed evidence packages are shared on request during an assessment.",
        linkText: "See Evidence",
      },
    ],
    more: "Need something specific — a security questionnaire, a data-handling arrangement, or a full license list? Ask us. Detailed materials are provided on request, and we will say plainly when something is not available.",
    basisTitle: "Basis & status",
    basisNote: "External standards are cited above as published references only, with provenance kept internally; MUCHEON holds no certifications and offers no legal advice. Evidence boundary: all capabilities mature at most to Level 4 (Template Validated); Level 5 = 0 — no real-customer production evidence exists anywhere in our published matrix. This page states our current public commercial baseline (LEVEL 2) — facts and boundaries, not a contract. Project contracts, signed later and reviewed by counsel, can be more specific.",
    engagementTitle: "Working with us",
    engagement: [
      {
        h: "Legal entity & jurisdiction",
        p: "MUCHEON operates as an independent engineering practice, engaging clients remotely under B2B contracting. Contracting-entity, jurisdiction and tax details are stated in the signed contract — they are not published on this website.",
      },
      {
        h: "Contracting",
        p: "Engagements follow a written process: Discovery → Scope → Proposal → agreed acceptance criteria. An NDA can be signed before any technical discussion; projects are documented on our MSA/SOW structure — one master agreement, one statement of work per scope. Scope changes only through written change requests. How we work is described on the How We Work page.",
      },
      {
        h: "Payment & tax",
        p: "Work is quoted per proposal. Payment and tax terms are agreed in the contract. Nothing on this website constitutes a price offer.",
      },
    ],
    deliveryTitle: "Delivery, acceptance & liability",
    delivery: [
      {
        h: "Delivery",
        p: "Delivery happens only after acceptance is signed: code, deployment configuration, documentation, and a list of known limitations. Ownership of project-specific IP created for your engagement is defined in the signed contract — assets we reuse from our validated baseline remain ours; what we build specifically for the project is transferred per the contract.",
      },
      {
        h: "Acceptance",
        p: "Acceptance is judged solely against acceptance criteria agreed in writing up front. Known limitations are acknowledged at sign-off, not discovered after handover.",
      },
      {
        h: "Liability",
        p: "Liability caps and exclusions are set in the contract for each engagement. Nothing on this website is a contract or legal advice.",
      },
    ],
    boundaryTitle: "Honest boundary",
    notInPlaceTitle: "Not in place",
    notInPlace: [
      "No security or compliance certifications are held or claimed",
      "No managed operations / hosting service is offered by default",
      "Audit capability is table-level record keeping — not regulator-grade audit",
      "Identity, encryption-at-rest and data masking are not built in (client-managed or a separately scoped workstream)",
    ],
    onRequestTitle: "Provided on request",
    onRequest: [
      "Detailed evidence packages per capability (method, tests, limitations, reproduction steps)",
      "Full license list for every delivered open-source component, explained item by item",
      "Responses to client security questionnaires",
      "Data-handling arrangements, confirmed in writing before any sensitive exchange",
    ],
    cta: "Contact us",
  },
  gateway: {
    title: "MUCHEON — AI Engineering Partner",
    choose: "Choose your language",
    en: "English",
    zh: "中文",
  },
} as const;