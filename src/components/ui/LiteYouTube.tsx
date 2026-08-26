"use client";

import { useState } from "react";
import { PlayMark } from "./icons";

/**
 * Click-to-load YouTube facade.
 * Nothing from youtube.com is requested until the visitor presses play, so the
 * page keeps its performance budget and sets no third-party cookies on load.
 */
export default function LiteYouTube({
  videoId,
  title,
  playLabel,
  className = "",
  compact = false,
}: {
  videoId: string;
  title: string;
  playLabel: string;
  className?: string;
  /** Smaller play mark, for the episode rail. */
  compact?: boolean;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div
        className={`frame relative overflow-hidden bg-navy-soft ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`${playLabel}: ${title}`}
      className={`frame group relative block w-full overflow-hidden bg-navy-soft ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        onError={(e) => {
          // Not every upload has a 1280×720 still; fall back to the 16:9 crop
          // that always exists, then to the 4:3 one.
          const el = e.currentTarget;
          if (el.src.includes("maxresdefault")) {
            el.src = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
          } else if (el.src.includes("sddefault")) {
            el.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          }
        }}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-navy/25 transition-colors duration-500 group-hover:bg-navy/10"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-full bg-paper/95 pl-1 text-navy shadow-[0_2px_24px_rgba(0,0,0,.28)] transition-transform duration-500 group-hover:scale-105 ${
            compact ? "h-10 w-10" : "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]"
          }`}
        >
          <PlayMark
            className={compact ? "h-3 w-3" : "h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"}
          />
        </span>
      </span>
    </button>
  );
}
