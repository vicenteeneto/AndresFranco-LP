import { useTranslations } from "next-intl";

/**
 * The pause.
 *
 * One sentence on a raised ground, between the media block and the contact
 * section. It exists because the page is long and needs somewhere to breathe
 * before it asks for something — and because the argument the whole site
 * makes deserves to be stated once, plainly, with nothing else on screen.
 */
export default function Statement() {
  const t = useTranslations("statement");

  return (
    <section className="border-y border-line bg-bg-2">
      <div className="shell">
        <div className="section-y grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9 lg:col-start-3">
            <p
              aria-hidden="true"
              className="mb-8 h-[3px] w-14 bg-blue"
              data-reveal
            />
            <p
              className="display t-statement max-w-[28ch]"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {t("line1")}{" "}
              <span className="text-fg-3">{t("line2")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
