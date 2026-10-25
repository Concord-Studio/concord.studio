// @ts-check

import { fileURLToPath } from "node:url";
import solid from "@astrojs/solid-js";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeBlack from "starlight-theme-black";
import referenceIndex from "./src/sidebar.json" with { type: "json" };

/** @param {Array<Record<string, any>>} entries */
function starlightReference(entries) {
  return entries.map((entry) => {
    if (Array.isArray(entry.items)) {
      return {
        label: entry.label,
        items: entry.items.map((item) => ({
          slug: item.route ?? item.slug,
        })),
      };
    }
    return { slug: entry.route ?? entry.slug };
  });
}

const starlightThemeBlackRoot = fileURLToPath(
  new URL("./node_modules/starlight-theme-black/", import.meta.url),
);

// https://astro.build/config
export default defineConfig({
  site: "https://concord.studio",
  vite: {
    resolve: {
      alias: {
        "starlight-theme-black/libs/config": `${starlightThemeBlackRoot}libs/config.ts`,
        "starlight-theme-black/components/MarkdownActions.astro": `${starlightThemeBlackRoot}components/MarkdownActions.astro`,
      },
    },
  },
  integrations: [
    solid(),
    starlight({
      logo: {
        light: "./src/assets/light-logo.svg",
        dark: "./src/assets/dark-logo.svg",
		replacesTitle: true,
		alt: "Concord",
      },
	  customCss: [
        './src/styles/custom.css',
      ],
      plugins: [
        starlightThemeBlack({
          docs: {
            showMarkdownActions: {
              agents: {
                claude: false,
                chatgpt: false,
                perplexity: false,
                v0: false,
                scira: false,
              },
            },
          },
        }),
      ],
      title: "Concord",
      components: {
        // Theme mobile menu only lists top-level sidebar links; use our SiteTitle stack instead.
        SiteTitle: "./src/components/SiteTitle.astro",
        Sidebar: "./src/components/Sidebar.astro",
        // Page title styles live in @layer black so concord-layer overrides can win.
        PageTitle: "./src/components/PageTitle.astro",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Concord-Studio/concord",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [{ slug: "guides/get-started" }],
        },
        {
          label: "Basics",
          items: [
            { slug: "guides/components" },
            { slug: "guides/entities" },
            { slug: "guides/systems" },
            { slug: "guides/worlds" },
            { slug: "guides/why-ecs" },
          ],
        },
        {
          label: "Intermediate",
          items: [
            { slug: "guides/tips-and-tricks" },
            { slug: "guides/making-a-game" },
            { slug: "guides/cloning-a-component" },
            { slug: "guides/entity-keys-and-resources" },
            { slug: "guides/serialization" },
            { slug: "guides/loading-namespaces" },
            { slug: "guides/sorting-pools" },
            { slug: "guides/component-removed" },
            { slug: "guides/pool-callbacks" },
            { slug: "guides/targeted-emits" },
          ],
        },
        {
          label: "Advanced",
          items: [
            { slug: "guides/tweens" },
            { slug: "guides/uis" },
            { slug: "guides/cloning-an-entity" },
            { slug: "guides/reusing-entities" },
            { slug: "guides/before-and-after-events" },
            { slug: "guides/pool-flushing-and-timing" },
            { slug: "guides/custom-pools" },
            { slug: "guides/populate-context" },
          ],
        },
        {
          label: "Reference",
          items: starlightReference(referenceIndex),
        },
      ],
    }),
  ],
});
