import { ClipboardCheck, FileText, ImageUp, Wind } from "lucide-react";

type Feature = {
  label: string;
  Icon: typeof Wind;
};

const features: Feature[] = [
  { label: "Inspecao tecnica", Icon: Wind },
  { label: "Upload de fotos", Icon: ImageUp },
  { label: "Checklist de seguranca", Icon: ClipboardCheck },
  { label: "Relatorios", Icon: FileText }
];

export function BladeWiseSection() {
  const bladeWiseImage = `${import.meta.env.BASE_URL}assets/showcase/bladewise-ai.png`;

  return (
    <section className="section-shell product-section bladewise-section" id="bladewise">
      <div className="product-gallery blade-visual premium-card" aria-label="Imagem real do produto BladeWise AI">
        <div className="showcase-label">
          <span>BladeWise AI</span>
          <strong>Tela real do sistema</strong>
        </div>
        <div className="showcase-window blade-login">
          <img src={bladeWiseImage} alt="Tela de login do BladeWise AI" loading="lazy" />
        </div>
        <div className="inspection-card">
          <span>CASE REAL</span>
          <strong>Inspecao e manutencao eolica</strong>
          <p>Plataforma pensada para apoiar tecnicos em uma dor real do mercado.</p>
        </div>
      </div>

      <div className="product-copy">
        <p className="eyebrow">Case real + IA</p>
        <h2>BladeWise AI leva inteligencia para inspecoes de pas eolicas.</h2>
        <p>
          BladeWise AI e uma plataforma desenvolvida para apoiar inspecoes e documentacao tecnica de pas eolicas,
          usando IA para organizar evidencias, analisar imagens e estruturar processos tecnicos.
        </p>
        <p>
          Surgiu de uma demanda real de um tecnico da area de usinas eolicas. Nao e apenas um layout: e um sistema
          pensado para uma dor real do mercado.
        </p>
        <div className="feature-pill-grid">
          {features.map(({ label, Icon }) => (
            <span key={label}>
              <Icon size={18} /> {label}
            </span>
          ))}
        </div>
        <a className="button primary" href="https://bladewise-ai.vercel.app/" target="_blank" rel="noreferrer">
          Ver BladeWise AI
        </a>
      </div>
    </section>
  );
}
