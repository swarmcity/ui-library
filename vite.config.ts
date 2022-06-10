import preact from "@preact/preset-vite";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    preact(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Swarm City UI Library",
      formats: ["es", "umd"],
      fileName: (format) => `ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ["preact"],
      output: {
        globals: {
          preact: "preact",
        },
      },
    },
  },
});
