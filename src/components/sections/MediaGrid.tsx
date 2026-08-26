"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "../ui/icons";
import { SECTIONS } from "@/content/sections";
import { MEDIA_ITEMS, MEDIA_CATEGORIES, type MediaItem } from "@/content/media";
import { PHOTOS } from "@/content/images";

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

  return (
    <section
      id={SECTIONS.media}
      className="section-y scroll-mt-20"
      aria-labelledby="media-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow" data-reveal>
              {t("eyebrow")}
            </p>
            <h2
              id="media-heading"
              className="display t-h2 mt-6 max-w-[16ch]"
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
          className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-rule pb-4 md:mt-16"
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
              className={`text-[0.6875rem] font-medium tracking-[0.13em] uppercase transition-colors duration-300 ${
                filter === c ? "text-ink" : "text-ink-mute hover:text-ink"
              }`}
            >
              {t(`filters.${c}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        {items.length === 0 ? (
          <p className="body-copy mt-12 text-ink-mute">{t("empty")}</p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {items.map((item, i) => (
              <Card
                key={item.id}
                item={item}
                index={i}
                t={t}
                alt={item.photo ? tImg(item.photo) : ""}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Card({
  item,
  index,
  t,
  alt,
}: {
  item: MediaItem;
  index: number;
  t: ReturnType<typeof useTranslations<"media">>;
  alt: string;
}) {
  const photo = item.photo ? PHOTOS[item.photo] : null;
  const wide = Boolean(item.feature);

  const inner = (
    <>
      {photo ? (
        <div className="frame relative aspect-[16/10] w-full overflow-hidden bg-paper-deep">
          <Image
            src={photo.src}
            alt={alt}
            width={photo.width}
            height={photo.height}
            sizes={
              wide
                ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 62vw"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 48vw, 31vw"
            }
            loading="lazy"
            quality={82}
            className="photo-editorial absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
            style={{ objectPosition: photo.position ?? "50% 50%" }}
          />
        </div>
      ) : (
        <div className="frame relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden bg-paper-deep p-7">
          <span className="eyebrow text-[0.5625rem]">
            {t(`filters.${item.category}`)}
          </span>
          <h3 className="display text-[clamp(1.3rem,2.2vw,1.75rem)] leading-[1.2] text-ink">
            {t(`items.${item.id}.title`)}
          </h3>
        </div>
      )}

      <div className="mt-5 flex items-center gap-3">
        {photo && (
          <span className="eyebrow text-[0.5625rem] text-accent">
            {t(`filters.${item.category}`)}
          </span>
        )}
        {(item.date || t.has(`items.${item.id}.meta`)) && (
          <>
            {photo && <span aria-hidden="true" className="h-3 w-px bg-rule" />}
            <span className="eyebrow text-[0.5625rem]">
              {item.date ?? t(`items.${item.id}.meta`)}
            </span>
          </>
        )}
      </div>

      {photo && (
        <h3
          className={`display mt-3 leading-[1.22] ${
            wide
              ? "text-[clamp(1.4rem,2.4vw,1.95rem)]"
              : "text-[clamp(1.2rem,1.8vw,1.45rem)]"
          }`}
        >
          {t(`items.${item.id}.title`)}
        </h3>
      )}

      <p
        className={`mt-3 text-[0.9375rem] leading-[1.62] text-ink-mute ${
          wide ? "max-w-[56ch]" : ""
        }`}
      >
        {t(`items.${item.id}.excerpt`)}
      </p>

      {item.href && (
        <span className="link-rule mt-4">
          {t("view")}
          <ArrowUpRight />
        </span>
      )}
    </>
  );

  return (
    <li
      className={wide ? "md:col-span-2" : ""}
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
    >
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {inner}
        </a>
      ) : (
        <div className="group">{inner}</div>
      )}
    </li>
  );
}
