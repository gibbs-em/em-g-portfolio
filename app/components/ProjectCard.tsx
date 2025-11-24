import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  imageSrc,
  githubUrl = "#",
  demoUrl = "#",
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Image src={imageSrc} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={githubUrl} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            GitHub
          </a>
          <a href={demoUrl} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

