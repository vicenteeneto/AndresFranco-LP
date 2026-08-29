/**
 * Section anchors.
 *
 * This is a single-page site: every anchor below lives on the same document,
 * and nothing here ever becomes a route. IDs stay identical across languages
 * so a shared link always resolves, whichever locale it was copied from.
 *
 * `transformation`, `leadership` and `speaker` are no longer sections — they
 * are the three rows inside `practice`. Their ids live on those rows, so every
 * link that ever pointed at them still works and opens the row it names.
 */
export const SECTIONS = {
  hero: "inicio",
  profile: "perfil",
  practice: "areas",
  transformation: "transformacion",
  leadership: "liderazgo",
  speaker: "speaker",
  journey: "trayectoria",
  impact: "impacto",
  media: "media",
  contact: "contacto",
} as const;

/**
 * The header menu, in page order.
 *
 * Five links. Contacto is not among them — it is the gold button beside the
 * menu, and two links to the same anchor is one more than the page needs.
 */
export const NAV_ITEMS = [
  { key: "profile", id: SECTIONS.profile },
  { key: "practice", id: SECTIONS.practice },
  { key: "journey", id: SECTIONS.journey },
  { key: "impact", id: SECTIONS.impact },
  { key: "media", id: SECTIONS.media },
] as const;
