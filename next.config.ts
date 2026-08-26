import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { defaultLocale } from "./src/i18n/routing";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 828, 1080, 1280, 1600, 1920],
  },
  poweredByHeader: false,

  /**
   * "/" sends visitors to the default language.
   *
   * This is a config-level redirect on purpose. next-intl would normally do it
   * from middleware, but the middleware/proxy layer does not resolve on
   * Vercel's router with this Next version — every route, static ones
   * included, answered with a platform 404. Declaring the redirect here keeps
   * the site free of any middleware: "/es" and "/pt" are plain static routes
   * and "/" is a redirect the CDN handles natively.
   *
   * When a language is added, add its entry to `locales` in src/i18n/routing.ts
   * — only "/" needs to point somewhere, and it points at the default locale.
   */
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${defaultLocale}`,
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
