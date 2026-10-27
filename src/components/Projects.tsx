import Link from "next/link";
import { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: Project[];
  showViewAll?: boolean;
}

export default function Projects({
  projects,
  showViewAll = false,
}: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 05
        </span>
        <span className="text-purple-400">//</span>
        <span className="text-slate-400">
          {showViewAll ? "FEATURED ARTIFACTS" : "CRAFTED ARTIFACTS"}
        </span>
      </div>

      <div className="pixel-panel rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-2.5">
          <h2 className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            {showViewAll ? "Featured Projects" : "Selected Projects"}
          </h2>
          <span className="font-mono text-[10px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            INVENTORY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {showViewAll && (
          <div className="pt-1 flex justify-end">
            <Link
              href="/projects"
              className="pixel-btn-cyan inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono font-bold text-xs uppercase tracking-wider rounded focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none transition-all"
            >
              <span>View all projects</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
