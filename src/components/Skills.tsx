import * as Tabs from "@radix-ui/react-tabs";
import { skillAreas } from "../data/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="section-shell content-section skills-section" id="skills">
      <SectionHeader
        eyebrow="Experiência técnica"
        title="Minha stack junta aplicação, dados, IA, infraestrutura e segurança."
      >
        <p>
          Não é uma lista solta de ferramentas. É o conjunto que uso para criar, publicar, proteger, diagnosticar e
          manter soluções em ambientes reais.
        </p>
      </SectionHeader>

      <Tabs.Root className="skills-tabs" defaultValue={skillAreas[0].value} orientation="vertical" data-reveal>
        <Tabs.List className="skills-tab-list" aria-label="Áreas de experiência técnica">
          {skillAreas.map((area, index) => (
            <Tabs.Trigger className="skill-tab" value={area.value} key={area.value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {area.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {skillAreas.map((area) => (
          <Tabs.Content className="skills-panel" value={area.value} key={area.value}>
            <p className="project-kicker">Área selecionada</p>
            <h3>{area.title}</h3>
            <p>{area.summary}</p>
            <div className="chip-row">
              {area.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
}
