import { useState } from "react";
import { ArrowRight, Code2, Github, Globe, Mail, Menu, MessageSquare, Smartphone, X } from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    title: "Sites e landing pages",
    text: "Estruturas modernas, claras e feitas para converter visitas em oportunidades reais.",
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

const projects = [
  {
    title: "Infinite Worlds",
    description: "Plataforma autoral para organizar ideias, experiências e estrutura de produto em uma base moderna.",
    stack: ["React", "TypeScript", "Express"],
    href: "https://github.com/otavio2019/infinite-worlds-platform",
  },
  {
    title: "CITI-DE",
    description: "Projeto de repaginação com foco em visual, organização e melhor experiência do usuário.",
    stack: ["Frontend", "UI", "Design System"],
    href: "https://github.com/otavio2019/CITI-DE",
  },
  {
    title: "Estagio",
    description: "Repositório de estudo e prática com foco em aprender e aplicar conceitos em projetos reais.",
    stack: ["Python", "Open Source", "Aprendizado"],
    href: "https://github.com/otavio2019/Estagio",
  },
];

const stats = [
  { value: "+3", label: "anos de estudo e prática" },
  { value: "14", label: "repositórios públicos" },
  { value: "100%", label: "foco em qualidade e clareza" },
];

const tech = ["TypeScript", "React", "Vite", "Tailwind", "Node.js", "GitHub", "Python", "MySQL"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Voltar ao início">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
          <span className="brand-name">Otávio Augusto</span>
        </a>

        <nav className={open ? "nav open" : "nav"}>
          {[
            ["Início", "top"],
            ["Sobre", "sobre"],
            ["Serviços", "servicos"],
            ["Projetos", "projetos"],
            ["Contato", "contato"],
          ].map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="header-cta">
          Solicitar orçamento
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
        <section id="top" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> disponível para projetos
            </p>

            <h1>
              Desenvolvimento web <span>sob medida</span>
            </h1>

            <p className="lede">
              Eu crio experiências digitais que unem clareza, funcionalidade e visual profissional para transformar ideias em produtos reais.
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
              <img src="/images/Foto.jpeg" alt="Otávio Augusto" />
              <div className="hero-photo-caption">
                <span>Otávio Augusto</span>
                <small>desenvolvedor web em formação</small>
              </div>
            </div>
            <img className="hero-art" src="/images/portfolio-visual.svg" alt="Composição visual abstrata sobre desenvolvimento web" />
            <div className="panel-card top-card">
              <div className="mini-label">Stack</div>
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

        <section id="servicos" className="content-section dark-section section">
          <div className="section-header">
            <span className="section-kicker">02 / Serviços</span>
            <h2>Atendimento para quem precisa de presença digital com qualidade.</h2>
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
              <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="project-card">
                <div className="project-topline">
                  <span>Projeto</span>
                  <ArrowRight size={16} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contato" className="contact-section section">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">04 / Contato</span>
              <h2>Vamos criar algo bom juntos?</h2>
              <p>
                Se você precisa de um site, uma interface mais profissional ou uma melhoria na presença online do seu negócio, pode me chamar.
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
      </main>

      <footer className="site-footer">
        <div className="brand footer-brand">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
          <span className="brand-name">Otávio Augusto</span>
        </div>
        <p>Desenvolvedor web em formação</p>
        <a href="#top">Voltar ao topo</a>
      </footer>
    </div>
  );
}
