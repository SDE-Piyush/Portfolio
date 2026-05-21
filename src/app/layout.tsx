import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/portfolio";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { GlowCursor } from "@/components/GlowCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.title}`,
  description: personal.tagline,
  keywords: [
    "Piyush Kumar",
    "Full Stack Developer",
    "MERN",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} | Portfolio`,
    description: personal.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">
        <AmbientBackground />
        <GlowCursor />
        {children}
      </body>
    </html>
  );
}
