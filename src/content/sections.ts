/**
 * Section anchors.
 *
 * This is a single-page site: every anchor below lives on the same document,
 * and nothing here ever becomes a route. IDs stay identical across languages
 * so a shared link always resolves, whichever locale it was copied from.
 */
export const SECTIONS = {
  hero: "inicio",
  profile: "perfil",
  transformation: "transformacion",
  leadership: "liderazgo",
  journey: "trayectoria",
  speaker: "speaker",
  events: "eventos",
  impact: "impacto",
  media: "media",
  contact: "contacto",
} as const;

/**
 * The header menu, in page order.
 *
 * Contacto is not in this list — it is the gold button beside it, and two
 * links to the same anchor is one more than the page needs.
 */
export const NAV_ITEMS = [
  { key: "profile", id: SECTIONS.profile },
  { key: "transformation", id: SECTIONS.transformation },
  { key: "leadership", id: SECTIONS.leadership },
  { key: "journey", id: SECTIONS.journey },
  { key: "speaker", id: SECTIONS.speaker },
  { key: "impact", id: SECTIONS.impact },
  { key: "media", id: SECTIONS.media },
] as const;
