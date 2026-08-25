import type { PhotoId } from "./images";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  INSIGHTS & MEDIA
 *  The one file that will be edited most often. Add an entry, add the matching
 *  translation block in messages/*.json under `media.items.<id>`, done.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const MEDIA_CATEGORIES = [
  "all",
  "event",
  "video",
  "article",
  "interview",
  "impact",
] as const;

export type MediaCategory = Exclude<(typeof MEDIA_CATEGORIES)[number], "all">;

export type MediaItem = {
  id: string;
  category: MediaCategory;
  /** ISO date. Omit when the exact date is not public — the card adapts. */
  date?: string;
  photo?: PhotoId;
  href?: string;
  /** Renders the item across two columns in the editorial grid. */
  feature?: boolean;
};

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "workhqBootcamp",
    category: "event",
    photo: "eventBootcampWide",
    feature: true,
  },
  {
    id: "roadshowLatam",
    category: "event",
    photo: "eventRoadshow",
  },
  {
    id: "executiveBreakfast",
    category: "event",
    photo: "eventExecutiveBreakfast",
  },
  {
    id: "pulsoDelPoder",
    category: "video",
    href: "https://www.youtube.com/@ELPULSODELPODERTV",
  },
  {
    id: "serenitiImpact",
    category: "impact",
    href: "https://sereniti.org/",
  },
  {
    id: "congressionalRecognition",
    category: "impact",
    date: "2023",
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EL PULSO DEL PODER
 *  `channelUrl` powers the "Ver programa" CTA.
 *  Add YouTube video IDs to `episodes` and they appear automatically; the
 *  first one becomes the featured player.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Episode = {
  /** YouTube video ID, e.g. the part after ?v= */
  videoId: string;
  /** Optional untranslated episode title. */
  title?: string;
  date?: string;
};

export const PULSO = {
  channelUrl: "https://www.youtube.com/@ELPULSODELPODERTV",
  /**
   * Add episodes by pasting the YouTube video ID (the part after `watch?v=`).
   * The first entry becomes the featured player; the rest form the episode rail.
   * Leave the array empty and the section falls back to the programme panel.
   *
   *   { videoId: "dQw4w9WgXcQ", title: "…", date: "2026-05-12" }
   */
  episodes: [] as Episode[],
};

export const PULSO_TOPICS = [
  "politics",
  "economy",
  "society",
  "leadership",
  "international",
] as const;
