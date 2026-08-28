import { useTranslations } from "next-intl";

const STATS = ["experience", "coaching", "region", "recognition"] as const;

/**
 * The authority band.
 *
 * Four figures on a raised ground, divided by hairlines, immediately under
 * the hero. It answers the only question a visitor has at that moment — why
 * keep reading — and it is meant to be crossed in two seconds, so it carries
 * no heading, no label and no photograph.
 *
 * Every value here is verified. Nothing is estimated or rounded up.
 */
export default function Authority() {
  const t = useTranslations("intro");

  return (
    <section
      className="border-y border-line bg-bg-2"
      aria-label={t("authorityLabel")}
    >
      <div className="shell">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((key, i) => (
            <div
              key={key}
              className={[
                "py-10 md:py-14",
                // Hairlines between the cells, never around the outside: the
                // band already has its own top and bottom rules.
                i % 2 === 1 ? "border-l border-line pl-6 md:pl-9" : "pr-6",
                i < 2 ? "border-b border-line lg:border-b-0" : "",
                i === 2 ? "lg:border-l lg:border-line lg:pl-9" : "",
                i >= 2 ? "pt-10 md:pt-14 lg:pt-14" : "",
              ].join(" ")}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <dt className="sr-only">{t(`stats.${key}.label`)}</dt>
              <dd>
                <span className="figure-xl block">
                  {t(`stats.${key}.value`)}
                </span>
                <span className="mt-4 block max-w-[22ch] text-[0.75rem] leading-[1.6] font-medium tracking-[0.06em] text-fg-3 uppercase">
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
