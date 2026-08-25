/**
 * Photography manifest.
 *
 * Every photograph used on the site is registered here with its intrinsic
 * dimensions and a suggested object-position, so components never guess.
 * Replacing a photo = drop the new file in /public/images and update the
 * width/height here. Nothing else changes.
 *
 * Alt text is intentionally NOT stored here — it is translated, and lives in
 * messages/*.json under `images.<id>`.
 */

export type Photo = {
  src: string;
  width: number;
  height: number;
  /** CSS object-position for art-directed crops. */
  position?: string;
};

export const PHOTOS = {
  portraitPrimary: {
    src: "/images/portrait-primary.jpg",
    width: 1024,
    height: 752,
    position: "50% 22%",
  },
  portraitEditorial: {
    src: "/images/portrait-editorial.jpg",
    width: 1024,
    height: 796,
    position: "50% 24%",
  },
  portraitFormal: {
    src: "/images/portrait-formal.jpg",
    width: 720,
    height: 720,
    position: "50% 30%",
  },
  eventBootcampRoom: {
    src: "/images/event-bootcamp-room.jpg",
    width: 1600,
    height: 1200,
    position: "50% 58%",
  },
  eventBootcampWide: {
    src: "/images/event-bootcamp-wide.jpg",
    width: 1600,
    height: 644,
    position: "50% 55%",
  },
  eventRoadshow: {
    src: "/images/event-roadshow.jpg",
    width: 1280,
    height: 960,
    position: "50% 62%",
  },
  eventExecutiveBreakfast: {
    src: "/images/event-executive-breakfast.jpg",
    width: 1600,
    height: 866,
    position: "50% 52%",
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof PHOTOS;

/** Social sharing image (generated at /public/images/og.jpg). */
export const OG_IMAGE = {
  src: "/images/og.jpg",
  width: 1200,
  height: 630,
};
