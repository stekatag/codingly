import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import { remarkReadingTime } from "./src/utils/all";
import rehypePluginImageNativeLazyLoading from "rehype-plugin-image-native-lazy-loading";

import favicons from "astro-favicons";

export default defineConfig({
  site: "https://codingly.netlify.app",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), mdx(), sitemap({
    filter: (page) => page !== "https://codingly.netlify.app/admin",
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
    customPages: [
      "https://codingly.netlify.app/blog",
      "https://codingly.netlify.app/about",
      "https://codingly.netlify.app/contact",
    ],
  }), icon(), favicons()],
});