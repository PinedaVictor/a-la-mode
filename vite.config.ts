import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

const root = resolve(__dirname, ".");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  plugins: [tanstackRouter(), react()],
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html")
      }
    }
  }
});
