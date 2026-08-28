import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Intro from "@/components/sections/Intro";
import Transformation from "@/components/sections/Transformation";
import Leadership from "@/components/sections/Leadership";
import Speaker from "@/components/sections/Speaker";
import Impact from "@/components/sections/Impact";
import Pulso from "@/components/sections/Pulso";
import Events from "@/components/sections/Events";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";

/**
 * The whole site, in one page.
 *
 * The order is an executive presentation: impact, authority, experience,
 * expertise, leadership, stage, purpose, voice, career, conversation.
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
      <Transformation />
      <Leadership />
      <Speaker />
      <Impact />
      <Pulso />
      <Events />
      <Journey />
      <Contact />
    </>
  );
}
