import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="section-shell content-section projects-section" id="projects">
      <SectionHeader
        eyebrow="Projetos em destaque"
        title="Três projetos com naturezas diferentes, todos nascidos de problemas reais."
        align="center"
      >
        <p>
          A ideia aqui não é empilhar cards iguais. Cada projeto aparece no formato que combina com a história dele:
          produto de segurança, serviço público com dados reais e pesquisa aplicada.
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
                <a className="text-link" href={project.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                  {project.cta} <ArrowUpRight size={17} aria-hidden="true" />
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
                    <strong>Predicta</strong>
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
