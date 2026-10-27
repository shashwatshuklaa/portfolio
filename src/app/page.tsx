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
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Navbar name={portfolioData.name} />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 space-y-12">
        <Introduction
          name={portfolioData.name}
          headline={portfolioData.headline}
        />
        <About about={portfolioData.about} />
        <AcademicHighlights academics={portfolioData.academics} />
        <Projects projects={portfolioData.projects} />
        <Resume resume={portfolioData.resume} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
