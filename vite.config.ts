import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("@headlessui/react")) {
            return "headlessui-react";
          }
          if (id.includes("@hookform/resolvers")) {
            return "hookform-resolvers";
          }
          if (id.includes("@react-input/mask")) {
            return "react-input-mask";
          }
          if (id.includes("@tanstack/react-query")) {
            return "react-query";
          }
          if (id.includes("clsx")) {
            return "clsx";
          }
          if (id.includes("less")) {
            return "less";
          }
          if (id.includes("react")) {
            return "react";
          }
          if (id.includes("react-dom")) {
            return "react-dom";
          }
          if (id.includes("react-hook-form")) {
            return "react-hook-form";
          }
          if (id.includes("react-loading-skeleton")) {
            return "react-loading-skeleton";
          }
          if (id.includes("react-router")) {
            return "react-router";
          }
          if (id.includes("zod")) {
            return "zod";
          }
          return null;
        },
      },
    },
  },
  plugins: [react()],
});
