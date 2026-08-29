import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import ExploreRow from "../ui/ExploreRow";
import LiteYouTube from "../ui/LiteYouTube";
import {
  ArrowRight,
  ArrowUpRight,
  IconProfile,
  IconChip,
  IconTeam,
  IconMic,
  IconTimeline,
  IconImpact,
  IconBroadcast,
} from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { EXTERNAL } from "@/content/site";
import { JOURNEY } from "@/content/journey";
import { PULSO, PULSO_TOPICS, SELECTED_CONTENT } from "@/content/media";
import {
  TRANSFORMATION_CAPABILITIES,
  LEADERSHIP_PILLARS,
  SPEAKING_TOPICS,
} from "@/content/speaking";

/**
 * The whole middle of the site, as one list.
 *
 * Seven sections used to run one after another, each with the same shape:
 * label, heading, two paragraphs, a list, a photograph, a button. End to end
 * that was nine thousand pixels of scrolling to learn what could be read in a
 * single screen.
 *
 * Here the shape of the work is the list itself, and the depth is one press
 * away. Every row keeps its own anchor, so every link and every menu item that
 * pointed at a section still works and opens the row it names.
 *
 * The first row starts open: a closed list teaches nobody that it opens.
 */
export default function Explore() {
  const t = useTranslations("explore");
  const tI = useTranslations("intro");
  const tT = useTranslations("transformation");
  const tL = useTranslations("leadership");
  const tS = useTranslations("speaker");
  const tJ = useTranslations("journey");
  const tM = useTranslations("impact");
  const tR = useTranslations("recognition");
  const tP = useTranslations("pulso");
  const tE = useTranslations("events");

  return (
    <section
      id={SECTIONS.explore}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="explore-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-6 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="explore-heading"
              className="display t-h2 mt-8 max-w-[16ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="body-copy text-fg-3" data-reveal>
              {t("lead")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:mt-14">
          {/* ── Profile ─────────────────────────────────────────────────── */}
          <ExploreRow
            id={SECTIONS.profile}
            title={t("rows.profile.title")}
            subtitle={t("rows.profile.subtitle")}
            icon={<IconProfile />}
            defaultOpen
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 lg:col-span-7">
                <h4 className="display t-h3 max-w-[16ch]">{tI("headline")}</h4>
                <p className="lead mt-6">{tI("body1")}</p>
                <p className="body-copy mt-5 text-fg-3">{tI("body2")}</p>
                <blockquote className="mt-8 border-l-2 border-gold pl-5">
                  <p className="display max-w-[30ch] text-[1.15rem] leading-[1.3] md:text-[1.35rem]">
                    {tI("statement")}
                  </p>
                </blockquote>
              </div>
              <div className="col-span-12 sm:col-span-7 lg:col-span-4 lg:col-start-9">
                <Photo
                  id="portraitFormal"
                  className="aspect-[4/5] w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 54vw, 32vw"
                  reveal={false}
                />
              </div>
            </div>
          </ExploreRow>

          {/* ── Digital transformation ──────────────────────────────────── */}
          <ExploreRow
            id={SECTIONS.transformation}
            title={t("rows.transformation.title")}
            subtitle={t("rows.transformation.subtitle")}
            icon={<IconChip />}
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 lg:col-span-6">
                <p className="meta">{tT("subtitle")}</p>
                <p className="lead mt-5">{tT("lead")}</p>
                <p className="body-copy mt-5 text-fg-3">{tT("body")}</p>
                <p className="meta mt-8 mb-4">{tT("capabilitiesLabel")}</p>
                <ul className="flex flex-wrap gap-2.5">
                  {TRANSFORMATION_CAPABILITIES.map((key) => (
                    <li key={key} className="tag">
                      {tT(`capabilities.${key}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <Photo
                  id="eventBootcamp"
                  className="aspect-[16/10] w-full"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  editorial
                  reveal={false}
                />
                <p className="mt-4 text-[0.875rem] leading-[1.6] text-fg-3">
                  {tT("caption")}
                </p>
              </div>
            </div>
          </ExploreRow>

          {/* ── Leadership and coaching ─────────────────────────────────── */}
          <ExploreRow
            id={SECTIONS.leadership}
            title={t("rows.leadership.title")}
            subtitle={t("rows.leadership.subtitle")}
            icon={<IconTeam />}
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <Photo
                  id="portraitBw"
                  className="aspect-[4/5] w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 32vw"
                  reveal={false}
                />
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <h4 className="display t-h3 max-w-[22ch]">{tL("headline")}</h4>
                <p className="lead mt-6">{tL("lead")}</p>
                <p className="body-copy mt-5 text-fg-3">{tL("body")}</p>
                <p className="meta mt-8 mb-4">{tL("pillarsLabel")}</p>
                <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                  {LEADERSHIP_PILLARS.map((key) => (
                    <li
                      key={key}
                      className="display border-t border-line py-3 text-[1rem] leading-[1.35]"
                    >
                      {tL(`pillars.${key}`)}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${SECTIONS.contact}`}
                  data-inquiry="coaching"
                  className="btn-gold mt-8"
                >
                  {tL("cta")}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </ExploreRow>

          {/* ── Speaker ─────────────────────────────────────────────────── */}
          <ExploreRow
            id={SECTIONS.speaker}
            title={t("rows.speaker.title")}
            subtitle={t("rows.speaker.subtitle")}
            icon={<IconMic />}
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 lg:col-span-7">
                <Photo
                  id="eventAudience"
                  className="aspect-[16/9] w-full"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  editorial
                  reveal={false}
                />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <h4 className="display t-h3 max-w-[16ch]">{tS("headline")}</h4>
                <p className="lead mt-6">{tS("lead")}</p>
                <p className="body-copy mt-5 text-fg-3">{tS("body")}</p>
              </div>
              <div className="col-span-12">
                <p className="meta mb-4">{tS("topicsLabel")}</p>
                <ul className="flex flex-wrap gap-2.5">
                  {SPEAKING_TOPICS.map((key) => (
                    <li key={key} className="tag">
                      {tS(`topics.${key}`)}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${SECTIONS.contact}`}
                  data-inquiry="speaking"
                  className="btn-gold mt-8"
                >
                  {tS("cta")}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </ExploreRow>

          {/* ── Career ──────────────────────────────────────────────────── */}
          <ExploreRow
            id={SECTIONS.journey}
            title={t("rows.journey.title")}
            subtitle={t("rows.journey.subtitle")}
            icon={<IconTimeline />}
          >
            <p className="body-copy max-w-[60ch] text-fg-3">{tJ("lead")}</p>
            <ol className="mt-7">
              {JOURNEY.map((m) => (
                <li
                  key={m.id}
                  className="grid grid-cols-12 gap-x-6 gap-y-2 border-t border-line py-5 last:border-b"
                >
                  <div className="col-span-12 sm:col-span-3">
                    <span className={`meta ${m.current ? "text-gold" : ""}`}>
                      {m.current ? tJ("currentLabel") : (m.period ?? "")}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-9">
                    <h5 className="display text-[1.0625rem] leading-[1.3] md:text-[1.15rem]">
                      {tJ(`items.${m.id}.title`)}
                    </h5>
                    <p className="mt-1.5 text-[0.75rem] font-semibold tracking-[0.1em] text-gold uppercase">
                      {tJ(`items.${m.id}.role`)}
                    </p>
                    <p className="body-copy mt-3 max-w-[58ch] text-fg-3">
                      {tJ(`items.${m.id}.body`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ExploreRow>

          {/* ── Social impact ───────────────────────────────────────────── */}
          <ExploreRow
            id={SECTIONS.impact}
            title={t("rows.impact.title")}
            subtitle={t("rows.impact.subtitle")}
            icon={<IconImpact />}
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 lg:col-span-5">
                <h4 className="display t-h3 max-w-[14ch]">{tM("headline")}</h4>
                <p className="meta mt-5">{tM("foundationName")}</p>
                <p className="lead mt-4">{tM("lead")}</p>
                <p className="body-copy mt-5 text-fg-3">{tM("body")}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {(
                    [
                      "education",
                      "partnerships",
                      "wellness",
                      "projects",
                    ] as const
                  ).map((key) => (
                    <li key={key} className="tag">
                      {tM(`pillars.${key}`)}
                    </li>
                  ))}
                </ul>
                <a
                  href={EXTERNAL.sereniti}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule mt-7"
                >
                  {tM("cta")}
                  <ArrowUpRight />
                </a>
              </div>

              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <Photo
                  id="eventCommunity"
                  className="aspect-[16/9] w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  editorial
                  reveal={false}
                />
                {/* The recognition, stated where the work that earned it is */}
                <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-6">
                  <p className="figure-xl text-[2.2rem]">{tR("year")}</p>
                  <div className="min-w-0 flex-1">
                    <p className="display max-w-[28ch] text-[1rem] leading-[1.3]">
                      {tR("title")}
                    </p>
                    <p className="meta mt-2">{tR("organization")}</p>
                  </div>
                </div>
              </div>
            </div>
          </ExploreRow>

          {/* ── The programme, and where he has been ────────────────────── */}
          <ExploreRow
            id={SECTIONS.media}
            title={t("rows.media.title")}
            subtitle={t("rows.media.subtitle")}
            icon={<IconBroadcast />}
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 lg:col-span-4">
                <p className="lead">{tP("subtitle")}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {PULSO_TOPICS.map((key) => (
                    <li key={key} className="tag">
                      {tP(`topics.${key}`)}
                    </li>
                  ))}
                </ul>
                {PULSO.channelUrl && (
                  <a
                    href={PULSO.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-7"
                  >
                    {tP("cta")}
                    <ArrowUpRight />
                  </a>
                )}
              </div>

              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                {PULSO.episodes[0] && (
                  <LiteYouTube
                    videoId={PULSO.episodes[0].videoId}
                    title={PULSO.episodes[0].title ?? tP("title")}
                    playLabel={tP("playLabel")}
                    className="aspect-video w-full"
                  />
                )}
                <ul className="mt-4 hidden grid-cols-2 gap-4 lg:grid">
                  {PULSO.episodes.slice(1, 3).map((ep) => (
                    <li key={ep.videoId}>
                      <LiteYouTube
                        videoId={ep.videoId}
                        title={ep.title ?? tP("title")}
                        playLabel={tP("playLabel")}
                        className="aspect-video w-full"
                        compact
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selected encounters — a footnote, not a gallery */}
              <div className="col-span-12">
                <p className="meta mb-4">{tE("headline")}</p>
                <ul>
                  {SELECTED_CONTENT.map((item) => (
                    <li
                      key={item.id}
                      className="grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-t border-line py-4 last:border-b"
                    >
                      <div className="col-span-12 sm:col-span-3">
                        <span className="label-gold">
                          {tE(`kinds.${item.kind}`)}
                        </span>
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <p className="display text-[1rem] leading-[1.3]">
                          {tE(`items.${item.id}.title`)}
                        </p>
                      </div>
                      <div className="col-span-12 sm:col-span-3 sm:text-right">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-rule"
                          >
                            {tE("view")}
                            <ArrowUpRight />
                          </a>
                        ) : (
                          <span className="meta">
                            {tE(`items.${item.id}.context`)}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ExploreRow>
        </div>
      </div>
    </section>
  );
}
