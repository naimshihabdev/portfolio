"use client";

import { Code, Phone, Camera, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Tentang", href: "#about" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
];

export function Header() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHash(`#${section}`);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Naim Shihab</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Fullstack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Saya membangun produk dan pengalaman digital yang efisien dan ramah
          pengguna.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group flex items-center py-3 ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-focus-visible:w-16 group-focus-visible:bg-slate-200 group-hover:w-16 group-hover:bg-slate-200 ${
                        isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest group-focus-visible:text-slate-200 group-hover:text-slate-200 ${
                        isActive ? "text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Media sosial"
      >
        <li className="text-xs shrink-0">
          <Link
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://github.com/naimshihabdev"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (buka di tab baru)"
          >
            <span className="sr-only">GitHub</span>
            <Code className="h-6 w-6" />
          </Link>
        </li>
        <li className="text-xs shrink-0">
          <Link
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://wa.me/6285824528625"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp (buka di tab baru)"
          >
            <span className="sr-only">WhatsApp</span>
            <Phone className="h-6 w-6" />
          </Link>
        </li>
        <li className="text-xs shrink-0">
          <Link
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://www.instagram.com/naiimshihab/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (buka di tab baru)"
          >
            <span className="sr-only">Instagram</span>
            <Camera className="h-6 w-6" />
          </Link>
        </li>
        <li className="text-xs shrink-0">
          <Link
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="mailto:naimshihab.dev@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email (buka di tab baru)"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
