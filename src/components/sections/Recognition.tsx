import { useTranslations } from "next-intl";
import Photo from "../ui/Photo";
import { SECTIONS } from "@/content/sections";

export default function Recognition() {
  const t = useTranslations("recognition");

  return (
    <section
      id={SECTIONS.recognition}
      className="section-y-tight scroll-mt-24 bg-white"
      aria-labelledby="recognition-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-16">
          {/* The portrait is present, not featured. Typography leads here. */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 lg:col-start-2">
            <Photo
              id="portraitFormal"
              className="aspect-[3/4] w-full"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
              position="50% 22%"
            />
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="rule-top pt-8" data-reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
                <p className="eyebrow">{t("eyebrow")}</p>
                <p className="display text-[clamp(2.2rem,3.8vw,3.2rem)] leading-none tracking-[-0.03em] text-blue">
                  {t("year")}
                </p>
              </div>

              <h2
                id="recognition-heading"
                className="display mt-9 max-w-[20ch] text-[clamp(1.5rem,2.9vw,2.3rem)] leading-[1.2]"
              >
                {t("title")}
              </h2>

              <p className="meta mt-5 text-blue">{t("organization")}</p>

              <p className="body-copy mt-8 max-w-[60ch] text-ink-mute">
                {t("body")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
