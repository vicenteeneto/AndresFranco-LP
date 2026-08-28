import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  routing,
  locales,
  localeTags,
  defaultLocale,
  type Locale,
} from "@/i18n/routing";
import { SITE_URL, PERSON, SOCIAL_LINKS, EXTERNAL } from "@/content/site";
import { OG_IMAGE } from "@/content/images";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RevealObserver from "@/components/ui/Reveal";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Every locale is addressable under its own prefix: "/es", "/pt". */
function pathFor(locale: Locale) {
  return `/${locale}`;
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "meta" });

  const languages = Object.fromEntries(
    locales.map((l) => [localeTags[l], pathFor(l)]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s — ${t("titleTemplate")}`,
    },
    description: t("description"),
    applicationName: PERSON.name,
    authors: [{ name: PERSON.name }],
    creator: PERSON.name,
    keywords: [
      "Andrés Franco",
      "Andres Franco",
      "Transformación Digital",
      "Digital Transformation",
      "Inteligencia Artificial",
      "Artificial Intelligence",
      "Intelligent Automation",
      "Agentic AI",
      "Liderazgo",
      "Executive Leadership",
      "Executive Coach",
      "Keynote Speaker",
      "América Latina",
      "Latin America",
      "SS&C Blue Prism",
      "Sereniti Foundation",
    ],
    alternates: {
      canonical: pathFor(locale as Locale),
      languages: { ...languages, "x-default": pathFor(defaultLocale) },
    },
    openGraph: {
      type: "profile",
      siteName: PERSON.name,
      title: t("title"),
      description: t("description"),
      url: pathFor(locale as Locale),
      locale: localeTags[locale as Locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeTags[l]),
      images: [
        {
          url: OG_IMAGE.src,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [OG_IMAGE.src],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE.src}`,
    jobTitle: PERSON.jobTitle,
    description: t("description"),
    worksFor: {
      "@type": "Organization",
      name: PERSON.organization,
      url: PERSON.organizationUrl,
    },
    knowsAbout: [
      "Digital Transformation",
      "Artificial Intelligence",
      "Intelligent Automation",
      "Agentic AI",
      "Enterprise Leadership",
      "Business Strategy",
      "Executive Coaching",
      "Leadership Development",
      "Public Speaking",
      "Latin American Markets",
      "Social Impact",
    ],
    knowsLanguage: ["es", "pt", "en"],
    memberOf: {
      "@type": "NonprofitOrganization",
      name: "Sereniti Foundation",
      url: EXTERNAL.sereniti,
    },
    sameAs: SOCIAL_LINKS.filter((s) => s.href).map((s) => s.href),
  };

  return (
    <html lang={localeTags[locale as Locale]} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#08110f" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-bg"
          >
            {t("skipToContent")}
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <RevealObserver />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
