/**
 * Section anchors.
 *
 * This is a single-page site: every anchor below lives on the same document,
 * and nothing here ever becomes a route. IDs stay identical across languages
 * so a shared link always resolves, whichever locale it was copied from.
 *
 * Everything from `profile` to `media` is a row inside `explore` rather than a
 * section of its own. The ids live on those rows, so every link that ever
 * pointed at them still works — and opens the row it names.
 */
export const SECTIONS = {
  hero: "inicio",
  explore: "explorar",
  profile: "perfil",
  transformation: "transformacion",
  leadership: "liderazgo",
  speaker: "speaker",
  journey: "trayectoria",
  impact: "impacto",
  media: "media",
  contact: "contacto",
} as const;

/**
 * The menu — the same seven rows the explore list holds, in the same order.
 *
 * Contacto is not among them: it is the gold button beside the menu, and two
 * links to the same anchor is one more than the page needs.
 */
export const NAV_ITEMS = [
  { key: "profile", id: SECTIONS.profile },
  { key: "transformation", id: SECTIONS.transformation },
  { key: "leadership", id: SECTIONS.leadership },
  { key: "speaker", id: SECTIONS.speaker },
  { key: "journey", id: SECTIONS.journey },
  { key: "impact", id: SECTIONS.impact },
  { key: "media", id: SECTIONS.media },
] as const;
