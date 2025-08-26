import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // allow external access
    port: 8080,
    allowedHosts: [
      "fc937d58-f4d9-440e-84de-91eca273236d-00-2ryz23mp56n7x.riker.replit.dev",
      "localhost",
      "127.0.0.1",
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
