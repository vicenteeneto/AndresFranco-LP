import { defineRouting } from "next-intl/routing";

/**
 * Language architecture.
 *
 * Adding a language is a four-line change plus its translation file, and needs
 * no redesign:
 *   1. add the code to `locales`
 *   2. create `messages/<code>.json` (copy es.json and translate — every key
 *      must be present; the build fails on a missing one)
 *   3. add its entry to `localeLabels`, `localeNames` and `localeTags`
 *
 * The switcher, the hreflang tags, the sitemap, the canonical URLs and the
 * static routes all read from this list. Nothing else in the codebase
 * references a hard-coded locale.
 */
export const locales = ["es", "pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Short labels used by the ES | PT | EN switcher. */
export const localeLabels: Record<Locale, string> = {
  es: "ES",
  pt: "PT",
  en: "EN",
};

/** Full names, used for hreflang, accessibility labels and metadata. */
export const localeNames: Record<Locale, string> = {
  es: "Español",
  pt: "Português",
  en: "English",
};

/** BCP-47 tags for <html lang>, hreflang and OpenGraph locale. */
export const localeTags: Record<Locale, string> = {
  es: "es",
  pt: "pt-BR",
  en: "en",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Every language gets an explicit prefix: "/es" and "/pt".
  // "/" redirects to the default locale.
  //
  // Why not "as-needed" (which would serve Spanish from "/")? That mode makes
  // the proxy rewrite "/" to "/es" internally, and the rewrite does not
  // resolve on Vercel's router — every route answered with a platform 404.
  // Explicit prefixes keep each locale a real, directly addressable route.
  localePrefix: "always",
});
