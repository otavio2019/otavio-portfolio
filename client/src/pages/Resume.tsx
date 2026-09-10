import { ArrowLeft, Download, Github, Mail, MapPin, Phone } from "lucide-react";

const skills = [
  "Python Web",
  "Segurança IoT",
  "Manutenção de Sistemas",
  "Office avançado",
  "Adobe Photoshop",
  "Criação de artes",
  "Layouts e identidade visual",
  "Proatividade",
  "Trabalho em equipe",
  "Disciplina",
  "Comunicação",
  "Foco",
];

const experiences = [
  {
    title: "Estagiário de Recepção — Live Academia",
    period: "8 meses · Atual",
    description:
      "Atendimento direto ao público, suporte administrativo, resolução de dúvidas e encaminhamento de demandas diárias, aplicando comunicação, organização e trabalho em equipe.",
  },
  {
    title: "Cabo Reservista de 2ª Categoria — Exército Brasileiro",
    period: "Mar. 2023 – Nov. 2023",
    description:
      'Serviço militar obrigatório no Tiro de Guerra 07-002. Destaque em assiduidade, correção de atitudes e voluntarismo, com reconhecimento pelo Diploma "Ao Mérito" e como "Destaque do Mês de Novembro". Desenvolvimento de responsabilidade, disciplina e liderança.',
  },
];

const courses = [
  "Aplicações Web com Python (60h) — Senac Paraíba (2023)",
  "Segurança da Informação para Internet das Coisas / IoT (40h) — Senac Paraíba (2023)",
  "Sistemas Operacionais Cliente, Aplicativos de Escritório e Periféricos (72h) — Senac Paraíba (2023)",
  "Operacional (Windows, Office, Internet) — Millenium Formação Profissional (2018)",
  "Gestão Empresarial — atendimento ao cliente, vendas, telemarketing e RH — Millenium (2018)",
  "Curso Básico de Brigada de Incêndio / NR 23 (6h) — Tiro de Guerra 07-002 (2023)",
];

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
            <h1>Otávio Augusto<br />Lima de Medeiros</h1>
            <p className="resume-role">Programador &amp; Designer Gráfico</p>
          </div>
          <div className="resume-contact-list">
            <a href="tel:+5583999645357"><Phone size={15} /> (83) 99964-5357</a>
            <a href="mailto:otavioaugusto0172@gmail.com"><Mail size={15} /> otavioaugusto0172@gmail.com</a>
            <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer"><Github size={15} /> github.com/otavio2019</a>
            <span><MapPin size={15} /> Patos, Paraíba</span>
          </div>
        </section>

        <section className="resume-section resume-summary">
          <h2>Objetivo profissional</h2>
          <p>Colaborar em um ambiente de trabalho onde possa aplicar meus conhecimentos técnicos e práticos, contribuindo para o crescimento e a eficiência da organização. Busco oportunidades para desenvolver minhas habilidades na área de tecnologia e design, focando sempre em resultados e evolução profissional contínua.</p>
        </section>

        <div className="resume-columns">
          <div>
            <section className="resume-section">
              <h2>Formação acadêmica</h2>
              <div className="resume-item">
                <div className="resume-item-heading"><h3>Análise e Desenvolvimento de Sistemas</h3><span>Cursando · 5º período</span></div>
                <p>UNIFIP — Centro Universitário de Patos.</p>
              </div>
            </section>

            <section className="resume-section">
              <h2>Experiência profissional</h2>
              {experiences.map((experience) => (
                <article key={experience.title} className="resume-item">
                  <div className="resume-item-heading"><h3>{experience.title}</h3><span>{experience.period}</span></div>
                  <p>{experience.description}</p>
                </article>
              ))}
            </section>

            <section className="resume-section">
              <h2>Cursos e certificações</h2>
              <div className="resume-course-list">
                <h3>Tecnologia e programação</h3>
                <ul>{courses.slice(0, 4).map((course) => <li key={course}>{course}</li>)}</ul>
                <h3>Gestão e administrativo</h3>
                <ul>{courses.slice(4).map((course) => <li key={course}>{course}</li>)}</ul>
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
              <h2>Competências e habilidades</h2>
              <div className="resume-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </section>

            <section className="resume-section">
              <h2>Informações adicionais</h2>
              <p>Programador e designer gráfico em formação, com experiência em atendimento, organização administrativa, tecnologia, criação de artes e identidade visual.</p>
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
