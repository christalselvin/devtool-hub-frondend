import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");

mkdirSync(dist, { recursive: true });
copyFileSync(resolve(root, "robots.txt"), resolve(dist, "robots.txt"));
copyFileSync(resolve(root, "sitemap.xml"), resolve(dist, "sitemap.xml"));

console.log("SEO files copied to dist/: robots.txt, sitemap.xml");
