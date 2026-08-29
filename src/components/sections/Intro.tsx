import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";

/**
 * Who Andrés is — a condensed institutional introduction, not a biography.
 *
 * The formal portrait sits beside it. With the three disciplines now folded
 * into rows further down, this is the one place in the upper half of the page
 * where a photograph can hold its own space.
 */
export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section
      id={SECTIONS.profile}
      className="section-y scroll-mt-20"
      aria-labelledby="intro-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="intro-heading"
              className="display t-h2 mt-8 max-w-[14ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-8 max-w-[46ch]"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("body1")}
            </p>
            <p
              className="body-copy mt-5 hidden max-w-[48ch] text-fg-3 lg:block"
              data-reveal
              style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
            >
              {t("body2")}
            </p>
          </div>

          <div className="col-span-12 sm:col-span-8 lg:col-span-5 lg:col-start-8 lg:bleed-r">
            <Photo
              id="portraitFormal"
              className="aspect-[4/5] w-full lg:aspect-[3/4]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 42vw"
              revealDelay={80}
            />
          </div>
        </div>

        {/* The line the whole page turns on, given its own space */}
        <blockquote
          className="mt-14 border-l-2 border-gold pl-6 md:mt-20 md:pl-9"
          data-reveal
        >
          <p className="display t-statement max-w-[24ch]">{t("statement")}</p>
        </blockquote>
      </div>
    </section>
  );
}
