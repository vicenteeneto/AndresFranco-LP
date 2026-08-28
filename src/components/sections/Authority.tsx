import { useTranslations } from "next-intl";

const STATS = ["experience", "coaching", "region", "recognition"] as const;

/**
 * The authority band.
 *
 * It sits immediately under the hero and answers, in four figures, the only
 * question a visitor has at that moment: why should I keep reading. Every
 * value here is verified — nothing is estimated, rounded up or inferred.
 *
 * It is a band, not a section: no eyebrow, no heading, no photograph. Its
 * whole job is to be crossed in two seconds.
 */
export default function Authority() {
  const t = useTranslations("intro");

  return (
    <section className="bg-white" aria-label={t("authorityLabel")}>
      <div className="shell">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((key, i) => (
            <div
              key={key}
              className={[
                "border-b border-rule py-9 pr-6 md:py-12",
                i % 2 === 1 ? "pl-6 md:pl-8 lg:pl-10" : "",
                i === 0 ? "" : "lg:pl-10",
                i < 2 ? "border-t" : "lg:border-t",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <dt className="sr-only">{t(`stats.${key}.label`)}</dt>
              <dd>
                <span className="display block text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1] tracking-[-0.028em]">
                  {t(`stats.${key}.value`)}
                </span>
                <span className="mt-5 block max-w-[20ch] text-[0.8125rem] leading-[1.55] text-ink-mute">
                  {t(`stats.${key}.label`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
