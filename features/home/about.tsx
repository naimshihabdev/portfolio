export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Pada tahun 2021, saya memutuskan untuk langsung terjun ke dunia
          pemrograman dan pengembangan web. Hingga saat ini, saya telah
          berkesempatan mengembangkan perangkat lunak untuk sebuah software
          house, dan perusahaan rintisan.
        </p>
        <p className="mb-4">
          Saat ini, fokus utama saya adalah mengembangkan produk dan pengalaman
          digital yang efisien dan user-friendly. Saya terutama bekerja dengan
          TypeScript, React, Next.js, dan NestJS.
        </p>
      </div>
    </section>
  );
}
