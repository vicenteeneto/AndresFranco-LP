import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { SELECTED_CONTENT } from "@/content/media";

/**
 * Selected events and conversations.
 *
 * Three entries, and only the first carries a photograph — the other two are
 * ruled text. A landing page that ends with a grid of identical picture cards
 * undoes everything the sections above it did with scale and asymmetry, and
 * three equal cards would say "here is our archive" when the honest statement
 * is "here is a selection".
 *
 * Nothing here updates itself. New entries are added by hand in
 * content/media.ts.
 */
export default function Events() {
  const t = useTranslations("events");
  const [lead, ...rest] = SELECTED_CONTENT;

  return (
    <section
      id={SECTIONS.events}
      className="section-y-tight scroll-mt-24"
      aria-labelledby="events-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-6">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="events-heading"
              className="display t-h3 mt-9 max-w-[16ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="body-copy text-ink-mute" data-reveal>
              {t("lead")}
            </p>
          </div>
        </div>

        {lead && (
          <article className="mt-14 grid grid-cols-12 items-end gap-y-8 md:mt-20 lg:gap-x-14">
            {lead.photo && (
              <div className="col-span-12 lg:col-span-7">
                <Photo
                  id={lead.photo}
                  className="aspect-[16/10] w-full lg:aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  editorial
                />
              </div>
            )}
            <div
              className={
                lead.photo
                  ? "col-span-12 lg:col-span-5"
                  : "col-span-12 lg:col-span-8"
              }
              data-reveal
            >
              <p className="eyebrow text-[0.5625rem]">
                {t(`kinds.${lead.kind}`)}
              </p>
              <h3 className="display mt-5 text-[clamp(1.4rem,2.4vw,1.95rem)] leading-[1.22]">
                {t(`items.${lead.id}.title`)}
              </h3>
              <p className="body-copy mt-4 max-w-[44ch] text-ink-mute">
                {t(`items.${lead.id}.excerpt`)}
              </p>
              {lead.href && <Open href={lead.href} label={t("view")} />}
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <ul className="mt-16 grid grid-cols-1 gap-x-16 md:mt-20 lg:grid-cols-2">
            {rest.map((item, i) => (
              <li
                key={item.id}
                className="border-t border-rule py-8 md:py-9"
                data-reveal
                style={
                  { "--reveal-delay": `${i * 80}ms` } as React.CSSProperties
                }
              >
                <p className="eyebrow text-[0.5625rem]">
                  {t(`kinds.${item.kind}`)}
                </p>
                <h3 className="display mt-4 max-w-[26ch] text-[clamp(1.15rem,1.9vw,1.45rem)] leading-[1.28]">
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-[1.68] text-ink-mute">
                  {t(`items.${item.id}.excerpt`)}
                </p>
                {item.href && <Open href={item.href} label={t("view")} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Open({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-rule mt-5"
    >
      {label}
      <ArrowUpRight />
    </a>
  );
}
