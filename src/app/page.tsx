import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AcademicHighlights from "@/components/AcademicHighlights";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const featuredProjects = portfolioData.projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#060b19] text-slate-200">
      <Navbar name={portfolioData.name} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8">
        <Introduction
          name={portfolioData.name}
          headline={portfolioData.headline}
        />

        {/* Game-like Chapter Timeline Rail */}
        <div className="relative border-l-2 border-[#1a2550] ml-1.5 sm:ml-3 pl-3.5 sm:pl-7 space-y-5 sm:space-y-7">
          <About about={portfolioData.about} />
          <Skills skills={portfolioData.skills} />
          <AcademicHighlights academics={portfolioData.academics} />
          <Achievements achievements={portfolioData.achievements} />
          <Projects projects={featuredProjects} showViewAll={true} />
          <Resume resume={portfolioData.resume} />
          <Contact contact={portfolioData.contact} />
        </div>
      </main>

      <Footer name={portfolioData.name} />
    </div>
  );
}
