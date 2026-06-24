import { SectionHeader } from "./SectionHeader";

const notes = [
  "Atendimento a usuários, chamados e diagnóstico com pressão real de operação.",
  "Infraestrutura, redes, permissões, Microsoft 365, servidores e rotina de suporte.",
  "Desenvolvimento web e APIs conectados a necessidades que aparecem fora do código.",
  "Projetos próprios com IA, automação, visão computacional e produtos digitais."
];

export function About() {
  return (
    <section className="section-shell content-section about-section" id="about">
      <SectionHeader
        eyebrow="Sobre mim"
        title="Minha base veio da TI que precisa resolver, não apenas parecer bonita."
      >
        <p>
          Eu sou o Allison Joanine. Minha trajetória mistura suporte técnico, service desk, infraestrutura e
          desenvolvimento web. Essa combinação me deu uma visão bem direta do que um sistema precisa ter para ajudar
          alguém de verdade: clareza, estabilidade, segurança e manutenção possível.
        </p>
        <p>
          Nos meus projetos eu levo essa experiência prática para o produto. Penso na tela, na API, no banco, no deploy,
          no usuário final e nos problemas que costumam aparecer quando a solução sai do ambiente ideal.
        </p>
      </SectionHeader>

      <div className="about-ledger" data-reveal>
        {notes.map((note, index) => (
          <article className="ledger-row" key={note}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
