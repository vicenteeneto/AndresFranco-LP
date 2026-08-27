import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { LEADERSHIP_PILLARS } from "@/content/speaking";

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
          {/*
            The portrait carries this section, so it takes the weight: a tall
            editorial crop running off the left edge rather than a card.
          */}
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
            <a
              href={`#${SECTIONS.contact}`}
              data-inquiry="coaching"
              className="link-rule mt-10"
              data-reveal
            >
              {t("cta")}
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* Themes */}
        <div className="mt-24 md:mt-32">
          <p className="meta mb-10" data-reveal>
            {t("pillarsLabel")}
          </p>
          <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {LEADERSHIP_PILLARS.map((key, i) => (
              <li
                key={key}
                className="border-t border-rule py-8 md:py-10"
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties
                }
              >
                <span className="eyebrow text-[0.5625rem] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display t-h4 mt-5">{t(`pillars.${key}.title`)}</h3>
                <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-[1.7] text-ink-mute">
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
