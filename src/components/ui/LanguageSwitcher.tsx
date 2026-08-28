"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeLabels, localeNames } from "@/i18n/routing";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const active = useLocale();
  const t = useTranslations("nav");

  return (
    <div
      className={`flex items-center gap-[0.5rem] ${className}`}
      role="group"
      aria-label={t("languageLabel")}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-[0.5rem]">
          {i > 0 && (
            <span aria-hidden="true" className="text-[0.6rem] text-fg-3">
              /
            </span>
          )}
          <Link
            href={pathname}
            locale={locale}
            hrefLang={locale}
            aria-current={locale === active ? "true" : undefined}
            title={localeNames[locale]}
            className={`text-[0.6875rem] font-semibold tracking-[0.16em] transition-colors duration-300 ${
              locale === active
                ? "text-fg"
                : "text-fg-3 hover:text-blue-2"
            }`}
          >
            {localeLabels[locale]}
          </Link>
        </span>
      ))}
    </div>
  );
}
