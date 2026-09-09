import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: `${portfolioData.personal.subheading} Portfolio of ${portfolioData.personal.name}, aspiring Software Engineer and final year CS student.`,
  keywords: [
    "Software Engineer Portfolio",
    "Computer Science Student",
    "New Grad SWE",
    "Full Stack Developer",
    "Backend Developer",
    "Distributed Systems",
    "Next.js",
    "TypeScript",
    "Go",
    "Python"
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | Software Engineer Portfolio`,
    description: portfolioData.personal.subheading,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05030a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans-modern bg-[#05030a] text-[#f4f4f6] antialiased selection:bg-[#a855f7] selection:text-white">
        {children}
      </body>
    </html>
  );
}
