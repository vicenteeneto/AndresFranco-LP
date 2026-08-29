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
 * surname in gold — everything else in the hero is small, technical and
 * ranged left underneath it.
 *
 * Both compositions put the portrait to the right of the name; what changes is
 * how much room it takes and how much text sits beside it.
 *
 * Desktop: the photograph holds 54% of the viewport and the full argument runs
 * down the left — role, headline, supporting paragraph, three ways in.
 *
 * Phone: the photograph is a 44% column running most of the first fold, the
 * name fills the rest, and the copy is cut to what earns the space — role, one
 * headline, one button. The paragraph is not lost: it opens the profile
 * section immediately below. A first fold that has to be read is a first fold
 * that gets scrolled past.
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
        className="absolute top-[calc(74px+7svh)] right-0 bottom-[46%] left-[52%] sm:bottom-[48%] lg:inset-y-0 lg:left-[46%]"
        data-reveal="image"
      >
        <Image
          src={photo.src}
          alt={tImg("heroPortrait")}
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 60vw, 56vw"
          className="hero-mask-mobile object-cover object-[44%_24%] brightness-[0.88] contrast-[1.04] saturate-[0.88] lg:hero-mask lg:object-[54%_36%]"
        />
      </div>

      {/*
        The header is transparent over the hero, and its small menu items sit
        right where the photograph is brightest. This darkens the top band just
        enough to keep them legible without putting a visible bar there.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg via-bg/60 to-transparent"
      />

      {/*
        Technical marks. A hairline where the photograph begins on desktop and
        a gold tick on it — the smallest possible nod to a schematic, and the
        thing that keeps the composition from reading as two halves.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[46%] hidden w-px bg-line lg:block"
      >
        <span className="absolute top-1/2 -left-[3px] h-16 w-[7px] -translate-y-1/2 bg-gold" />
      </div>

      {/*
        The masthead grows to fill whatever is left between the header and the
        descriptor rail. Keeping the rail in flow rather than pinning it to the
        bottom is what guarantees the two can never collide on a short laptop
        screen.
      */}
      <div className="relative flex flex-1 items-start pt-[7svh] lg:items-center lg:pt-0">
        <div className="shell w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7">
              <p
                className="label-gold hidden lg:block"
                data-reveal
                style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
              >
                {t("kicker")}
              </p>

              {/*
                No width cap on the name: on a phone its last letters are meant
                to cross onto the softest part of the portrait's mask.
              */}
              <h1
                className="t-name lg:mt-7"
                data-reveal
                style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
              >
                <span className="block">Andrés</span>
                <span className="block text-gold">Franco</span>
              </h1>

              <div
                className="mt-6 flex max-w-[64%] flex-col gap-1 border-l border-gold pl-4 sm:max-w-[56%] md:pl-5 lg:mt-9 lg:max-w-none"
                data-reveal
                style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
              >
                <p className="flex items-start gap-2.5 text-[0.75rem] leading-[1.35] font-semibold tracking-[0.09em] text-fg uppercase md:text-[0.8125rem] md:tracking-[0.1em]">
                  <span
                    aria-hidden="true"
                    className="mt-[0.42em] h-[6px] w-[6px] shrink-0 rounded-full bg-gold"
                  />
                  {t("roleTitle")}
                </p>
                <p className="meta pl-[1.05rem]">{t("roleOrg")}</p>
              </div>

              {/* Below here the photograph has ended and the copy gets the
                  full width back. */}
              <p
                className="display mt-8 max-w-[22ch] text-[1.5rem] leading-[1.16] tracking-[-0.02em] sm:text-[1.6rem] lg:mt-10 lg:max-w-[20ch] lg:text-[clamp(1.45rem,2.6vw,2.15rem)] lg:leading-[1.14]"
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

              {/*
                One primary action across the full width, then the two
                secondary ones side by side beneath it. On a phone that fills
                the fold with the three ways in rather than leaving a gap above
                the rail; from lg up the three simply sit in a row.
              */}
              <div
                className="mt-8 grid grid-cols-2 gap-3 lg:mt-9 lg:flex lg:flex-wrap lg:items-center lg:gap-4"
                data-reveal
                style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
              >
                <a
                  href={`#${SECTIONS.journey}`}
                  className="btn-gold col-span-2 lg:col-span-1"
                >
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
                    className="btn-ghost lg:hidden"
                  >
                    LinkedIn
                    <ArrowUpRight />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule hidden lg:ml-2 lg:inline-flex"
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
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 md:gap-x-12">
          {DESCRIPTORS.map((d, i) => (
            <span
              key={d}
              className={[
                "meta",
                // Two on a phone, four from sm up: more than two wrap the rail
                // onto a second line, and it is texture, not a list.
                i > 1 ? "hidden sm:inline" : "",
              ].join(" ")}
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
