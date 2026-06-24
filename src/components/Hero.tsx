import { ArrowDownRight, MessageCircle } from "lucide-react";
import { ActionLink } from "./ActionLink";
import { AnimatedText } from "./AnimatedText";

const signals = ["React.js", "Python", ".NET", "PostgreSQL", "IA", "Segurança"];

export function Hero() {
  const photoHref = `${import.meta.env.BASE_URL}assets/showcase/allison-joanine.jpg`;

  return (
    <section className="hero-section" id="home">
      <div className="hero-mark" aria-hidden="true" />
      <div className="section-shell hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Allison Joanine / Sorocaba-SP / LogiCodem</p>
          <AnimatedText as="h1" className="hero-title animated-headline" delay={0.1}>
            Allison Joanine
          </AnimatedText>
          <p className="hero-lead">
            Desenvolvedor Full Stack com forte base em infraestrutura, segurança de TI e inteligência artificial.
          </p>
          <p className="hero-text">
            Crio aplicações web, APIs, automações e integrações com IA usando React.js, Python, C#, .NET e PostgreSQL.
            Minha diferença é entender também o ambiente onde o sistema roda: servidor, rede, usuário, permissão,
            segurança, deploy, monitoramento e suporte.
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
            <span>LogiCodem</span>
            <strong>Inteligência aplicada ao código. Produtos próprios: LogiGuard, LeiFácil e BladeWise.</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
