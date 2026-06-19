import { Camera, CircleAlert, Eye, Server, UserCheck } from "lucide-react";

const techs = ["React", "TypeScript", ".NET", "Python", "FastAPI", "PostgreSQL", "Docker", "OpenCV", "InsightFace", "SignalR"];

export function LogiGuardSection() {
  return (
    <section className="section-shell product-section logiguard-section" id="logiguard">
      <div className="product-copy">
        <p className="eyebrow">Projeto principal de IA</p>
        <h2>LogiGuard transforma cameras comuns em seguranca inteligente.</h2>
        <p>
          LogiGuard e uma plataforma de seguranca com IA criada para transformar cameras comuns em um sistema
          inteligente de identificacao, eventos e alertas em tempo real.
        </p>
        <div className="chip-row">
          {techs.map((tech) => (
            <b key={tech}>{tech}</b>
          ))}
        </div>
        <a className="button primary" href="https://logiguardproduct.com" target="_blank" rel="noreferrer">
          Conhecer LogiGuard
        </a>
      </div>

      <div className="dashboard-mockup premium-card" aria-label="Mockup do dashboard LogiGuard">
        <div className="mockup-top">
          <strong>LogiGuard SOC</strong>
          <span>Operacao em tempo real</span>
        </div>
        <div className="camera-grid">
          <article><Camera size={20} /><strong>12</strong><span>Cameras online</span></article>
          <article><UserCheck size={20} /><strong>Mariana Lopes</strong><span>Pessoa identificada</span></article>
          <article className="critical"><CircleAlert size={20} /><strong>Alerta ativo</strong><span>Portao principal - 22:41</span></article>
          <article><Server size={20} /><strong>Evento registrado</strong><span>Historico pesquisavel</span></article>
        </div>
        <div className="recognition-panel">
          <Eye size={22} />
          <div>
            <span>Reconhecimento facial</span>
            <strong>Visitante autorizado detectado</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
