import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KINARYALOKA Digital Studio — Solusi Digital yang Nyata",
  description:
    "Membantu pelaku UMKM bertransformasi digital — rapi, jelas, dan bisa dipakai sehari-hari. Dari sistem reservasi simpel hingga full digital package.",
  icons: {
    icon: [
      { url: "/logo_kinaryaloka.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo_kinaryaloka.png", type: "image/png" },
    ],
  },
  keywords: [
    "web design",
    "sistem reservasi",
    "UMKM digital",
    "website bisnis",
    "jasa web",
    "KINARYALOKA Digital Studio",
  ],
  authors: [{ name: "KINARYALOKA Digital Studio", url: "https://kinaryalokadigitalstudio.com" }],
  openGraph: {
    title: "KINARYALOKA Digital Studio — Solusi Digital yang Nyata",
    description:
      "Partner digital UMKM — dari sistem reservasi hingga full branding. Rapi, jelas, dan kepakai.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${syne.variable} ${outfit.variable} font-outfit antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
