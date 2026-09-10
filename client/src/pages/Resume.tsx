import { ArrowLeft, Download, Github, Mail, MapPin } from "lucide-react";

const skills = ["React", "TypeScript", "JavaScript", "Next.js", "Vite", "Node.js", "Express", "Python", "Supabase", "Git e GitHub", "Interfaces responsivas", "Acessibilidade"];

const projects = [
  { title: "Otávio Portfolio", description: "Portfólio responsivo para apresentar projetos, serviços e evolução profissional.", link: "https://otavio-portfolio.pages.dev" },
  { title: "CITI-DE", description: "Repaginação de interface com foco em hierarquia visual e organização do conteúdo.", link: "https://citi-de.vercel.app/" },
  { title: "declara-o", description: "Aplicação web para organizar declarações e informações de forma simples.", link: "https://declara-o-gilt.vercel.app/" },
  { title: "Gurps Ficha System", description: "Sistema de gerenciamento de fichas para GURPS 4ª Edição.", link: "https://github.com/otavio2019/Gurps-Ficha-System" },
];

export default function Resume() {
  function exportPdf() {
    window.print();
  }

  return (
    <div className="site-shell resume-page">
      <a className="skip-link" href="#resume-main-content">Pular para o conteúdo principal</a>
      <header className="site-header resume-toolbar no-print">
        <a href="/" className="brand" aria-label="Voltar ao portfólio">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
          <span className="brand-name">Otávio Augusto</span>
        </a>
        <div className="resume-actions">
          <a href="/" className="button secondary"><ArrowLeft size={15} /> Portfólio</a>
          <button type="button" className="button primary" onClick={exportPdf}><Download size={15} /> Exportar como PDF</button>
        </div>
      </header>

      <main id="resume-main-content" className="resume-document">
        <section className="resume-heading">
          <div>
            <p className="eyebrow"><span className="dot" /> currículo profissional</p>
            <h1>Otávio Augusto</h1>
            <p className="resume-role">Desenvolvedor web em formação</p>
          </div>
          <div className="resume-contact-list">
            <a href="mailto:otavioaugusto.contato@gmail.com"><Mail size={15} /> otavioaugusto.contato@gmail.com</a>
            <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer"><Github size={15} /> github.com/otavio2019</a>
            <span><MapPin size={15} /> Patos, Paraíba</span>
          </div>
        </section>

        <section className="resume-section resume-summary">
          <h2>Perfil</h2>
          <p>Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor web em formação, com foco em criar interfaces claras, responsivas e funcionais. Tenho interesse em transformar ideias em experiências digitais organizadas, com atenção à usabilidade, qualidade visual e evolução contínua.</p>
        </section>

        <div className="resume-columns">
          <div>
            <section className="resume-section">
              <h2>Formação</h2>
              <div className="resume-item">
                <div className="resume-item-heading"><h3>Análise e Desenvolvimento de Sistemas</h3><span>Em andamento</span></div>
                <p>Formação voltada para fundamentos de programação, desenvolvimento de sistemas, banco de dados e engenharia de software.</p>
              </div>
            </section>

            <section className="resume-section">
              <h2>Projetos selecionados</h2>
              <div className="resume-project-list">
                {projects.map((project) => (
                  <article key={project.title} className="resume-item">
                    <div className="resume-item-heading"><h3>{project.title}</h3><a href={project.link} target="_blank" rel="noreferrer">Ver projeto</a></div>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div>
            <section className="resume-section">
              <h2>Competências</h2>
              <div className="resume-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </section>

            <section className="resume-section">
              <h2>Objetivo</h2>
              <p>Busco oportunidades júnior, estágio e projetos em que eu possa contribuir com desenvolvimento frontend, interfaces responsivas e construção de produtos web.</p>
            </section>
          </div>
        </div>
      </main>

      <footer className="site-footer no-print">
        <span>© 2026 Otávio Augusto</span>
        <a href="/">Voltar ao início</a>
      </footer>
    </div>
  );
}
