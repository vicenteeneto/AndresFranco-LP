import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { SECTIONS } from "@/content/sections";
import { PERSON, SOCIAL_LINKS, EXTERNAL } from "@/content/site";

/**
 * The footer stays deliberately thin: a name, the way out to the rest of the
 * ecosystem, and the language switch. The contact section directly above it
 * already carries the call to action and the same links as cards — repeating
 * the CTA here would dilute both.
 */
export default function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tImpact = useTranslations("impact");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-2 pb-12">
      <div className="shell">
        <div className="flex flex-col gap-8 pt-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href={`#${SECTIONS.hero}`}
              className="font-display text-[1.05rem] font-bold tracking-[0.16em] text-fg uppercase"
            >
              Andrés<span className="text-blue-2"> Franco</span>
            </a>
            <p className="mt-4 max-w-[34ch] text-[0.8125rem] leading-[1.6] text-fg-3">
              {t("role")}
            </p>
          </div>

          <nav aria-label={t("socialLabel")}>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {SOCIAL_LINKS.filter((s) => s.href).map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta transition-colors duration-300 hover:text-fg"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={EXTERNAL.sereniti}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta transition-colors duration-300 hover:text-fg"
                >
                  {tImpact("foundationName")}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-8">
            <LanguageSwitcher />
            <a
              href={`#${SECTIONS.hero}`}
              className="meta transition-colors duration-300 hover:text-fg"
            >
              {tNav("backToTop")}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-7 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <p className="max-w-[80ch] text-[0.75rem] leading-[1.75] text-fg-3">
            {t("disclaimer")}
          </p>
          <p className="shrink-0 text-[0.75rem] text-fg-3">
            © {year} {PERSON.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
