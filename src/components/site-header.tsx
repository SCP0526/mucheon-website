import Link from "next/link";
import { SparklesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <SparklesIcon className="size-5 text-primary" />
          MUCHEON
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/solutions" className="transition-colors hover:text-foreground">
            Solutions
          </Link>
          <Link href="/capabilities" className="transition-colors hover:text-foreground">
            Capabilities
          </Link>
          <Link href="/evidence" className="transition-colors hover:text-foreground">
            Evidence
          </Link>
          <Link href="/how-we-work" className="transition-colors hover:text-foreground">
            How We Work
          </Link>
          <Link href="/project-entry" className="transition-colors hover:text-foreground">
            Project Entry
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            Company
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" asChild>
            <Link href="/contact">Request Assessment</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
