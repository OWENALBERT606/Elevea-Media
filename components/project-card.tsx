import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectProps } from "@/actions/projects";

interface ProjectCardProps {
  project: ProjectProps & { id: string };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
        {project.coverImage && (
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-foreground line-clamp-2">
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="default" className="shrink-0">
                Featured
              </Badge>
            )}
          </div>

          {project.clientName && (
            <p className="mb-2 text-sm text-muted-foreground">
              {project.clientName}
            </p>
          )}

          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.category && (
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
