import { AtSign, BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";

type ContactLink = {
  label: string;
  href: string;
  text: string;
  Icon: typeof MessageCircle;
};

const contacts: ContactLink[] = [
  { label: "WhatsApp", href: "https://wa.me/5515991192202", text: "Falar agora", Icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allison-joanine-ti", text: "Conectar", Icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/allisonjoanine", text: "Ver repositorios", Icon: Code2 },
  { label: "E-mail", href: "mailto:allisonjoanineofficial@gmail.com", text: "Enviar mensagem", Icon: Mail }
];

export function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-card premium-card">
        <p className="eyebrow">Contato</p>
        <h2>Vamos construir algo inteligente?</h2>
        <p>
          Se voce precisa tirar uma ideia do papel, criar um sistema, automatizar processos ou desenvolver uma
          solucao com IA, vamos conversar.
        </p>

        <div className="contact-actions">
          {contacts.map(({ label, href, text, Icon }) => (
            <a className="button primary" href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon size={18} /> {text}
            </a>
          ))}
        </div>

        <div className="contact-grid" aria-label="Contatos organizados">
          <article>
            <span>WhatsApp</span>
            <strong>https://wa.me/5515991192202</strong>
          </article>
          <article>
            <span>LinkedIn</span>
            <strong>linkedin.com/in/allison-joanine-ti</strong>
          </article>
          <article>
            <span>GitHub</span>
            <strong>github.com/allisonjoanine</strong>
          </article>
          <article>
            <span>E-mail profissional</span>
            <strong>allisonjoanineofficial@gmail.com</strong>
          </article>
          <article>
            <span>E-mail LogiCodem</span>
            <strong><AtSign size={15} aria-hidden="true" /> logicodem@gmail.com</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
