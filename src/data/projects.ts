export type ProjectLayout = "anchor" | "route" | "signal";

export type Project = {
  name: string;
  kicker: string;
  description: string;
  highlight: string;
  technologies: string[];
  href: string;
  cta: string;
  layout: ProjectLayout;
  visualLabel?: string;
  image?: string;
  imageAlt?: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    name: "LogiGuard",
    kicker: "SaaS multi-tenant / IA / segurança",
    description:
      "Plataforma de segurança inteligente com IA, reconhecimento facial, câmeras, classificação de pessoas, eventos, validações e alertas em tempo real.",
    highlight:
      "Arquitetura com frontend em React + TypeScript, backend em ASP.NET Core, serviço de IA em Python/FastAPI, PostgreSQL, Redis, SignalR e Docker Compose.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      ".NET",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "SignalR",
      "OpenCV",
      "InsightFace",
      "JWT"
    ],
    href: "https://logiguardproduct.com",
    cta: "Ver LogiGuard",
    layout: "anchor",
    image: asset("assets/showcase/logiguard-dashboard.png"),
    imageAlt: "Dashboard do LogiGuard com dados de segurança"
  },
  {
    name: "City Votorantim",
    kicker: "Projeto acadêmico / dados reais / IA",
    description:
      "Sistema web para consulta de horários e itinerários de ônibus de Votorantim, com backend em Flask, PostgreSQL e chatbot com IA integrado à base de dados.",
    highlight:
      "Projeto acadêmico aplicado com foco em utilidade pública, usando dados reais, painel administrativo e deploy com Vercel e Render.",
    technologies: ["React.js", "Flask", "Python", "PostgreSQL", "OpenAI API", "Vercel", "Render", "APIs REST"],
    href: "https://novo-site-da-city-votorantim.vercel.app/horarios",
    cta: "Abrir City",
    layout: "route",
    image: asset("assets/showcase/city-votorantim.png"),
    imageAlt: "Interface do City Votorantim com horários de ônibus"
  },
  {
    name: "LeiFácil",
    kicker: "LogiCodem / acesso simplificado",
    description:
      "Aplicação criada para facilitar o acesso e a organização de informações de forma simples, acessível e intuitiva.",
    highlight:
      "Projeto da LogiCodem pensado para reduzir complexidade, organizar conteúdos importantes e melhorar a experiência do usuário final.",
    technologies: ["React.js", "Python", "Flask", "APIs REST", "PostgreSQL", "IA", "Vercel", "Render"],
    href: "#contact",
    cta: "Falar sobre LeiFácil",
    layout: "signal",
    visualLabel: "LeiFácil"
  },
  {
    name: "BladeWise",
    kicker: "LogiCodem / produto digital",
    description:
      "Projeto digital desenvolvido com foco em usabilidade, automação e estruturação de produto, desde a ideia até a preparação para publicação.",
    highlight:
      "Mostra minha atuação na concepção de produto, interface, lógica de negócio, integração com dados e visão de solução completa.",
    technologies: ["React.js", "TypeScript", "APIs REST", "PostgreSQL", "Docker", "Vercel", "Render"],
    href: "#contact",
    cta: "Conhecer o projeto",
    layout: "route",
    image: asset("assets/showcase/bladewise-ai.png"),
    imageAlt: "Tela do BladeWise"
  },
  {
    name: "Predicta",
    kicker: "Sensores / análise preditiva",
    description:
      "Projeto acadêmico voltado à análise preditiva, coleta de dados por sensores e geração de informações úteis para tomada de decisão.",
    highlight:
      "Solução apresentada em formato de pitch, simulando uma proposta de produto tecnológico com dados, sensores e prevenção.",
    technologies: ["Sensores", "Análise preditiva", "Coleta de dados", "Monitoramento", "Pitch", "Automação"],
    href: "#contact",
    cta: "Conversar sobre Predicta",
    layout: "signal",
    visualLabel: "Predicta"
  }
];
