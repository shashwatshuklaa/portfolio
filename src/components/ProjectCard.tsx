import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isRealUrl =
    Boolean(project.link) &&
    !project.link.startsWith("[") &&
    (project.link.startsWith("http://") ||
      project.link.startsWith("https://") ||
      project.link.startsWith("/"));

  return (
    <article className="p-5 rounded-lg border-2 border-[#1c2754] bg-[#070e22] flex flex-col justify-between space-y-4 hover:border-[#273874] transition-colors shadow-sm">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2 border-b border-[#141f42] pb-2">
          <h3 className="text-base sm:text-lg font-bold font-mono text-white">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
            ITEM
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="space-y-4 pt-2 border-t border-[#141f42]">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-purple-950/70 border border-purple-500/40 text-purple-300 font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          {isRealUrl ? (
            <a
              href={project.link}
              className="inline-block text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
            >
              {project.link}
            </a>
          ) : (
            <span className="inline-block text-xs font-mono text-slate-500">
              {project.link}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
