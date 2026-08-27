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
    photo: "eventBootcamp",
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
    photo: "eventCommunity",
  },
  {
    id: "pulsoDelPoder",
    category: "video",
    href: "https://www.youtube.com/@ELPULSODELPODERTV",
  },
  {
    id: "entrevistaMarian",
    category: "interview",
    href: "https://www.youtube.com/watch?v=wbrnP3hNeQA",
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
   * Episodes shown in the programme section.
   *
   * The first entry becomes the featured player; the next three form the rail
   * below it. Newest first — replace the top entry when a new episode airs.
   * Empty array falls back to the programme panel with no player.
   *
   * `videoId` is the part after `watch?v=`. `title` is the real YouTube title,
   * used for the play button's accessible label and the player frame — it is
   * not printed on the page: the thumbnail already carries it, and the raw
   * titles would fight the rest of the site typographically.
   */
  episodes: [
    {
      videoId: "RRdGxgWCy2s",
      title: "¿Quién es realmente Cepeda? ¿Proyecto democrático o riesgo político?",
    },
    {
      videoId: "Z8M6kIHpfdY",
      title: "Orden de captura masiva: recompensas millonarias por exFARC",
    },
    {
      videoId: "lvd37OG2Ch0",
      title: "Lo que no te cuentan: la estrategia real detrás de Irán",
    },
    {
      videoId: "iSH3McGudj8",
      title:
        "La verdadera historia del negocio de los aviones: ¿se cae la compra en Suecia?",
    },
  ] as Episode[],
};

export const PULSO_TOPICS = [
  "politics",
  "economy",
  "society",
  "leadership",
  "international",
] as const;
