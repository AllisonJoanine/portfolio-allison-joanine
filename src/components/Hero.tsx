import { ArrowDownRight, MessageCircle } from "lucide-react";
import { ActionLink } from "./ActionLink";
import { AnimatedText } from "./AnimatedText";

const signals = ["web", "infra", "automação", "IA aplicada"];

export function Hero() {
  const photoHref = `${import.meta.env.BASE_URL}assets/showcase/allison-joanine.jpg`;

  return (
    <section className="hero-section" id="home">
      <div className="hero-mark" aria-hidden="true" />
      <div className="section-shell hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Allison Joanine / Sorocaba-SP</p>
          <AnimatedText as="h1" className="hero-title animated-headline" delay={0.1}>
            Allison Joanine
          </AnimatedText>
          <p className="hero-lead">
            Desenvolvedor Full Stack e Analista de TI criando soluções reais com tecnologia, automação e IA.
          </p>
          <p className="hero-text">
            Trabalho com desenvolvimento web, suporte técnico, infraestrutura, automações e inteligência artificial
            aplicada. Gosto de transformar problemas do dia a dia em sistemas organizados, úteis e prontos para rodar.
          </p>

          <div className="hero-actions">
            <ActionLink code="01" href="#projects" icon={<ArrowDownRight size={18} aria-hidden="true" />} variant="solid">
              Ver projetos
            </ActionLink>
            <ActionLink code="02" href="#contact" icon={<MessageCircle size={18} aria-hidden="true" />}>
              Entrar em contato
            </ActionLink>
          </div>

          <div className="hero-signals" aria-label="Áreas de atuação">
            {signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>

        <aside className="hero-portrait" data-reveal aria-label="Retrato profissional de Allison Joanine">
          <img src={photoHref} alt="Allison Joanine" />
          <div className="portrait-note">
            <span>perfil prático</span>
            <strong>TI, código, produto e operação olhando para o mesmo problema.</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
