import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import { SECTIONS } from "@/content/sections";
import { JOURNEY } from "@/content/journey";

export default function Journey() {
  const t = useTranslations("journey");

  return (
    <section
      id={SECTIONS.journey}
      className="section-y scroll-mt-24 bg-white"
      aria-labelledby="journey-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
          {/* Heading holds its place while the career scrolls past it */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-36">
              <SectionOpen label={t("eyebrow")} />
              <h2
                id="journey-heading"
                className="display mt-9 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.018em]"
                data-reveal
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                {t("headline")}
              </h2>
              <p
                className="body-copy mt-8 max-w-[36ch] text-ink-mute"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {t("lead")}
              </p>
            </div>
          </div>

          {/* Milestones — read as a narrative, not a résumé */}
          <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
            {JOURNEY.map((m, i) => (
              <li
                key={m.id}
                className={`grid grid-cols-12 gap-x-6 gap-y-4 py-10 md:py-12 ${
                  i === 0 ? "" : "border-t border-rule"
                }`}
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties
                }
              >
                <div className="col-span-12 sm:col-span-3">
                  <span
                    className={`meta ${m.current ? "text-blue" : ""}`}
                  >
                    {m.current ? t("currentLabel") : (m.period ?? "")}
                  </span>
                </div>

                <div className="col-span-12 sm:col-span-9">
                  <h3 className="display text-[clamp(1.25rem,2.1vw,1.7rem)] leading-[1.24]">
                    {t(`items.${m.id}.title`)}
                  </h3>
                  <p className="mt-2.5 text-[0.8125rem] font-medium tracking-[0.05em] text-blue-deep">
                    {t(`items.${m.id}.role`)}
                  </p>
                  <p className="body-copy mt-5 max-w-[56ch] text-ink-mute">
                    {t(`items.${m.id}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
