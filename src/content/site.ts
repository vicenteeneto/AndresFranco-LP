/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Everything that changes without touching layout or design lives here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Canonical production URL. Update before going live. */
export const SITE_URL = "https://andres-franco-lp.vercel.app";

export const PERSON = {
  name: "Andrés Franco",
  /** Full and ASCII variants, used in structured data for search coverage. */
  alternateName: ["Andrés I. Franco", "Andres I. Franco", "Andres Franco"],
  jobTitle: "Vice President & Head of Latin America",
  organization: "SS&C Technologies / Blue Prism",
  organizationUrl: "https://www.blueprism.com/",
  organizationTicker: "NASDAQ: SSNC",
} as const;

/**
 * Social profiles.
 * An entry with an empty `href` is simply not rendered — no broken links.
 */
export type SocialLink = {
  id: "linkedin" | "instagram" | "facebook" | "youtube";
  label: string;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andresifranco/",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/flakofranko",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1DaZBeTTVa/?mibextid=wwXIfr",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@ELPULSODELPODERTV",
  },
];

export const EXTERNAL = {
  sereniti: "https://sereniti.org/",
  maxwell: "https://www.johncmaxwellgroup.com/andresfranco",
} as const;

/**
 * Contact form endpoint.
 *
 * Web3Forms: create a free access key at https://web3forms.com and paste it
 * below — no account or backend required, submissions arrive by email.
 * Formspree alternative: set `provider: "formspree"` and put the form ID
 * (the part after /f/) in `key`.
 */
export const CONTACT_FORM = {
  provider: "web3forms" as "web3forms" | "formspree",
  key: process.env.NEXT_PUBLIC_CONTACT_FORM_KEY ?? "",
} as const;

export function contactEndpoint(): string | null {
  if (!CONTACT_FORM.key) return null;
  return CONTACT_FORM.provider === "web3forms"
    ? "https://api.web3forms.com/submit"
    : `https://formspree.io/f/${CONTACT_FORM.key}`;
}

/** Fallback address used when no form key is configured yet. */
export const CONTACT_EMAIL = "";
