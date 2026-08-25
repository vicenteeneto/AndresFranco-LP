import { useTranslations } from "next-intl";
import { SECTIONS } from "@/content/sections";

export default function Recognition() {
  const t = useTranslations("recognition");

  return (
    <section
      id={SECTIONS.recognition}
      className="scroll-mt-20 bg-white py-24 md:py-32"
      aria-labelledby="recognition-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div
              className="border-t border-rule pt-10 md:pt-12"
              data-reveal
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
                <p className="eyebrow">{t("eyebrow")}</p>
                <p className="display text-[clamp(2rem,3.6vw,2.9rem)] leading-none tracking-[-0.03em] text-ink-mute">
                  {t("year")}
                </p>
              </div>

              <h2
                id="recognition-heading"
                className="display mt-7 max-w-[20ch] text-[clamp(1.5rem,3vw,2.35rem)] leading-[1.12]"
              >
                {t("title")}
              </h2>

              <p className="mt-4 text-[0.8125rem] font-medium tracking-[0.13em] text-accent uppercase">
                {t("organization")}
              </p>

              <p className="body-copy mt-8 max-w-[62ch] text-ink-mute">
                {t("body")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
