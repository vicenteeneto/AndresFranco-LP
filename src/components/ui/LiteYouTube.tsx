"use client";

import { useCallback, useState } from "react";
import { PlayMark } from "./icons";

/**
 * Click-to-load YouTube facade.
 *
 * Nothing from youtube.com is requested until the visitor presses play, so the
 * page keeps its performance budget and sets no third-party cookies on load.
 */

/**
 * Not every upload has a 1280×720 still. `maxresdefault` is the one worth
 * asking for; `hqdefault` is the one that always exists, and object-cover
 * crops its 4:3 frame to 16:9 exactly the way YouTube's own player does.
 */
const STILLS = ["maxresdefault", "sddefault", "hqdefault"] as const;

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
  const [step, setStep] = useState(0);

  const fallback = useCallback(() => {
    setStep((s) => (s < STILLS.length - 1 ? s + 1 : s));
  }, []);

  /**
   * The image is in the server-rendered HTML, so a missing still can 404
   * before React has attached anything — and `onError` then never fires,
   * leaving a permanently blank thumbnail. Checking `complete` with a zero
   * intrinsic width at attach time catches exactly that case.
   */
  const check = useCallback(
    (el: HTMLImageElement | null) => {
      if (el && el.complete && el.naturalWidth === 0) fallback();
    },
    [fallback],
  );

  if (active) {
    return (
      <div className={`frame relative overflow-hidden bg-card ${className}`}>
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
      className={`frame group relative block w-full overflow-hidden bg-card ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={STILLS[step]}
        ref={check}
        src={`https://i.ytimg.com/vi/${videoId}/${STILLS[step]}.jpg`}
        onError={fallback}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-[transform,opacity] duration-[1.1s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-bg/35 transition-colors duration-500 group-hover:bg-bg/15"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-full bg-blue pl-1 text-white shadow-[0_2px_28px_rgba(0,107,255,.45)] transition-transform duration-500 group-hover:scale-105 ${
            compact ? "h-10 w-10" : "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]"
          }`}
        >
          <PlayMark
            className={
              compact ? "h-3 w-3" : "h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
            }
          />
        </span>
      </span>
    </button>
  );
}
