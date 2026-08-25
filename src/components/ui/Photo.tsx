import Image from "next/image";
import { useTranslations } from "next-intl";
import { PHOTOS, type PhotoId } from "@/content/images";

type Props = {
  id: PhotoId;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]". */
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Slight desaturation for group/event photography. */
  editorial?: boolean;
  /** Overrides the manifest crop when a composition needs a different one. */
  position?: string;
  reveal?: boolean;
  revealDelay?: number;
};

export default function Photo({
  id,
  className = "",
  sizes,
  priority = false,
  editorial = false,
  position,
  reveal = true,
  revealDelay,
}: Props) {
  const t = useTranslations("images");
  const photo = PHOTOS[id];

  return (
    <figure
      className={`frame relative overflow-hidden bg-paper-deep ${className}`}
      {...(reveal ? { "data-reveal": "image" } : {})}
      style={
        revealDelay
          ? ({ "--reveal-delay": `${revealDelay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      <Image
        src={photo.src}
        alt={t(id)}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        quality={86}
        className={`absolute inset-0 h-full w-full object-cover ${
          editorial ? "photo-editorial" : ""
        }`}
        style={{ objectPosition: position ?? photo.position ?? "50% 50%" }}
      />
    </figure>
  );
}
