import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectCategory } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visibleProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section className="section-shell content-section" id="projects">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Cases e Projetos</p>
        <h2>Projetos que conectam tecnologia a problemas reais.</h2>
        <p>Cada card mostra o problema, a solucao e as tecnologias usadas para transformar ideia em produto.</p>
      </div>

      <div className="filter-row" aria-label="Filtros de projetos">
        {projectFilters.map((item) => (
          <button
            className={filter === item.value ? "is-active" : ""}
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article className={`premium-card project-card ${project.featured ? "is-featured" : ""}`} key={project.name}>
            <div className="project-meta">
              <span>{project.categoryLabel}</span>
              <ExternalLink size={18} aria-hidden="true" />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="problem-box">
              <strong>Problema que resolve</strong>
              <span>{project.problem}</span>
            </div>
            <div className="chip-row">
              {project.technologies.map((tech) => (
                <b key={tech}>{tech}</b>
              ))}
            </div>
            <a className="button secondary" href={project.href} target="_blank" rel="noreferrer">
              Ver projeto
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
