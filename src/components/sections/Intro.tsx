import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";

const STATS = ["experience", "coaching", "region", "recognition"] as const;

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section
      id={SECTIONS.profile}
      className="section-y scroll-mt-24 bg-white"
      aria-labelledby="intro-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="intro-heading"
              className="display t-h2 mt-9 max-w-[12ch]"
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
              {t("body1")}
            </p>
            <p
              className="body-copy mt-7 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {t("body2")}
            </p>
          </div>
        </div>

        {/* Figures — the numbers carry the section, so they get real size */}
        <dl className="mt-20 grid grid-cols-2 md:mt-28 lg:grid-cols-4">
          {STATS.map((key, i) => (
            <div
              key={key}
              className={[
                "border-t border-rule py-9 pr-6 md:py-12",
                i % 2 === 1 ? "pl-6 md:pl-8 lg:pl-10" : "",
                i === 0 ? "" : "lg:pl-10",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <dt className="sr-only">{t(`stats.${key}.label`)}</dt>
              <dd>
                <span className="display block text-[clamp(2.6rem,4.6vw,3.9rem)] leading-[1] tracking-[-0.028em]">
                  {t(`stats.${key}.value`)}
                </span>
                <span className="mt-5 block max-w-[20ch] text-[0.8125rem] leading-[1.55] text-ink-mute">
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
