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
  return (
    <section className="section-shell product-section bladewise-section" id="bladewise">
      <div className="blade-visual premium-card" aria-label="Visual do produto BladeWise AI">
        <div className="wind-blade" />
        <div className="inspection-card">
          <span>AI ANALYSIS</span>
          <strong>Evidencia tecnica organizada</strong>
          <p>Foto analisada, checklist vinculado e relatorio pronto para revisao.</p>
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
