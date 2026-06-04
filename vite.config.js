import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const cacheDir = process.env.LOCALAPPDATA
  ? path.join(process.env.LOCALAPPDATA, "My-portfolio", "vite-cache")
  : "node_modules/.vite";

export default defineConfig({
  cacheDir,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
});
