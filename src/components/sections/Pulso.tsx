import { useTranslations } from "next-intl";
import LiteYouTube from "../ui/LiteYouTube";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight, PlayMark } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { PULSO, PULSO_TOPICS } from "@/content/media";

/**
 * El Pulso del Poder.
 *
 * A selection, not a library: one episode plays, two sit beside it, and the
 * channel button carries everything else. Nothing here refreshes on its own —
 * the episodes change when someone changes them in content/media.ts.
 *
 * This is the one dark section on the page, and it is the political one. The
 * contrast is what keeps it from bleeding into the executive material either
 * side of it.
 */
export default function Pulso() {
  const t = useTranslations("pulso");
  const [featured, ...rest] = PULSO.episodes;

  return (
    <section
      id={SECTIONS.media}
      className="on-dark section-y scroll-mt-24 bg-navy"
      aria-labelledby="pulso-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
          {/* Programme identity */}
          <div className="col-span-12 lg:col-span-4">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="pulso-heading"
              className="display mt-9 text-[clamp(2.1rem,4vw,3.2rem)] leading-[1.06] tracking-[-0.022em]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("title")}
            </h2>
            <p
              className="lead mt-8 max-w-[38ch]"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("subtitle")}
            </p>

            <div className="mt-10" data-reveal>
              <p className="meta mb-5">{t("topicsLabel")}</p>
              <ul>
                {PULSO_TOPICS.map((key) => (
                  <li
                    key={key}
                    className="border-t border-white/12 py-3 text-[0.9375rem] text-white/72 last:border-b"
                  >
                    {t(`topics.${key}`)}
                  </li>
                ))}
              </ul>
            </div>

            {PULSO.channelUrl && (
              <a
                href={PULSO.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-10"
                data-reveal
              >
                {t("cta")}
                <ArrowUpRight />
              </a>
            )}
          </div>

          {/* The programme itself, running off the right edge of the page */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:bleed-r">
            {featured ? (
              <LiteYouTube
                videoId={featured.videoId}
                title={featured.title ?? t("title")}
                playLabel={t("playLabel")}
                className="aspect-video w-full"
              />
            ) : (
              <a
                href={PULSO.channelUrl || undefined}
                target={PULSO.channelUrl ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group block aspect-video w-full border border-white/12 bg-navy-soft/45 transition-colors duration-500 hover:bg-navy-soft/80"
                data-reveal
              >
                <span className="flex h-full flex-col justify-between p-8 md:p-12">
                  <span className="eyebrow">{t("eyebrow")}</span>
                  <span>
                    <span className="display block text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.14] text-white">
                      {t("title")}
                    </span>
                    <span className="mt-5 flex items-center gap-3.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors duration-500 group-hover:border-white/60">
                        <PlayMark className="h-3 w-3 translate-x-[1px]" />
                      </span>
                      {t("cta")}
                    </span>
                  </span>
                </span>
              </a>
            )}

            {rest.length > 0 && (
              <div className="mt-6">
                <p className="meta mb-4">{t("episodesLabel")}</p>
                <ul className="grid grid-cols-2 gap-4 sm:gap-5">
                  {rest.slice(0, 2).map((ep) => (
                    <li key={ep.videoId}>
                      <LiteYouTube
                        videoId={ep.videoId}
                        title={ep.title ?? t("title")}
                        playLabel={t("playLabel")}
                        className="aspect-video w-full"
                        compact
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
