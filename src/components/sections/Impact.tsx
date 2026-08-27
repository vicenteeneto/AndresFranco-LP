import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { EXTERNAL } from "@/content/site";

const PILLARS = ["education", "partnerships", "wellness", "projects"] as const;

export default function Impact() {
  const t = useTranslations("impact");

  return (
    <section
      id={SECTIONS.impact}
      className="section-y scroll-mt-24"
      aria-labelledby="impact-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-16">
          {/* Warmer, quieter, more human than the technology sections */}
          <div className="col-span-12 lg:col-span-5 lg:pr-4">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="impact-heading"
              className="display mt-9 text-[clamp(2.3rem,4.6vw,3.8rem)] leading-[1.05] tracking-[-0.02em]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
            <p
              className="lead mt-9"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-7 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>
            <a
              href={EXTERNAL.sereniti}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule mt-9"
              data-reveal
            >
              {t("cta")}
              <ArrowUpRight />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:bleed-r">
            <Photo
              id="eventCommunity"
              className="aspect-[4/3] w-full lg:aspect-[5/4]"
              sizes="(max-width: 1024px) 100vw, 56vw"
              editorial
            />
          </div>
        </div>

        {/* Focus areas — a quiet typographic rail, no cards */}
        <ul className="mt-20 grid grid-cols-2 md:mt-28 lg:grid-cols-4">
          {PILLARS.map((key, i) => (
            <li
              key={key}
              className={[
                "border-t border-rule py-8 pr-5 md:py-10",
                i % 2 === 1 ? "pl-5 md:pl-7 lg:pl-10" : "",
                i === 0 ? "" : "lg:pl-10",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="eyebrow text-[0.5625rem] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display mt-4 block text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.3]">
                {t(`pillars.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
