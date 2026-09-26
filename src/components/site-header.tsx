"use client";

import Link from "next/link";
import { MenuIcon, SparklesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getDict, p, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale: l = "en" }: { locale?: Locale }) {
  const locale = l;
  const t = getDict(locale);
  const links = [
    { text: t.nav.solutions, href: p(locale, "/solutions") },
    { text: t.nav.capabilities, href: p(locale, "/capabilities") },
    { text: t.nav.evidence, href: p(locale, "/evidence") },
    { text: t.nav.howWeWork, href: p(locale, "/how-we-work") },
    { text: t.nav.projectEntry, href: p(locale, "/project-entry") },
    { text: t.nav.company, href: p(locale, "/about") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href={p(locale, "")} className="flex items-center gap-2 font-semibold">
          <SparklesIcon className="size-5 text-primary" />
          MUCHEON
        </Link>

        {/* Desktop nav — unchanged behavior */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href={p(locale, "/contact")}>{t.nav.requestAssessment}</Link>
          </Button>

          {/* Mobile nav — Sheet menu below md */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label={t.nav.openMenu}
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden">
              <SheetHeader>
                <SheetTitle>{t.nav.menuTitle}</SheetTitle>
              </SheetHeader>
              <nav aria-label={t.nav.mobileNav} className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.text}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <LanguageSwitcher locale={locale} variant="mobile" />
                </SheetClose>
                <SheetClose asChild>
                  <Button size="lg" className="mt-4 w-full" asChild>
                    <Link href={p(locale, "/contact")}>{t.nav.requestAssessment}</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
