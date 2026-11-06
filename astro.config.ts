import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import { DEFAULT_LANG, LANGS } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  i18n: {
    locales: [...LANGS],
    defaultLocale: DEFAULT_LANG,
    routing: {
      // Every page lives under /es/ or /en/; src/pages/index.astro redirects "/"
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  // Old URLs from before the site had languages
  redirects: {
    "/posts": "/es/posts/",
    "/tags": "/es/tags/",
    "/search": "/es/search/",
    "/about": "/es/about/",
    "/posts/como-consegui-trabajar-para-una-empresa-extranjera":
      "/es/como-consegui-trabajar-para-una-empresa-extranjera/",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "(table[ -]of[ -])?contents?|toc|contenido" }],
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
