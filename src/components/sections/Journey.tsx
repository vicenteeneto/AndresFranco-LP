import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import Curated from "../ui/Curated";
import { SECTIONS } from "@/content/sections";
import { JOURNEY } from "@/content/journey";

/**
 * The career, in five milestones.
 *
 * A linear rail, not cards: period on the left, organisation and role on the
 * right, one hairline between each. Depth of career shown without
 * reproducing a CV — and without five boxes competing with the cards that
 * come later in the page.
 */
export default function Journey() {
  const t = useTranslations("journey");
  const tc = useTranslations("common");

  return (
    <section
      id={SECTIONS.journey}
      className="section-y scroll-mt-20 border-t border-line"
      aria-labelledby="journey-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionOpen index="03" label={t("eyebrow")} />
              <h2
                id="journey-heading"
                className="display t-h3 mt-8 max-w-[18ch]"
                data-reveal
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                {t("headline")}
              </h2>
              <p
                className="body-copy mt-7 hidden max-w-[36ch] text-fg-3 lg:block"
                data-reveal
                style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
              >
                {t("lead")}
              </p>
            </div>
          </div>

          <Curated
            keep={4}
            moreLabel={tc("more")}
            lessLabel={tc("less")}
            className="col-span-12 lg:col-span-7 lg:col-start-6"
          >
            <ol>
              {JOURNEY.map((m, i) => (
                <li
                  key={m.id}
                  className="border-t border-line py-7 last:border-b md:py-9"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${(i % 3) * 60}ms`,
                    } as React.CSSProperties
                  }
                >
                  {/*
                  The period sits above the milestone rather than in a column
                  of its own. Only the current role carries a label — four
                  empty cells down the left of a rail read as a mistake, not
                  as a timeline.
                */}
                  {(m.current || m.period) && (
                    <p className={`meta mb-4 ${m.current ? "text-gold" : ""}`}>
                      {m.current ? t("currentLabel") : m.period}
                    </p>
                  )}
                  <h3 className="display text-[1.2rem] leading-[1.24] md:text-[1.45rem]">
                    {t(`items.${m.id}.title`)}
                  </h3>
                  <p className="mt-2 text-[0.75rem] font-semibold tracking-[0.12em] text-gold uppercase">
                    {t(`items.${m.id}.role`)}
                  </p>
                  <p className="body-copy mt-4 hidden max-w-[56ch] text-fg-3 lg:block">
                    {t(`items.${m.id}.body`)}
                  </p>
                </li>
              ))}
            </ol>
          </Curated>
        </div>
      </div>
    </section>
  );
}
