import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { SPEAKING_TOPICS } from "@/content/speaking";

export default function Speaker() {
  const t = useTranslations("speaker");

  return (
    <section
      id={SECTIONS.speaker}
      className="section-y scroll-mt-24 bg-paper-warm"
      aria-labelledby="speaker-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="speaker-heading"
              className="display t-h2 mt-9 max-w-[15ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p
              className="body-copy"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
          </div>
        </div>
      </div>

      {/*
        One photograph, as wide as the page allows. A room this size says more
        about reach than three thumbnails ever could — so it gets the whole
        width and a cinematic crop, and keeps its scale on mobile by getting
        taller instead of smaller.
      */}
      <div className="mt-16 md:mt-24">
        <Photo
          id="eventAudience"
          className="aspect-[5/4] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
          sizes="100vw"
          editorial
        />
      </div>

      <div className="shell">
        <p className="body-copy mt-14 max-w-[58ch] md:mt-20" data-reveal>
          {t("body")}
        </p>

        {/* Topics */}
        <div className="mt-16 md:mt-24">
          <p className="meta mb-9" data-reveal>
            {t("topicsLabel")}
          </p>
          <ul className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {SPEAKING_TOPICS.map((key, i) => (
              <li
                key={key}
                className={`flex items-baseline justify-between gap-6 border-t border-rule py-5 md:py-6 ${
                  i >= SPEAKING_TOPICS.length - 2 ? "border-b" : ""
                }`}
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 4) * 60}ms` } as React.CSSProperties
                }
              >
                <span className="display text-[clamp(1.3rem,2.3vw,1.9rem)] leading-[1.25]">
                  {t(`topics.${key}`)}
                </span>
                <span className="eyebrow shrink-0 text-[0.5625rem] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={`#${SECTIONS.contact}`}
            data-inquiry="speaking"
            className="btn-solid mt-14"
            data-reveal
          >
            {t("cta")}
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
