import Image from "next/image";

const SKILLS = [
  { name: "JavaScript", slug: "js" },
  { name: "TypeScript", slug: "ts" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Tailwind CSS", slug: "tailwind" },
  { name: "NestJS", slug: "nestjs" },
  { name: "Docker", slug: "docker" },
  { name: "MySQL", slug: "mysql" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Keahlian
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 p-4 text-center transition-all hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-800 lg:p-6"
            >
              <div className="relative mb-3 flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
                <Image
                  src={`https://skillicons.dev/icons?i=${skill.slug}`}
                  alt={skill.name}
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  unoptimized
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-semibold tracking-wide text-slate-300 transition-colors group-hover:text-teal-300 sm:text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
