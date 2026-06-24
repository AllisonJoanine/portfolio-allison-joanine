import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="section-shell content-section projects-section" id="projects">
      <SectionHeader
        eyebrow="Projetos em destaque"
        title="Projetos que unem full stack, IA, infraestrutura e aplicação real."
        align="center"
      >
        <p>
          Meus principais projetos mostram produto, dados, segurança, automação e inteligência artificial: LogiGuard,
          City Votorantim, LeiFácil, BladeWise e Predicta.
        </p>
      </SectionHeader>

      <div className="project-stack">
        {projects.map((project, index) => {
          const isExternal = project.href.startsWith("http");

          return (
            <article className={`project-story project-story-${project.layout}`} data-reveal key={project.name}>
              <div className="project-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-copy">
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <strong>{project.highlight}</strong>
                <div className="chip-row" aria-label={`Tecnologias do projeto ${project.name}`}>
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <span className="text-link__label">{project.cta}</span>
                  <span className="text-link__rule" aria-hidden="true" />
                  <span className="text-link__mark">
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </a>
              </div>

              <div className="project-visual" aria-hidden={project.image ? undefined : "true"}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt ?? `Imagem do projeto ${project.name}`} loading="lazy" />
                ) : (
                  <div className="sensor-board">
                    <span />
                    <span />
                    <span />
                    <strong>{project.visualLabel ?? project.name}</strong>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
