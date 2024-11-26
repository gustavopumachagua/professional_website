import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        // Configura la estrategia de caché para todos los recursos.
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document", // HTML
            handler: "NetworkFirst", // Intenta cargar desde la red primero
            options: {
              cacheName: "html-cache",
              expiration: { maxEntries: 10, maxAgeSeconds: 24 * 60 * 60 }, // Cache por 1 día
            },
          },
          {
            urlPattern: ({ request }) =>
              ["style", "script", "worker"].includes(request.destination), // CSS, JS, SW
            handler: "CacheFirst", // Usa la caché primero
            options: {
              cacheName: "static-resources",
              expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 }, // Cache por 7 días
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image", // Imágenes
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 }, // Cache por 30 días
            },
          },
        ],
      },
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "Mi Aplicación",
        short_name: "App",
        description: "Una aplicación web progresiva",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icon_pwa.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon_pwa.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
