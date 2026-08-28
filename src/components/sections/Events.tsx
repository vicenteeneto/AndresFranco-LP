import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import Curated from "../ui/Curated";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { SELECTED_CONTENT } from "@/content/media";

/**
 * Selected events and conversations.
 *
 * A ruled index, not a gallery: three rows, each with its type, its title, a
 * line of context and a link where there is one. The photographs from these
 * events already carry their own sections at full width — repeating them here
 * at card size would flatten both.
 *
 * Nothing here updates itself. New entries are added by hand in
 * content/media.ts.
 */
export default function Events() {
  const t = useTranslations("events");
  const tc = useTranslations("common");

  return (
    <section
      id={SECTIONS.events}
      className="section-y-tight scroll-mt-20 border-t border-line"
      aria-labelledby="events-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-6 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="events-heading"
              className="display t-h3 mt-8"
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

        <Curated
          keep={1}
          moreLabel={tc("more")}
          lessLabel={tc("less")}
          className="mt-12 md:mt-14"
        >
          <ul>
            {SELECTED_CONTENT.map((item, i) => (
              <li
                key={item.id}
                className="grid grid-cols-12 gap-x-6 gap-y-3 border-t border-line py-7 last:border-b md:py-8"
                data-reveal
                style={
                  { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                }
              >
                <div className="col-span-12 sm:col-span-3">
                  <span className="label-gold">{t(`kinds.${item.kind}`)}</span>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="display text-[1.125rem] leading-[1.3] md:text-[1.3rem]">
                    {t(`items.${item.id}.title`)}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.66] text-fg-3">
                    {t(`items.${item.id}.excerpt`)}
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
                      {t("view")}
                      <ArrowUpRight />
                    </a>
                  ) : (
                    <span className="meta">
                      {t(`items.${item.id}.context`)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Curated>
      </div>
    </section>
  );
}
