import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { SPEAKING_TOPICS } from "@/content/speaking";

export default function Speaker() {
  const t = useTranslations("speaker");

  return (
    <section
      id={SECTIONS.speaker}
      className="section-y scroll-mt-20 bg-paper-deep"
      aria-labelledby="speaker-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="speaker-heading"
              className="display t-h2 mt-6 max-w-[16ch]"
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

        {/* Editorial photography pair */}
        <div className="mt-14 grid grid-cols-12 gap-y-6 md:mt-20 md:gap-x-6 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <Photo
              id="eventBootcampRoom"
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 56vw"
              editorial
            />
          </div>
          <div className="col-span-12 sm:col-span-8 sm:col-start-5 lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-14">
            <Photo
              id="eventRoadshow"
              className="aspect-[4/3] w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 62vw, 32vw"
              editorial
              revealDelay={140}
            />
            <p className="body-copy mt-6 text-ink-mute" data-reveal>
              {t("body")}
            </p>
          </div>
        </div>

        {/* Topics */}
        <div className="mt-16 md:mt-24">
          <p className="eyebrow mb-7" data-reveal>
            {t("topicsLabel")}
          </p>
          <ul className="border-t border-rule">
            {SPEAKING_TOPICS.map((key, i) => (
              <li
                key={key}
                className="group flex items-baseline justify-between gap-6 border-b border-rule-soft py-4 md:py-5"
                data-reveal
                style={
                  { "--reveal-delay": `${i * 50}ms` } as React.CSSProperties
                }
              >
                <span className="display text-[clamp(1.35rem,2.6vw,2.1rem)] leading-[1.15]">
                  {t(`topics.${key}`)}
                </span>
                <span className="eyebrow shrink-0 text-[0.5625rem] tabular-nums opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={`#${SECTIONS.contact}`}
            data-inquiry="speaking"
            className="btn-solid mt-11"
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
