import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isRealUrl = (url?: string) =>
    Boolean(url) &&
    !url!.startsWith("[") &&
    (url!.startsWith("http://") ||
      url!.startsWith("https://") ||
      url!.startsWith("/"));

  const hasRealRepoLink = isRealUrl(project.link);
  const hasRealLiveLink = isRealUrl(project.liveUrl);

  return (
    <article className="p-3.5 sm:p-4 rounded-lg border-2 border-[#1c2754] bg-[#070e22] flex flex-col justify-between space-y-3 hover:border-[#273874] transition-colors shadow-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2 border-b border-[#141f42] pb-1.5">
          <h3 className="text-sm sm:text-base font-bold font-mono text-white">
            {hasRealLiveLink ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none rounded transition-colors"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
            ITEM
          </span>
        </div>

        {/* What the project does */}
        <p className="text-xs text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* My Contribution */}
        {project.contribution && (
          <div className="p-2 sm:p-2.5 rounded bg-[#0a122c] border border-[#182554] space-y-0.5">
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1">
              <span className="w-1 h-1 bg-yellow-400 shadow-[0_0_6px_#facc15]" />
              MY CONTRIBUTION:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.contribution}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-2.5 pt-1.5 border-t border-[#141f42]">
        {/* Technologies used */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-purple-950/70 border border-purple-500/40 text-purple-300 font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links: Repository and Live Demo */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          {project.link && (
            <div>
              {hasRealRepoLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded transition-colors text-[11px]"
                >
                  GitHub repository
                </a>
              ) : (
                <span className="text-slate-500 text-[11px]">
                  Code: {project.link}
                </span>
              )}
            </div>
          )}

          {project.liveUrl && (
            <div>
              {hasRealLiveLink ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-yellow-300 hover:text-yellow-200 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none rounded transition-colors text-[11px]"
                >
                  Live Demo
                </a>
              ) : (
                <span className="text-slate-500 text-[11px]">
                  Live: {project.liveUrl}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
