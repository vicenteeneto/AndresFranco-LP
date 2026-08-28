/**
 * The opening motif every section shares: a hairline across the column, the
 * numbered label in gold beneath it, and a short gold tick sitting on the
 * rule at the left.
 *
 * It is the smallest thing holding the page together as one continuous
 * document rather than a stack of independent blocks — which is why it is a
 * component and not a pattern each section reimplements.
 */
export default function SectionOpen({
  index,
  label,
  className = "",
  revealDelay,
}: {
  /** Two-digit section number, e.g. "01". Omit for unnumbered sections. */
  index?: string;
  label: string;
  className?: string;
  revealDelay?: number;
}) {
  return (
    <div
      className={`relative border-t border-line pt-5 ${className}`}
      data-reveal
      style={
        revealDelay
          ? ({ "--reveal-delay": `${revealDelay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-[3px] w-10 -translate-y-px bg-gold"
      />
      <p className="label-gold">
        {index && <span className="tabular-nums">{index} — </span>}
        {label}
      </p>
    </div>
  );
}
