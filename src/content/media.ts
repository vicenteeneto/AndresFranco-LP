import type { PhotoId } from "./images";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SELECTED CONTENT
 *
 *  This page is static by design. Nothing here syncs with YouTube, Instagram
 *  or an events calendar — the three entries below are a curated selection
 *  that stays until someone deliberately changes it.
 *
 *  To update: edit an entry here and its translation block in messages/*.json
 *  under `events.items.<id>`. Keep it to three; the point of the section is
 *  that it is a selection, not an archive.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type SelectedItem = {
  id: string;
  /** Untranslated label shown above the title — a place, a format, a year. */
  kind: "event" | "interview";
  photo?: PhotoId;
  href?: string;
};

export const SELECTED_CONTENT: SelectedItem[] = [
  {
    id: "roadshowLatam",
    kind: "event",
    photo: "eventRoadshow",
  },
  {
    id: "workhqBootcamp",
    kind: "event",
  },
  {
    id: "entrevistaMarian",
    kind: "interview",
    href: "https://www.youtube.com/watch?v=wbrnP3hNeQA",
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EL PULSO DEL PODER
 *
 *  Three hand-picked episodes: the first becomes the player, the other two a
 *  pair beneath it. There is no feed and no automatic refresh — when a newer
 *  episode should lead, replace the top entry by hand. The channel button
 *  carries everything else.
 *
 *  `videoId` is the part after `watch?v=`. `title` is the real YouTube title,
 *  used for the play button's accessible label and the player frame — it is
 *  not printed on the page: the thumbnail already carries it, and the raw
 *  titles would fight the rest of the site typographically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Episode = {
  videoId: string;
  title?: string;
};

export const PULSO = {
  channelUrl: "https://www.youtube.com/@ELPULSODELPODERTV",
  episodes: [
    {
      videoId: "RRdGxgWCy2s",
      title:
        "¿Quién es realmente Cepeda? ¿Proyecto democrático o riesgo político?",
    },
    {
      videoId: "Z8M6kIHpfdY",
      title: "Orden de captura masiva: recompensas millonarias por exFARC",
    },
    {
      videoId: "lvd37OG2Ch0",
      title: "Lo que no te cuentan: la estrategia real detrás de Irán",
    },
  ] as Episode[],
};

export const PULSO_TOPICS = [
  "politics",
  "economy",
  "society",
  "leadership",
] as const;
