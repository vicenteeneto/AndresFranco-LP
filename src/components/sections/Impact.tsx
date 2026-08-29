import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { EXTERNAL } from "@/content/site";

const PILLARS = ["education", "partnerships", "wellness", "projects"] as const;

/**
 * Social impact — and, at its close, the congressional recognition.
 *
 * The recognition lives here rather than in a section of its own: it was given
 * for this work, and a page that stops to applaud itself for a full screen
 * reads as promotion. A year, a title and a line, on the rule that closes the
 * story that earned it.
 *
 * The four focus areas are a row of words, not four numbered cells. Nothing on
 * the page is numbered any more — the counting was structure showing through.
 */
export default function Impact() {
  const t = useTranslations("impact");
  const tr = useTranslations("recognition");

  return (
    <section
      id={SECTIONS.impact}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="impact-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="impact-heading"
              className="display t-h2 mt-8 max-w-[12ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="mt-7 text-[0.8125rem] font-semibold tracking-[0.14em] text-fg-2 uppercase"
              data-reveal
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            >
              {t("foundationName")}
            </p>
            <p
              className="lead mt-5"
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5" data-reveal>
              {PILLARS.map((key) => (
                <li key={key} className="tag">
                  {t(`pillars.${key}`)}
                </li>
              ))}
            </ul>

            <a
              href={EXTERNAL.sereniti}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule mt-7"
              data-reveal
            >
              {t("cta")}
              <ArrowUpRight />
            </a>
          </div>

          {/*
            Seven columns rather than six: the photograph is a wide group shot,
            and at column width a taller frame would have to cut people off
            both ends to gain the height.
          */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:bleed-r">
            <Photo
              id="eventCommunity"
              className="aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[16/9]"
              sizes="(max-width: 1024px) 100vw, 64vw"
              editorial
            />
          </div>
        </div>

        {/* Recognition — stated, not celebrated */}
        <div
          className="mt-14 grid grid-cols-12 items-baseline gap-y-4 border-t border-line pt-8 md:mt-20 lg:gap-x-14"
          data-reveal
        >
          <div className="col-span-12 lg:col-span-3">
            <p className="label-gold">{tr("eyebrow")}</p>
            <p className="figure-xl mt-4">{tr("year")}</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <h3 className="display max-w-[26ch] text-[1.2rem] leading-[1.26] md:text-[1.5rem]">
              {tr("title")}
            </h3>
            <p className="meta mt-4">{tr("organization")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
