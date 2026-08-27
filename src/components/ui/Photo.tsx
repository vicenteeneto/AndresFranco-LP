import Image from "next/image";
import { useTranslations } from "next-intl";
import { PHOTOS, type PhotoId } from "@/content/images";

type Props = {
  id: PhotoId;
  /** Aspect and width utilities for the frame, e.g. "aspect-[4/5] w-full". */
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Slight desaturation, for reportage and group photography. */
  editorial?: boolean;
  /** Overrides the manifest crop when a composition needs a different one. */
  position?: string;
  /** Tailwind object-position classes, for crops that change by breakpoint. */
  positionClass?: string;
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
  positionClass,
  reveal = true,
  revealDelay,
}: Props) {
  const t = useTranslations("images");
  const photo = PHOTOS[id];

  return (
    <figure
      className={`frame relative overflow-hidden bg-paper-warm ${className}`}
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
        quality={88}
        className={`absolute inset-0 h-full w-full object-cover ${
          editorial ? "photo-editorial" : ""
        } ${positionClass ?? ""}`}
        style={
          positionClass
            ? undefined
            : { objectPosition: position ?? photo.position ?? "50% 50%" }
        }
      />
    </figure>
  );
}
