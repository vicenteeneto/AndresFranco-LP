import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { TRANSFORMATION_CAPABILITIES } from "@/content/speaking";

export default function Transformation() {
  const t = useTranslations("transformation");

  return (
    <section
      id={SECTIONS.transformation}
      className="section-y scroll-mt-20"
      aria-labelledby="transformation-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="transformation-heading"
              className="display t-h2 mt-6"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p
              className="lead"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed executive presence */}
      <div className="mt-14 md:mt-20">
        <Photo
          id="eventBootcampWide"
          className="aspect-[16/11] w-full sm:aspect-[16/8] lg:aspect-[1600/644]"
          sizes="100vw"
          editorial
        />
      </div>

      <div className="shell">
        {/* Statement */}
        <div className="mt-14 grid grid-cols-12 md:mt-20">
          <blockquote className="col-span-12 lg:col-span-8 lg:col-start-3">
            <p
              className="display t-h3 max-w-[24ch] leading-[1.16]"
              data-reveal
            >
              {t("statement")}
            </p>
          </blockquote>
        </div>

        {/* Body + capabilities */}
        <div className="mt-14 grid grid-cols-12 gap-y-12 md:mt-20 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="body-copy" data-reveal>
              {t("body")}
            </p>
            <a
              href={`#${SECTIONS.journey}`}
              className="link-rule mt-8"
              data-reveal
            >
              {t("cta")}
              <ArrowRight />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6" data-reveal>
              {t("capabilitiesLabel")}
            </p>
            <ul className="border-t border-rule-soft">
              {TRANSFORMATION_CAPABILITIES.map((key, i) => (
                <li
                  key={key}
                  className="flex items-baseline gap-5 border-b border-rule-soft py-4 sm:gap-8"
                  data-reveal
                  style={
                    { "--reveal-delay": `${i * 55}ms` } as React.CSSProperties
                  }
                >
                  <span className="eyebrow shrink-0 text-[0.5625rem] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-h4 display">
                    {t(`capabilities.${key}`)}
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
