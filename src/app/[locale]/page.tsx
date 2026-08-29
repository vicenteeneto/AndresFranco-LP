import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Intro from "@/components/sections/Intro";
import Practice from "@/components/sections/Practice";
import Journey from "@/components/sections/Journey";
import Impact from "@/components/sections/Impact";
import Media from "@/components/sections/Media";
import Statement from "@/components/sections/Statement";
import Contact from "@/components/sections/Contact";

/**
 * The whole site, in one page — and a short one.
 *
 * Seven blocks after the hero: the figures, who he is, the three disciplines
 * as rows that open, the career as rows that open, the impact, where to hear
 * him, one sentence of pause, and the conversation.
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
      <Intro />
      <Practice />
      <Journey />
      <Impact />
      <Media />
      <Statement />
      <Contact />
    </>
  );
}
