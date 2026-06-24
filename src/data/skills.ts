export type SkillArea = {
  value: string;
  title: string;
  summary: string;
  skills: string[];
};

export const skillAreas: SkillArea[] = [
  {
    value: "fullstack",
    title: "Desenvolvimento Full Stack",
    summary:
      "Criação de interfaces, APIs, integrações e aplicações completas com foco em uso real, manutenção e publicação.",
    skills: [
      "React.js",
      "React Native",
      "Angular",
      "Node.js",
      "Python",
      "Flask",
      "FastAPI",
      "C#",
      ".NET",
      "APIs REST",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS"
    ]
  },
  {
    value: "database",
    title: "Banco de dados",
    summary:
      "Estruturação de dados para sistemas web, integrações backend/banco, consultas e modelagem para aplicações reais.",
    skills: ["PostgreSQL", "MongoDB", "Modelagem de dados", "Integração backend/banco", "Consultas SQL"]
  },
  {
    value: "ai",
    title: "Inteligência Artificial",
    summary:
      "IA aplicada a produtos, automações, chatbots, reconhecimento facial, processamento de imagem e análise de eventos por câmera.",
    skills: [
      "OpenAI API",
      "Chatbots com IA",
      "Automação com IA",
      "Reconhecimento facial",
      "OpenCV",
      "InsightFace",
      "FastAPI para serviços de IA",
      "Classificação de conhecidos/desconhecidos"
    ]
  },
  {
    value: "security",
    title: "Infraestrutura e Segurança",
    summary:
      "Base prática em ambientes corporativos, redes, servidores, permissões, segurança, endpoints e diagnóstico técnico.",
    skills: [
      "Windows Server",
      "Linux",
      "Active Directory",
      "GPO",
      "DNS",
      "VPN",
      "Firewall",
      "FortiGate",
      "FortiClient",
      "Redes corporativas",
      "ESET",
      "RMM",
      "Acesso remoto"
    ]
  },
  {
    value: "microsoft",
    title: "Microsoft 365",
    summary:
      "Administração e suporte em ambientes Microsoft, com foco em usuários, permissões, sincronização e diagnóstico.",
    skills: ["Outlook", "OneDrive", "SharePoint", "Teams", "Administração de usuários", "Permissões", "E-mail corporativo"]
  },
  {
    value: "devops",
    title: "DevOps, deploy e ferramentas",
    summary:
      "Publicação de aplicações, configuração de ambientes e ferramentas para troubleshooting, documentação e operação.",
    skills: [
      "Docker",
      "Docker Compose",
      "Vercel",
      "Render",
      "Azure",
      "Git",
      "GitHub",
      "Nginx",
      "Variáveis de ambiente",
      "PowerShell",
      "CMD",
      "Documentação técnica"
    ]
  }
];

export const skillGroups = skillAreas.map((area) => ({
  title: area.title,
  description: area.summary,
  skills: area.skills
}));
