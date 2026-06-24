import { SectionHeader } from "./SectionHeader";

const notes = [
  "Desenvolvimento full stack com React.js, Python, C#, .NET, APIs REST e bancos de dados.",
  "Base prática em infraestrutura: servidores, redes, VPN, Active Directory, Microsoft 365 e firewall.",
  "Vivência em segurança de TI, permissões, endpoints, políticas de acesso, monitoramento e suporte corporativo.",
  "Produtos próprios com IA aplicada, automação, reconhecimento facial, visão computacional e deploy real."
];

export function About() {
  return (
    <section className="section-shell content-section about-section" id="about">
      <SectionHeader
        eyebrow="Sobre mim"
        title="Eu desenvolvo software pensando no ambiente real onde ele vai rodar."
      >
        <p>
          Sou Allison Joanine de Araujo Ribeiro, Desenvolvedor Full Stack com experiência prática na criação de
          aplicações web, APIs, automações e integrações com inteligência artificial. Trabalho com React.js, Python,
          Flask, C#, .NET, PostgreSQL e tecnologias modernas para transformar ideias em soluções úteis.
        </p>
        <p>
          Meu diferencial é juntar desenvolvimento com infraestrutura corporativa e segurança de TI. Tenho vivência em
          servidores, redes, Active Directory, Microsoft 365, VPN, firewall, permissões e suporte técnico, o que me ajuda
          a criar sistemas mais seguros, estáveis e preparados para empresas.
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
