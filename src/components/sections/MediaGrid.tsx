"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionOpen from "../ui/SectionOpen";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { MEDIA_ITEMS, MEDIA_CATEGORIES, type MediaItem } from "@/content/media";
import { PHOTOS } from "@/content/images";

/**
 * A magazine index rather than a wall of equal cards.
 *
 * One entry is given the photograph and the size; everything else is set as a
 * ruled list. The photographs of these events already carry their own sections
 * at full width — repeating them here at card size would flatten both.
 */
export default function MediaGrid() {
  const t = useTranslations("media");
  const tImg = useTranslations("images");
  const [filter, setFilter] = useState<string>("all");

  const available = useMemo(() => {
    const present = new Set(MEDIA_ITEMS.map((i) => i.category));
    return MEDIA_CATEGORIES.filter((c) => c === "all" || present.has(c));
  }, []);

  const items = useMemo(
    () =>
      filter === "all"
        ? MEDIA_ITEMS
        : MEDIA_ITEMS.filter((i) => i.category === filter),
    [filter],
  );

  const featured =
    items.find((i) => i.feature && i.photo) ?? items.find((i) => i.photo) ?? items[0];
  const rest = items.filter((i) => i !== featured);

  return (
    <section
      id={SECTIONS.media}
      className="section-y scroll-mt-24"
      aria-labelledby="media-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <SectionOpen label={t("eyebrow")} />
            <h2
              id="media-heading"
              className="display t-h2 mt-9 max-w-[15ch]"
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t("headline")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="body-copy" data-reveal>
              {t("lead")}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-rule pb-5 md:mt-20"
          role="tablist"
          aria-label={t("eyebrow")}
        >
          {available.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`text-[0.6875rem] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                filter === c
                  ? "text-navy"
                  : "text-ink-mute hover:text-blue-deep"
              }`}
            >
              {t(`filters.${c}`)}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="body-copy mt-14 text-ink-mute">{t("empty")}</p>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <article className="mt-14 grid grid-cols-12 items-end gap-y-8 md:mt-16 lg:gap-x-14">
                {featured.photo && (
                  <div className="col-span-12 lg:col-span-7">
                    <Cover item={featured} alt={tImg(featured.photo)} />
                  </div>
                )}
                <div
                  className={
                    featured.photo
                      ? "col-span-12 lg:col-span-5"
                      : "col-span-12 lg:col-span-8"
                  }
                  data-reveal
                >
                  <Meta item={featured} t={t} />
                  <h3 className="display mt-5 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2]">
                    {t(`items.${featured.id}.title`)}
                  </h3>
                  <p className="body-copy mt-4 max-w-[46ch] text-ink-mute">
                    {t(`items.${featured.id}.excerpt`)}
                  </p>
                  {featured.href && <Open href={featured.href} label={t("view")} />}
                </div>
              </article>
            )}

            {/* Index */}
            {rest.length > 0 && (
              <ul className="mt-16 grid grid-cols-1 gap-x-16 md:mt-20 lg:grid-cols-2">
                {rest.map((item, i) => (
                  <li
                    key={item.id}
                    className="border-t border-rule py-8 md:py-9"
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${(i % 2) * 80}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <Meta item={item} t={t} />
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
          </>
        )}
      </div>
    </section>
  );
}

function Cover({ item, alt }: { item: MediaItem; alt: string }) {
  const photo = item.photo ? PHOTOS[item.photo] : null;
  if (!photo) return null;
  return (
    <figure
      className="frame relative aspect-[16/10] w-full overflow-hidden bg-paper-warm"
      data-reveal="image"
    >
      <Image
        src={photo.src}
        alt={alt}
        width={photo.width}
        height={photo.height}
        sizes="(max-width: 1024px) 100vw, 58vw"
        loading="lazy"
        quality={86}
        className="photo-editorial absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: photo.position ?? "50% 50%" }}
      />
    </figure>
  );
}

function Meta({
  item,
  t,
}: {
  item: MediaItem;
  t: ReturnType<typeof useTranslations<"media">>;
}) {
  const extra = item.date ?? (t.has(`items.${item.id}.meta`) ? t(`items.${item.id}.meta`) : null);
  return (
    <div className="flex items-center gap-3.5">
      <span className="eyebrow text-[0.5625rem]">
        {t(`filters.${item.category}`)}
      </span>
      {extra && (
        <>
          <span aria-hidden="true" className="h-3 w-px bg-rule" />
          <span className="meta text-[0.5625rem]">{extra}</span>
        </>
      )}
    </div>
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
