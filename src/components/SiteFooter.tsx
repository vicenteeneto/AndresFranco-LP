import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { SECTIONS } from "@/content/sections";
import { PERSON } from "@/content/site";

/**
 * The footer stays deliberately thin. The contact section directly above it
 * already carries the call to action and the social profiles, and the header
 * carries the navigation — repeating either here would only dilute both.
 */
export default function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink pb-14 text-white">
      <div className="shell">
        <div className="flex flex-col gap-10 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href={`#${SECTIONS.hero}`}
              className="display block text-[1.5rem] leading-none text-white"
            >
              {PERSON.name}
            </a>
            <p className="mt-4 max-w-[34ch] text-[0.8125rem] leading-[1.6] text-white/45">
              {t("role")}
            </p>
          </div>

          <div className="flex items-center gap-10">
            <LanguageSwitcher tone="dark" />
            <a
              href={`#${SECTIONS.hero}`}
              className="meta transition-colors duration-300 hover:text-white"
            >
              {tNav("backToTop")}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <p className="max-w-[78ch] text-[0.75rem] leading-[1.75] text-white/32">
            {t("disclaimer")}
          </p>
          <p className="shrink-0 text-[0.75rem] text-white/32">
            © {year} {PERSON.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
