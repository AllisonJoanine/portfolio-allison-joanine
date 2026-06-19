export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas e focadas em experiencia real de uso.",
    skills: ["React.js", "React Native", "Angular", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    description: "APIs, regras de negocio, integracoes e sistemas preparados para crescer.",
    skills: ["Python", "Flask", "C#", ".NET", "Node.js", "APIs REST"]
  },
  {
    title: "Banco e Infraestrutura",
    description: "Dados, deploy, ambientes, cloud e operacao com visao pratica de TI.",
    skills: ["PostgreSQL", "MongoDB", "Docker", "Vercel", "Render", "Linux", "Microsoft 365"]
  },
  {
    title: "IA e Automacao",
    description: "IA aplicada para resolver tarefas reais, nao apenas demonstracoes bonitas.",
    skills: ["OpenAI", "Reconhecimento facial", "Processamento de imagem", "Chatbots", "Analise inteligente de dados"]
  },
  {
    title: "Seguranca e Operacao",
    description: "Base forte em infraestrutura corporativa, permissoes e ambientes criticos.",
    skills: ["Active Directory", "FortiGate", "VPN", "GPO", "Windows Server", "PowerShell", "Firewall"]
  }
];
