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
          Saya adalah pengembang perangkat lunak yang berfokus pada pembangunan
          sistem yang tidak hanya berfungsi secara teknis, tetapi juga
          memberikan pengalaman pengguna yang bermakna dan intuitif.
        </p>
        <p className="mb-4">
          Perjalanan saya dimulai pada tahun 2021, dan sejak saat itu saya telah
          berkolaborasi dengan berbagai tim—dari <i>software house</i> yang
          dinamis hingga <i>startup</i> yang bergerak cepat. Saya telah
          menangani berbagai tantangan teknis, mulai dari membangun platform
          lelang <i>real-time</i>, integrasi konsep <i>blockchain</i> untuk aset
          properti, hingga optimalisasi sistem manajemen internal perusahaan.
        </p>
        <p className="mb-4">
          Saya percaya bahwa teknologi terbaik adalah teknologi yang mampu
          menyederhanakan kompleksitas. Fokus utama saya adalah menulis kode
          yang bersih (<i>clean code</i>) dan performa tinggi menggunakan
          ekosistem JavaScript modern seperti <b>React</b>, <b>Next.js</b>, dan{" "}
          <b>NestJS</b>.
        </p>
        <p className="mb-4">
          Di luar urusan teknis, saya selalu antusias mempelajari bagaimana
          inovasi digital dapat membantu bisnis tumbuh lebih efisien. Jika Anda
          memiliki visi besar yang ingin diwujudkan menjadi produk yang solid,
          saya siap menjadi mitra pengembangan Anda.
        </p>
      </div>
    </section>
  );
}
