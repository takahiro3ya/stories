import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths"; // add

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [react(), tsconfigPaths()], // add
});
