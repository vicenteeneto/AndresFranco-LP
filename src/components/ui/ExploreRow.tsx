"use client";

import { useEffect, useState } from "react";

/**
 * One row of the explore list.
 *
 * Closed it is a card: a marked tile, a title, one line saying what is inside,
 * and a plus. Open it grows downwards into whatever the panel holds — text,
 * lists, a photograph.
 *
 * Three details make it behave like part of the page rather than a widget:
 *
 * - The panel animates on `grid-template-rows` from 0fr to 1fr, so it grows to
 *   whatever height its content needs without anyone measuring anything.
 * - It keeps its own anchor. Links and menus still point at `#liderazgo`, and
 *   arriving on that hash opens the row and scrolls to it — otherwise a shared
 *   link would land on a closed drawer.
 * - Closed content is `inert`, so it leaves the tab order and the accessibility
 *   tree instead of sitting invisibly in both.
 */
export default function ExploreRow({
  id,
  title,
  subtitle,
  icon,
  defaultOpen = false,
  children,
}: {
  /** Doubles as the anchor: `#id` opens this row. */
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-panel`;

  useEffect(() => {
    const openOnHash = () => {
      if (window.location.hash === `#${id}`) setOpen(true);
    };
    openOnHash();
    window.addEventListener("hashchange", openOnHash);
    return () => window.removeEventListener("hashchange", openOnHash);
  }, [id]);

  return (
    <div
      id={id}
      className={`card scroll-mt-24 transition-colors duration-300 ${
        open ? "border-line-2" : ""
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-4 p-4 text-left md:gap-5 md:p-5"
        >
          <span
            aria-hidden="true"
            className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-colors duration-300 md:h-12 md:w-12 ${
              open
                ? "border-gold bg-gold-dim text-gold-hover"
                : "border-line-2 text-gold group-hover:border-gold"
            }`}
          >
            {icon}
          </span>

          <span className="min-w-0 flex-1">
            <span className="display block truncate text-[1.0625rem] leading-[1.3] transition-colors duration-300 group-hover:text-gold-hover md:text-[1.15rem]">
              {title}
            </span>
            <span className="mt-1 block line-clamp-2 text-[0.8125rem] leading-[1.45] text-fg-3 lg:truncate">
              {subtitle}
            </span>
          </span>

          {/* A plus that becomes a minus. One glyph, one rotation. */}
          <span
            aria-hidden="true"
            className={`relative flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 ${
              open
                ? "border-gold bg-gold text-bg"
                : "border-line-2 text-gold group-hover:border-gold"
            }`}
          >
            <span className="absolute h-px w-[13px] bg-current" />
            <span
              className={`absolute h-px w-[13px] bg-current transition-transform duration-400 ${
                open ? "rotate-0" : "rotate-90"
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-label={title}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-line px-4 pt-7 pb-8 transition-opacity duration-500 md:px-5 md:pt-9 md:pb-10 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
