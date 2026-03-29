import { Badge } from "@/components/ui/badge";

const EXPERIENCES = [
  {
    id: "exp-1",
    role: "Freelance Frontend Developer",
    company: "PT. Aset Harapan Bangsa",
    url: "https://www.asetqu.com/",
    startDate: "Agt 2025",
    endDate: "Sekarang",
    description:
      "Bertanggung jawab dalam pengembangan aplikasi AsetQu. Mengerjakan berbagai proyek pengembangan web dengan konsep blockchain dan sistem lelang properti yang kompleks.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "PT. Grocee Teknologi Indonesia",
    url: "https://pilipilih.com/",
    startDate: "Jan 2024",
    endDate: "Sekarang",
    description:
      "Mengembangkan aplikasi marketplace PiliPilih. Bertanggung jawab dalam membangun antarmuka web untuk berbagai peran sistem, termasuk role pengguna (web-pilipilih), distributor, hingga sistem ekspedisi.",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "exp-3",
    role: "Fullstack Developer Intern",
    company: "PT. Grocee Teknologi Indonesia",
    url: "https://grocee.id/",
    startDate: "Agt 2023",
    endDate: "Des 2023",
    description:
      "Mengikuti program Magang Bersama Kampus Merdeka (MBKM) dari pemerintah. Mempelajari dan mengimplementasikan teknologi full-stack dalam pengembangan aplikasi HooCom sebagai bagian dari pembelajaran intensif.",
    skills: ["React", "NestJS", "MySQL", "Docker", "TypeScript"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Pengalaman
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {EXPERIENCES.map((exp) => (
            <li
              key={exp.id}
              className="mb-12 cursor-default group-hover/list:data-[hover=false]:opacity-50 transition-opacity"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:-inset-x-6 lg:block lg:p-6 lg:rounded-md">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={`${exp.startDate} ke ${exp.endDate}`}
                >
                  {exp.startDate} — {exp.endDate}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div className="text-base font-medium leading-tight text-slate-200">
                      {exp.role} ·{" "}
                      <span className="inline-block">{exp.company}</span>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {exp.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Teknologi yang digunakan"
                  >
                    {exp.skills.map((skill) => (
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
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
