import { useTranslations } from "next-intl";
import LiteYouTube from "../ui/LiteYouTube";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { PULSO, PULSO_TOPICS, SELECTED_CONTENT } from "@/content/media";

/**
 * Where to hear him, and where he has been.
 *
 * The programme and the selected events were two sections asking the same
 * question. Together they are one: the panel carries El Pulso del Poder, and
 * the ruled list under it carries the three encounters — a footnote to the
 * programme rather than a section of its own.
 *
 * Nothing here updates itself. Episodes and entries change when someone
 * changes them in content/media.ts.
 */
export default function Media() {
  const t = useTranslations("pulso");
  const te = useTranslations("events");
  const [featured, ...rest] = PULSO.episodes;

  return (
    <section
      id={SECTIONS.media}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="media-heading"
    >
      <div className="shell">
        <div className="card-petrol grid grid-cols-12 gap-y-10 p-7 md:p-10 lg:gap-x-14 lg:p-12">
          <div className="col-span-12 lg:col-span-4">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="media-heading"
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

            <div className="mt-8 hidden lg:block" data-reveal>
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
                className="btn-ghost mt-8"
                data-reveal
              >
                {t("cta")}
                <ArrowUpRight />
              </a>
            )}
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {featured && (
              <LiteYouTube
                videoId={featured.videoId}
                title={featured.title ?? t("title")}
                playLabel={t("playLabel")}
                className="aspect-video w-full"
              />
            )}

            {/* One player on a phone. Three thumbnails on a small screen is a
                video wall, not a selection. */}
            {rest.length > 0 && (
              <ul className="mt-5 hidden grid-cols-2 gap-4 lg:grid">
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
            )}
          </div>
        </div>

        {/* Selected encounters — a footnote, not a gallery */}
        <div className="mt-14 md:mt-20">
          <p className="meta" data-reveal>
            {te("eyebrow")} · {te("headline")}
          </p>
          <ul className="mt-6">
            {SELECTED_CONTENT.map((item, i) => (
              <li
                key={item.id}
                className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-t border-line py-5 last:border-b md:py-6"
                data-reveal
                style={
                  { "--reveal-delay": `${i * 60}ms` } as React.CSSProperties
                }
              >
                <div className="col-span-12 sm:col-span-3">
                  <span className="label-gold">{te(`kinds.${item.kind}`)}</span>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="display text-[1.0625rem] leading-[1.3] md:text-[1.15rem]">
                    {te(`items.${item.id}.title`)}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-3 sm:text-right">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule"
                    >
                      {te("view")}
                      <ArrowUpRight />
                    </a>
                  ) : (
                    <span className="meta">
                      {te(`items.${item.id}.context`)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
