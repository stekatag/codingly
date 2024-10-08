import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import { remarkReadingTime } from "./src/utils/all";
import rehypePluginImageNativeLazyLoading from "rehype-plugin-image-native-lazy-loading";

export default defineConfig({
  site: "https://codingly.netlify.app/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
