import type { CollectionEntry } from "astro:content";
import { DEFAULT_LANG, LANGS, ui, type Lang, type UIKey } from "./ui";

export const isLang = (value: unknown): value is Lang =>
  LANGS.includes(value as Lang);

export const toLang = (value: unknown): Lang =>
  isLang(value) ? value : DEFAULT_LANG;

export const useTranslations = (lang: Lang) => (key: UIKey) =>
  ui[lang][key] ?? ui[DEFAULT_LANG][key];

// Posts live in src/content/blog/<lang>/, so the language is the first part of the id
export const getPostLang = (post: CollectionEntry<"blog">): Lang =>
  toLang(post.id.split("/")[0]);

// Without a `slug` in the frontmatter Astro's slug keeps the folder ("es/my-post")
export const getPostSlug = (post: CollectionEntry<"blog">) =>
  post.slug.replace(new RegExp(`^(${LANGS.join("|")})/`), "");

export const getPostUrl = (post: CollectionEntry<"blog">) =>
  `/${getPostLang(post)}/${getPostSlug(post)}/`;

// Translations of a post share the same file name in each language folder,
// e.g. es/my-post.md and en/my-post.md
const getPostKey = (post: CollectionEntry<"blog">) =>
  post.id.split("/").slice(1).join("/");

export const getPostTranslations = (
  post: CollectionEntry<"blog">,
  posts: CollectionEntry<"blog">[]
) => {
  const key = getPostKey(post);
  const translations: Partial<Record<Lang, string>> = {};
  for (const other of posts) {
    if (getPostKey(other) === key) {
      translations[getPostLang(other)] = getPostUrl(other);
    }
  }
  return translations;
};

export const filterPostsByLang = (
  posts: CollectionEntry<"blog">[],
  lang: Lang
) => posts.filter(post => getPostLang(post) === lang);

// Sections that exist in every language at the same path
const SHARED_SECTIONS = ["posts", "tags", "search", "about"];

export interface Alternate {
  lang: Lang;
  href: string;
  // false when the page has no real equivalent and we fall back to a section or home
  exact: boolean;
}

export const getAlternates = (url: URL, locals: App.Locals): Alternate[] => {
  const segments = url.pathname.split("/").filter(Boolean).slice(1);
  const section = segments[0];

  return LANGS.map(lang => {
    if (locals.translations) {
      const href = locals.translations[lang];
      return href
        ? { lang, href, exact: true }
        : { lang, href: `/${lang}/`, exact: false };
    }
    if (!section) return { lang, href: `/${lang}/`, exact: true };
    if (SHARED_SECTIONS.includes(section)) {
      return {
        lang,
        href: `/${lang}/${section}/`,
        exact: segments.length === 1,
      };
    }
    return { lang, href: `/${lang}/`, exact: false };
  });
};
