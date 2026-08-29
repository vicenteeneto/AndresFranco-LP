/**
 * Photography manifest.
 *
 * Every photograph on the site is registered here with its intrinsic
 * dimensions and a focal point, so components never guess where to crop.
 * Replacing a photo = drop the new file in /public/images under the same name
 * and update width/height here. Nothing else changes.
 *
 * A note on `position`: it only does something when the frame's aspect ratio
 * differs from the photograph's along that axis. A wide photo in a tall frame
 * is cropped at the sides, so only the X value moves it; a wide frame on a
 * squarer photo crops top and bottom, so only Y does. Both values are kept
 * anyway — the frames change with the breakpoint, and so does which one bites.
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
   * Hero. Horizontal, Andrés against the window and the plant. The hero gives
   * the photograph the right half of the viewport, so the crop keeps him
   * centred in that half rather than in the page.
   */
  heroPortrait: {
    src: "/images/hero-portrait.jpg",
    width: 1024,
    height: 752,
    position: "72% 42%",
    positionMobile: "62% 32%",
  },
  /**
   * Black and white, vertical. Leadership & Coaching — the frame is 4/5 and
   * 3/4, so it sits almost uncropped.
   */
  portraitBw: {
    src: "/images/portrait-bw.jpg",
    width: 1122,
    height: 1402,
    position: "50% 42%",
  },
  /**
   * Formal executive portrait, square. Used in the profile section, where the
   * frame is taller than the photo: the sides are trimmed, the full height
   * stays.
   */
  portraitFormal: {
    src: "/images/portrait-formal.jpg",
    width: 1254,
    height: 1254,
    position: "52% 50%",
  },
  /** Andrés speaking at a WorkHQ presentation. Speaker, cropped to 16/9. */
  eventAudience: {
    src: "/images/event-speaker.jpg",
    width: 772,
    height: 1024,
    position: "50% 55%",
    positionMobile: "50% 55%",
  },
  /** WorkHQ Bootcamp. Digital Transformation, wide off the left edge. */
  eventBootcamp: {
    src: "/images/event-bootcamp.jpg",
    width: 1672,
    height: 941,
    position: "50% 44%",
  },
  /** Corporate roadshow. The lead photograph of the selected content. */
  eventRoadshow: {
    src: "/images/event-roadshow.jpg",
    width: 1536,
    height: 1024,
    position: "50% 44%",
  },
  /** Andrés taking part in a Sereniti Foundation community project. */
  eventCommunity: {
    src: "/images/event-community.jpg",
    width: 1320,
    height: 879,
    position: "50% 48%",
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof PHOTOS;

/** Social sharing image (generated at /public/images/og.jpg). */
export const OG_IMAGE = {
  src: "/images/og.jpg",
  width: 1200,
  height: 630,
};
