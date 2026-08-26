"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, SocialIcon } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import {
  SOCIAL_LINKS,
  CONTACT_FORM,
  CONTACT_EMAIL,
  contactEndpoint,
  PERSON,
} from "@/content/site";
import { INQUIRY_TYPES, type InquiryType } from "@/content/speaking";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [inquiry, setInquiry] = useState<InquiryType | "">("");
  const [status, setStatus] = useState<Status>("idle");

  /**
   * Any link on the page carrying `data-inquiry="speaking"` (hero, speaker
   * section, leadership section…) preselects the matching category here.
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
      // No form provider configured yet — compose an email instead so the
      // form is never a dead end.
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

  const fieldBase =
    "w-full border-0 border-b border-white/18 bg-transparent py-3 text-[0.9375rem] text-white placeholder:text-white/30 transition-colors duration-300 focus:border-accent-hi focus:outline-none";
  const labelBase =
    "block text-[0.625rem] font-medium tracking-[0.15em] text-white/45 uppercase";

  return (
    <section
      id={SECTIONS.contact}
      className="on-dark scroll-mt-20 bg-ink py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="contact-heading"
              className="display mt-6 text-[clamp(2rem,4.1vw,3.3rem)] leading-[1.08] tracking-[-0.018em]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-7 max-w-[40ch]"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            <div className="mt-11" data-reveal>
              <p className="eyebrow mb-4">{t("followLabel")}</p>
              <ul className="flex items-center gap-3">
                {SOCIAL_LINKS.filter((s) => s.href).map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors duration-400 hover:border-white/60 hover:text-white"
                    >
                      <SocialIcon id={s.id} className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2"
              data-reveal
              noValidate={false}
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
                <label htmlFor="cf-name" className={labelBase}>
                  {t("form.name")}
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldBase}
                />
              </div>

              <div>
                <label htmlFor="cf-company" className={labelBase}>
                  {t("form.company")}
                </label>
                <input
                  id="cf-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={fieldBase}
                />
              </div>

              <div>
                <label htmlFor="cf-email" className={labelBase}>
                  {t("form.email")}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldBase}
                />
              </div>

              <div>
                <label htmlFor="cf-inquiry" className={labelBase}>
                  {t("form.inquiry")}
                </label>
                <div className="relative">
                  <select
                    id="cf-inquiry"
                    name="inquiry"
                    required
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value as InquiryType)}
                    className={`${fieldBase} appearance-none pr-8`}
                  >
                    <option value="" disabled className="bg-ink text-white">
                      {t("form.selectPlaceholder")}
                    </option>
                    {INQUIRY_TYPES.map((key) => (
                      <option
                        key={key}
                        value={key}
                        className="bg-ink text-white"
                      >
                        {t(`inquiryTypes.${key}`)}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 11 7"
                    className="pointer-events-none absolute top-1/2 right-1 h-[7px] w-[11px] -translate-y-1/2 text-white/45"
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
                <label htmlFor="cf-message" className={labelBase}>
                  {t("form.message")}
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  className={`${fieldBase} resize-y`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-solid w-full disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                  <ArrowRight />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-5 text-[0.875rem] leading-[1.6] ${
                    status === "error" ? "text-[#e8a49a]" : "text-white/70"
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
