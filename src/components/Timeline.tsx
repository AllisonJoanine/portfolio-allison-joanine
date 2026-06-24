import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    title: "Suporte técnico e rotina corporativa",
    text: "Contato direto com usuários, chamados, estações, e-mails, redes, impressoras, softwares e problemas de operação."
  },
  {
    title: "Infraestrutura e segurança de TI",
    text: "Servidores, redes, Active Directory, GPO, Microsoft 365, VPN, FortiGate, permissões, endpoints e políticas de acesso."
  },
  {
    title: "Desenvolvimento web",
    text: "Interfaces, APIs, bancos de dados, integrações e publicação de aplicações com React.js, Python, Flask, C#, .NET e PostgreSQL."
  },
  {
    title: "Projetos com IA",
    text: "Chatbots, OpenAI, reconhecimento facial, processamento de imagem, automações e serviços de IA separados da aplicação principal."
  },
  {
    title: "Produtos próprios na LogiCodem",
    text: "LogiGuard, LeiFácil, BladeWise, City Votorantim e Predicta mostram a evolução de ideias para produtos digitais aplicáveis."
  }
];

export function Timeline() {
  return (
    <section className="section-shell content-section timeline-section" id="timeline">
      <SectionHeader eyebrow="Linha do tempo" title="Uma evolução construída por camadas, não por atalhos." align="center">
        <p>
          Minha jornada começa no suporte, passa por segurança e infraestrutura, e chega ao desenvolvimento de produtos
          full stack com IA aplicada.
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
