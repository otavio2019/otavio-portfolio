import { useState } from "react";
import { ArrowRight, Check, Code2, Github, Globe, Instagram, Mail, Menu, MessageSquare, Server, Smartphone, X } from "lucide-react";
import { toast } from "sonner";
import PixelReveal from "@/components/PixelReveal";

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
  {
    title: "Sistemas e dashboards",
    text: "Painéis e aplicações para organizar dados, acompanhar indicadores e apoiar decisões.",
    icon: Server,
  },
];

// Projetos em destaque, com links para demonstração e código-fonte.
const projects = [
  {
    title: "feiticeiros homebrew",
    description: "Plataforma web autoral para organizar conteúdo e transformar uma ideia em uma experiência digital completa.",
    stack: ["React", "TypeScript", "Express"],
    github: "https://github.com/otavio2019/feiticeiros-homebrew",
    site: "https://feiticeiros-homebrew.vercel.app",
    status: "Em desenvolvimento",
    type: "Plataforma web",
    role: "Produto autoral e implementação frontend",
    impact: "Organização de conteúdo e navegação para uma experiência digital completa.",
    preview: "/images/homebrew-forge-dashboard-enhanced.png",
  },
  {
    title: "CITI-DE",
    description: "Repaginação de interface com foco em hierarquia visual, organização do conteúdo e melhor experiência de uso.",
    stack: ["Frontend", "UI", "Design System"],
    github: "https://github.com/otavio2019/CITI-DE",
    status: "Projeto publicado",
    type: "Interface web",
    role: "Repaginação de interface e hierarquia visual",
    impact: "Conteúdo mais organizado e leitura mais clara para quem acessa a plataforma.",
    preview: "/images/portfolio-visual.svg",
  },
  {
    title: "Estágio",
    description: "Repositório de prática para aprender, testar soluções e aplicar conceitos de desenvolvimento em projetos reais.",
    stack: ["Python", "Open Source", "Aprendizado"],
    github: "https://github.com/otavio2019/Estagio",
    status: "Projeto de estudo",
    type: "Prática e aprendizado",
    role: "Estudo, experimentação e código aberto",
    impact: "Aplicação prática de conceitos e registro público da evolução técnica.",
    preview: "/images/portfolio-visual.svg",
  },
];

// Indicadores rápidos exibidos na apresentação inicial.
const stats = [
  { value: "+3", label: "anos de estudo e prática" },
  { value: "14", label: "repositórios públicos" },
  { value: "100%", label: "foco em qualidade e clareza" },
];

// Tecnologias utilizadas nos projetos e estudos atuais.
const technologyGroups = [
  { title: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind"] },
  { title: "Backend e dados", items: ["Node.js", "Express", "Python", "MySQL"] },
  { title: "Ferramentas", items: ["GitHub", "Git", "Vercel"] },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = `Olá, Otávio! Vim pelo seu portfólio.\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nTipo de contato: ${data.get("type")}\n\nMensagem:\n${data.get("message")}`;
    const whatsappWindow = window.open(`https://wa.me/5583999645357?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      toast.error("Não foi possível abrir o WhatsApp", { description: "Verifique se o navegador bloqueou a nova aba." });
      return;
    }

    toast.success("Mensagem preparada no WhatsApp");
    form.reset();
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Pular para o conteúdo principal</a>
      {/* Navegação principal e acesso rápido ao contato. */}
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Voltar ao início">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" loading="eager" decoding="async" />
          <span className="brand-name">Otávio Augusto</span>
        </a>

        <nav id="main-navigation" className={open ? "nav open" : "nav"} aria-label="Navegação principal">
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
          aria-controls="main-navigation"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </header>

      <main id="main-content">
        {/* Apresentação, proposta profissional e resumo de experiência. */}
        <section id="top" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> disponível para projetos e oportunidades júnior
            </p>

            <h1>
              Sites e sistemas <span>que funcionam</span>
            </h1>

            <p className="lede">
              Crio sites, interfaces e aplicações web claros, responsivos e feitos para resolver problemas reais — do primeiro rascunho à publicação.
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
              <img src="/images/Foto.jpeg" alt="Otávio Augusto, desenvolvedor web" width="640" height="800" loading="eager" decoding="async" />
              <div className="hero-photo-caption">
                <span>Otávio Augusto</span>
                <small>desenvolvedor web em formação</small>
              </div>
            </div>
            <div className="panel-card top-card">
              <div className="mini-label">Em foco agora</div>
              <strong className="hero-panel-title">Interfaces que explicam ideias com clareza.</strong>
              <p className="hero-panel-copy">React, TypeScript e atenção aos detalhes que fazem uma experiência parecer simples.</p>
            </div>
          </div>
        </section>

        {/* Contexto pessoal, formação e forma de trabalhar. */}
        <PixelReveal className="pixel-section">
        <section id="sobre" className="content-section section">
          <div className="section-header">
            <span className="section-kicker">01 / Sobre</span>
            <h2>Um profissional em evolução, com visão para produto e código.</h2>
          </div>

          <div className="about-grid">
            <div>
              <div className="about-highlight">DESENVOLVIMENTO WEB <span>+</span> APRENDIZADO CONTÍNUO</div>
              <p>Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor web em formação, com foco em criar interfaces claras, responsivas e funcionais.</p>
              <div className="about-points">
                {["React e TypeScript", "Interfaces responsivas", "Código organizado", "Estudo e prática"].map((point) => <span key={point}><Check size={15} /> {point}</span>)}
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

        {/* Áreas de desenvolvimento e tipos de solução que domino. */}
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

        <PixelReveal className="pixel-section">
        <section id="tecnologias" className="content-section technology-section section">
          <div className="section-header">
            <div>
              <span className="section-kicker">03 / Tecnologias</span>
              <h2>Ferramentas para transformar ideia em produto.</h2>
            </div>
          </div>
          <div className="technology-grid">
            {technologyGroups.map((group) => (
              <article key={group.title} className="technology-card">
                <h3>{group.title}</h3>
                <div className="technology-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>
        </PixelReveal>

        {/* Projetos selecionados com acesso ao site e ao GitHub. */}
        <PixelReveal className="pixel-section">
        <section id="projetos" className="content-section section">
          <div className="section-header projects-header">
            <div>
              <span className="section-kicker">04 / Projetos</span>
              <h2>Trabalho real, com foco em aprendizado e execução.</h2>
            </div>
            <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="github-link">
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-preview pixel-project-preview"><span className="pixel-project-overlay" aria-hidden="true" /><img src={project.preview} alt={`Preview visual do projeto ${project.title}`} width="640" height="360" loading="lazy" decoding="async" /></div>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <Code2 size={16} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-impact"><strong>Meu papel:</strong> {project.role}<br /><strong>Foco:</strong> {project.impact}</p>
                <span className="project-status">{project.status}</span>
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
        </PixelReveal>

        {/* Canais para oportunidades, colaborações e conversas profissionais. */}
        <PixelReveal className="pixel-section">
        <section id="contato" className="contact-section section">
          <div className="contact-grid">
            <div className="contact-copy portfolio-contact-copy">
              <span className="section-kicker">05 / Contato</span>
              <h2>Vamos conversar.</h2>
              <p>Estou aberto a conversar sobre projetos, oportunidades e colaborações.</p>
              <div className="contact-trust-list">
                {["Desenvolvimento responsivo", "Comunicação clara", "Foco em aprendizado e qualidade"].map((item) => <span key={item}><Check size={15} /> {item}</span>)}
              </div>
              <div className="contact-links">
                <a href="mailto:otavioaugusto.contato@gmail.com"><Mail size={16} aria-hidden="true" /> E-mail</a>
                <a href="https://github.com/otavio2019" target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
                <a href="https://www.instagram.com/otavio_cjiii/" target="_blank" rel="noreferrer"><Instagram size={16} aria-hidden="true" /> Instagram</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <p id="home-form-help" className="form-intro">Conte um pouco do que você precisa. Assim consigo entender melhor a conversa e responder de forma mais útil.</p>
              <label htmlFor="home-name">Nome <span aria-hidden="true">*</span><input id="home-name" required name="name" autoComplete="name" placeholder="Seu nome" aria-describedby="home-form-help" /></label>
              <label htmlFor="home-email">E-mail <span aria-hidden="true">*</span><input id="home-email" required type="email" name="email" autoComplete="email" placeholder="seu@email.com" aria-describedby="home-form-help" /></label>
              <label htmlFor="home-contact-type">Tipo de contato <span aria-hidden="true">*</span><select id="home-contact-type" required name="type" aria-describedby="home-form-help"><option value="">Selecione</option><option>Projeto</option><option>Oportunidade profissional</option><option>Colaboração</option></select></label>
              <label htmlFor="home-message">Mensagem <span aria-hidden="true">*</span><textarea id="home-message" required name="message" rows={4} placeholder="Conte um pouco do que você precisa" aria-describedby="home-form-help" /></label>
              <button type="submit" className="button primary submit-button">Enviar pelo WhatsApp <MessageSquare size={15} /></button>
              <small className="form-note">Você será direcionado para o WhatsApp após enviar o formulário.</small>
            </form>
          </div>
        </section>
        </PixelReveal>

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
