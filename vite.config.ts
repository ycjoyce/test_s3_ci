import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
import { version } from "./package.json";

declare const __dirname: string;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        test: resolve(__dirname, "test.html"),
      },
      output: {
        entryFileNames: `js/[name]_v${version}.js`,
        assetFileNames(assetInfo) {
          return assetInfo.name.includes("css")
            ? `css/[name]_v${version}.css`
            : `[name]_v${version}[extname]`;
        },
        chunkFileNames() {
          return `js/chunk/[name]_v${version}.js`;
        },
      },
    },
  },
});
