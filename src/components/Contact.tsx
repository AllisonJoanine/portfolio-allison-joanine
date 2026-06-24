import * as Tooltip from "@radix-ui/react-tooltip";
import { BriefcaseBusiness, Code2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type ContactLink = {
  label: string;
  href: string;
  detail: string;
  Icon: typeof MessageCircle;
};

const contacts: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/AllisonJoanine", detail: "github.com/AllisonJoanine", Icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/allison-joanine-ti",
    detail: "linkedin.com/in/allison-joanine-ti",
    Icon: BriefcaseBusiness
  },
  { label: "WhatsApp", href: "https://wa.me/5515991192202", detail: "(15) 99119-2202", Icon: MessageCircle },
  { label: "E-mail", href: "mailto:allisonjoanine@gmail.com", detail: "allisonjoanine@gmail.com", Icon: Mail }
];

const identityItems = [
  { label: "Nome", value: "Allison Joanine de Araujo Ribeiro" },
  { label: "Localização", value: "Sorocaba/SP" },
  { label: "Telefone", value: "(15) 99186-1717" },
  { label: "Marca", value: "LogiCodem - Inteligência aplicada ao código." },
  { label: "E-mail comercial", value: "logicodem@gmail.com" },
  { label: "Produto principal", value: "LogiGuard - logiguardproduct.com" }
];

export function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-panel" data-reveal>
        <SectionHeader eyebrow="Contato" title="Se a ideia precisa virar sistema, podemos conversar." align="center">
          <p>
            Desenvolvo soluções que unem software, infraestrutura e inteligência artificial. Estes são os melhores
            canais para falar comigo ou com a LogiCodem.
          </p>
        </SectionHeader>

        <div className="identity-grid" aria-label="Dados profissionais">
          {identityItems.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <Tooltip.Provider delayDuration={120}>
          <div className="contact-actions" aria-label="Links de contato">
            {contacts.map(({ label, href, detail, Icon }) => (
              <Tooltip.Root key={label}>
                <Tooltip.Trigger asChild>
                  <a className="contact-button" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                    <span className="contact-button__icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="contact-button__label">{label}</span>
                      <span className="contact-button__detail">{detail}</span>
                    </span>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="contact-tooltip" sideOffset={10}>
                    {detail}
                    <Tooltip.Arrow className="contact-tooltip-arrow" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            ))}
          </div>
        </Tooltip.Provider>

        <div className="contact-footnote">
          <MapPin size={16} aria-hidden="true" />
          <span>Sorocaba/SP</span>
          <Phone size={16} aria-hidden="true" />
          <span>Atendimento profissional e comercial sob demanda.</span>
        </div>
      </div>
    </section>
  );
}
