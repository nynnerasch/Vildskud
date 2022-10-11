// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
<<<<<<< HEAD
        events: resolve(__dirname, "src/events.html"),
        vaermed: resolve(__dirname, "src/vaermed.html"),
        festivalen: resolve(__dirname, "src/Festivalen.html"),
        kontakt: resolve(__dirname, "src/Kontakt.html"),
        forestillinger: resolve(__dirname, "src/forestillinger.html"),
=======
        vaermed: resolve(__dirname, "src/vaermed.html"),

>>>>>>> 236bf81bd7101912b3e9d44e61bf4bdadbd7b8fd
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
