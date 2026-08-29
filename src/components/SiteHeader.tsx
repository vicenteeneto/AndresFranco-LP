"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { NAV_ITEMS, SECTIONS } from "@/content/sections";
import LanguageSwitcher from "./ui/LanguageSwitcher";

/**
 * A thin technical bar rather than a masthead.
 *
 * It is transparent over the hero and takes a hairline and a blurred ground
 * the moment the page moves — so the name at the top left never competes with
 * the enormous name in the hero directly below it.
 */
export default function SiteHeader() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlights the section currently occupying the upper viewport.
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock the page while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-400 ${
          scrolled || open
            ? "border-b border-line bg-bg/88 backdrop-blur-[14px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell">
          <div
            className={`flex items-center justify-between gap-6 transition-[height] duration-400 ${
              scrolled ? "h-[62px]" : "h-[74px] md:h-[82px]"
            }`}
          >
            {/* Wordmark */}
            <a
              href={`#${SECTIONS.hero}`}
              onClick={close}
              className="shrink-0 font-display text-[0.8125rem] font-bold tracking-[0.2em] whitespace-nowrap text-fg uppercase transition-colors duration-300 hover:text-gold-hover"
            >
              Andrés<span className="text-gold"> Franco</span>
            </a>

            {/* Desktop navigation */}
            <nav
              aria-label={t("menuLabel")}
              /* Seven items, three languages and a button need 1280px to sit
                 with real space between them; below that the overlay menu is
                 the honest answer. */
              className="hidden items-center gap-5 xl:flex 2xl:gap-7"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative text-[0.6875rem] font-semibold tracking-[0.13em] whitespace-nowrap uppercase transition-colors duration-300 ${
                    active === item.id ? "text-fg" : "text-fg-3 hover:text-fg"
                  }`}
                >
                  {t(item.key)}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-400 ${
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-4 md:gap-6">
              <LanguageSwitcher className="hidden sm:flex" />
              <a
                href={`#${SECTIONS.contact}`}
                className="hidden bg-gold px-5 py-2.5 text-[0.6875rem] font-bold tracking-[0.12em] whitespace-nowrap text-bg uppercase transition-colors duration-300 hover:bg-gold-hover md:inline-flex"
              >
                {t("cta")}
              </a>

              {/* Menu toggle */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? t("closeMenu") : t("openMenu")}
                className="relative -mr-1 flex h-9 w-9 items-center justify-center xl:hidden"
              >
                <span className="sr-only">
                  {open ? t("closeMenu") : t("openMenu")}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute h-px w-[22px] bg-fg transition-transform duration-400 ${
                    open ? "rotate-45" : "-translate-y-[4px]"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute h-px w-[22px] bg-fg transition-transform duration-400 ${
                    open ? "-rotate-45" : "translate-y-[4px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg transition-[opacity,visibility] duration-400 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="shell flex h-full flex-col justify-between pt-[96px] pb-10">
          <nav aria-label={t("menuLabel")} className="mt-4">
            <ul>
              {[...NAV_ITEMS, { key: "contact", id: SECTIONS.contact }].map(
                (item, i) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      href={`#${item.id}`}
                      onClick={close}
                      className="flex items-baseline gap-4 py-4"
                      style={{
                        transitionDelay: open ? `${70 + i * 40}ms` : "0ms",
                        opacity: open ? 1 : 0,
                        transform: open ? "none" : "translateY(10px)",
                        transitionProperty: "opacity, transform",
                        transitionDuration: "500ms",
                        transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                      }}
                    >
                      <span className="display text-[1.6rem] uppercase">
                        {t(item.key)}
                      </span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <LanguageSwitcher />
            <a
              href={`#${SECTIONS.contact}`}
              onClick={close}
              className="btn-gold w-full"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
