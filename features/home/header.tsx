"use client";

import { Maximize2, X } from "lucide-react";
import {
  GithubIcon,
  WhatsappIcon,
  InstagramIcon,
  EmailIcon,
} from "@/components/icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import mePhoto from "@/public/me.jpeg";

const NAV_ITEMS = [
  { name: "Tentang", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
];

export function Header() {
  const [activeHash, setActiveHash] = useState("#about");
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsZoomed(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isZoomed]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "skills", "about"];
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
        <div className="mb-6 block w-fit">
          <div
            className="group/avatar relative cursor-zoom-in overflow-hidden rounded-full border-2 border-teal-300/30 transition-all duration-300 hover:scale-105 hover:border-teal-300 hover:shadow-[0_0_20px_rgba(94,234,212,0.4)]"
            onClick={() => setIsZoomed(true)}
            role="button"
            aria-label="Perbesar foto profil"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsZoomed(true);
              }
            }}
          >
            <Image
              src={mePhoto}
              alt="Foto profil Naim Shihab"
              width={96}
              height={96}
              className="h-24 w-24 object-cover"
              preload={true}
              placeholder="blur"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover/avatar:opacity-100">
              <Maximize2 className="h-6 w-6 text-teal-300 animate-pulse" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Naim Shihab</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Fullstack Web Developer
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
            <GithubIcon className="h-6 w-6" />
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
            <WhatsappIcon className="h-6 w-6" />
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
            <InstagramIcon className="h-6 w-6" />
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
            <EmailIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>

      {mounted && typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {isZoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md cursor-zoom-out"
                  onClick={() => setIsZoomed(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-sm w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-teal-500/5 cursor-default"
                  >
                    {/* Close Button */}
                    <button
                      type="button"
                      className="group absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                      onClick={() => setIsZoomed(false)}
                      aria-label="Tutup"
                    >
                      <X className="h-4 w-4 transition-transform group-hover:rotate-90 duration-300" />
                    </button>

                    {/* Image Container */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-800 shadow-[0_0_30px_rgba(94,234,212,0.1)]">
                      <Image
                        src={mePhoto}
                        alt="Naim Shihab"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 384px"
                        placeholder="blur"
                      />
                    </div>

                    {/* Title & Info */}
                    <div className="mt-5 text-center">
                      <h3 className="text-xl font-bold tracking-tight text-slate-200">
                        Naim Shihab
                      </h3>
                      <p className="mt-1 text-sm font-medium tracking-wide text-teal-300 uppercase">
                        Fullstack Web Developer
                      </p>
                      <div className="mt-4 flex justify-center gap-4 border-t border-slate-800/60 pt-4 text-xs text-slate-400">
                        <span>📍 Indonesia</span>
                        <span className="text-slate-700">•</span>
                        <span>💻 Open for opportunities</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
