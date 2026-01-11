import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This ensures proper routing during development
    historyApiFallback: true,
  },
  build: {
    // Generate a _redirects file for Netlify or similar hosts
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
