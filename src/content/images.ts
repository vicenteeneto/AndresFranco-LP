/**
 * Photography manifest.
 *
 * Every photograph on the site is registered here with its intrinsic
 * dimensions and a focal point, so components never guess where to crop.
 * Replacing a photo = drop the new file in /public/images under the same name
 * and update width/height here. Nothing else changes.
 *
 * Alt text is not stored here — it is translated, and lives in
 * messages/*.json under `images.<id>`.
 */

export type Photo = {
  src: string;
  width: number;
  height: number;
  /** CSS object-position — where the subject sits when the frame crops. */
  position?: string;
  /** Focal point for the mobile recomposition, when it differs. */
  positionMobile?: string;
};

export const PHOTOS = {
  /**
   * Hero. Horizontal, with the room's negative space on the left — the
   * headline sits in that space, so the crop must keep Andrés right of centre.
   */
  heroPortrait: {
    src: "/images/hero-portrait.jpg",
    width: 1024,
    height: 752,
    position: "72% 42%",
    positionMobile: "62% 32%",
  },
  /** Black and white, vertical. Leadership & Coaching. */
  portraitBw: {
    src: "/images/portrait-bw.jpg",
    width: 1024,
    height: 796,
    position: "52% 26%",
  },
  /** Formal executive portrait. Recognition and institutional use. */
  portraitFormal: {
    src: "/images/portrait-formal.jpg",
    width: 720,
    height: 720,
    position: "50% 26%",
  },
  /** Large audience, ballroom. Speaker — cinematic crop. */
  eventAudience: {
    src: "/images/event-audience.jpg",
    width: 1600,
    height: 1200,
    position: "50% 56%",
    positionMobile: "52% 58%",
  },
  /** WorkHQ Bootcamp. Digital Transformation. */
  eventBootcamp: {
    src: "/images/event-bootcamp.jpg",
    width: 1600,
    height: 644,
    position: "50% 44%",
  },
  /** Corporate auditorium / roadshow. Executive leadership, Latin America. */
  eventRoadshow: {
    src: "/images/event-roadshow.jpg",
    width: 1280,
    height: 960,
    position: "50% 58%",
  },
  /** Community gathering. Social impact — the warmest image on the site. */
  eventCommunity: {
    src: "/images/event-community.jpg",
    width: 1600,
    height: 866,
    position: "50% 46%",
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof PHOTOS;

/** Social sharing image (generated at /public/images/og.jpg). */
export const OG_IMAGE = {
  src: "/images/og.jpg",
  width: 1200,
  height: 630,
};
