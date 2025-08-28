import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import copywriting from "./lib/copywriting/copywriting";
import "./globals.css";

// Cloudflare compatibility
// export const runtime = "edge";

// Dynamic metadata
export const metadata: Metadata = {
  title: copywriting.siteTitle,
  description: copywriting.siteDescription,
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
