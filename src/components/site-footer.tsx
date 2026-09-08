import Link from "next/link";
import { SparklesIcon } from "lucide-react";

const groups = [
  {
    title: "Solutions",
    links: [
      { text: "Solutions", href: "/solutions" },
      { text: "Capabilities", href: "/capabilities" },
      { text: "How We Work", href: "/how-we-work" },
      { text: "Project Entry", href: "/project-entry" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SparklesIcon className="size-5 text-primary" />
            MUCHEON
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            MUCHEON (木醇) — AI Engineering Partner. We solve complex business
            problems through system integration, automation, and trusted AI —
            with human control at every step.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            All capability claims follow our published evidence matrix.
          </p>
          <a
            href="mailto:schen1062@gmail.com"
            className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            schen1062@gmail.com
          </a>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {group.links.map((link) => (
                <li key={link.text}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      rel="noopener"
                      className="transition-colors hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-border/40 px-4 pt-6 text-xs text-muted-foreground md:flex-row lg:px-8">
        <span>MUCHEON (木醇) — AI Engineering Partner.</span>
        <span>Every animation respects prefers-reduced-motion.</span>
      </div>
    </footer>
  );
}
