import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const copySeoFiles = () => ({
  name: "copy-seo-files",
  writeBundle() {
    const root = process.cwd();
    const dist = resolve(root, "dist");
    copyFileSync(resolve(root, "robots.txt"), resolve(dist, "robots.txt"));
    copyFileSync(resolve(root, "sitemap.xml"), resolve(dist, "sitemap.xml"));
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copySeoFiles(),
  ],
});
