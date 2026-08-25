import type { PhotoId } from "./images";

/**
 * Career milestones.
 *
 * Order = display order (most recent first).
 * Text (title, organisation subtitle, body) is translated and lives in
 * messages/*.json under `journey.items.<id>`.
 *
 * To add a milestone: append an entry here and the matching translation block.
 * `period` is optional — omitted entries simply render without a date rail.
 */

export type Milestone = {
  id: string;
  /** Displayed verbatim, not translated. Omit when the date is not public. */
  period?: string;
  /** Renders with the accent marker. Use for the current role. */
  current?: boolean;
  photo?: PhotoId;
};

export const JOURNEY: Milestone[] = [
  { id: "blueprism", current: true, photo: "portraitFormal" },
  { id: "sereniti" },
  { id: "congress", period: "2023" },
  { id: "pulso" },
  { id: "maxwell" },
  { id: "cisco" },
  { id: "international" },
];
