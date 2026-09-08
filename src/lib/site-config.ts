/**
 * Single source of truth for external URLs. Override at build time with
 * NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_GITHUB_URL when the real domain and
 * repo are wired up.
 */
export const siteConfig = {
  name: "MUCHEON",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mucheon.example.com"
  ).replace(/\/$/, ""),
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/ColorlibHQ/velora-ui",
  tagline: "AI Engineering Partner",
  description:
    "MUCHEON (Mu Chun) engineers intelligent systems: enterprise system integration, business audit & approval workflows, event automation, and controlled AI with human oversight. Assets validated by automated tests and a full template replication exercise; public claims follow a published evidence matrix.",
} as const;
