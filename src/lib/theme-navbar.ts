import type { APIContext } from "astro";
import { getEntry } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";

import starlightConfig from "virtual:starlight/user-config";
import userConfig from "virtual:starlight-theme-black-config";

const absoluteLinkRegex = /^https?:\/\//;

export interface ProcessedNavbarLink {
  label: string;
  link: string;
  attrs?: Record<string, unknown>;
}

async function getInternalPageLabel(slug: string): Promise<string> {
  const page = await getEntry("docs", slug);
  return page?.data.title ?? slug;
}

export async function getNavbarLinks(
  currentLocale: APIContext["currentLocale"],
): Promise<ProcessedNavbarLink[]> {
  if (!userConfig.navLinks || !Array.isArray(userConfig.navLinks)) return [];

  return Promise.all(
    userConfig.navLinks.map(async (item) => {
      let label = "";

      if ("label" in item && item.label) {
        label = item.label;
      } else if ("slug" in item) {
        label = await getInternalPageLabel(item.slug);
      }

      const rawLink = "link" in item ? item.link : `/${item.slug}`;

      const isAbsolute = absoluteLinkRegex.test(rawLink);
      const link =
        !isAbsolute && currentLocale
          ? getRelativeLocaleUrl(currentLocale, rawLink)
          : rawLink;

      return {
        label,
        link,
        ...(item.attrs ? { attrs: item.attrs } : {}),
      };
    }),
  );
}

// Keep TS happy when locales are unused in this site.
void starlightConfig;
