# edsonlazo.github.io

Personal website and blog of Edson Lazo, a software engineer from Bolivia. Live at [edsonlazo.com](https://edsonlazo.com/).

The site is built with [Astro](https://astro.build/), starting from the [AstroPaper](https://github.com/satnaing/astro-paper) theme and trimmed down to a minimal layout: the home page lists every post directly, with no header nav.

## Pages

- `/` — short intro, site links, and the full list of posts
- `/about/` — about me
- `/posts/<slug>/` — individual posts
- `/tags/` — posts grouped by tag
- `/rss.xml` — RSS feed

## Writing a post

Posts are Markdown files in `src/content/blog/`. Each one needs frontmatter like this:

```yaml
---
title: My post title
description: One-line summary shown under the title on the home page.
pubDatetime: 2026-10-31T12:00:00Z
tags:
  - backend
draft: false
---
```

The full schema is in `src/content/config.ts`. Posts with `draft: true` are not published, and posts with a future `pubDatetime` stay hidden until that time.

## Running locally

Requires Node.js 18.17.1+ or 20.3+.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

| Command                | Action                                                |
| :--------------------- | :---------------------------------------------------- |
| `npm run dev`          | Start the local dev server                            |
| `npm run build`        | Build the site to `./dist/` and optimize it (Jampack) |
| `npm run preview`      | Preview the production build locally                  |
| `npm run format`       | Format code with Prettier                             |
| `npm run format:check` | Check formatting                                      |
| `npm run lint`         | Lint with ESLint                                      |
| `npm run sync`         | Regenerate Astro's TypeScript types                   |

A pre-commit hook (Husky + lint-staged) runs Prettier on staged files.

## Project structure

```text
src/
├── components/   UI pieces (post list item, site links, footer, ...)
├── content/blog/ blog posts in Markdown
├── layouts/      page layouts (base, post, about, post lists)
├── pages/        routes (home, about, posts, tags, RSS, ...)
├── styles/       global styles and light/dark colour variables
└── config.ts     site title, author, URL and social links
public/           static files served as-is (favicon, theme script, ...)
```

Site-wide settings such as the title and social links live in `src/config.ts`. Colours for the light and dark themes are CSS variables in `src/styles/base.css`.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yaml`, served on the custom domain `edsonlazo.com`.

## Stack

[Astro](https://astro.build/), [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/) (for a few components), [Tailwind CSS](https://tailwindcss.com/), and [Prettier](https://prettier.io/).

## License

MIT. Based on [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing — see [LICENSE](LICENSE).
