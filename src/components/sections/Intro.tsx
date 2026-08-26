import { useTranslations } from "next-intl";
import { SECTIONS } from "@/content/sections";

const STATS = ["experience", "coaching", "region", "recognition"] as const;

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section
      id={SECTIONS.profile}
      className="section-y scroll-mt-20 bg-white"
      aria-labelledby="intro-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="intro-heading"
              className="display t-h2 mt-6 max-w-[13ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-3">
            <p
              className="lead"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("body1")}
            </p>
            <p
              className="body-copy mt-6 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {t("body2")}
            </p>
          </div>
        </div>

        {/* Figures */}
        <dl className="mt-16 grid grid-cols-2 border-t border-rule md:mt-24 lg:grid-cols-4">
          {STATS.map((key, i) => (
            <div
              key={key}
              className={[
                "border-b border-rule-soft py-8 pr-5 md:py-11 lg:border-b-0",
                i % 2 === 1 ? "border-l border-l-rule-soft pl-5 md:pl-7" : "",
                i === 0
                  ? "lg:border-l-0"
                  : "lg:border-l lg:border-l-rule-soft lg:pl-7",
              ].join(" ")}
              data-reveal
              style={
                { "--reveal-delay": `${i * 90}ms` } as React.CSSProperties
              }
            >
              <dt className="sr-only">{t(`stats.${key}.label`)}</dt>
              <dd>
                <span className="display block text-[clamp(2.4rem,4.2vw,3.5rem)] leading-[1] tracking-[-0.022em]">
                  {t(`stats.${key}.value`)}
                </span>
                <span className="mt-4 block max-w-[19ch] text-[0.8125rem] leading-[1.5] text-ink-mute md:mt-5">
                  {t(`stats.${key}.label`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
