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
  speaker: "speaker",
  impact: "impacto",
  media: "media",
  events: "eventos",
  journey: "trayectoria",
  contact: "contacto",
} as const;

/**
 * The header menu.
 *
 * Six links, in page order. Two sections are deliberately absent: the
 * wordmark already returns to the top, and the profile block sits directly
 * under the hero — nobody navigates to something they cannot help but read.
 * Contacto is the button beside the menu, not an item in it.
 */
export const NAV_ITEMS = [
  { key: "transformation", id: SECTIONS.transformation },
  { key: "leadership", id: SECTIONS.leadership },
  { key: "speaker", id: SECTIONS.speaker },
  { key: "impact", id: SECTIONS.impact },
  { key: "media", id: SECTIONS.media },
  { key: "journey", id: SECTIONS.journey },
] as const;
