import { MouseTracker } from "@/components/mouse-tracker";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Naim Shihab | Full-stack Developer",
  description:
    "Full-stack Developer yang berspesialisasi dalam React, Next.js, dan teknologi web modern. Membangun produk dan pengalaman digital yang efisien dan ramah pengguna.",
  keywords: [
    "Full-stack Developer",
    "Fullstack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Software Engineer",
    "Software Developer",
    "Software Engineer Indonesia",
    "Software Developer Indonesia",
    "Freelance Web Developer",
    "Freelance Backend Developer",
    "Freelance Frontend Developer",
    "Freelance Full-stack Developer",
    "Naim Shihab",
    "Programmer",
    "Programmer Indonesia",
    "Programmer Freelance",
    "Programmer Freelance Indonesia",
  ],
  openGraph: {
    title: "Naim Shihab | Full-stack Developer",
    description:
      "Portofolio Naim Shihab, seorang Full-stack Developer yang membangun produk dan pengalaman digital yang efisien dan ramah pengguna.",
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
