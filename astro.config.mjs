import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import { remarkReadingTime } from "./src/utils/all";
import rehypePluginImageNativeLazyLoading from "rehype-plugin-image-native-lazy-loading";

import favicons from "astro-favicons";

export default defineConfig({
  site: "https://codingly.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    extendDefaultPlugins: true,
  },
  integrations: [mdx(), sitemap({
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