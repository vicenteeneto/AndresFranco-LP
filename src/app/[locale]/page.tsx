import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Band from "@/components/sections/Band";
import Explore from "@/components/sections/Explore";
import Statement from "@/components/sections/Statement";
import Contact from "@/components/sections/Contact";

/**
 * The whole site, in one short page.
 *
 * Four things before the conversation: the name, the figures behind it, one
 * photograph at full width, and the list that holds everything else. The seven
 * sections that used to run down the page are the seven rows of that list.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Authority />
      <Band />
      <Explore />
      <Statement />
      <Contact />
    </>
  );
}
