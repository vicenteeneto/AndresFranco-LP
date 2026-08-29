"use client";

import { useEffect, useState } from "react";
import { Chevron } from "./icons";

/**
 * A row that opens.
 *
 * The page is long because every discipline used to be its own full section.
 * Collapsing them into rows lets a visitor see the whole shape of the work in
 * one screen and open only what they came for.
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
export default function Disclosure({
  id,
  title,
  summary,
  defaultOpen = false,
  children,
}: {
  /** Doubles as the anchor: `#id` opens this row. */
  id: string;
  title: string;
  summary: string;
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
    <div id={id} className="scroll-mt-24 border-t border-line last:border-b">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-baseline gap-5 py-7 text-left md:gap-10 md:py-9"
        >
          <span className="display min-w-0 flex-1 text-[1.35rem] leading-[1.16] transition-colors duration-300 group-hover:text-gold-hover md:text-[1.75rem] lg:text-[2rem]">
            {title}
          </span>
          <span className="hidden max-w-[34ch] flex-1 text-[0.9375rem] leading-[1.6] text-fg-3 lg:block">
            {summary}
          </span>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center self-center border border-line-2 text-gold transition-colors duration-300 group-hover:border-gold"
          >
            <Chevron
              className={`h-[7px] w-[11px] transition-transform duration-400 ${
                open ? "rotate-180" : ""
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
            className={`pb-10 transition-opacity duration-500 md:pb-14 ${
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
