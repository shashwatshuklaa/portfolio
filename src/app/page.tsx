import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import AcademicHighlights from "@/components/AcademicHighlights";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060b19] text-slate-200">
      <Navbar name={portfolioData.name} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-10 sm:space-y-14">
        <Introduction
          name={portfolioData.name}
          headline={portfolioData.headline}
        />

        {/* Game-like Chapter Timeline Rail */}
        <div className="relative border-l-2 border-[#1a2550] ml-1.5 sm:ml-3 pl-3.5 sm:pl-7 space-y-10 sm:space-y-14">
          <About about={portfolioData.about} />
          <AcademicHighlights academics={portfolioData.academics} />
          <Projects projects={portfolioData.projects} />
          <Resume resume={portfolioData.resume} />
          <Contact contact={portfolioData.contact} />
        </div>
      </main>

      <Footer name={portfolioData.name} />
    </div>
  );
}
