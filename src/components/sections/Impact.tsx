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
 * The recognition lives here rather than in a section of its own: it was
 * given for this work, and a page that stops to applaud itself for a full
 * screen reads as promotion. A year, a title and two lines, in a panel at the
 * foot of the story that earned it.
 *
 * Warmth here comes from the photograph alone — the section keeps the same
 * dark ground and the same rules as everything above it.
 */
export default function Impact() {
  const t = useTranslations("impact");
  const tr = useTranslations("recognition");

  return (
    <section
      id={SECTIONS.impact}
      className="section-y scroll-mt-20 border-t border-line bg-bg-2"
      aria-labelledby="impact-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen index="05" label={t("eyebrow")} />
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
            <p
              className="body-copy mt-5 text-fg-3"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>
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

        {/* Focus areas */}
        <ul className="mt-16 grid grid-cols-2 md:mt-20 lg:grid-cols-4">
          {PILLARS.map((key, i) => (
            <li
              key={key}
              className={[
                "border-t border-line py-7 pr-5 md:py-9",
                i % 2 === 1 ? "border-l pl-5 md:pl-8 lg:pl-9" : "",
                i === 2 ? "lg:border-l lg:pl-9" : "",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className="label-blue tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display mt-4 block text-[1rem] leading-[1.3] md:text-[1.15rem]">
                {t(`pillars.${key}`)}
              </span>
            </li>
          ))}
        </ul>

        {/* Recognition — stated, not celebrated */}
        <div
          className="card mt-14 grid grid-cols-12 gap-y-6 p-7 md:mt-20 md:p-10 lg:gap-x-14"
          data-reveal
        >
          <div className="col-span-12 lg:col-span-3">
            <p className="label-blue">{tr("eyebrow")}</p>
            <p className="figure-xl mt-5">{tr("year")}</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <h3 className="display max-w-[26ch] text-[1.2rem] leading-[1.26] md:text-[1.5rem]">
              {tr("title")}
            </h3>
            <p className="meta mt-4">{tr("organization")}</p>
            <p className="body-copy mt-5 max-w-[58ch] text-fg-3">{tr("body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
