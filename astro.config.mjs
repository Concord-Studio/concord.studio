// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeBlack from "starlight-theme-black";
import { fileURLToPath } from "node:url";
import referenceSidebar from "./src/sidebar.json" with { type: "json" };

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
          navLinks: [
            {
              label: "Home",
              link: "/",
            },
          ],
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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Get Started", slug: "guides/get-started" },
          ],
        },
        {
          label: "Reference",
          items: referenceSidebar,
        },
      ],
    }),
  ],
});
