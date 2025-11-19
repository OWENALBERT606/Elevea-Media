import { ProjectProps } from "@/actions/projects";

interface ProjectDetailProps {
  project: ProjectProps & { id: string };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          {project.title}
        </h1>
        {project.clientName && (
          <p className="text-lg text-muted-foreground">
            Client: <span className="font-semibold text-foreground">{project.clientName}</span>
          </p>
        )}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-base leading-relaxed text-foreground">
          {project.description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {project.results && (
          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Results
            </h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {project.results}
              </p>
            </div>
          </div>
        )}

        {project.deliverables && (
          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Deliverables
            </h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {project.deliverables}
              </p>
            </div>
          </div>
        )}
      </div>

      {project.category && (
        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Category
          </h2>
          <p className="rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground w-fit">
            {project.category}
          </p>
        </div>
      )}

      {project.projectUrl && (
        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Project Link
          </h2>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Visit Project →
          </a>
        </div>
      )}
    </div>
  );
}
