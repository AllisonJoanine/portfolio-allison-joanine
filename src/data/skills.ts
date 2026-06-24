export type SkillArea = {
  value: string;
  title: string;
  summary: string;
  skills: string[];
};

export const skillAreas: SkillArea[] = [
  {
    value: "frontend",
    title: "Frontend",
    summary: "Interfaces responsivas, componentes reutilizáveis e experiência de uso sem firula desnecessária.",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    value: "backend",
    title: "Backend",
    summary: "APIs, integrações e regras de negócio organizadas para produto real.",
    skills: ["ASP.NET Core", "Flask", "FastAPI", "APIs REST"]
  },
  {
    value: "database",
    title: "Banco de dados",
    summary: "Modelagem e persistência para aplicações com autenticação, eventos, histórico e consultas úteis.",
    skills: ["PostgreSQL", "Redis"]
  },
  {
    value: "infra",
    title: "Infraestrutura",
    summary: "Deploy, ambientes, suporte técnico e leitura prática de problemas de operação.",
    skills: ["Docker", "VPS", "Vercel", "Render", "Redes", "Suporte técnico"]
  },
  {
    value: "ai",
    title: "IA",
    summary: "IA aplicada a fluxos concretos: chatbots, reconhecimento facial, automações e integrações inteligentes.",
    skills: ["OpenAI", "Reconhecimento facial", "Automações", "Integrações inteligentes"]
  }
];

export const skillGroups = skillAreas.map((area) => ({
  title: area.title,
  description: area.summary,
  skills: area.skills
}));
