import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHAN X STUDIO — Independent Creative Technology Studio",
  description:
    "CHAN X Studio is an independent creative technology studio building software, AI experiences, automation and digital products. Founded by Kirunith.",
  keywords: [
    "CHAN X Studio",
    "Kirunith",
    "Creative Technology",
    "Software Development",
    "AI Applications",
    "Automation Systems",
    "Digital Products",
  ],
  openGraph: {
    title: "CHAN X STUDIO — Independent Creative Technology Studio",
    description:
      "We build what we imagine. Independent technology studio creating software, AI, automation and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080A09] text-[#E8E8E3] font-sans overflow-x-hidden selection:bg-[#1C2A22] selection:text-[#D4B978]">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
