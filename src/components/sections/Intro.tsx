import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";

/**
 * Who Andrés is — a condensed institutional introduction, not a biography.
 *
 * Two paragraphs and the formal portrait. The figures that used to close this
 * section now open the page as their own band, directly under the hero.
 */
export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section
      id={SECTIONS.profile}
      className="section-y scroll-mt-24 bg-white"
      aria-labelledby="intro-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="intro-heading"
              className="display t-h2 mt-9 max-w-[14ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-10 max-w-[46ch]"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("body1")}
            </p>
            <p
              className="body-copy mt-7 max-w-[48ch] text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {t("body2")}
            </p>
          </div>

          {/*
            The formal portrait, tall and running off the right edge. A
            vertical crop against a column of text is what keeps this from
            reading as a headshot beside a paragraph.
          */}
          <div className="col-span-12 sm:col-span-8 lg:col-span-5 lg:col-start-8 lg:bleed-r">
            <Photo
              id="portraitFormal"
              className="aspect-[4/5] w-full lg:aspect-[3/4]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 42vw"
              position="50% 22%"
              revealDelay={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
