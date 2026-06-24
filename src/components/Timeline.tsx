import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    title: "Suporte técnico e service desk",
    text: "Contato direto com chamados, usuários, urgências e problemas que precisam de resposta objetiva."
  },
  {
    title: "Infraestrutura e resolução real",
    text: "Redes, permissões, Microsoft 365, VPN, servidores, firewall e análise de falhas no ambiente corporativo."
  },
  {
    title: "Desenvolvimento web",
    text: "Construção de interfaces, APIs, bancos de dados e fluxos completos para sistemas publicados."
  },
  {
    title: "Projetos com IA",
    text: "Chatbots, reconhecimento facial, automações e integrações inteligentes aplicadas a necessidades práticas."
  },
  {
    title: "Produtos próprios como LogiGuard",
    text: "Evolução de ideias para produtos com arquitetura, multi-tenant, operação, segurança e visão de negócio."
  }
];

export function Timeline() {
  return (
    <section className="section-shell content-section timeline-section" id="timeline">
      <SectionHeader eyebrow="Linha do tempo" title="Uma evolução construída por camadas, não por atalhos." align="center">
        <p>
          A jornada começa no suporte, passa pela infraestrutura e chega ao desenvolvimento de produtos próprios com IA.
        </p>
      </SectionHeader>

      <div className="timeline-list" data-reveal>
        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
