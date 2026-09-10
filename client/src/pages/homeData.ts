import { Code2, Globe, Server, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Modelo de um serviço apresentado na seção de soluções.
export interface Service {
  title: string;
  text: string;
  icon: LucideIcon;
}

// Modelo de um projeto exibido na seleção principal.
export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  site?: string;
  library?: string;
  status: string;
  type: string;
  role: string;
  impact: string;
  preview: string;
}

// Serviços oferecidos e áreas de atuação do desenvolvedor.
export const services: Service[] = [
  {
    title: "Sites e landing pages",
    text: "Estruturas modernas e claras para apresentar ideias, produtos e experiências digitais.",
    icon: Globe,
  },
  {
    title: "Interfaces de produtos",
    text: "Fluxos intuitivos, dashboards e telas pensadas para facilitar uso e acelerar decisões.",
    icon: Smartphone,
  },
  {
    title: "Desenvolvimento web",
    text: "Implementação com React, TypeScript e arquitetura organizada para crescer com o projeto.",
    icon: Code2,
  },
  {
    title: "Sistemas e dashboards",
    text: "Painéis e aplicações para organizar dados, acompanhar indicadores e apoiar decisões.",
    icon: Server,
  },
];

// Projetos destacados com seus links, tecnologias e contexto profissional.
export const projects: Project[] = [
  {
    title: "feiticeiros homebrew",
    description:
      "Plataforma web autoral para organizar conteúdo e transformar uma ideia em uma experiência digital completa.",
    stack: ["React", "TypeScript", "Express"],
    github: "https://github.com/otavio2019/feiticeiros-homebrew",
    site: "https://feiticeiros-homebrew.vercel.app",
    status: "Em desenvolvimento",
    type: "Plataforma web",
    role: "Produto autoral e implementação frontend",
    impact:
      "Organização de conteúdo e navegação para uma experiência digital completa.",
    preview: "/images/homebrew-forge-dashboard-enhanced.png",
  },
  {
    title: "CITI-DE",
    description:
      "Repaginação de interface com foco em hierarquia visual, organização do conteúdo e melhor experiência de uso.",
    stack: ["Frontend", "UI", "Design System"],
    github: "https://github.com/otavio2019/CITI-DE",
    status: "Projeto publicado",
    type: "Interface web",
    role: "Repaginação de interface e hierarquia visual",
    impact:
      "Conteúdo mais organizado e leitura mais clara para quem acessa a plataforma.",
    preview: "/images/portfolio-visual.svg",
  },
  {
    title: "Biblioteca",
    description:
      "Outros repositórios, estudos e experiências para conhecer melhor minha evolução como desenvolvedor.",
    stack: ["Projetos", "Estudos", "GitHub"],
    github: "https://github.com/otavio2019",
    library: "/biblioteca",
    status: "Ver outros projetos",
    type: "Projetos e estudos",
    role: "Organização e evolução contínua",
    impact:
      "Um espaço para reunir trabalhos que não cabem na seleção principal do portfólio.",
    preview: "/images/portfolio-visual.svg",
  },
];

// Indicadores rápidos exibidos na apresentação inicial.
export const stats = [
  { value: "+3", label: "anos de estudo e prática" },
  { value: "14", label: "repositórios públicos" },
  { value: "100%", label: "foco em qualidade e clareza" },
];

// Tecnologias agrupadas por área de conhecimento.
export const technologyGroups = [
  { title: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind"] },
  {
    title: "Backend e dados",
    items: ["Node.js", "Express", "Python", "MySQL"],
  },
  { title: "Ferramentas", items: ["GitHub", "Git", "Vercel"] },
];

// Links exibidos na navegação interna da Home.
export const homeNavigation = [
  ["Início", "top"],
  ["Sobre mim", "sobre"],
  ["O que eu desenvolvo", "servicos"],
  ["Tecnologias", "tecnologias"],
  ["Projetos", "projetos"],
  ["Contato", "contato"],
] as const;
