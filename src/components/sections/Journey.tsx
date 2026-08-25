import { useTranslations } from "next-intl";
import { SECTIONS } from "@/content/sections";
import { JOURNEY } from "@/content/journey";

export default function Journey() {
  const t = useTranslations("journey");

  return (
    <section
      id={SECTIONS.journey}
      className="section-y scroll-mt-20 bg-white"
      aria-labelledby="journey-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14">
          {/* Sticky heading rail */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow" data-reveal>
                {t("eyebrow")}
              </p>
              <h2
                id="journey-heading"
                className="display mt-6 text-[clamp(1.9rem,3.5vw,2.85rem)] leading-[1.06] tracking-[-0.02em]"
                data-reveal
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                {t("headline")}
              </h2>
              <p
                className="body-copy mt-7 max-w-[38ch] text-ink-mute"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {t("lead")}
              </p>
            </div>
          </div>

          {/* Milestones */}
          <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
            {JOURNEY.map((m, i) => (
              <li
                key={m.id}
                className={`relative pb-10 pl-8 last:pb-0 md:pl-12 ${
                  i === 0 ? "pt-0" : "border-t border-rule-soft pt-8"
                }`}
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties
                }
              >
                {/* Vertical rail */}
                <span
                  aria-hidden="true"
                  className={`absolute left-[3px] w-px bg-rule-soft ${
                    i === JOURNEY.length - 1 ? "top-0 h-3" : "top-0 bottom-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-0 h-[7px] w-[7px] rounded-full ${
                    m.current ? "bg-accent" : "bg-rule"
                  } ${i === 0 ? "top-[5px]" : "top-[37px]"}`}
                />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="eyebrow text-[0.5625rem] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {(m.period || m.current) && (
                    <span
                      className={`text-[0.625rem] font-medium tracking-[0.14em] uppercase ${
                        m.current ? "text-accent" : "text-ink-mute"
                      }`}
                    >
                      {m.current ? t("currentLabel") : m.period}
                    </span>
                  )}
                </div>

                <h3 className="display mt-3 text-[clamp(1.25rem,2.1vw,1.7rem)] leading-[1.15]">
                  {t(`items.${m.id}.title`)}
                </h3>
                <p className="mt-2 text-[0.8125rem] font-medium tracking-[0.06em] text-ink-mute">
                  {t(`items.${m.id}.role`)}
                </p>
                <p className="body-copy mt-4 max-w-[58ch]">
                  {t(`items.${m.id}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
