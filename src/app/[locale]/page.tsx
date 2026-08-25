import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Transformation from "@/components/sections/Transformation";
import Leadership from "@/components/sections/Leadership";
import Speaker from "@/components/sections/Speaker";
import Impact from "@/components/sections/Impact";
import Recognition from "@/components/sections/Recognition";
import Pulso from "@/components/sections/Pulso";
import MediaGrid from "@/components/sections/MediaGrid";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";

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
      <Intro />
      <Transformation />
      <Leadership />
      <Speaker />
      <Impact />
      <Recognition />
      <Pulso />
      <MediaGrid />
      <Journey />
      <Contact />
    </>
  );
}
