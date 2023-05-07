import { SiteItem } from "./list/SiteItem.tsx";
import type { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { LoaderReturnType } from "$live/types.ts";

export interface Props {
  title: string;
  tableHeader: {
    pagespeed: string;
    name: string;
    website: string;
    poweredBy: string;
  };
  footer: {
    text: string;
    linkText?: string;
    linkHref?: string;
  };
  hideFavicons?: boolean;
  sites: LoaderReturnType<Site[]>;
}

export default function RankingList({
  title,
  hideFavicons = false,
  tableHeader,
  footer,
  sites = [],
}: Props) {
  const { pagespeed, name, website, poweredBy } = tableHeader;

  return (
    <div class="min-h-[calc(100vh-98px)] text-zinc-100 flex justify-between flex-col max-w-screen-xl px-6 md:px-10 mx-auto">
      <div>
        <h1 class="text-[9vw] sm:text-[10vw] xl:text-[7vw] leading-[9vw] sm:leading-[10vw] xl:leading-[7vw] font-bold text-almost-white text-center mb-10">
          {title}
        </h1>
        {sites.length
          ? (
            <table class="w-full text-left table-auto border-spacing-1">
              <thead class="md:table-header-group hidden">
                <th></th>
                <th class="font-semibold text-base text-center">{pagespeed}</th>
                <th class="font-semibold text-base">{name}</th>
                <th class="font-semibold text-base">{website}</th>
                <th class="font-semibold text-base text-center">{poweredBy}</th>
              </thead>
              <tbody class="">
                {sites.map((site, index) => (
                  <SiteItem
                    site={site}
                    hideFavicons={hideFavicons}
                    key={index}
                    position={index + 1}
                  />
                ))}
              </tbody>
            </table>
          )
          : null}
      </div>
      <footer class="py-8 relative">
        <div class="pointer-events-none absolute bg-linear-shadowing h-72 w-screen bottom-full left-1/2 -translate-x-1/2" />
        <p class="text-almost-white text-[4vw] xl:text-[3vw] text-center">
          {footer.text} {footer.linkHref && footer.linkText
            ? (
              <a class="text-secondary" href={footer.linkHref}>
                {footer.linkText}
              </a>
            )
            : null}
        </p>
      </footer>
    </div>
  );
}
