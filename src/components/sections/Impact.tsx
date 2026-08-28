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
 * screen reads as promotion. Two lines and a year, in the margin of the story
 * that earned it.
 */
export default function Impact() {
  const t = useTranslations("impact");
  const tr = useTranslations("recognition");

  return (
    <section
      id={SECTIONS.impact}
      className="section-y scroll-mt-24"
      aria-labelledby="impact-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-16">
          {/* Warmer, quieter, more human than the technology sections */}
          <div className="col-span-12 lg:col-span-5 lg:pr-4">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="impact-heading"
              className="display mt-9 text-[clamp(2.3rem,4.6vw,3.8rem)] leading-[1.05] tracking-[-0.02em]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-9"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-7 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>
            <a
              href={EXTERNAL.sereniti}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule mt-9"
              data-reveal
            >
              {t("cta")}
              <ArrowUpRight />
            </a>
          </div>

          {/*
            Seven columns rather than six: the photograph is a wide group
            shot, and at column width a taller frame would have to cut people
            off both ends to gain the height. Widening the block buys the
            height instead.
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

        {/* Focus areas — a quiet typographic rail, no cards */}
        <ul className="mt-20 grid grid-cols-2 md:mt-28 lg:grid-cols-4">
          {PILLARS.map((key, i) => (
            <li
              key={key}
              className={[
                "border-t border-rule py-8 pr-5 md:py-10",
                i % 2 === 1 ? "pl-5 md:pl-7 lg:pl-10" : "",
                i === 0 ? "" : "lg:pl-10",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="eyebrow text-[0.5625rem] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display mt-4 block text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.3]">
                {t(`pillars.${key}`)}
              </span>
            </li>
          ))}
        </ul>

        {/* Recognition — stated, not celebrated */}
        <div className="mt-20 grid grid-cols-12 gap-y-6 md:mt-28 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-3">
            <div className="rule-top pt-6" data-reveal>
              <p className="eyebrow">{tr("eyebrow")}</p>
              <p className="display mt-6 text-[clamp(2rem,3.4vw,2.9rem)] leading-none tracking-[-0.03em] text-blue">
                {tr("year")}
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="rule-top pt-6" data-reveal>
              <h3 className="display max-w-[24ch] text-[clamp(1.3rem,2.3vw,1.85rem)] leading-[1.22]">
                {tr("title")}
              </h3>
              <p className="meta mt-4 text-blue">{tr("organization")}</p>
              <p className="body-copy mt-6 max-w-[58ch] text-ink-mute">
                {tr("body")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
