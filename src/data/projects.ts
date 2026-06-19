export type ProjectCategory = "ai" | "security" | "web" | "mobile" | "infra";

export type Project = {
  name: string;
  categoryLabel: string;
  categories: ProjectCategory[];
  description: string;
  problem: string;
  technologies: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "LogiGuard",
    categoryLabel: "IA + Segurança",
    categories: ["ai", "security", "web", "infra"],
    description: "Sistema de segurança inteligente com IA, reconhecimento facial, eventos e alertas em tempo real.",
    problem: "Transforma cameras comuns em uma operação inteligente para identificar moradores, visitantes e desconhecidos.",
    technologies: ["React", "TypeScript", ".NET", "Python", "FastAPI", "PostgreSQL", "Docker", "OpenCV", "InsightFace", "SignalR"],
    href: "https://logiguardproduct.com",
    featured: true
  },
  {
    name: "BladeWise AI",
    categoryLabel: "IA + Energia Eolica",
    categories: ["ai", "web"],
    description: "Plataforma com IA para apoio em inspecao, documentacao e analise visual de pas eolicas.",
    problem: "Organiza evidencias, checklists, fotos tecnicas e relatorios a partir de uma dor real do setor eolico.",
    technologies: ["React", "TypeScript", "Python", "OpenAI Vision", "Checklist HSE", "Relatorios"],
    href: "https://bladewise-ai.vercel.app/",
    featured: true
  },
  {
    name: "City Votorantim",
    categoryLabel: "Web + IA",
    categories: ["ai", "web"],
    description: "Sistema web de horarios de onibus criado como TCC, com chatbot de IA integrado.",
    problem: "Centraliza informacoes reais de transporte publico e melhora a consulta de horarios para usuarios.",
    technologies: ["React", "Flask", "PostgreSQL", "OpenAI API", "Vercel", "Render"],
    href: "https://novo-site-da-city-votorantim.vercel.app/horarios"
  },
  {
    name: "LogiCodem",
    categoryLabel: "Marca + Solucoes",
    categories: ["ai", "web", "mobile"],
    description: "Marca propria para desenvolvimento de sistemas, automacoes, aplicacoes e produtos digitais com IA.",
    problem: "Leva inteligencia aplicada ao codigo para empresas e pessoas que precisam tirar ideias do papel.",
    technologies: ["Solucoes Digitais", "IA", "Automacao", "Web", "Mobile"],
    href: "https://github.com/allisonjoanine/logicodem-site"
  },
  {
    name: "LeiFacil",
    categoryLabel: "Legal Tech",
    categories: ["ai", "web"],
    description: "Projeto para simplificar o acesso a informacoes juridicas usando tecnologia, dados e IA.",
    problem: "Ajuda pessoas a entender informacoes legais com mais clareza e organizacao.",
    technologies: ["IA", "APIs", "Banco de Dados", "Web"],
    href: "https://github.com/allisonjoanine/LeiFacil"
  },
  {
    name: "Reconhecimento Facial",
    categoryLabel: "Computer Vision",
    categories: ["ai", "security"],
    description: "Projetos e experimentos com reconhecimento facial, processamento de imagem e analise visual.",
    problem: "Explora identificacao visual e classificacao inteligente para produtos reais de seguranca e automacao.",
    technologies: ["Python", "OpenCV", "IA", "Computer Vision"],
    href: "https://github.com/allisonjoanine/ReconhecimentoFacial"
  }
];

export const projectFilters: Array<{ label: string; value: ProjectCategory | "all" }> = [
  { label: "Todos", value: "all" },
  { label: "IA", value: "ai" },
  { label: "Seguranca", value: "security" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Infraestrutura", value: "infra" }
];
