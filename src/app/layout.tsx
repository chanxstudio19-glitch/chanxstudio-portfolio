import type { Metadata, Viewport } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CHAN X STUDIO — Independent Creative Technology Studio",
  description:
    "CHAN X Studio is an independent creative technology studio building software, AI experiences, automation and digital products. Founded by Kirunith.",
  keywords: [
    "CHAN X STUDIO",
    "Kirunith",
    "Creative Technology Studio",
    "Software Development",
    "AI Agents",
    "Automation Engines",
    "Digital Experiences",
  ],
  authors: [{ name: "Kirunith", url: "https://portfolio-kirunith.vercel.app/" }],
  creator: "Kirunith — CHAN X STUDIO",
  metadataBase: new URL("https://chan-x-studio.vercel.app"),
  openGraph: {
    title: "CHAN X STUDIO — We Build What We Imagine.",
    description:
      "Independent creative technology studio building software, AI experiences, automation and digital products.",
    url: "https://chan-x-studio.vercel.app",
    siteName: "CHAN X STUDIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHAN X STUDIO — Creative Technology Studio",
    description: "We build what we imagine. Software, AI experiences, automation, and digital products.",
    creator: "@kirunith",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080A09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#080A09] text-[#E8E8E3] min-h-screen relative selection:bg-[#1C2A22] selection:text-[#D4B978] font-sans`}
      >
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
