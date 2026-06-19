import { skillGroups } from "../data/skills";

export function TechStack() {
  return (
    <section className="section-shell content-section" id="stack">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Stack Tecnologica</p>
        <h2>Tecnologias organizadas por impacto, nao por vitrine.</h2>
        <p>Do frontend ao deploy, minha stack combina produto, infraestrutura e IA aplicada.</p>
      </div>

      <div className="stack-grid">
        {skillGroups.map((group, index) => (
          <article className="premium-card stack-card" key={group.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="chip-row">
              {group.skills.map((skill) => (
                <b key={skill}>{skill}</b>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
