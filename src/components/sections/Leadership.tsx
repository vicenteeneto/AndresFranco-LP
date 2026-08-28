import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import Curated from "../ui/Curated";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { LEADERSHIP_PILLARS } from "@/content/speaking";

/**
 * Leadership and coaching.
 *
 * The black and white portrait runs off the left edge in a narrow editorial
 * column — narrow on purpose: it is the only portrait on the page after the
 * hero, and giving it half the width would turn an executive section into a
 * personal one.
 *
 * The six areas are a numbered rail. On a landing page the list exists to
 * show range; the conversation itself belongs in the contact form.
 */
export default function Leadership() {
  const t = useTranslations("leadership");
  const tc = useTranslations("common");

  return (
    <section
      id={SECTIONS.leadership}
      className="section-y scroll-mt-20 border-t border-line bg-bg-2"
      aria-labelledby="leadership-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14">
          <div className="col-span-12 sm:col-span-7 lg:col-span-4 lg:bleed-l">
            <Photo
              id="portraitBw"
              className="aspect-[4/5] w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 36vw"
            />
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <SectionOpen index="02" label={t("eyebrow")} />
            <h2
              id="leadership-heading"
              className="display t-h2 mt-8"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-7"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-6 hidden text-fg-3 lg:block"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>

            <div className="mt-10">
              <p className="meta mb-5" data-reveal>
                {t("pillarsLabel")}
              </p>
              <Curated
                keep={3}
                moreLabel={tc("moreAreas")}
                lessLabel={tc("lessAreas")}
              >
                <ul>
                  {LEADERSHIP_PILLARS.map((key, i) => (
                    <li
                      key={key}
                      className="flex items-baseline gap-5 border-t border-line py-3.5 last:border-b sm:gap-7"
                      data-reveal
                      style={
                        {
                          "--reveal-delay": `${i * 45}ms`,
                        } as React.CSSProperties
                      }
                    >
                      <span className="label-gold shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[1.0625rem] leading-[1.35] md:text-[1.15rem]">
                        {t(`pillars.${key}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Curated>
            </div>

            <a
              href={`#${SECTIONS.contact}`}
              data-inquiry="coaching"
              className="btn-gold mt-10"
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
