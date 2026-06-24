export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "LogiCodem",
    role: "Fundador e Desenvolvedor Full Stack",
    period: "Jan. 2025 - Atual",
    summary:
      "Criação e desenvolvimento de soluções digitais, sistemas web, aplicações mobile, automações e produtos com inteligência artificial.",
    highlights: [
      "Desenvolvimento do LogiGuard, plataforma de segurança com IA, reconhecimento facial e alertas em tempo real.",
      "Desenvolvimento do LeiFácil e do BladeWise como projetos digitais próprios da LogiCodem.",
      "Criação de aplicações com React.js, TypeScript, Python, Flask, C#, .NET, PostgreSQL e MongoDB.",
      "Publicação de aplicações em Vercel, Render, Docker e ambientes web."
    ]
  },
  {
    company: "TISEC Serviços Gerenciados de Cibersegurança",
    role: "Analista de TI - Infraestrutura, Segurança e Suporte",
    period: "Fev. 2026 - Atual",
    summary:
      "Atuação com infraestrutura, segurança, suporte corporativo e administração de ambientes Microsoft em clientes empresariais.",
    highlights: [
      "Administração e suporte em Active Directory, usuários, permissões e GPOs.",
      "Suporte a Microsoft 365, Outlook, OneDrive, SharePoint e Teams.",
      "Diagnóstico de problemas de rede, VPN, DNS, firewall, FortiClient e FortiGate.",
      "Atendimento técnico com documentação, chamados, RMM e acesso remoto."
    ]
  },
  {
    company: "Alumisoft",
    role: "Analista de Segurança de Redes / Desenvolvedor de IA",
    period: "Fev. 2022 - Mar. 2025",
    summary:
      "Experiência com segurança de redes, infraestrutura, servidores, automações e desenvolvimento de soluções internas.",
    highlights: [
      "Implementação de políticas de segurança e apoio à proteção de ambientes corporativos.",
      "Gerenciamento de servidores, redes e processos internos de infraestrutura.",
      "Desenvolvimento de soluções e automações com C#, .NET, MongoDB e Azure.",
      "Resposta a incidentes e análise de problemas de segurança e conectividade."
    ]
  },
  {
    company: "Esquadgroup",
    role: "Suporte Técnico",
    period: "Fev. 2022 - Dez. 2023",
    summary:
      "Atendimento técnico remoto e presencial para usuários, estações, redes, impressoras, e-mails, softwares e sistemas internos.",
    highlights: [
      "Atendimento remoto e presencial a usuários.",
      "Instalação e configuração de softwares.",
      "Diagnóstico de problemas em Windows, redes, impressoras, e-mails e sistemas.",
      "Apoio na manutenção e configuração de estações de trabalho."
    ]
  }
];
