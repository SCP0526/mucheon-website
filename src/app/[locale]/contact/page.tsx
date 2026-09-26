import Link from "next/link";
import { notFound } from "next/navigation";
import { MailIcon } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ContactForm } from "@/components/template/contact-form";
import { getDict, isLocale, p } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  const t = getDict(l);
  return pageMeta(l, "/contact", t.contact.title, t.contact.description);
}

export default async function LocaleContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getDict(locale);

  return (
    <main className="relative">
      <SiteHeader locale={locale} />
      <PageHeader
        eyebrow={t.contact.title}
        title={t.contact.heading}
        description={t.contact.description}
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border bg-card p-6">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MailIcon className="size-5" />
                </span>
                <div>
                  <h2 className="font-semibold">{t.contact.emailTitle}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.contact.emailBody}
                  </p>
                  <a
                    href="mailto:schen1062@gmail.com"
                    className="mt-2 block text-sm font-medium text-primary transition-colors hover:underline"
                  >
                    schen1062@gmail.com
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 text-sm text-muted-foreground">
                <h2 className="font-semibold text-foreground">
                  {t.contact.nextTitle}
                </h2>
                <p className="mt-2">{t.contact.nextBody}</p>
                <p className="mt-3">
                  {t.contact.prepare}{" "}
                  <Link
                    href={p(locale, "/project-entry")}
                    className="text-primary underline underline-offset-2 hover:no-underline"
                  >
                    {t.contact.prepareLink}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.12}>
            <ContactForm locale={locale} />
          </BlurFade>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}