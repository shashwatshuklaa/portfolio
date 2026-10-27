import { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 03
        </span>
        <span className="text-purple-400">//</span>
        <span className="text-slate-400">CRAFTED ARTIFACTS</span>
      </div>

      <div className="pixel-panel rounded-xl p-6 sm:p-7 space-y-6">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-3">
          <h2 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
            Selected Projects
          </h2>
          <span className="font-mono text-[11px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            INVENTORY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
