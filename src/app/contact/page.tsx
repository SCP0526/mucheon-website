import { MailIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ContactForm } from "@/components/template/contact-form";

export const metadata = {
  title: "Contact — MUCHEON",
  description:
    "Describe your business problem to start an assessment. Low commitment, high transparency.",
};

const channels = [
  {
    icon: <MailIcon className="size-5" />,
    title: "Email",
    body: "For assessments and general questions.",
    detail: "schen1062@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="CONTACT"
        title={
          <>
            Describe your <span className="text-primary">problem</span>
          </>
        }
        description="Tell us the business problem and constraints. You will get an evidence-bounded assessment — what is reusable, what needs adaptation, what does not exist."
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <div className="space-y-4">
              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="flex items-start gap-4 rounded-2xl border bg-card p-6"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {channel.icon}
                  </span>
                  <div>
                    <h2 className="font-semibold">{channel.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {channel.body}
                    </p>
                    <a
                      href="mailto:schen1062@gmail.com"
                      className="mt-2 block text-sm font-medium text-primary transition-colors hover:underline"
                    >
                      {channel.detail}
                    </a>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 text-sm text-muted-foreground">
                <h2 className="font-semibold text-foreground">
                  What happens next
                </h2>
                <p className="mt-2">
                  We reply with an evidence-bounded assessment: what maps to
                  validated assets, what needs adaptation, and what we would
                  decline. Nothing is committed before acceptance criteria are
                  agreed.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.12}>
            <ContactForm />
          </BlurFade>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
