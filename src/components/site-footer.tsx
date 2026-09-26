import Link from "next/link";
import { SparklesIcon } from "lucide-react";

import { getDict, p, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);
  const groups = [
    {
      title: t.footer.solutionsTitle,
      links: [
        { text: t.footer.solutions[0], href: p(locale, "/solutions") },
        { text: t.footer.solutions[1], href: p(locale, "/capabilities") },
        { text: t.footer.solutions[2], href: p(locale, "/how-we-work") },
        { text: t.footer.solutions[3], href: p(locale, "/project-entry") },
        { text: t.footer.solutions[4], href: p(locale, "/cases") },
      ],
    },
    {
      title: t.footer.companyTitle,
      links: [
        { text: t.footer.company[0], href: p(locale, "/about") },
        { text: t.footer.company[1], href: p(locale, "/contact") },
      ],
    },
    {
      title: t.footer.legalTitle,
      links: [
        { text: t.footer.legal[0], href: p(locale, "/privacy") },
        { text: t.footer.legal[1], href: p(locale, "/terms") },
        { text: t.footer.legal[2], href: p(locale, "/trust") },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href={p(locale, "")} className="flex items-center gap-2 font-semibold">
            <SparklesIcon className="size-5 text-primary" />
            MUCHEON
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {t.footer.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {t.footer.evidenceNote}
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
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-border/40 px-4 pt-6 text-xs text-muted-foreground md:flex-row lg:px-8">
        <span>{t.footer.bottom}</span>
        <span>{t.footer.bottomNote}</span>
      </div>
    </footer>
  );
}
