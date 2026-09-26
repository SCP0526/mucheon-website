/**
 * EN content dictionary (part 1: shared + home + solutions + capabilities).
 * Canonical facts — the ZH dictionary is a faithful translation of these files.
 */
export const enCore = {
  nav: {
    solutions: "Solutions",
    capabilities: "Capabilities",
    evidence: "Evidence",
    howWeWork: "How We Work",
    projectEntry: "Project Entry",
    company: "Company",
    requestAssessment: "Request Assessment",
    openMenu: "Open navigation menu",
    menuTitle: "MUCHEON",
    mobileNav: "Mobile",
  },
  switcher: { en: "EN", zh: "中文", label: "Language" },
  footer: {
    description:
      "MUCHEON (木醇) — AI Engineering Partner. We solve complex business problems through system integration, automation, and trusted AI — with human control at every step.",
    evidenceNote: "All capability claims follow our published evidence matrix.",
    solutionsTitle: "Solutions",
    companyTitle: "Company",
    legalTitle: "Legal",
    solutions: ["Solutions", "Capabilities", "How We Work", "Project Entry", "Cases"],
    company: ["About", "Contact"],
    legal: ["Privacy Policy", "Terms of Use", "Trust"],
    bottom: "MUCHEON (木醇) — AI Engineering Partner.",
    bottomNote: "Every animation respects prefers-reduced-motion.",
  },
  meta: {
    home: {
      title: "MUCHEON — AI Engineering Partner",
      description:
        "Enterprise system integration, business audit & approval workflows, event automation, and controlled AI with human oversight — claims bounded by published evidence.",
    },
  },
  home: {
    eyebrow: "AI ENGINEERING & DIGITAL TRANSFORMATION PARTNER",
    h1: "We Engineer Intelligent Systems",
    sub: "We solve complex business problems through system integration, automation, and trusted AI — with human control at every step.",
    story: [
      {
        label: "1 · The problem",
        text: "Systems that don't talk to each other, actions nobody can trace, and AI nobody fully trusts.",
      },
      {
        label: "2 · Our approach",
        text: "Integration, automation, and controlled AI — designed around human approval and a full audit trail at every step.",
      },
      {
        label: "3 · The evidence",
        text: "Every capability is backed by automated tests with its limitations published — see the demonstrations yourself.",
      },
    ],
    trust: {
      title: "Evidence, not adjectives",
      description:
        "Every capability claim on this site maps to a tested engineering demonstration with a published known limitation. We tell you what is validated, what needs adaptation, and what does not exist yet.",
      items: [
        "Automated tests back every shipped capability",
        "Known limitations published alongside each claim",
        "Honest scoping — we decline what has no evidence",
      ],
      cta: "See the Evidence",
    },
  },
} as const;