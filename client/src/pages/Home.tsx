import { useState } from "react";
import { ArrowRight, Code2, Github, Globe, Instagram, Mail, Menu, MessageSquare, Smartphone, X } from "lucide-react";
import { toast } from "sonner";

// Conteúdo dos serviços apresentados no portfólio técnico.
const services = [
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
];

// Projetos em destaque, com links para demonstração e código-fonte.
const projects = [
  {
    title: "Infinite Worlds",
    description: "Plataforma autoral para organizar ideias, experiências e estrutura de produto em uma base moderna.",
    stack: ["React", "TypeScript", "Express"],
    github: "https://github.com/otavio2019/feiticeiros-homebrew",
    site: "https://feiticeiros-homebrew.vercel.app",
    status: "Em desenvolvimento",
    type: "Plataforma web",
  },
  {
    title: "CITI-DE",
    description: "Projeto de repaginação com foco em visual, organização e melhor experiência do usuário.",
    stack: ["Frontend", "UI", "Design System"],
    github: "https://github.com/otavio2019/CITI-DE",
  },
  {
    title: "Estágio",
    description: "Repositório de estudo e prática com foco em aprender e aplicar conceitos em projetos reais.",
    stack: ["Python", "Open Source", "Aprendizado"],
    github: "https://github.com/otavio2019/Estagio",
  },
];

// Indicadores rápidos exibidos na apresentação inicial.
const stats = [
  { value: "+3", label: "anos de estudo e prática" },
  { value: "14", label: "repositórios públicos" },
  { value: "100%", label: "foco em qualidade e clareza" },
];

// Tecnologias utilizadas nos projetos e estudos atuais.
const tech = ["TypeScript", "React", "Vite", "Tailwind", "Node.js", "GitHub", "Python", "MySQL"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Prepara os dados do formulário para serem enviados por qualquer canal de contato.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, Otávio!\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nProjeto: ${data.get("type")}\n\n${data.get("message")}`;
    navigator.clipboard?.writeText(message);
    setCopied(true);
    toast.success("Mensagem preparada", { description: "Você pode colar o conteúdo em qualquer conversa." });
    window.setTimeout(() => setCopied(false), 2500);
    event.currentTarget.reset();
  }

  return (
    <div className="site-shell">
      {/* Navegação principal e acesso rápido ao contato. */}
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Voltar ao início">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" loading="eager" decoding="async" />
          <span className="brand-name">Otávio Augusto</span>
        </a>

        <nav className={open ? "nav open" : "nav"}>
          {[
            ["Início", "top"],
            ["Sobre mim", "sobre"],
            ["O que eu desenvolvo", "servicos"],
            ["Tecnologias", "tecnologias"],
            ["Projetos", "projetos"],
            ["Contato", "contato"],
          ].map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="header-cta">
          Vamos conversar
          <ArrowRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <main>
        {/* Apresentação, proposta profissional e resumo de experiência. */}
        <section id="top" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> disponível para projetos
            </p>

            <h1>
              Desenvolvimento web <span>sob medida</span>
            </h1>

            <p className="lede">
              Desenvolvo sites, interfaces e aplicações web com React, TypeScript e foco em clareza, responsividade e boa experiência de uso.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="button primary">
                Ver projetos
              </a>
              <a href="#contato" className="button secondary">
                Falar comigo
              </a>
            </div>

            <div className="stats-row">
              {stats.map((item) => (
                <div key={item.label} className="stat-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-photo-card">
              <img src="/images/Foto.jpeg" alt="Otávio Augusto, desenvolvedor web" loading="eager" decoding="async" />
              <div className="hero-photo-caption">
                <span>Otávio Augusto</span>
                <small>desenvolvedor web em formação</small>
              </div>
            </div>
            <img className="hero-art" src="/images/portfolio-visual.svg" alt="Composição visual abstrata sobre desenvolvimento web" loading="lazy" decoding="async" />
            <div id="tecnologias" className="panel-card top-card">
              <div className="mini-label">Frontend Stack</div>
              <div className="tag-list">
                {tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="panel-card code-card">
              <div className="window-bar">
                <span className="circle red" />
                <span className="circle yellow" />
                <span className="circle green" />
              </div>
              <pre>
                <code>{`const developer = {\n  name: "Otávio",\n  focus: ["sites", "interfaces", "produtos"],\n  goal: "resolver problemas com código"\n}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Contexto pessoal, formação e forma de trabalhar. */}
        <section id="sobre" className="content-section section">
          <div className="section-header">
            <span className="section-kicker">01 / Sobre</span>
            <h2>Um profissional em evolução, com visão para produto e código.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
                Sou Otávio Augusto, desenvolvedor web em formação e estudante de Análise e Desenvolvimento de Sistemas. Minha rotina é baseada em estudo, execução e melhoria contínua.
              </p>
              <p>
                Gosto de criar soluções que unem boa experiência visual com arquitetura simples, legível e escalável. A cada projeto, meu objetivo é transformar ideias em experiências que funcionem bem e tenham sentido para quem usa.
              </p>
            </div>

            <div className="info-box">
              <div>
                <span>Local</span>
                <strong>Patos, Paraíba</strong>
              </div>
              <div>
                <span>Especialidade</span>
                <strong>Frontend e interfaces digitais</strong>
              </div>
              <div>
                <span>Perfil</span>
                <strong>Curioso, organizado e focado em resultado</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de desenvolvimento e tipos de solução que domino. */}
        <section id="servicos" className="content-section dark-section section">
          <div className="section-header">
            <span className="section-kicker">02 / O que eu desenvolvo</span>
            <h2>Interfaces e experiências digitais com clareza.</h2>
          </div>

          <div className="services-grid">
            {services.map(({ title, text, icon: Icon }) => (
              <article key={title} className="service-card">
                <div className="service-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Projetos selecionados com acesso ao site e ao GitHub. */}
        <section id="projetos" className="content-section section">
          <div className="section-header projects-header">
            <div>
              <span className="section-kicker">03 / Projetos</span>
              <h2>Trabalho real, com foco em aprendizado e execução.</h2>
            </div>
            <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="github-link">
              <Github size={16} /> GitHub
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <span>Projeto</span>
                  <Code2 size={16} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.site && (
                    <a href={project.site} target="_blank" rel="noreferrer" className="project-link-label">
                      <Globe size={14} /> Ver site <ArrowRight size={13} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link-label">
                      <Github size={14} /> Ver GitHub <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Canais e formulário para oportunidades, colaborações e projetos. */}
        <section id="contato" className="contact-section section">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">04 / Contato</span>
              <h2>Vamos criar algo bom juntos?</h2>
              <p>
                Se quiser conversar sobre um projeto, uma oportunidade profissional ou conhecer melhor meu trabalho, entre em contato.
              </p>

              <div className="contact-links">
                <a href="https://wa.me/5583999645357?text=Ol%C3%A1%20Ot%C3%A1vio%2C%20vim%20pelo%20seu%20site." target="_blank" rel="noreferrer">
                  <MessageSquare size={16} /> WhatsApp
                </a>
                <a href="mailto:otavioaugusto.contato@gmail.com">
                  <Mail size={16} /> E-mail
                </a>
                <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.instagram.com/otavio_cjiii/" target="_blank" rel="noreferrer">
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Nome
                <input required name="name" placeholder="Seu nome" />
              </label>

              <label>
                E-mail
                <input required type="email" name="email" placeholder="seu@email.com" />
              </label>

              <label>
                Tipo de projeto
                <select required name="type">
                  <option value="">Selecione</option>
                  <option>Site institucional</option>
                  <option>Landing page</option>
                  <option>Portfólio</option>
                  <option>Sistema web</option>
                </select>
              </label>

              <label>
                Mensagem
                <textarea required name="message" rows={4} placeholder="Conte um pouco do que você precisa" />
              </label>

              <button type="submit" className="button primary submit-button">
                {copied ? "Mensagem copiada" : "Preparar mensagem"}
              </button>
            </form>
          </div>
        </section>

        {/* Entrada discreta para a página comercial, sem alterar o foco da Home. */}
        <aside className="home-services-link section">
          <div>
            <span>Para quem busca uma solução digital</span>
            <strong>Conheça meus serviços</strong>
          </div>
          <a href="/servicos">Ver página de serviços <ArrowRight size={14} /></a>
        </aside>
      </main>

      {/* Encerramento da página e retorno ao topo. */}
      <footer className="site-footer">
        <div className="brand footer-brand">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" loading="lazy" decoding="async" />
          <span className="brand-name">Otávio Augusto</span>
        </div>
        <p>Desenvolvedor web em formação</p>
        <a href="#top">Voltar ao topo</a>
      </footer>
    </div>
  );
}
