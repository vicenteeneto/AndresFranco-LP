import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { locales, localeTags, defaultLocale } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const path = (locale: string) => `${SITE_URL}/${locale}`;

  const languages = Object.fromEntries(
    locales.map((l) => [localeTags[l], path(l)]),
  );

  return locales.map((locale) => ({
    url: path(locale),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
