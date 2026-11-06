export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "es";

export const LANG_NAMES: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

// BCP 47 tags used to format dates
export const LANG_TAGS: Record<Lang, string> = {
  es: "es-BO",
  en: "en-US",
};

export const ui = {
  es: {
    "site.desc":
      "Ingeniero de software de Bolivia, escribiendo sobre software y lo que voy aprendiendo.",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.email": "Email",
    "nav.language": "Idioma",
    "nav.dark": "Modo oscuro",
    "nav.light": "Modo claro",
    "nav.themeTitle": "Cambia entre modo claro y oscuro",
    "home.empty": "Todavía no hay publicaciones en español.",
    "posts.title": "Publicaciones",
    "posts.desc": "Todos los artículos que publiqué.",
    "pagination.page": "página",
    "pagination.prev": "Anterior",
    "pagination.next": "Siguiente",
    "tags.title": "Etiquetas",
    "tags.desc": "Todas las etiquetas usadas en las publicaciones.",
    "tag.title": "Etiqueta:",
    "tag.desc": "Todos los artículos con la etiqueta",
    "search.title": "Buscar",
    "search.desc": "Buscá cualquier artículo ...",
    "search.placeholder": "Buscar...",
    "search.found": "Se encontraron",
    "search.result": "resultado",
    "search.results": "resultados",
    "search.for": "para",
    "post.backToTop": "Volver arriba",
    "post.share": "Compartir este post en:",
    "post.copy": "Copiar",
    "post.copied": "Copiado",
    "datetime.updated": "Actualizado:",
    "datetime.published": "Publicado:",
    "datetime.at": "a las",
  },
  en: {
    "site.desc":
      "Software engineer from Bolivia, writing about software and whatever I'm learning.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.email": "Email",
    "nav.language": "Language",
    "nav.dark": "Dark",
    "nav.light": "Light",
    "nav.themeTitle": "Toggles light & dark",
    "home.empty": "No posts in English yet.",
    "posts.title": "Posts",
    "posts.desc": "All the articles I've posted.",
    "pagination.page": "page",
    "pagination.prev": "Prev",
    "pagination.next": "Next",
    "tags.title": "Tags",
    "tags.desc": "All the tags used in posts.",
    "tag.title": "Tag:",
    "tag.desc": "All the articles with the tag",
    "search.title": "Search",
    "search.desc": "Search any article ...",
    "search.placeholder": "Search for anything...",
    "search.found": "Found",
    "search.result": "result",
    "search.results": "results",
    "search.for": "for",
    "post.backToTop": "Back to Top",
    "post.share": "Share this post on:",
    "post.copy": "Copy",
    "post.copied": "Copied",
    "datetime.updated": "Updated:",
    "datetime.published": "Published:",
    "datetime.at": "at",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof DEFAULT_LANG];
