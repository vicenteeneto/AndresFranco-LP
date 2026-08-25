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
}: {
  videoId: string;
  title: string;
  playLabel: string;
  className?: string;
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
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 pl-1 text-navy transition-transform duration-500 group-hover:scale-105 md:h-20 md:w-20">
          <PlayMark className="h-5 w-5 md:h-6 md:w-6" />
        </span>
      </span>
    </button>
  );
}
