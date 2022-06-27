import { defineConfig } from 'astro/config';
import nodejs from "@astrojs/node"
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  adapter: nodejs()
});