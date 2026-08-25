import { defineRouting } from "next-intl/routing";

/**
 * Language architecture.
 *
 * Adding English later is a three-step change and requires no redesign:
 *   1. add "en" to `locales` below
 *   2. create `messages/en.json` (copy es.json and translate)
 *   3. add the label to `localeLabels`
 *
 * Nothing else in the codebase references a hard-coded locale.
 */
export const locales = ["es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Short labels used by the ES | PT switcher. */
export const localeLabels: Record<Locale, string> = {
  es: "ES",
  pt: "PT",
};

/** Full names, used for hreflang, accessibility labels and metadata. */
export const localeNames: Record<Locale, string> = {
  es: "Español",
  pt: "Português",
};

/** BCP-47 tags for <html lang>, hreflang and OpenGraph locale. */
export const localeTags: Record<Locale, string> = {
  es: "es",
  pt: "pt-BR",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Spanish is served from "/", Portuguese from "/pt".
  localePrefix: "as-needed",
});
