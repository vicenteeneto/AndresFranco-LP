import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowDown } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { PHOTOS } from "@/content/images";

const DESCRIPTORS = ["digital", "leadership", "technology", "impact"] as const;

/**
 * The photograph is the hero — not an image dropped beside it.
 *
 * On desktop it holds the right half of the viewport, its left edge dissolving
 * into the page, and the headline lives in the paper beside it — never over
 * Andrés himself.
 *
 * On mobile that composition cannot hold, so the frame recomposes rather than
 * stacking: the photograph becomes a tall band cropped closer to Andrés, fading
 * into the page, with the headline below it.
 */
export default function Hero() {
  const t = useTranslations("hero");
  const tImg = useTranslations("images");
  const photo = PHOTOS.heroPortrait;

  return (
    <section
      id={SECTIONS.hero}
      className="relative isolate flex min-h-[100svh] flex-col"
    >
      {/*
        Photograph.

        On desktop it holds the right half of the viewport rather than the whole
        of it. Covering the full width looks generous but puts Andrés in the
        middle of the screen — exactly where the headline has to go — and
        object-position cannot fix that: when the frame is wider than the
        photograph's own ratio there is no horizontal overflow left to shift.
        Giving the image its own half moves him right by construction.
      */}
      <div
        className="absolute inset-x-0 top-0 h-[56svh] sm:h-[60svh] lg:inset-y-0 lg:right-0 lg:left-[48%] lg:h-auto"
        data-reveal="image"
      >
        <Image
          src={photo.src}
          alt={tImg("heroPortrait")}
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover object-[64%_26%] lg:object-[52%_38%]"
        />
        {/* Mobile: the photograph dissolves into the page */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper lg:hidden"
        />
        {/* Desktop: the page ground reads back across the negative space */}
        <div aria-hidden="true" className="scrim-hero hidden lg:block" />
      </div>

      {/* Masthead */}
      <div className="relative flex flex-1 items-end pt-[50svh] sm:pt-[54svh] lg:items-center lg:pt-[104px]">
        <div className="shell w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-12 py-12 lg:col-span-6 lg:py-0">
              <p className="meta text-blue" data-reveal>
                {t("role")}
              </p>

              <h1 className="mt-8 md:mt-10">
                <span className="block text-[0.75rem] font-semibold tracking-[0.34em] text-ink uppercase md:text-[0.8125rem] md:tracking-[0.38em]">
                  {t("name")}
                </span>
                <span
                  className="display t-hero mt-6 block md:mt-7"
                  data-reveal
                  style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
                >
                  {t("statement")}
                </span>
              </h1>

              <p
                className="lead mt-9 max-w-[44ch]"
                data-reveal
                style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
              >
                {t("support")}
              </p>

              <div
                className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4"
                data-reveal
                style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
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
      </div>

      {/* Descriptor rail */}
      <div className="relative">
        <div className="shell pb-9 md:pb-11">
          <div className="hairline flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 md:gap-x-14">
            {DESCRIPTORS.map((d, i) => (
              <span
                key={d}
                className="meta"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${330 + i * 70}ms`,
                  } as React.CSSProperties
                }
              >
                {t(`descriptors.${d}`)}
              </span>
            ))}
            <span className="ml-auto hidden items-center gap-3 text-blue xl:flex">
              <span className="meta text-blue">{t("scroll")}</span>
              <ArrowDown className="h-4 w-2 opacity-70" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
