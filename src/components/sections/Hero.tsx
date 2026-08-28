import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { PHOTOS } from "@/content/images";
import { SOCIAL_LINKS } from "@/content/site";

const DESCRIPTORS = ["digital", "leadership", "technology", "impact"] as const;

/**
 * The name is the mark.
 *
 * ANDRÉS FRANCO is set at the largest size on the page, in two lines, with the
 * surname in blue — everything else in the hero is small, technical and
 * ranged left underneath it. The photograph holds the right of the viewport
 * and dissolves into the ground rather than sitting in a frame.
 *
 * On a phone that composition cannot hold, so the frame recomposes: the
 * photograph becomes a band at the top fading downwards, and the name starts
 * where the photograph ends.
 */
export default function Hero() {
  const t = useTranslations("hero");
  const tImg = useTranslations("images");
  const photo = PHOTOS.heroPortrait;
  const linkedin = SOCIAL_LINKS.find((s) => s.id === "linkedin");

  return (
    <section
      id={SECTIONS.hero}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[74px] lg:pt-[82px]"
    >
      {/* Photograph */}
      <div
        className="absolute inset-x-0 top-0 h-[46svh] sm:h-[52svh] lg:inset-y-0 lg:right-0 lg:left-[46%] lg:h-auto"
        data-reveal="image"
      >
        <Image
          src={photo.src}
          alt={tImg("heroPortrait")}
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="hero-mask-mobile object-cover object-[64%_22%] brightness-[0.86] contrast-[1.04] saturate-[0.9] lg:hero-mask lg:object-[54%_36%]"
        />
      </div>

      {/*
        The header is transparent over the hero, and its small grey menu items
        sit right where the photograph is brightest. This darkens the top band
        just enough to keep them legible without putting a visible bar there.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg via-bg/70 to-transparent"
      />

      {/*
        Technical marks. A hairline where the photograph begins on desktop and
        a blue tick on it — the smallest possible nod to a schematic, and the
        thing that keeps the composition from reading as two halves.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[46%] hidden w-px bg-line lg:block"
      >
        <span className="absolute top-1/2 -left-[3px] h-16 w-[7px] -translate-y-1/2 bg-blue" />
      </div>

      {/*
        The masthead grows to fill whatever is left between the header and the
        descriptor rail. Keeping the rail in flow rather than pinning it to the
        bottom is what guarantees the two can never collide on a short laptop
        screen — which is exactly what happened when it was absolute.
      */}
      <div className="relative flex flex-1 items-end pt-[42svh] pb-8 sm:pt-[47svh] lg:items-center lg:pt-0 lg:pb-0">
        <div className="shell w-full">
          <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <p
              className="label-blue"
              data-reveal
              style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
            >
              {t("kicker")}
            </p>

            <h1
              className="t-name mt-6 md:mt-7"
              data-reveal
              style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            >
              <span className="block">Andrés</span>
              <span className="block text-blue-2">Franco</span>
            </h1>

            <div
              className="mt-7 flex flex-col gap-1 border-l border-blue pl-5 md:mt-9"
              data-reveal
              style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
            >
              <p className="text-[0.8125rem] font-semibold tracking-[0.1em] text-fg uppercase">
                {t("roleTitle")}
              </p>
              <p className="meta">{t("roleOrg")}</p>
            </div>

            <p
              className="display t-h3 mt-8 max-w-[20ch] md:mt-10"
              data-reveal
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              {t("statement")}
            </p>

            <p
              className="body-copy mt-6 max-w-[52ch]"
              data-reveal
              style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
            >
              {t("support")}
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              data-reveal
              style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
            >
              <a href={`#${SECTIONS.journey}`} className="btn-blue">
                {t("ctaPrimary")}
                <ArrowRight />
              </a>
              <a href={`#${SECTIONS.contact}`} className="btn-ghost">
                {t("ctaSecondary")}
              </a>
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule sm:ml-2"
                >
                  LinkedIn
                  <ArrowUpRight />
                </a>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptor rail, on the hairline that closes the hero */}
      <div className="relative shell w-full pb-7 md:pb-9">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2.5 border-t border-line pt-5 md:gap-x-12">
          {DESCRIPTORS.map((d, i) => (
            <span
              key={d}
              className="meta"
              data-reveal
              style={
                { "--reveal-delay": `${360 + i * 60}ms` } as React.CSSProperties
              }
            >
              {t(`descriptors.${d}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
