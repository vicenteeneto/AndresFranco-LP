"use client";

import { useId, useState } from "react";
import { Chevron } from "./icons";

/**
 * Desktop expanded, mobile curated.
 *
 * Wraps a list (or any container of repeated children) and, below 1024px,
 * shows only the first `keep` of them until the visitor asks for the rest.
 * Above 1024px it does nothing at all — the button is hidden and every item
 * is shown.
 *
 * The cut is CSS, not conditional rendering: the whole list stays in the
 * markup, so nothing is lost to search engines, to a printed page, or to
 * anyone whose browser never runs the script. The single child passed in must
 * be the container whose children are the items — the selectors in
 * globals.css reach through this wrapper to it.
 */
export default function Curated({
  keep,
  moreLabel,
  lessLabel,
  children,
  className = "",
  toggleClassName = "",
}: {
  /** How many items survive the fold on a phone. 1 to 4. */
  keep: 1 | 2 | 3 | 4;
  moreLabel: string;
  lessLabel: string;
  children: React.ReactNode;
  className?: string;
  toggleClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      <div data-curated data-keep={keep} data-open={open} id={id}>
        {children}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className={`more-toggle mt-5 lg:hidden ${toggleClassName}`}
      >
        {open ? lessLabel : moreLabel}
        <Chevron className="h-[7px] w-[11px]" />
      </button>
    </div>
  );
}
