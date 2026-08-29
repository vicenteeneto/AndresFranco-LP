import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import Disclosure from "../ui/Disclosure";
import { ArrowRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import {
  TRANSFORMATION_CAPABILITIES,
  LEADERSHIP_PILLARS,
  SPEAKING_TOPICS,
} from "@/content/speaking";

/**
 * The three disciplines, in one section.
 *
 * They used to be three full-height sections with the same shape: label,
 * heading, two paragraphs, a list, a photograph, a button. Read end to end
 * that is three thousand pixels making one point — that Andrés works across
 * technology, people and the stage.
 *
 * As rows, the point lands in a single screen and the depth is one click
 * away. Each row keeps its own anchor, so every link that pointed at
 * `#liderazgo` still works and opens it.
 *
 * The first row starts open: a closed accordion teaches nobody what happens
 * when you press it.
 */
export default function Practice() {
  const t = useTranslations("practice");
  const tT = useTranslations("transformation");
  const tL = useTranslations("leadership");
  const tS = useTranslations("speaker");

  return (
    <section
      id={SECTIONS.practice}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="practice-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="practice-heading"
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

        <div className="mt-12 md:mt-16">
          {/* ── Digital transformation ─────────────────────────────────── */}
          <Disclosure
            id={SECTIONS.transformation}
            title={tT("title")}
            summary={tT("summary")}
            defaultOpen
          >
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-14">
              <div className="col-span-12 lg:col-span-6">
                <p className="meta">{tT("subtitle")}</p>
                <p className="lead mt-5">{tT("lead")}</p>
                <p className="body-copy mt-5 text-fg-3">{tT("body")}</p>

                <p className="meta mt-9 mb-4">{tT("capabilitiesLabel")}</p>
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
          </Disclosure>

          {/* ── Leadership and coaching ────────────────────────────────── */}
          <Disclosure
            id={SECTIONS.leadership}
            title={tL("title")}
            summary={tL("summary")}
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

                <p className="meta mt-9 mb-4">{tL("pillarsLabel")}</p>
                <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                  {LEADERSHIP_PILLARS.map((key) => (
                    <li
                      key={key}
                      className="display border-t border-line py-3 text-[1rem] leading-[1.35] md:text-[1.0625rem]"
                    >
                      {tL(`pillars.${key}`)}
                    </li>
                  ))}
                </ul>

                <a
                  href={`#${SECTIONS.contact}`}
                  data-inquiry="coaching"
                  className="btn-gold mt-9"
                >
                  {tL("cta")}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </Disclosure>

          {/* ── Speaker ────────────────────────────────────────────────── */}
          <Disclosure
            id={SECTIONS.speaker}
            title={tS("title")}
            summary={tS("summary")}
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
          </Disclosure>
        </div>
      </div>
    </section>
  );
}
