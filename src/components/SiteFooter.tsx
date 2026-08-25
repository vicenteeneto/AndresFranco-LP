import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { SocialIcon } from "./ui/icons";
import { NAV_ITEMS, SECTIONS } from "@/content/sections";
import { PERSON, SOCIAL_LINKS } from "@/content/site";

export default function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink pb-12 text-white">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 border-t border-white/10 pt-14 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <a
              href={`#${SECTIONS.hero}`}
              className="display block text-[1.6rem] leading-none text-white"
            >
              {PERSON.name}
            </a>
            <p className="mt-4 max-w-[34ch] text-[0.8125rem] leading-[1.6] text-white/50">
              {t("role")}
            </p>

            <ul className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.filter((s) => s.href).map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center border border-white/12 text-white/60 transition-colors duration-400 hover:border-white/50 hover:text-white"
                  >
                    <SocialIcon id={s.id} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label={t("navLabel")}
            className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-7"
          >
            <p className="eyebrow mb-5">{t("navLabel")}</p>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {tNav(item.key)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`#${SECTIONS.contact}`}
                  className="text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {tNav("contact")}
                </a>
              </li>
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-10">
            <p className="eyebrow mb-5">{tNav("languageLabel")}</p>
            <LanguageSwitcher tone="dark" />
            <a
              href={`#${SECTIONS.hero}`}
              className="mt-8 inline-block text-[0.6875rem] font-medium tracking-[0.13em] text-white/50 uppercase transition-colors duration-300 hover:text-white"
            >
              {tNav("backToTop")}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <p className="max-w-[76ch] text-[0.75rem] leading-[1.7] text-white/35">
            {t("disclaimer")}
          </p>
          <p className="shrink-0 text-[0.75rem] text-white/35">
            © {year} {PERSON.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
