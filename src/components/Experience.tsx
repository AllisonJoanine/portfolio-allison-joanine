import { experiences } from "../data/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section className="section-shell content-section experience-section" id="experience">
      <SectionHeader
        eyebrow="Experiência profissional"
        title="A parte forte da minha história é juntar código com operação real."
      >
        <p>
          Meu percurso passa por produto próprio, suporte corporativo, infraestrutura, segurança de redes e
          desenvolvimento. Isso me ajuda a pensar em aplicações que precisam funcionar fora do ambiente ideal.
        </p>
      </SectionHeader>

      <div className="experience-list" data-reveal>
        {experiences.map((experience, index) => (
          <article className="experience-card" key={`${experience.company}-${experience.role}`}>
            <div className="experience-card__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{experience.period}</strong>
            </div>
            <div className="experience-card__body">
              <p className="project-kicker">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p>{experience.summary}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
