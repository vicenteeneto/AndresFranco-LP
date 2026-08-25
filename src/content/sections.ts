/**
 * Section anchors.
 *
 * IDs stay identical across languages so a shared link always resolves,
 * whichever locale it was copied from.
 */
export const SECTIONS = {
  hero: "inicio",
  profile: "perfil",
  transformation: "transformacion",
  leadership: "liderazgo",
  speaker: "speaker",
  impact: "impacto",
  recognition: "reconocimiento",
  pulso: "pulso",
  media: "media",
  journey: "trayectoria",
  contact: "contacto",
} as const;

/** Order of the links shown in the header and footer. */
export const NAV_ITEMS = [
  { key: "profile", id: SECTIONS.profile },
  { key: "transformation", id: SECTIONS.transformation },
  { key: "leadership", id: SECTIONS.leadership },
  { key: "speaker", id: SECTIONS.speaker },
  { key: "impact", id: SECTIONS.impact },
  { key: "media", id: SECTIONS.media },
  { key: "journey", id: SECTIONS.journey },
] as const;
