import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      template: {
        compilerOptions: {
          // treat all components starting with `my-lit` as custom elements
          isCustomElement: (tag) => tag.startsWith("matterport-viewer"),
        },
      },
    }),
  ],
});
