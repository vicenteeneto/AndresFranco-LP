import { useTranslations } from "next-intl";
import LiteYouTube from "../ui/LiteYouTube";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { PULSO, PULSO_TOPICS } from "@/content/media";

/**
 * El Pulso del Poder.
 *
 * A selection, not a library: one episode plays, two sit beneath it, and the
 * channel button carries everything else. Nothing here refreshes on its own —
 * the episodes change when someone changes them in content/media.ts.
 *
 * The programme is the political material on an otherwise executive page, so
 * it is contained: one panel, its own rules, and no more of the page than the
 * sections around it get.
 */
export default function Pulso() {
  const t = useTranslations("pulso");
  const [featured, ...rest] = PULSO.episodes;

  return (
    <section
      id={SECTIONS.media}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="pulso-heading"
    >
      <div className="shell">
        <div className="card grid grid-cols-12 gap-y-10 p-7 md:p-10 lg:gap-x-14 lg:p-12">
          {/* Programme identity */}
          <div className="col-span-12 lg:col-span-4">
            <SectionOpen index="06" label={t("eyebrow")} />
            <h2
              id="pulso-heading"
              className="display t-h3 mt-8"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("title")}
            </h2>
            <p
              className="body-copy mt-6 max-w-[38ch]"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              {t("subtitle")}
            </p>

            <div className="mt-8" data-reveal>
              <p className="meta mb-4">{t("topicsLabel")}</p>
              <ul className="flex flex-wrap gap-2.5">
                {PULSO_TOPICS.map((key) => (
                  <li key={key} className="tag">
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
                className="btn-ghost mt-9"
                data-reveal
              >
                {t("cta")}
                <ArrowUpRight />
              </a>
            )}
          </div>

          {/* The programme itself */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {featured && (
              <LiteYouTube
                videoId={featured.videoId}
                title={featured.title ?? t("title")}
                playLabel={t("playLabel")}
                className="aspect-video w-full"
              />
            )}

            {rest.length > 0 && (
              <div className="mt-6">
                <p className="meta mb-4">{t("episodesLabel")}</p>
                <ul className="grid grid-cols-2 gap-4">
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
