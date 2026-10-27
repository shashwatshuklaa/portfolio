import { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-8 border-b border-zinc-800 scroll-mt-16">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
