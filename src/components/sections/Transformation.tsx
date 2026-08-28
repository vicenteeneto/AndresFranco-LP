import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";
import { TRANSFORMATION_CAPABILITIES } from "@/content/speaking";

/**
 * Digital transformation — the executive core of the page.
 *
 * Title, hairline, the organisation as a subtitle, the argument, then the
 * capability chips: the most technical block on the site, and the one that
 * has to read as a specification rather than as marketing.
 *
 * The photograph comes last and at controlled width. It is evidence, not the
 * subject: letting it run full-bleed here would make the section about the
 * event rather than about the work.
 */
export default function Transformation() {
  const t = useTranslations("transformation");

  return (
    <section
      id={SECTIONS.transformation}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="transformation-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen index="01" label={t("eyebrow")} />
            <h2
              id="transformation-heading"
              className="display t-h2 mt-8"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="mt-6 border-t border-line pt-5 text-[0.8125rem] font-semibold tracking-[0.14em] text-fg-2 uppercase"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              {t("subtitle")}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p
              className="lead"
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-6 text-fg-3"
              data-reveal
              style={{ "--reveal-delay": "190ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>

            {/* Capability chips */}
            <div className="mt-9" data-reveal>
              <p className="meta mb-4">{t("capabilitiesLabel")}</p>
              <ul className="flex flex-wrap gap-2.5">
                {TRANSFORMATION_CAPABILITIES.map((key) => (
                  <li key={key} className="tag">
                    {t(`capabilities.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Evidence, at controlled width */}
        <figure className="mt-14 grid grid-cols-12 gap-y-4 md:mt-20 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-8">
            <Photo
              id="eventBootcamp"
              className="aspect-[16/9] w-full"
              sizes="(max-width: 1024px) 100vw, 62vw"
              editorial
            />
          </div>
          <figcaption
            className="col-span-12 self-end lg:col-span-3 lg:col-start-10"
            data-reveal
          >
            <p className="meta">{t("captionLabel")}</p>
            <p className="mt-3 text-[0.875rem] leading-[1.6] text-fg-3">
              {t("caption")}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
