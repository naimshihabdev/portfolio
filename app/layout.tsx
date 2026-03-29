import { MouseTracker } from "@/components/mouse-tracker";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Naim Shihab | Frontend Engineer",
  description:
    "Frontend Engineer yang berspesialisasi dalam React, Next.js, dan teknologi web modern. Membangun produk dan pengalaman digital yang efisien dan ramah pengguna.",
  keywords: [
    "Frontend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  openGraph: {
    title: "Naim Shihab | Frontend Engineer",
    description:
      "Portofolio Naim Shihab, seorang Frontend Engineer yang membangun produk dan pengalaman digital yang efisien dan ramah pengguna.",
    type: "website",
    url: "https://naimshihab.dev",
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
      className={`${inter.variable} h-full antialiased font-sans scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-400">
        <MouseTracker />
        {children}
      </body>
    </html>
  );
}
