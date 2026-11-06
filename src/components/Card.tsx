import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import type { Lang } from "@i18n/ui";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  lang: Lang;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  lang,
}: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-medium leading-snug",
  };

  return (
    <li className="my-7">
      <a
        href={href}
        className="inline-block text-skin-accent decoration-1 underline-offset-4 hover:underline focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime
        pubDatetime={pubDatetime}
        modDatetime={modDatetime}
        lang={lang}
        className="mt-1"
      />
      {description && <p className="text-sm opacity-70">{description}</p>}
    </li>
  );
}
