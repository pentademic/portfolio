import type { Metadata } from "next";
import "./globals.css";
import { siteOrigin, sitePath } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "Adam Berrada | Systèmes embarqués, robotique et IA",
    template: "%s | Adam Berrada",
  },
  description: "Portfolio technique d'Adam Berrada : architecture, code et essais en firmware STM32, robotique, IA embarquée et IoT.",
  keywords: ["Adam Berrada", "systèmes embarqués", "STM32", "IA embarquée", "IoT", "robotique"],
  authors: [{ name: "Adam Berrada", url: "https://github.com/pentademic" }],
  creator: "Adam Berrada",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Adam Berrada | Systèmes embarqués, robotique et IA",
    description: "Architecture, code et essais de projets STM32, de robotique, d'IA embarquée et d'IoT.",
    images: [{ url: sitePath("/og.png"), width: 1200, height: 630, alt: "Adam Berrada, systèmes embarqués, robotique et IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Berrada | Systèmes embarqués, robotique et IA",
    description: "Architecture, code et essais de projets STM32, de robotique, d'IA embarquée et d'IoT.",
    images: [sitePath("/og.png")],
  },
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
    apple: sitePath("/apple-touch-icon.png"),
  },
  manifest: sitePath("/manifest.webmanifest"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
