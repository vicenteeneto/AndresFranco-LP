import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { LEADERSHIP_PILLARS } from "@/content/speaking";

export default function Leadership() {
  const t = useTranslations("leadership");

  return (
    <section
      id={SECTIONS.leadership}
      className="section-y scroll-mt-20 bg-white"
      aria-labelledby="leadership-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14">
          <div className="col-span-12 sm:col-span-8 lg:col-span-5">
            <Photo
              id="portraitEditorial"
              className="aspect-[4/5] w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 62vw, 36vw"
              position="52% 26%"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="leadership-heading"
              className="display t-h2 mt-6"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-8"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-6 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>
            <a
              href={`#${SECTIONS.contact}`}
              data-inquiry="coaching"
              className="link-rule mt-9"
              data-reveal
            >
              {t("cta")}
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 md:mt-28">
          <p className="eyebrow mb-8" data-reveal>
            {t("pillarsLabel")}
          </p>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
            {LEADERSHIP_PILLARS.map((key, i) => (
              <li
                key={key}
                className="border-t border-rule py-7 md:py-8"
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties
                }
              >
                <h3 className="display t-h4">{t(`pillars.${key}.title`)}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.65] text-ink-mute">
                  {t(`pillars.${key}.body`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
