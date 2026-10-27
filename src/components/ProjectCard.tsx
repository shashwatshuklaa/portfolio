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
    <article className="p-5 rounded border border-zinc-800 bg-zinc-900/50 flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs rounded border border-zinc-700 bg-zinc-800 text-zinc-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          {isRealUrl ? (
            <a
              href={project.link}
              className="inline-block text-xs font-semibold text-zinc-300 underline hover:text-white"
            >
              {project.link}
            </a>
          ) : (
            <span className="inline-block text-xs text-zinc-400">
              {project.link}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
