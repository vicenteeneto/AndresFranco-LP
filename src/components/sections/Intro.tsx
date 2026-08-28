import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";

/**
 * Who Andrés is — a condensed institutional introduction, not a biography.
 *
 * No photograph here on purpose. It is the first section after a hero that is
 * half portrait and a band of four large figures; another image would be the
 * third visual event in a row, and the point of this block is that the
 * argument carries itself.
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
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="intro-heading"
              className="display t-h2 mt-8 max-w-[14ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p
              className="lead"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("body1")}
            </p>
            <p
              className="body-copy mt-6 text-fg-3"
              data-reveal
              style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
            >
              {t("body2")}
            </p>
          </div>
        </div>

        {/* The line the whole page turns on, given its own space */}
        <blockquote
          className="mt-16 border-l-2 border-blue pl-6 md:mt-24 md:pl-9"
          data-reveal
        >
          <p className="display t-statement max-w-[24ch]">
            {t("statement")}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
