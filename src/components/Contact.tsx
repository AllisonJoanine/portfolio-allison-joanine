import * as Tooltip from "@radix-ui/react-tooltip";
import { BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type ContactLink = {
  label: string;
  href: string;
  detail: string;
  Icon: typeof MessageCircle;
};

const contacts: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/allisonjoanine", detail: "github.com/allisonjoanine", Icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/allison-joanine-ti",
    detail: "linkedin.com/in/allison-joanine-ti",
    Icon: BriefcaseBusiness
  },
  { label: "WhatsApp", href: "https://wa.me/5515991192202", detail: "wa.me/5515991192202", Icon: MessageCircle },
  { label: "E-mail", href: "mailto:allisonjoanineofficial@gmail.com", detail: "allisonjoanineofficial@gmail.com", Icon: Mail }
];

export function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-panel" data-reveal>
        <SectionHeader eyebrow="Contato" title="Se a ideia precisa virar sistema, podemos conversar." align="center">
          <p>
            Tenho interesse em projetos que juntem desenvolvimento, automação, dados, infraestrutura e IA de um jeito
            simples de operar. Estes são os melhores canais para falar comigo.
          </p>
        </SectionHeader>

        <Tooltip.Provider delayDuration={120}>
          <div className="contact-actions" aria-label="Links de contato">
            {contacts.map(({ label, href, detail, Icon }) => (
              <Tooltip.Root key={label}>
                <Tooltip.Trigger asChild>
                  <a className="contact-button" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                    <Icon size={19} aria-hidden="true" />
                    <span>{label}</span>
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
      </div>
    </section>
  );
}
