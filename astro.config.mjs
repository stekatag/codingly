import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon"; // Ensure this package is still compatible

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://codingly.netlify.app/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
