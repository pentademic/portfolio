import type { MetadataRoute } from "next";
import { sitePath } from "./site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adam Berrada | Systèmes embarqués et IA",
    short_name: "Adam Berrada",
    description: "Portfolio d'ingénierie en systèmes embarqués, IA embarquée et IoT.",
    start_url: sitePath("/"),
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#243640",
    icons: [
      { src: sitePath("/favicon-192.png"), sizes: "192x192", type: "image/png" },
      { src: sitePath("/favicon-512.png"), sizes: "512x512", type: "image/png" },
    ],
  };
}
