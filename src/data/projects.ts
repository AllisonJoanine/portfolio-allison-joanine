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
  image?: string;
  imageAlt?: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    name: "LogiGuard",
    kicker: "SaaS multi-tenant / segurança inteligente",
    description:
      "Plataforma de segurança com IA, reconhecimento facial, câmeras, eventos, validações e alertas em tempo real.",
    highlight: "Voltado para segurança residencial e empresarial, com visão de produto e operação contínua.",
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "Python FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "IA",
      "Reconhecimento facial"
    ],
    href: "https://logiguardproduct.com",
    cta: "Ver produto",
    layout: "anchor",
    image: asset("assets/showcase/logiguard-dashboard.png"),
    imageAlt: "Dashboard do LogiGuard com dados de segurança"
  },
  {
    name: "City Votorantim",
    kicker: "Dados reais / utilidade pública",
    description:
      "Sistema web de horários de ônibus com chatbot integrado, usando dados reais e respostas baseadas no banco de dados.",
    highlight: "Projeto acadêmico e aplicado, pensado para consulta rápida e uso cotidiano por moradores.",
    technologies: ["React", "Flask", "PostgreSQL", "OpenAI", "Vercel", "Render"],
    href: "https://novo-site-da-city-votorantim.vercel.app/horarios",
    cta: "Abrir sistema",
    layout: "route",
    image: asset("assets/showcase/city-votorantim.png"),
    imageAlt: "Interface do City Votorantim com horários de ônibus"
  },
  {
    name: "Predicta",
    kicker: "Sensores / análise preditiva",
    description:
      "Projeto de análise preditiva com sensores e tecnologia aplicada à prevenção, monitoramento e leitura antecipada de risco.",
    highlight: "Solução inovadora apresentada em formato acadêmico e profissional, com foco em prevenção.",
    technologies: ["Sensores", "Análise preditiva", "Monitoramento", "Dados", "Automação"],
    href: "#contact",
    cta: "Conversar sobre o projeto",
    layout: "signal"
  }
];
