/**
 * Career milestones.
 *
 * Six entries, most recent first — the depth of a career shown without
 * reproducing a CV. Text (title, role, body) is translated and lives in
 * messages/*.json under `journey.items.<id>`.
 *
 * To add a milestone: append an entry here and the matching translation
 * block. Keep the list short; this is a landing page, not a résumé.
 */

export type Milestone = {
  id: string;
  /** Displayed verbatim, not translated. Omit when the date is not public. */
  period?: string;
  /** Renders with the accent marker. Use for the current role. */
  current?: boolean;
};

export const JOURNEY: Milestone[] = [
  { id: "blueprism", current: true },
  { id: "sereniti" },
  { id: "maxwell" },
  { id: "cisco" },
  { id: "international" },
  { id: "military" },
];
