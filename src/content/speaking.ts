/**
 * Speaking topics and leadership pillars.
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
  "businessStrategy",
  "enterpriseAutomation",
  "operationalTransformation",
] as const;

export const LEADERSHIP_PILLARS = [
  "leadershipDevelopment",
  "executiveCoaching",
  "teamDevelopment",
  "organizationalTransformation",
  "strategicThinking",
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
