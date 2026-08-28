/**
 * Topics and areas of work.
 *
 * Only ids live here — labels are translated in messages/*.json.
 */

export const SPEAKING_TOPICS = [
  "technology",
  "ai",
  "digitalTransformation",
  "economy",
  "leadership",
  "politics",
  "socialDevelopment",
] as const;

export const TRANSFORMATION_CAPABILITIES = [
  "ai",
  "intelligentAutomation",
  "agenticAi",
  "digitalTransformation",
  "enterpriseStrategy",
  "latinAmerica",
] as const;

export const LEADERSHIP_PILLARS = [
  "leadershipDevelopment",
  "executiveCoaching",
  "teamDevelopment",
  "strategicThinking",
  "organizationalTransformation",
  "personalGrowth",
] as const;

/** Inquiry categories used by the contact form. */
export const INQUIRY_TYPES = [
  "speaking",
  "coaching",
  "business",
  "media",
  "impact",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];
