"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { NAV_ITEMS, SECTIONS } from "@/content/sections";
import LanguageSwitcher from "./ui/LanguageSwitcher";

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
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-rule bg-paper/92 backdrop-blur-[12px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell">
          <div
            className={`flex items-center justify-between transition-[height] duration-500 ${
              scrolled ? "h-[68px]" : "h-[84px] md:h-[96px]"
            }`}
          >
            {/* Wordmark */}
            <a
              href={`#${SECTIONS.hero}`}
              onClick={close}
              className="group flex shrink-0 items-baseline gap-2.5 whitespace-nowrap"
            >
              <span className="display text-[1.2rem] leading-none md:text-[1.35rem]">
                Andrés Franco
              </span>
              {/*
                The tagline only appears once there is room for it alongside a
                seven-item nav and a three-language switcher — below 2xl the
                nav needs that width more than the tagline does.
              */}
              <span
                aria-hidden="true"
                className="hidden h-[13px] w-px bg-rule 2xl:block"
              />
              <span className="eyebrow hidden text-[0.5625rem] 2xl:block">
                Leadership · Transformation
              </span>
            </a>

            {/* Desktop navigation */}
            <nav
              aria-label={t("menuLabel")}
              className="hidden items-center gap-5 xl:flex 2xl:gap-7"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                    active === item.id
                      ? "text-navy"
                      : "text-ink-mute hover:text-blue-deep"
                  }`}
                >
                  {t(item.key)}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-blue transition-transform duration-500 ${
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-4 md:gap-5 2xl:gap-7">
              <LanguageSwitcher />
              <a
                href={`#${SECTIONS.contact}`}
                className="hidden border border-warm-gray px-5 py-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-navy uppercase transition-colors duration-400 hover:border-navy hover:bg-navy hover:text-paper md:inline-flex"
              >
                {t("contact")}
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
                  className={`absolute h-px w-[22px] bg-navy transition-transform duration-400 ${
                    open ? "rotate-45" : "-translate-y-[4px]"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute h-px w-[22px] bg-navy transition-transform duration-400 ${
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
        className={`fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="shell flex h-full flex-col justify-between pt-[104px] pb-12">
          <nav aria-label={t("menuLabel")} className="mt-6">
            <ul>
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id} className="border-b border-rule-soft">
                  <a
                    href={`#${item.id}`}
                    onClick={close}
                    className="flex items-baseline gap-4 py-4"
                    style={{
                      transitionDelay: open ? `${90 + i * 45}ms` : "0ms",
                      opacity: open ? 1 : 0,
                      transform: open ? "none" : "translateY(10px)",
                      transitionProperty: "opacity, transform",
                      transitionDuration: "600ms",
                      transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                    }}
                  >
                    <span className="eyebrow w-7 text-[0.5625rem] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display text-[1.75rem] leading-[1.15]">
                      {t(item.key)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`#${SECTIONS.contact}`}
            onClick={close}
            className="btn-solid w-full"
          >
            {t("contact")}
          </a>
        </div>
      </div>
    </>
  );
}
