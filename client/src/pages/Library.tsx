import { ArrowLeft, ArrowRight, Code2, Github, Globe } from "lucide-react";

const libraryProjects = [
  {
    title: "CITI-DE",
    description: "Projeto com foco em interface, organização de conteúdo e experiência de navegação.",
    category: "Interface web",
    stack: ["Frontend", "UI", "Design"],
    status: "Projeto publicado",
    role: "Repaginação de interface e hierarquia visual",
    impact: "Conteúdo mais organizado e leitura mais clara para quem acessa a plataforma.",
    github: "https://github.com/otavio2019/CITI-DE",
    preview: "/images/citi-de-preview.png",
    site: "https://citi-de.vercel.app/",
  },
  {
    title: "Ficha-F-M",
    description: "Repositório para experimentar uma solução web e registrar a evolução do desenvolvimento.",
    category: "Projeto de estudo",
    stack: ["Web", "Prática", "GitHub"],
    status: "Em evolução",
    role: "Exploração de uma solução web e organização da experiência",
    impact: "Registro da evolução do desenvolvimento em uma aplicação prática.",
    github: "https://github.com/otavio2019/Ficha-F-M",
    preview: "/images/portfolio-visual.svg",
  },
  {
    title: "Loja Tech",
    description: "Sistema de e-commerce para produtos de tecnologia, focado para testar funcionalidades e aprimorar a experiência do usuário.",
    category: "Sistema web",
    stack: ["Next.js", "TypeScript", "Supabase", "UI","Power BI", "E-commerce"],
    status: "Pronto",
    role: "Desenvolvimento de sistema e organização de produtos",
    impact: "Experiência de loja com catálogo, dados e acompanhamento da operação.",
    github: "https://github.com/otavio2019/LojaTech.git",
    preview: "/images/loja-tech-preview.png",
    site: "https://lojateachpowerbi.vercel.app",
  },
  {
    title: "declara-o",
    description: "Aplicação para organizar declarações e registrar informações de forma simples, com espaço para evoluir a experiência do usuário.",
    category: "Aplicação web",
    stack: ["Next.js", "Supabase", "TypeScript"],
    status: "Pronto",
    role: "Desenvolvimento de aplicação e organização de fluxos",
    impact: "Registro de informações em uma experiência simples e objetiva.",
    github: "https://github.com/otavio2019/declara-o",
    preview: "/images/declara-coracao.png",
    site: "https://declara-o-gilt.vercel.app/",
  },
  {
    title: "Otávio Portfolio",
    description: "Este próprio portfólio, construído para apresentar meu trabalho, meus estudos e minha forma de desenvolver.",
    category: "Portfólio",
    stack: ["React", "TypeScript", "Cloudflare"],
    status: "Publicado",
    role: "Produto autoral e implementação frontend",
    impact: "Apresentação de projetos, serviços e evolução profissional.",
    preview: "/images/portfolio-visual.svg",
    github: "https://github.com/otavio2019/otavio-portfolio",
    site: "/",
  },
];

export default function Library() {
  return (
    <div className="site-shell library-page">
      <a className="skip-link" href="#library-main-content">Pular para o conteúdo principal</a>
      <header className="site-header">
        <a href="/" className="brand" aria-label="Voltar ao portfólio">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
          <span className="brand-name">Otávio Augusto</span>
        </a>
        <nav className="nav library-nav" aria-label="Navegação da biblioteca">
          <a href="/">Portfólio</a>
          <a href="/servicos">Serviços</a>
          <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <main id="library-main-content">
        <section className="library-hero section">
          <p className="eyebrow"><span className="dot" /> biblioteca de projetos</p>
          <h1>Outros projetos, estudos e experiências.</h1>
          <p className="library-hero-copy">Aqui ficam repositórios que mostram minha evolução, minhas experimentações e as diferentes formas como transformo ideias em código.</p>
          <a href="/" className="button secondary"><ArrowLeft size={16} /> Voltar ao portfólio</a>
        </section>

        <section className="content-section section library-list-section">
          <div className="section-header">
            <div>
              <span className="section-kicker">01 / Repositórios</span>
              <h2>Uma biblioteca aberta para acompanhar meu trabalho.</h2>
            </div>
            <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="github-link"><Github size={16} aria-hidden="true" /> Ver GitHub</a>
          </div>

          <div className="library-grid">
            {libraryProjects.map((project) => (
              <article key={project.title} className="library-card">
                <div className="library-card-preview"><img src={project.preview} alt={`Preview do projeto ${project.title}`} loading="lazy" decoding="async" /></div>
                <div className="library-card-topline"><span>{project.category}</span><Code2 size={17} aria-hidden="true" /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-impact"><strong>Meu papel:</strong> {project.role}<br /><strong>Foco:</strong> {project.impact}</p>
                <span className="project-status">{project.status}</span>
                <div className="project-tags">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  {project.site && <a href={project.site} target={project.site.startsWith("http") ? "_blank" : undefined} rel={project.site.startsWith("http") ? "noreferrer" : undefined} className="project-link-label"><Globe size={14} /> Ver site <ArrowRight size={13} /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link-label"><Github size={14} /> Ver GitHub <ArrowRight size={13} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Otávio Augusto</span>
        <a href="/">Voltar ao início</a>
      </footer>
    </div>
  );
}
