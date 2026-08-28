import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";
import { TRANSFORMATION_CAPABILITIES } from "@/content/speaking";

/**
 * Digital transformation — the executive core of the page.
 *
 * One photograph, not two: the bootcamp image runs wide off the left edge,
 * with the areas of work in the margin beside it. The roadshow photograph now
 * carries the selected-content section instead of repeating the same note
 * eighty pixels later.
 */
export default function Transformation() {
  const t = useTranslations("transformation");

  return (
    <section
      id={SECTIONS.transformation}
      className="section-y scroll-mt-24"
      aria-labelledby="transformation-heading"
    >
      <div className="shell">
        {/* Opening */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="transformation-heading"
              className="display t-h2 mt-9"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p
              className="lead"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-7 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>
          </div>
        </div>

        {/*
          The photograph runs off the left edge of the page and the areas of
          work sit in the margin beside it — the asymmetry is what keeps this
          from reading as a caption under a picture.
        */}
        <div className="mt-16 grid grid-cols-12 items-end gap-y-12 md:mt-24 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-7 lg:bleed-l">
            <Photo
              id="eventBootcamp"
              className="aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/7.5]"
              sizes="(max-width: 1024px) 100vw, 62vw"
              editorial
            />
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="meta mb-7" data-reveal>
              {t("capabilitiesLabel")}
            </p>
            <ul>
              {TRANSFORMATION_CAPABILITIES.map((key, i) => (
                <li
                  key={key}
                  className="flex items-baseline gap-5 border-b border-rule py-3.5 first:border-t first:border-rule sm:gap-7"
                  data-reveal
                  style={
                    { "--reveal-delay": `${i * 55}ms` } as React.CSSProperties
                  }
                >
                  <span className="eyebrow shrink-0 text-[0.5625rem] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.0625rem] leading-[1.35] md:text-[1.125rem]">
                    {t(`capabilities.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-20 grid grid-cols-12 md:mt-28">
          <blockquote className="col-span-12 lg:col-span-7 lg:col-start-4">
            <p className="display t-h3 max-w-[26ch]" data-reveal>
              {t("statement")}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
