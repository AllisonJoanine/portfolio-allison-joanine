import { Bot, BrainCircuit, Code2, LockKeyhole, Network, Sparkles } from "lucide-react";

type FocusCard = {
  title: string;
  description: string;
  Icon: typeof Code2;
};

const focusCards: FocusCard[] = [
  { title: "Desenvolvimento Full Stack", description: "Web, mobile, APIs e produtos digitais completos.", Icon: Code2 },
  { title: "Inteligencia Artificial", description: "Automacao, chatbots, visao computacional e analise inteligente.", Icon: BrainCircuit },
  { title: "Infraestrutura Corporativa", description: "Microsoft 365, redes, VPN, servidores e ambientes reais.", Icon: Network },
  { title: "Seguranca de TI", description: "Permissoes, firewall, GPO, endpoints e boas praticas.", Icon: LockKeyhole },
  { title: "Automacao", description: "Fluxos que reduzem trabalho manual e aumentam eficiencia.", Icon: Bot },
  { title: "Produtos Digitais", description: "Solucoes organizadas, uteis, seguras e prontas para uso.", Icon: Sparkles }
];

export function About() {
  return (
    <section className="section-shell content-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">Sobre mim</p>
        <h2>Base construida na pratica da TI corporativa.</h2>
        <p>
          Sou Allison Joanine, desenvolvedor Full Stack com uma base construida na pratica da TI corporativa.
          Minha experiencia passa por suporte tecnico, infraestrutura, seguranca, usuarios, redes, permissoes,
          Microsoft 365, VPN, firewall e Active Directory.
        </p>
        <p>
          Essa vivencia me ajuda a criar sistemas que nao sao apenas bonitos, mas uteis, seguros, organizados
          e preparados para resolver problemas reais.
        </p>
      </div>

      <div className="focus-grid">
        {focusCards.map(({ title, description, Icon }) => (
          <article className="premium-card focus-card" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
