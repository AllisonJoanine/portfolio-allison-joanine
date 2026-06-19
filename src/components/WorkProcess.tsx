import { Brain, CloudUpload, DraftingCompass, Lightbulb, RefreshCcw, Route, Settings2 } from "lucide-react";

type WorkStep = {
  title: string;
  text: string;
  Icon: typeof Lightbulb;
};

const steps: WorkStep[] = [
  { title: "Entendimento", text: "Mapeio o problema, usuario, contexto e objetivo.", Icon: Lightbulb },
  { title: "Planejamento", text: "Defino arquitetura, fluxo, dados e prioridades.", Icon: Route },
  { title: "Prototipo", text: "Valido interface, jornadas e experiencia de uso.", Icon: DraftingCompass },
  { title: "Desenvolvimento Full Stack", text: "Construo frontend, backend, APIs e banco.", Icon: Settings2 },
  { title: "IA aplicada", text: "Integro automacoes, modelos, analise e visao computacional.", Icon: Brain },
  { title: "Deploy", text: "Publico, configuro e deixo pronto para uso real.", Icon: CloudUpload },
  { title: "Melhoria continua", text: "Ajusto com feedback, metricas e novas necessidades.", Icon: RefreshCcw }
];

export function WorkProcess() {
  return (
    <section className="section-shell content-section" id="process">
      <div className="section-heading compact-heading">
        <p className="eyebrow">How I Work</p>
        <h2>Um fluxo direto para sair da ideia e chegar ao sistema publicado.</h2>
      </div>

      <div className="work-timeline">
        {steps.map(({ title, text, Icon }, index) => (
          <article className="premium-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
