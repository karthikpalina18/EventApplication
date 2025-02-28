import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/EventApplication/Frontend/",  // Make sure this matches your repository name!
});
