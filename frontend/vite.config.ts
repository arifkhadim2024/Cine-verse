import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { fileURLToPath } from "url";

export default defineConfig(() => {
  return {
    plugins: [
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
      }),
      react(),
      tailwindcss(),
      {
        name: "express-backend",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith("/api")) {
              try {
                // Dynamically import the backend Express app via Vite's ssrLoadModule
                // This ensures compilation/hot-reloading of backend TypeScript files
                const { default: app } = await server.ssrLoadModule("../backend/src/index.ts");
                app(req, res, next);
              } catch (err) {
                next(err);
              }
            } else {
              next();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: {
      host: "::",
      port: 8080,
    },
  };
});
