"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeLabels, localeNames } from "@/i18n/routing";

export default function LanguageSwitcher({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const active = useLocale();
  const t = useTranslations("nav");

  const base =
    tone === "dark"
      ? "text-white/45 hover:text-white"
      : "text-ink-mute hover:text-blue-deep";
  const on = tone === "dark" ? "text-white" : "text-navy";

  return (
    <div
      className={`flex items-center gap-[0.55rem] ${className}`}
      role="group"
      aria-label={t("languageLabel")}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-[0.55rem]">
          {i > 0 && (
            <span
              aria-hidden="true"
              className={`text-[0.6rem] ${
                tone === "dark" ? "text-white/30" : "text-warm-gray"
              }`}
            >
              /
            </span>
          )}
          <Link
            href={pathname}
            locale={locale}
            hrefLang={locale}
            aria-current={locale === active ? "true" : undefined}
            title={localeNames[locale]}
            className={`text-[0.6875rem] font-semibold tracking-[0.16em] transition-colors duration-300 hover:opacity-100 ${
              locale === active ? on : `${base} hover:${on}`
            }`}
          >
            {localeLabels[locale]}
          </Link>
        </span>
      ))}
    </div>
  );
}
