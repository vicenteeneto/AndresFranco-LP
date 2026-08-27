/**
 * The opening motif every section shares: a hairline, then the numbered label
 * in blue. It is the smallest thing holding the page together as one piece of
 * art direction rather than a stack of independent blocks.
 */
export default function SectionOpen({
  label,
  className = "",
  revealDelay,
}: {
  label: string;
  className?: string;
  revealDelay?: number;
}) {
  return (
    <div
      className={`rule-top pt-5 ${className}`}
      data-reveal
      style={
        revealDelay
          ? ({ "--reveal-delay": `${revealDelay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      <p className="eyebrow">{label}</p>
    </div>
  );
}
