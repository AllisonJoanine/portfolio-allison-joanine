import { motion } from "framer-motion";
import { ArrowDownRight, Download, MessageCircle } from "lucide-react";

const badges = ["Full Stack", "IA Aplicada", "Infraestrutura", "Seguranca", "LogiCodem"];

export function Hero() {
  const cvHref = `${import.meta.env.BASE_URL}assets/Allison_Joanine_CV.pdf`;

  return (
    <section className="hero-section section-shell" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-card premium-card"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="eyebrow">Desenvolvedor Full Stack | IA | Infraestrutura | Seguranca</p>
          <h1>Allison Joanine</h1>
          <p className="hero-headline">
            Desenvolvedor Full Stack criando solucoes reais com IA, infraestrutura e seguranca.
          </p>
          <p className="hero-copy">
            Transformo problemas reais em sistemas web, automacoes, plataformas inteligentes e produtos digitais
            prontos para uso.
          </p>

          <div className="identity-strip" aria-label="Identidade profissional">
            <span>LogiCodem</span>
            <strong>Inteligencia aplicada ao codigo.</strong>
            <span>Sorocaba/SP - Brasil</span>
          </div>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Ver projetos <ArrowDownRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              Falar comigo <MessageCircle size={18} />
            </a>
            <a className="button ghost" href={cvHref} download>
              Baixar curriculo <Download size={18} />
            </a>
          </div>

          <div className="badge-row" aria-label="Areas de atuacao">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="hero-orbit premium-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          aria-label="Resumo de valor"
        >
          <div className="orbit-core">
            <span>AI</span>
          </div>
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="hero-signal signal-a">APIs</div>
          <div className="hero-signal signal-b">Deploy</div>
          <div className="hero-signal signal-c">Security</div>
          <div className="hero-signal signal-d">Infra</div>
        </motion.aside>
      </div>
    </section>
  );
}
