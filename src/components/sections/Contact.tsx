"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ArrowUpRight, SocialIcon } from "../ui/icons";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";
import {
  SOCIAL_LINKS,
  EXTERNAL,
  CONTACT_FORM,
  CONTACT_EMAIL,
  contactEndpoint,
  PERSON,
} from "@/content/site";
import { INQUIRY_TYPES, type InquiryType } from "@/content/speaking";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const t = useTranslations("contact");
  const tImpact = useTranslations("impact");
  const locale = useLocale();
  const [inquiry, setInquiry] = useState<InquiryType | "">("");
  const [status, setStatus] = useState<Status>("idle");

  /**
   * Any link carrying `data-inquiry="speaking"` — in the speaker section, the
   * coaching section — preselects the matching category here.
   */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-inquiry]");
      if (!el) return;
      const value = el.getAttribute("data-inquiry") as InquiryType | null;
      if (value && (INQUIRY_TYPES as readonly string[]).includes(value)) {
        setInquiry(value);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const endpoint = contactEndpoint();
    const inquiryLabel = inquiry ? t(`inquiryTypes.${inquiry}`) : "—";

    if (!endpoint) {
      // No provider configured yet — compose an email so the form is never a
      // dead end.
      if (CONTACT_EMAIL) {
        const subject = `${inquiryLabel} — ${data.get("name")}`;
        const body = [
          `${t("form.name")}: ${data.get("name")}`,
          `${t("form.company")}: ${data.get("company")}`,
          `${t("form.email")}: ${data.get("email")}`,
          `${t("form.inquiry")}: ${inquiryLabel}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n");
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
      } else {
        setStatus("error");
      }
      return;
    }

    setStatus("sending");
    try {
      if (CONTACT_FORM.provider === "web3forms") {
        data.append("access_key", CONTACT_FORM.key);
        data.append("subject", `${inquiryLabel} — ${PERSON.name}`);
        data.append("from_name", String(data.get("name") ?? ""));
      }
      data.append("inquiry_label", inquiryLabel);
      data.append("locale", locale);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setInquiry("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full border-0 border-b border-line-2 bg-transparent py-3 text-[0.9375rem] text-fg placeholder:text-fg-3 transition-colors duration-300 focus:border-blue focus:outline-none";
  const label =
    "block text-[0.625rem] font-semibold tracking-[0.2em] text-blue-2 uppercase";

  /** The doors out. Email only appears once an address is configured. */
  const channels = [
    ...(CONTACT_EMAIL
      ? [{ id: "email" as const, label: "Email", href: `mailto:${CONTACT_EMAIL}` }]
      : []),
    ...SOCIAL_LINKS.filter((s) => s.href),
    {
      id: "sereniti" as const,
      label: tImpact("foundationName"),
      href: EXTERNAL.sereniti,
    },
  ];

  return (
    <section
      id={SECTIONS.contact}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen index="07" label={t("eyebrow")} />
            <h2
              id="contact-heading"
              className="display t-h2 mt-8 max-w-[12ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-7 max-w-[38ch]"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            {/* Channels */}
            <ul className="mt-10 grid grid-cols-2 gap-3" data-reveal>
              {channels.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.href}
                    {...(c.id === "email"
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="card group flex items-center justify-between gap-3 px-4 py-4 transition-colors duration-300 hover:border-blue hover:bg-blue-dim"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      {c.id !== "sereniti" && c.id !== "email" && (
                        <SocialIcon
                          id={c.id}
                          className="h-4 w-4 shrink-0 text-blue-2"
                        />
                      )}
                      <span className="truncate text-[0.6875rem] font-semibold tracking-[0.12em] text-fg uppercase">
                        {c.label}
                      </span>
                    </span>
                    <ArrowUpRight className="shrink-0 text-fg-3 transition-colors duration-300 group-hover:text-blue-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form
              onSubmit={onSubmit}
              className="card grid grid-cols-1 gap-x-8 gap-y-7 p-7 sm:grid-cols-2 md:p-10"
              data-reveal
            >
              {/* Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label htmlFor="cf-name" className={label}>
                  {t("form.name")}
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="cf-company" className={label}>
                  {t("form.company")}
                </label>
                <input
                  id="cf-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="cf-email" className={label}>
                  {t("form.email")}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="cf-inquiry" className={label}>
                  {t("form.inquiry")}
                </label>
                <div className="relative">
                  <select
                    id="cf-inquiry"
                    name="inquiry"
                    required
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value as InquiryType)}
                    className={`${field} appearance-none pr-8`}
                  >
                    <option value="" disabled className="bg-card text-fg">
                      {t("form.selectPlaceholder")}
                    </option>
                    {INQUIRY_TYPES.map((key) => (
                      <option key={key} value={key} className="bg-card text-fg">
                        {t(`inquiryTypes.${key}`)}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 11 7"
                    className="pointer-events-none absolute top-1/2 right-1 h-[7px] w-[11px] -translate-y-1/2 text-blue-2"
                  >
                    <path
                      d="M1 1l4.5 4.5L10 1"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className={label}>
                  {t("form.message")}
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  className={`${field} resize-y`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-blue w-full disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                  <ArrowRight />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-5 text-[0.875rem] leading-[1.6] ${
                    status === "error" ? "text-[#ff9d8f]" : "text-fg-2"
                  }`}
                >
                  {status === "sent"
                    ? t("form.success")
                    : status === "error"
                      ? t("form.error")
                      : ""}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
