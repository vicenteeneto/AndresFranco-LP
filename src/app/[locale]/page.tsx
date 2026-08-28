import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Intro from "@/components/sections/Intro";
import Transformation from "@/components/sections/Transformation";
import Leadership from "@/components/sections/Leadership";
import Journey from "@/components/sections/Journey";
import Speaker from "@/components/sections/Speaker";
import Events from "@/components/sections/Events";
import Impact from "@/components/sections/Impact";
import Pulso from "@/components/sections/Pulso";
import Statement from "@/components/sections/Statement";
import Contact from "@/components/sections/Contact";

/**
 * The whole site, in one page.
 *
 * The order is an executive briefing: the name, the figures behind it, who he
 * is, what he does, how he works with people, where he came from, what he
 * says on a stage, where he has said it, what he builds outside work, where
 * to hear him — then one sentence of pause, then the conversation.
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
      <Journey />
      <Speaker />
      <Events />
      <Impact />
      <Pulso />
      <Statement />
      <Contact />
    </>
  );
}
