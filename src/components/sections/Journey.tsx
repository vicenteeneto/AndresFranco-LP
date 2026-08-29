import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import Disclosure from "../ui/Disclosure";
import { SECTIONS } from "@/content/sections";
import { JOURNEY } from "@/content/journey";

/**
 * The career, as five rows that open.
 *
 * Collapsed, the whole trajectory reads in one glance — the organisations and
 * the roles, which is what anyone scanning a career actually wants. The
 * paragraph explaining each one is there for whoever asks for it.
 */
export default function Journey() {
  const t = useTranslations("journey");

  return (
    <section
      id={SECTIONS.journey}
      className="section-y scroll-mt-20 border-t border-line bg-bg-2"
      aria-labelledby="journey-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="journey-heading"
              className="display t-h3 mt-8 max-w-[22ch]"
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
          {JOURNEY.map((m) => (
            <Disclosure
              key={m.id}
              id={`marco-${m.id}`}
              title={t(`items.${m.id}.title`)}
              summary={t(`items.${m.id}.role`)}
            >
              <div className="grid grid-cols-12 gap-y-3 lg:gap-x-14">
                <div className="col-span-12 lg:col-span-3">
                  <p className={`meta ${m.current ? "text-gold" : ""}`}>
                    {m.current ? t("currentLabel") : (m.period ?? "")}
                  </p>
                  <p className="mt-3 text-[0.8125rem] font-semibold tracking-[0.1em] text-fg-2 uppercase lg:hidden">
                    {t(`items.${m.id}.role`)}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                  <p className="body-copy max-w-[60ch]">
                    {t(`items.${m.id}.body`)}
                  </p>
                </div>
              </div>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
