import { useTranslations } from "next-intl";
import LiteYouTube from "../ui/LiteYouTube";
import { ArrowUpRight, PlayMark } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { PULSO, PULSO_TOPICS } from "@/content/media";

export default function Pulso() {
  const t = useTranslations("pulso");
  const [featured, ...rest] = PULSO.episodes;

  return (
    <section
      id={SECTIONS.pulso}
      className="on-dark scroll-mt-20 bg-navy py-24 md:py-32"
      aria-labelledby="pulso-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14">
          {/* Programme identity */}
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="pulso-heading"
              className="display mt-6 text-[clamp(2.4rem,5vw,4.05rem)] leading-[0.98] tracking-[-0.028em]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("title")}
            </h2>
            <p
              className="lead mt-7 max-w-[42ch]"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("subtitle")}
            </p>
            <p
              className="body-copy mt-6 max-w-[46ch] text-white/55"
              data-reveal
              style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>

            <div className="mt-9" data-reveal>
              <p className="eyebrow mb-4">{t("topicsLabel")}</p>
              <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                {PULSO_TOPICS.map((key) => (
                  <li
                    key={key}
                    className="border border-navy-line px-3.5 py-2 text-[0.6875rem] font-medium tracking-[0.1em] text-white/70 uppercase"
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
                className="btn-outline mt-9"
                data-reveal
              >
                {t("cta")}
                <ArrowUpRight />
              </a>
            )}
          </div>

          {/* Player / title card */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
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
                className="group block aspect-video w-full border border-navy-line bg-navy-soft/45 transition-colors duration-500 hover:bg-navy-soft/80"
                data-reveal
              >
                <span className="flex h-full flex-col justify-between p-7 md:p-10">
                  <span className="eyebrow">{t("eyebrow")}</span>
                  <span>
                    <span className="display block text-[clamp(1.7rem,3.3vw,2.7rem)] leading-[1.05] text-white">
                      {t("title")}
                    </span>
                    <span className="mt-4 flex items-center gap-3 text-[0.6875rem] font-medium tracking-[0.13em] text-white/60 uppercase">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-line transition-colors duration-500 group-hover:border-white/60">
                        <PlayMark className="h-3 w-3 translate-x-[1px]" />
                      </span>
                      {t("cta")}
                    </span>
                  </span>
                </span>
              </a>
            )}

            {rest.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow mb-4">{t("episodesLabel")}</p>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {rest.slice(0, 3).map((ep) => (
                    <li key={ep.videoId}>
                      <LiteYouTube
                        videoId={ep.videoId}
                        title={ep.title ?? t("title")}
                        playLabel={t("playLabel")}
                        className="aspect-video w-full"
                      />
                      {ep.title && (
                        <p className="mt-3 text-[0.8125rem] leading-[1.45] text-white/65">
                          {ep.title}
                        </p>
                      )}
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
