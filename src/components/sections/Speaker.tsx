import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { SPEAKING_TOPICS } from "@/content/speaking";

/**
 * Speaker.
 *
 * One photograph, as wide as the page allows, fading into the ground at its
 * foot — a room that size says more about reach than any number would. The
 * topics sit in a raised panel over the end of it, which is what stops the
 * section from being a picture with a caption.
 */
export default function Speaker() {
  const t = useTranslations("speaker");

  return (
    <section
      id={SECTIONS.speaker}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="speaker-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen index="04" label={t("eyebrow")} />
            <h2
              id="speaker-heading"
              className="display t-h2 mt-8 max-w-[16ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p
              className="body-copy"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
          </div>
        </div>
      </div>

      {/* The room, edge to edge */}
      <div className="relative mt-12 md:mt-16">
        <Photo
          id="eventAudience"
          className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
          sizes="100vw"
          editorial
        />
        <div aria-hidden="true" className="fade-b" />
      </div>

      {/* Topics, raised over the foot of the photograph */}
      <div className="relative shell -mt-10 md:-mt-20 lg:-mt-28">
        <div className="card grid grid-cols-12 gap-y-9 p-7 md:p-10 lg:gap-x-14 lg:p-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="label-blue">{t("cardLabel")}</p>
            <p className="body-copy mt-6 max-w-[34ch]">{t("body")}</p>
            <a
              href={`#${SECTIONS.contact}`}
              data-inquiry="speaking"
              className="btn-blue mt-8"
            >
              {t("cta")}
              <ArrowRight />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="meta mb-5">{t("topicsLabel")}</p>
            <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {SPEAKING_TOPICS.map((key, i) => (
                <li
                  key={key}
                  className={[
                    "flex items-baseline gap-5 border-t border-line py-3.5",
                    i === SPEAKING_TOPICS.length - 1 ? "border-b" : "",
                    i === SPEAKING_TOPICS.length - 2 ? "sm:border-b" : "",
                  ].join(" ")}
                >
                  <span className="label-blue shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.0625rem] leading-[1.35] md:text-[1.125rem]">
                    {t(`topics.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
