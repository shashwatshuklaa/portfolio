import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: "Projects | Student Portfolio",
  description: "All projects and technical artifacts",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060b19] text-slate-200">
      <Navbar name={portfolioData.name} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-5">
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded transition-colors"
          >
            ← Back to Overview
          </Link>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
              ARCHIVE
            </span>
            <span className="text-purple-400">{"//"}</span>
            <span className="text-slate-400">ALL CRAFTED ARTIFACTS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
            All Projects
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            A comprehensive inventory of personal projects, academic coursework, and technical artifacts.
          </p>
        </div>

        <div className="pixel-panel rounded-xl p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1c2754] pb-2.5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-300">
              COMPLETE INVENTORY
            </span>
            <span className="font-mono text-[10px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
              {portfolioData.projects.length} ITEMS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer name={portfolioData.name} />
    </div>
  );
}
