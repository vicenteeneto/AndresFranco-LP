import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import { ArrowRight, ArrowDown } from "../ui/icons";
import { SECTIONS } from "@/content/sections";

const DESCRIPTORS = ["digital", "leadership", "technology", "impact"] as const;

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id={SECTIONS.hero}
      className="relative flex min-h-[94svh] flex-col pt-[104px] md:pt-[128px] lg:min-h-screen"
    >
      <div className="shell flex flex-1 items-center">
        <div className="grid w-full grid-cols-12 items-start gap-y-11 lg:gap-x-10 xl:gap-x-14">
          {/* A — masthead */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <p
              className="eyebrow text-[0.625rem] md:text-[0.6875rem]"
              data-reveal
            >
              {t("role")}
            </p>

            <h1 className="mt-7 md:mt-9">
              <span className="block text-[0.75rem] font-medium tracking-[0.3em] text-ink uppercase md:text-[0.8125rem] md:tracking-[0.34em]">
                {t("name")}
              </span>
              <span
                className="display t-hero mt-5 block md:mt-6"
                data-reveal
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {t("statement")}
              </span>
            </h1>
          </div>

          {/* B — portrait */}
          <div className="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-end lg:pb-2">
            <Photo
              id="portraitPrimary"
              className="aspect-[4/5] w-full lg:aspect-[4/5.15]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 76vw, 38vw"
              priority
              position="52% 20%"
            />
          </div>

          {/* C — support copy and calls to action */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:pt-2">
            <p
              className="lead max-w-[46ch]"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              {t("support")}
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <a href={`#${SECTIONS.journey}`} className="btn-solid">
                {t("ctaPrimary")}
                <ArrowRight />
              </a>
              <a
                href={`#${SECTIONS.contact}`}
                data-inquiry="speaking"
                className="btn-outline"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptor rail */}
      <div className="shell pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="hairline flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 md:gap-x-12">
          {DESCRIPTORS.map((d, i) => (
            <span
              key={d}
              className="eyebrow text-[0.5875rem] md:text-[0.625rem]"
              data-reveal
              style={
                { "--reveal-delay": `${300 + i * 70}ms` } as React.CSSProperties
              }
            >
              {t(`descriptors.${d}`)}
            </span>
          ))}
          <span className="ml-auto hidden items-center gap-3 text-ink-mute md:flex">
            <span className="eyebrow text-[0.5625rem]">{t("scroll")}</span>
            <ArrowDown className="h-4 w-2 opacity-50" />
          </span>
        </div>
      </div>
    </section>
  );
}
