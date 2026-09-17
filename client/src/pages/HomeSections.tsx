import {
  ArrowRight,
  Check,
  Code2,
  Github,
  Globe,
  Instagram,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  X,
} from "lucide-react";
import {
  services,
  projects,
  stats,
  technologyGroups,
  homeNavigation,
} from "./homeData";
import PixelReveal from "@/components/PixelReveal";

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
}

interface ContactProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// Cabeçalho fixo com navegação por âncoras e menu responsivo.
export function HomeHeader({
  isMenuOpen,
  onMenuToggle,
  onNavigate,
}: HeaderProps) {
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Voltar ao início">
        <img
          className="brand-logo"
          src="/images/logo_otavio_augusto_pixel_01.png"
          alt="Logo Otávio Augusto"
          loading="eager"
          decoding="async"
        />
        <span className="brand-name">Otávio Augusto</span>
      </a>

      <nav
        id="main-navigation"
        className={isMenuOpen ? "nav open" : "nav"}
        aria-label="Navegação principal"
      >
        {homeNavigation.map(([label, id]) => (
          <a href={`#${id}`} key={id} onClick={onNavigate}>
            {label}
          </a>
        ))}
        <a href="/curriculo" onClick={onNavigate}>
          Currículo
        </a>
      </nav>

      <a href="#contato" className="header-cta">
        Vamos conversar
        <ArrowRight size={16} />
      </a>

      <button
        className="menu-toggle"
        onClick={onMenuToggle}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
      >
        {isMenuOpen ? (
          <X size={18} aria-hidden="true" />
        ) : (
          <Menu size={18} aria-hidden="true" />
        )}
      </button>
    </header>
  );
}

// Apresentação inicial com proposta, chamadas para ação e indicadores.
export function HomeHero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="dot" /> disponível para projetos e oportunidades
          júnior
        </p>
        <h1>
          Sites e sistemas <span>que funcionam</span>
        </h1>
        <p className="lede">
          Crio sites, interfaces e aplicações web claros, responsivos e feitos
          para resolver problemas reais — do primeiro rascunho à publicação.
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="button primary">
            Conhecer meu trabalho
          </a>
          <a href="#contato" className="button secondary">
            Falar comigo
          </a>
        </div>
        <div className="stats-row">
          {stats.map(item => (
            <div key={item.label} className="stat-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-photo-card">
          <img
            src="/images/Foto_Otavio.jpeg"
            alt="Otávio Augusto, desenvolvedor web"
            width="640"
            height="800"
            loading="eager"
            decoding="async"
          />
          <div className="hero-photo-caption">
            <span>Otávio Augusto</span>
            <small>desenvolvedor web em formação</small>
          </div>
        </div>
        <div className="panel-card top-card">
          <div className="mini-label">Em foco agora</div>
          <strong className="hero-panel-title">
            Interfaces que explicam ideias com clareza.
          </strong>
          <p className="hero-panel-copy">
            React, TypeScript e atenção aos detalhes que fazem uma experiência
            parecer simples.
          </p>
        </div>
      </div>
    </section>
  );
}

// Contexto pessoal, formação e forma de trabalhar.
export function AboutSection() {
  return (
    <PixelReveal className="pixel-section">
      <section id="sobre" className="content-section section">
        <div className="section-header">
          <span className="section-kicker">01 / Sobre</span>
          <h2>Um profissional em evolução, com visão para produto e código.</h2>
        </div>
        <div className="about-grid">
          <div>
            <div className="about-highlight">
              DESENVOLVIMENTO WEB <span>+</span> APRENDIZADO CONTÍNUO
            </div>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e
              desenvolvedor web em formação, com foco em criar interfaces
              claras, responsivas e funcionais.
            </p>
            <div className="about-points">
              {[
                "React e TypeScript",
                "Interfaces responsivas",
                "Código organizado",
                "Estudo e prática",
              ].map(point => (
                <span key={point}>
                  <Check size={15} /> {point}
                </span>
              ))}
            </div>
          </div>
          <div className="info-box">
            <div>
              <span>Local</span>
              <strong>Patos, Paraíba</strong>
            </div>
            <div>
              <span>Especialidade</span>
              <strong>Interfaces e aplicações web</strong>
            </div>
            <div>
              <span>Perfil</span>
              <strong>Curioso, organizado e focado em resultado</strong>
            </div>
          </div>
        </div>
      </section>
    </PixelReveal>
  );
}

// Serviços e tipos de solução oferecidos.
export function ServicesSection() {
  return (
    <PixelReveal className="pixel-section">
      <section id="servicos" className="content-section dark-section section">
        <div className="section-header">
          <span className="section-kicker">02 / O que eu desenvolvo</span>
          <h2>Interfaces e experiências digitais com clareza.</h2>
        </div>
        <div className="services-grid">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </PixelReveal>
  );
}

// Tecnologias organizadas por área para facilitar a leitura do perfil técnico.
export function TechnologiesSection() {
  return (
    <PixelReveal className="pixel-section">
      <section
        id="tecnologias"
        className="content-section technology-section section"
      >
        <div className="section-header">
          <div>
            <span className="section-kicker">03 / Tecnologias que uso</span>
            <h2>As ferramentas que uso para transformar ideias em produtos.</h2>
          </div>
        </div>
        <div className="technology-grid">
          {technologyGroups.map(group => (
            <article key={group.title} className="technology-card">
              <h3>{group.title}</h3>
              <div className="technology-list">
                {group.items.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PixelReveal>
  );
}

// Projetos selecionados com acesso ao site e ao código-fonte.
export function ProjectsSection() {
  return (
    <PixelReveal className="pixel-section">
      <section id="projetos" className="content-section section">
        <div className="section-header projects-header">
          <div>
            <span className="section-kicker">04 / Projetos</span>
            <h2>Trabalho real, com foco em aprendizado e execução.</h2>
          </div>
          <a
            href="https://github.com/otavio2019"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a href="/biblioteca" className="github-link">
            <ArrowRight size={16} aria-hidden="true" /> Ver todos os projetos
          </a>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.title} className="project-card">
              <div className="project-preview pixel-project-preview">
                <span className="pixel-project-overlay" aria-hidden="true" />
                <img
                  src={project.preview}
                  alt={`Preview visual do projeto ${project.title}`}
                  width="640"
                  height="360"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-topline">
                <span>{project.type}</span>
                <Code2 size={16} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-impact">
                <strong>Meu papel:</strong> {project.role}
                <br />
                <strong>Foco:</strong> {project.impact}
              </p>
              <span className="project-status">{project.status}</span>
              <div className="project-tags">
                {project.stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-label"
                  >
                    <Globe size={14} /> Ver site <ArrowRight size={13} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-label"
                  >
                    <Github size={14} /> Ver GitHub <ArrowRight size={13} />
                  </a>
                )}
                {project.library && (
                  <a href={project.library} className="project-link-label">
                    <ArrowRight size={14} /> Abrir biblioteca{" "}
                    <ArrowRight size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PixelReveal>
  );
}

// Contato profissional com links externos e envio para WhatsApp.
export function ContactSection({ onSubmit }: ContactProps) {
  return (
    <PixelReveal className="pixel-section">
      <section id="contato" className="contact-section section">
        <div className="contact-grid">
          <div className="contact-copy portfolio-contact-copy">
            <span className="section-kicker">05 / Contato</span>
            <h2>Vamos conversar.</h2>
            <p>
              Estou aberto a conversar sobre projetos, oportunidades e
              colaborações.
            </p>
            <div className="contact-trust-list">
              {[
                "Desenvolvimento responsivo",
                "Comunicação clara",
                "Foco em aprendizado e qualidade",
              ].map(item => (
                <span key={item}>
                  <Check size={15} /> {item}
                </span>
              ))}
            </div>
            <div className="contact-links">
              <a href="mailto:otavioaugusto0172@gmail.com">
                <Mail size={16} aria-hidden="true" /> E-mail
              </a>
              <a href="https://wa.me/5583999645357" target="_blank" rel="noreferrer">
                <Phone size={16} aria-hidden="true" /> WhatsApp
              </a>
              <a
                href="https://github.com/otavio2019"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/otavio_cjiii/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={16} aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <p id="home-form-help" className="form-intro">
              Conte um pouco do que você precisa. Assim consigo entender melhor
              a conversa e responder de forma mais útil.
            </p>
            <label htmlFor="home-name">
              Nome <span aria-hidden="true">*</span>
              <input
                id="home-name"
                required
                name="name"
                autoComplete="name"
                placeholder="Seu nome"
                aria-describedby="home-form-help"
              />
            </label>
            <label htmlFor="home-email">
              E-mail <span aria-hidden="true">*</span>
              <input
                id="home-email"
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="seu@email.com"
                aria-describedby="home-form-help"
              />
            </label>
            <label htmlFor="home-contact-type">
              Tipo de contato <span aria-hidden="true">*</span>
              <select
                id="home-contact-type"
                required
                name="type"
                aria-describedby="home-form-help"
              >
                <option value="">Selecione</option>
                <option>Projeto</option>
                <option>Oportunidade profissional</option>
                <option>Colaboração</option>
              </select>
            </label>
            <label htmlFor="home-message">
              Mensagem <span aria-hidden="true">*</span>
              <textarea
                id="home-message"
                required
                name="message"
                rows={4}
                placeholder="Conte um pouco do que você precisa"
                aria-describedby="home-form-help"
              />
            </label>
            <button type="submit" className="button primary submit-button">
              Enviar pelo WhatsApp <MessageSquare size={15} />
            </button>
            <small className="form-note">
              Você será direcionado para o WhatsApp após enviar o formulário.
            </small>
          </form>
        </div>
      </section>
    </PixelReveal>
  );
}

// Rodapé da Home e atalho para o início da página.
export function HomeFooter() {
  return (
    <footer className="site-footer">
      <div className="brand footer-brand">
        <img
          className="brand-logo"
          src="/images/logo_otavio_augusto_pixel_01.png"
          alt="Logo Otávio Augusto"
          loading="lazy"
          decoding="async"
        />
        <span className="brand-name">Otávio Augusto</span>
      </div>
      <p>Desenvolvedor web em formação</p>
      <a href="#top">Voltar ao topo</a>
    </footer>
  );
}
