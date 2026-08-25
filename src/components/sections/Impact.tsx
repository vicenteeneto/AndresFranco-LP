import { useTranslations } from "next-intl";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { EXTERNAL } from "@/content/site";

const PILLARS = ["education", "partnerships", "wellness", "projects"] as const;

export default function Impact() {
  const t = useTranslations("impact");

  return (
    <section
      id={SECTIONS.impact}
      className="section-y scroll-mt-20"
      aria-labelledby="impact-heading"
    >
      <div className="shell">
        <p className="eyebrow" data-reveal>
          {t("eyebrow")}
        </p>

        <div className="mt-8 grid grid-cols-12 gap-y-10 lg:gap-x-14">
          <h2
            id="impact-heading"
            className="display col-span-12 text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[0.98] tracking-[-0.028em] lg:col-span-6"
            data-reveal
          >
            {t("headline")}
          </h2>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-3">
            <p
              className="lead"
              data-reveal
              style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>
            <p
              className="body-copy mt-6 text-ink-mute"
              data-reveal
              style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
            >
              {t("body")}
            </p>
            <a
              href={EXTERNAL.sereniti}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule mt-8"
              data-reveal
            >
              {t("cta")}
              <ArrowUpRight />
            </a>
          </div>
        </div>

        {/* Focus areas — set as a quiet typographic rail */}
        <ul className="mt-16 grid grid-cols-2 border-t border-rule md:mt-24 lg:grid-cols-4">
          {PILLARS.map((key, i) => (
            <li
              key={key}
              className={[
                "border-b border-rule-soft py-6 pr-4 md:py-8 lg:border-b-0",
                i % 2 === 1 ? "border-l border-l-rule-soft pl-4 lg:pl-7" : "",
                i === 0
                  ? "lg:border-l-0"
                  : "lg:border-l lg:border-l-rule-soft lg:pl-7",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="display text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.2]">
                {t(`pillars.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
