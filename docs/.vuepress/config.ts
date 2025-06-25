
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';

export default {
  bundler: viteBundler(),
  base: "/nim-lang-example",
  title: "NIM Language Example",
  description: "NIM Language Example",
  dest: "public",
  theme: defaultTheme({
    // set theme config here
    sidebar: ["/"]
  })
};
