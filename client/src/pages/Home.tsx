import { useState } from "react";
import { ArrowRight, Check, Code2, Github, Globe, Instagram, Mail, Menu, MessageSquare, Smartphone, X } from "lucide-react";
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
    title: "Estagio",
    description: "Repositório de estudo e prática com foco em aprender e aplicar conceitos em projetos reais.",
    stack: ["Python", "Open Source", "Aprendizado"],
    github: "https://github.com/otavio2019/Estagio",
  },
];

const stats = [
  { value: "+3", label: "anos de estudo e prática" },
  { value: "14", label: "repositórios públicos" },
  { value: "100%", label: "foco em qualidade e clareza" },
];

const tech = ["TypeScript", "React", "Vite", "Tailwind", "Node.js", "GitHub", "Python", "MySQL"];

const pricing = [
  {
    name: "Essencial",
    price: "R$ 600",
    description: "Para profissionais autônomos e pequenos negócios que precisam começar com uma presença digital objetiva.",
    items: ["Landing page ou página única", "Design responsivo", "Botão para WhatsApp", "Formulário simples", "1 rodada de alterações", "Prazo de até 7 dias úteis"],
  },
  {
    name: "Profissional",
    price: "R$ 1.200",
    description: "Para negócios que precisam apresentar seus serviços com mais espaço, credibilidade e organização.",
    featured: true,
    items: ["Site com até 5 páginas", "Design responsivo", "WhatsApp e redes sociais", "Formulário de contato", "SEO básico", "Publicação do site", "2 rodadas de alterações"],
  },
  {
    name: "Completo",
    price: "R$ 2.000",
    description: "Para projetos que pedem uma experiência personalizada e suporte próximo após a entrega.",
    items: ["Site com até 8 páginas", "Design personalizado", "Animações leves", "SEO básico", "Integrações externas", "Domínio e hospedagem", "Até 3 rodadas de alterações", "30 dias de suporte"],
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, Otávio!\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nProjeto: ${data.get("type")}\nForma de contratação: ${data.get("billing")}\n\n${data.get("message")}`;
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
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" loading="eager" decoding="async" />
          <span className="brand-name">Otávio Augusto</span>
        </a>

        <nav className={open ? "nav open" : "nav"}>
          {[
            ["Início", "top"],
            ["Sobre", "sobre"],
            ["Preços", "precos"],
            ["Projetos", "projetos"],
            ["Contato", "contato"],
          ].map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="/servicos" className="nav-service-link" onClick={() => setOpen(false)}>
            Contrate meus serviços
          </a>
        </nav>

        <a href="/servicos" className="header-cta">
          Contrate meus serviços
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
              Desenvolvo sites, interfaces e aplicações web com React, TypeScript e foco em clareza, responsividade e boa experiência de uso.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="button primary">
                Ver projetos
              </a>
              <a href="/servicos" className="button service-button">
                Contrate meus serviços <ArrowRight size={16} />
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
            <div className="panel-card top-card">
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

        <section id="precos" className="content-section pricing-section section">
          <div className="section-header">
            <span className="section-kicker">05 / Preços</span>
            <h2>Opções claras para cada momento do seu negócio.</h2>
          </div>

          <p className="pricing-intro">Valores iniciais para projetos web pequenos e médios. O orçamento final depende do escopo, dos materiais disponíveis e das funcionalidades necessárias.</p>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.name} className={plan.featured ? "price-card featured" : "price-card"}>
                {plan.featured && <span className="price-badge">Mais escolhido</span>}
                <span className="price-label">Pacote {plan.name}</span>
                <strong className="price-value">{plan.price}</strong>
                <p>{plan.description}</p>
                <ul>
                  {plan.items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}
                </ul>
                <a href="#contato" className="button secondary">Escolher pacote <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>

          <div className="fixed-project">
            <div>
              <span className="price-label">Projeto avulso</span>
              <h3>Site sob medida por <strong>R$ 900</strong></h3>
              <p>Até 5 páginas, layout responsivo, formulário, WhatsApp, publicação, 2 rodadas de alterações e prazo de até 15 dias úteis.</p>
            </div>
            <a href="#contato" className="button primary">Solicitar projeto <ArrowRight size={15} /></a>
          </div>

          <div className="pricing-details">
            <div><h3>Não está incluído</h3><p>Domínio, hospedagem, criação de textos, banco de imagens, funcionalidades não previstas e alterações extras após o limite contratado.</p></div>
            <div><h3>Condições de pagamento</h3><p>50% antes do início e 50% na entrega. O prazo começa após o recebimento da entrada e dos materiais necessários. Itens fora do escopo são cobrados à parte.</p></div>
            <div><h3>Outras referências</h3><p>Manutenção mensal entre R$ 200 e R$ 300. Hora de trabalho entre R$ 25 e R$ 50, conforme a complexidade da demanda.</p></div>
          </div>
        </section>

        <section id="projetos" className="content-section section">
          <div className="section-header projects-header">
            <div>
              <span className="section-kicker">06 / Projetos</span>
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

        <section id="contato" className="contact-section section">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">07 / Contato</span>
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
                Forma de contratação
                <select required name="billing">
                  <option value="">Selecione</option>
                  <option>Pacote Essencial - R$ 600</option>
                  <option>Pacote Profissional - R$ 1200</option>
                  <option>Pacote Completo - R$ 2000</option>
                  <option>Projeto avulso - R$ 900</option>
                  <option>Por hora — R$ 25 a R$ 50</option>
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
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" loading="lazy" decoding="async" />
          <span className="brand-name">Otávio Augusto</span>
        </div>
        <p>Desenvolvedor web em formação</p>
        <a href="#top">Voltar ao topo</a>
      </footer>
    </div>
  );
}
