"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PROJECTS = [
  {
    id: "proj-1",
    title: "Bimantara Lelang",
    description:
      "Platform lelang online daring yang memungkinkan pengguna untuk melakukan penawaran pada berbagai aset secara real-time.",
    image: "/bimantara.png",
    url: "https://bimantara-lelang.web.app/",
    skills: ["React", "Firebase", "Tailwind CSS"],
    fullDescription:
      "Sebuah platform lelang yang dirancang untuk transparansi dan kemudahan akses. Dilengkapi dengan sistem penawaran real-time dan manajemen aset yang terstruktur.",
  },
  {
    id: "proj-2",
    title: "AsetQu",
    description:
      "Sistem manajemen aset digital yang membantu pengguna dalam pelacakan dan optimalisasi aset secara efisien.",
    image: "/asetqu.png",
    url: "https://www.asetqu.com/",
    skills: ["Next.js", "TypeScript"],
    fullDescription:
      "Platform pengelolaan aset yang berfokus pada kemudahan pengguna dalam memonitor status dan nilai aset mereka dalam satu dashboard terintegrasi.",
  },
  {
    id: "proj-3",
    title: "Preselix",
    description:
      "Solusi manajemen presensi atau kehadiran digital yang akurat untuk institusi dan perusahaan.",
    image: "/preselix.png",
    url: "https://preselix.id/",
    skills: ["Next.js", "NestJS", "Tailwind CSS"],
    fullDescription:
      "Sistem absensi modern yang mendukung rekapitulasi data otomatis dan integrasi laporan kehadiran guna meningkatkan kedisiplinan operasional.",
  },
  {
    id: "proj-4",
    title: "SMK Geologi Tenggarong",
    description:
      "Website profil resmi SMK Geologi Tenggarong untuk informasi akademik dan pendaftaran siswa baru.",
    image: "/smk-tenggarong.png",
    url: "https://lp-smk-geologi-tenggarong.vercel.app/",
    skills: ["Next.js", "Tailwind CSS"],
    fullDescription:
      "Landing page yang informatif mengenai program keahlian di SMK Geologi Tenggarong, fasilitas sekolah, serta berita terbaru seputar kegiatan pendidikan.",
  },
  {
    id: "proj-5",
    title: "PiliPilih",
    description:
      "Portal kurasi dan perbandingan produk untuk membantu konsumen membuat keputusan pembelian yang lebih cerdas.",
    image: "/pilipilih.png",
    url: "https://pilipilih.com/",
    skills: ["Next.js", "Tailwind CSS"],
    fullDescription:
      "Platform pemilihan produk yang mengumpulkan ulasan dan spesifikasi terbaik untuk membantu pengguna mendapatkan barang sesuai kebutuhan mereka.",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Proyek
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {PROJECTS.map((project) => (
            <li
              key={project.id}
              className="mb-12 cursor-pointer group-hover/list:data-[hover=false]:opacity-50 transition-opacity"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:-inset-x-6 lg:block lg:p-6 lg:rounded-md">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          aria-label={`${project.title} (opens modal)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {project.title}
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        {project.description}
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Teknologi yang digunakan:"
                      >
                        {project.skills.map((skill) => (
                          <li className="mr-1.5 mt-2" key={skill}>
                            <Badge
                              variant="secondary"
                              className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20"
                            >
                              {skill}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Image representation */}
                    <div className="z-10 sm:order-1 sm:col-span-2">
                      <div className="aspect-video w-full rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 overflow-hidden bg-slate-800 flex items-center justify-center relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] border-slate-700 bg-slate-800 text-slate-200">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-slate-100 flex items-center gap-2">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-slate-400 mt-2">
                      {project.fullDescription}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="aspect-video w-full rounded border-2 border-slate-700 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-slate-300">
                        Tech stack:{" "}
                      </span>
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-teal-400/10 text-teal-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-teal-400 text-teal-950 hover:bg-teal-400/90 h-10 py-2 px-4 shadow-sm group"
                      >
                        Kunjungi Proyek{" "}
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
