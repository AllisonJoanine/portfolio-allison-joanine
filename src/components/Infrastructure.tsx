import { KeyRound, Router, ServerCog, ShieldCheck } from "lucide-react";

type InfraItem = {
  title: string;
  text: string;
  Icon: typeof KeyRound;
};

const infraItems: InfraItem[] = [
  { title: "Microsoft 365", text: "Usuarios, permissoes, administracao e rotina corporativa.", Icon: KeyRound },
  { title: "Active Directory", text: "Estrutura de acessos, GPO, organizacao e seguranca.", Icon: ServerCog },
  { title: "VPN e Firewall", text: "Conectividade segura, FortiGate, redes e ambientes protegidos.", Icon: Router },
  { title: "Operacao Segura", text: "Visao de suporte, riscos, rastreabilidade e continuidade.", Icon: ShieldCheck }
];

export function Infrastructure() {
  return (
    <section className="section-shell split-section" id="infra">
      <div className="section-heading">
        <p className="eyebrow">Infraestrutura e Seguranca</p>
        <h2>Desenvolvimento com mentalidade de ambiente real.</h2>
        <p>
          Minha experiencia em infraestrutura ajuda a construir sistemas preparados para usuarios, permissoes,
          operacao, seguranca, deploy e manutencao.
        </p>
      </div>

      <div className="infra-grid">
        {infraItems.map(({ title, text, Icon }) => (
          <article className="premium-card" key={title}>
            <Icon size={25} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
