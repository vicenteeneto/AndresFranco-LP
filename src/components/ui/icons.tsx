type IconProps = { className?: string };

export function ArrowRight({ className = "" }: IconProps) {
  return (
    <svg
      className={`arrow ${className}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7h11.5M8 2.5 12.5 7 8 11.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowDown({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="12"
      height="26"
      viewBox="0 0 12 26"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 0v24M1.5 19.5 6 24l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg
      className={`arrow ${className}`}
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 11 11 2M4 2h7v7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function PlayMark({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1.5 20.5 12 1 22.5V1.5Z" fill="currentColor" />
    </svg>
  );
}

export function SocialIcon({
  id,
  className = "",
}: {
  id: "linkedin" | "instagram" | "youtube";
  className?: string;
}) {
  const paths: Record<typeof id, React.ReactNode> = {
    linkedin: (
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9.75h4v10.75H3V9.75Zm6.5 0h3.83v1.47h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v5.48h-4v-4.86c0-1.16-.02-2.65-1.7-2.65-1.7 0-1.96 1.26-1.96 2.57v4.94h-4V9.75Z"
        fill="currentColor"
      />
    ),
    instagram: (
      <>
        <path
          d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3.9"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="17.2" cy="6.9" r="1.15" fill="currentColor" />
      </>
    ),
    youtube: (
      <>
        <path
          d="M21.6 8.2a2.5 2.5 0 0 0-1.76-1.78C18.28 6 12 6 12 6s-6.28 0-7.84.42A2.5 2.5 0 0 0 2.4 8.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.76 1.78C5.72 18 12 18 12 18s6.28 0 7.84-.42a2.5 2.5 0 0 0 1.76-1.78A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.4-3.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <path d="M10.2 9.3 14.8 12l-4.6 2.7V9.3Z" fill="currentColor" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}

export function Chevron({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
