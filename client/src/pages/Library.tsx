import { ArrowLeft, ArrowUpRight, Code2, Github } from "lucide-react";

const libraryProjects = [
  {
    title: "CITI-DE",
    description: "Projeto com foco em interface, organização de conteúdo e experiência de navegação.",
    category: "Interface web",
    stack: ["Frontend", "UI", "Design"],
    status: "Projeto publicado",
    github: "https://github.com/otavio2019/CITI-DE",
  },
  {
    title: "Ficha-F-M",
    description: "Repositório para experimentar uma solução web e registrar a evolução do desenvolvimento.",
    category: "Projeto de estudo",
    stack: ["Web", "Prática", "GitHub"],
    status: "Em evolução",
    github: "https://github.com/otavio2019/Ficha-F-M",
  },
  {
    title: "Otávio Portfolio",
    description: "Este próprio portfólio, construído para apresentar meu trabalho, meus estudos e minha forma de desenvolver.",
    category: "Portfólio",
    stack: ["React", "TypeScript", "Cloudflare"],
    status: "Publicado",
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
                <div className="library-card-topline"><span>{project.category}</span><Code2 size={17} aria-hidden="true" /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-status">{project.status}</span>
                <div className="project-tags">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link-label"><Github size={14} /> Ver GitHub <ArrowUpRight size={13} /></a>
                  {project.site && <a href={project.site} className="project-link-label"><ArrowUpRight size={14} /> Ver projeto</a>}
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
