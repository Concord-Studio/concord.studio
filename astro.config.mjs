// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeBlack from "starlight-theme-black";

// https://astro.build/config
export default defineConfig({
  site: "https://concord.studio",
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
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
