import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { LEADERSHIP_PILLARS } from "@/content/speaking";

/**
 * Leadership and coaching.
 *
 * The black and white portrait carries the section. The six areas of work are
 * a typographic rail rather than six explained cards: on a landing page the
 * list is there to show range, and the conversation itself belongs in the
 * contact form.
 */
export default function Leadership() {
  const t = useTranslations("leadership");

  return (
    <section
      id={SECTIONS.leadership}
      className="section-y scroll-mt-24 bg-white"
      aria-labelledby="leadership-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
          <div className="col-span-12 sm:col-span-9 lg:col-span-5 lg:bleed-l">
            <Photo
              id="portraitBw"
              className="aspect-[4/5] w-full lg:aspect-[3/4]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 44vw"
              position="54% 24%"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="leadership-heading"
              className="display t-h2 mt-9"
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

            {/* Areas of work — named, not explained */}
            <div className="mt-12">
              <p className="meta mb-6" data-reveal>
                {t("pillarsLabel")}
              </p>
              <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                {LEADERSHIP_PILLARS.map((key, i) => (
                  <li
                    key={key}
                    className={[
                      "flex items-baseline gap-5 border-t border-rule py-4 sm:gap-6",
                      // Closes the rail: the final row on mobile, the final
                      // row of each column once it splits in two.
                      i === LEADERSHIP_PILLARS.length - 1
                        ? "border-b"
                        : i === LEADERSHIP_PILLARS.length - 2
                          ? "sm:border-b"
                          : "",
                    ].join(" ")}
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${(i % 2) * 70}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="eyebrow shrink-0 text-[0.5625rem] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display text-[1.0625rem] leading-[1.35] md:text-[1.125rem]">
                      {t(`pillars.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`#${SECTIONS.contact}`}
              data-inquiry="coaching"
              className="link-rule mt-11"
              data-reveal
            >
              {t("cta")}
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
