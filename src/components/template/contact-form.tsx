"use client";

import { useState } from "react";
import { AlertCircleIcon, CheckIcon, MailIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Minimal submission wiring: POSTs JSON to NEXT_PUBLIC_FORM_ENDPOINT
 * (e.g., a Formspree/Getform endpoint). No SDK, no database.
 *
 * Graceful degradation: when the endpoint is not configured, the form is
 * disabled with a clear notice and a mailto fallback — the page never errors
 * and no secret is stored in the repo (env var only).
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const CONTACT_EMAIL = "schen1062@gmail.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Assessment inquiry — MUCHEON",
)}`;

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const configured = ENDPOINT.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="mt-4 text-lg font-semibold">Message sent</h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Thanks for reaching out — we&apos;ll get back to you with an
          evidence-bounded assessment.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form className="rounded-2xl border bg-card p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Ada Lovelace" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ada@example.com"
            required
          />
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what you're building…"
          className="min-h-36"
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full rounded-full"
        disabled={!configured || status === "sending"}
      >
        <SendIcon className="size-4" />
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      {!configured && (
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground">
          <AlertCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>
            Online form service is not configured yet. Please reach us by
            email instead while we finish setup — the form will activate
            automatically once configured.
          </span>
        </div>
      )}
      {!configured && (
        <Button variant="outline" size="lg" className="mt-2 w-full rounded-full" asChild>
          <a href={MAILTO}>
            <MailIcon className="size-4" />
            Email us instead
          </a>
        </Button>
      )}
      {status === "error" && (
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-xs text-muted-foreground">
          <AlertCircleIcon className="mt-0.5 size-4 shrink-0 text-destructive" />
          <span>
            Something went wrong sending your message. Please try again, or
            email us directly.
          </span>
        </div>
      )}
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Sent directly to our assessment inbox — no CRM, no data resale.
      </p>
    </form>
  );
}
