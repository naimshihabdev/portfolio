import { About } from "@/features/home/about";
import { Experience } from "@/features/home/experience";
import { Header } from "@/features/home/header";
import { Projects } from "@/features/home/projects";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 selection:bg-teal-300/30 selection:text-teal-300">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            {/* <Footer /> */}
          </main>
        </div>
      </div>
    </>
  );
}
