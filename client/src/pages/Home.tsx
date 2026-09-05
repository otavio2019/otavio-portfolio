// Design: Pixel Interface Profissional — preto, Pixel Violet, Sky Signal, grid bitmap, bordas quadradas e conteúdo orientado a desenvolvimento web.
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Code2, ExternalLink, Github, Instagram, Menu, Terminal, X } from "lucide-react";
import { toast } from "sonner";

const logo = "/manus-storage/logo_otavio_augusto_pixel_01_bd22781b.webp";
const portrait = "/manus-storage/otavio-profile_75d6c3c1.jpg";

const projects = [
  { id: "01", title: "Infinite Worlds Platform", description: "Plataforma autoral em TypeScript para organizar experiências, dados e fluxos de produto em uma aplicação web em evolução.", tags: ["TypeScript", "React", "Express", "Drizzle"], href: "https://github.com/otavio2019/infinite-worlds-platform", tone: "violet" },
  { id: "02", title: "CITI-DE", description: "Projeto público de repaginação que demonstra interesse em arquitetura de interface, clareza visual e evolução de produtos existentes.", tags: ["TypeScript", "CSS", "Frontend"], href: "https://github.com/otavio2019/CITI-DE", tone: "blue" },
  { id: "03", title: "Estagio", description: "Repositório público em Python, parte da trajetória de experimentação e aprendizado prático do desenvolvedor.", tags: ["Python", "Open source"], href: "https://github.com/otavio2019/Estagio", tone: "slate" },
];

const services = [
  ["01", "Sites e landing pages", "Páginas com identidade, estrutura clara e boa experiência em celular."],
  ["02", "Interfaces e sistemas web", "Telas e fluxos para produtos que precisam organizar dados e tarefas."],
  ["03", "Evolução de projetos", "Melhorias de interface, manutenção e implementação de novas partes."],
];

const stack = ["TypeScript", "React", "Vite", "Tailwind CSS", "Express", "Drizzle ORM", "MySQL", "Socket.IO", "Zod", "Python", "GitHub"];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={`pixel-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function PixelMark() {
  return <div className="pixel-mark" aria-hidden="true"><span /><span /><span /><span /></div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".pixel-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, Otávio!\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nProjeto: ${data.get("type")}\n\n${data.get("message")}`;
    navigator.clipboard?.writeText(message);
    setCopied(true);
    toast.success("Mensagem preparada", { description: "Agora você pode colar o conteúdo ao falar com Otávio." });
    window.setTimeout(() => setCopied(false), 2500);
  }

  return <div className="site-shell">
    <header className="site-header"><a href="#top" className="brand" aria-label="Otávio Augusto, início"><img src={logo} alt="Logo Otávio Augusto" /></a><nav className={open ? "nav-links open" : "nav-links"}>{[["Sobre", "sobre"], ["Serviços", "servicos"], ["Projetos", "projetos"], ["Contato", "contato"]].map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}</nav><a href="#contato" className="header-cta">Falar sobre um projeto <ArrowUpRight size={14} /></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></header>

    <main id="top">
      <section className="hero section-grid"><div className="hero-copy"><Reveal><p className="eyebrow"><span className="status-dot" /> disponível para construir</p><p className="hero-kicker">// desenvolvedor web em formação</p><h1>Otávio<br /><span>Augusto</span><b>.</b></h1><p className="hero-lede">Crio interfaces e sistemas web com atenção ao detalhe, vontade de aprender e foco em transformar ideias em experiências reais.</p><div className="hero-actions"><a className="button button-primary" href="#projetos">Ver projetos <ArrowDown size={15} /></a><a className="button button-ghost" href="#contato">Entrar em contato <ArrowUpRight size={15} /></a></div></Reveal></div><Reveal className="hero-visual" delay={120}><div className="hero-logo-lockup"><span className="hero-logo-line" /><img src={logo} alt="Logo pixel art Otávio Augusto" /><span className="hero-logo-line" /></div><div className="portrait-frame"><div className="portrait-topline"><span>OTV.EXE</span><span>ONLINE</span></div><img src={portrait} alt="Foto de perfil de Otávio Augusto" /><div className="portrait-overlay"><PixelMark /><span>construindo desde o rascunho</span></div></div><div className="code-window"><span className="code-dot violet" /><span className="code-dot blue" /><span className="code-dot white" /><code><em>const</em> developer = <strong>"otavio"</strong>;</code></div></Reveal></section>

      <section id="sobre" className="content-section section-grid"><div className="section-label"><span>01</span><p>sobre mim</p></div><Reveal className="section-body"><h2>Profissional em<br /><span>construção.</span></h2><div className="split-text"><p>Sou Otávio Augusto, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor em formação. Meu ponto de partida é prático: estudar, experimentar e transformar cada aprendizado em algo que funciona.</p><p>Tenho interesse por tecnologia, interfaces e projetos open source. No GitHub, mantenho projetos públicos que mostram minha evolução com TypeScript, React, Python e ferramentas do ecossistema web.</p></div><div className="stats"><div><strong>14</strong><span>repositórios públicos</span></div><div><strong>PB</strong><span>Patos, Paraíba</span></div><div><strong>2026</strong><span>em constante evolução</span></div></div></Reveal></section>

      <section id="servicos" className="content-section dark-section"><div className="section-grid"><div className="section-label"><span>02</span><p>o que eu faço</p></div><Reveal className="section-body"><h2>Ideias boas precisam<br /><span>de uma interface.</span></h2><div className="service-list">{services.map(([id, title, text], index) => <article key={id} className="service-item"><span className="service-id">[{id}]</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={21} /></article>)}</div></Reveal></div></section>

      <section id="stack" className="content-section stack-section"><div className="section-grid"><div className="section-label"><span>03</span><p>stack real</p></div><Reveal className="section-body"><h2>Ferramentas que<br /><span>eu uso de verdade.</span></h2><div className="stack-board">{stack.map((item, i) => <span key={item} className={i % 3 === 0 ? "stack-chip active" : "stack-chip"}>{item}</span>)}</div></Reveal></div></section>

      <section id="projetos" className="content-section project-section"><div className="section-grid"><div className="section-label"><span>04</span><p>projetos públicos</p></div><Reveal className="section-body"><div className="projects-heading"><div><h2>O código é a<br /><span>melhor apresentação.</span></h2><p>Uma seleção de projetos reais disponíveis no GitHub.</p></div><a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="github-link"><Github size={16} /> ver perfil</a></div><div className="project-list">{projects.map((project) => <a className={`project-card ${project.tone}`} key={project.id} href={project.href} target="_blank" rel="noreferrer"><div className="project-meta"><span>{project.id}</span><ExternalLink size={15} /></div><div className="project-art"><PixelMark /><div className="pixel-lines" /><span className="artifact-status">status: público</span><span className="artifact-corner" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></a>)}</div></Reveal></div></section>

      <section id="contato" className="contact-section"><div className="section-grid"><div className="section-label"><span>05</span><p>contato</p></div><Reveal className="section-body contact-layout"><div><p className="eyebrow">// seu próximo projeto</p><h2>Vamos transformar<br /><span>sua ideia em código?</span></h2><p className="contact-copy">Se você tem uma ideia, um projeto em andamento ou uma interface que precisa evoluir, vamos conversar sobre o próximo passo.</p><div className="social-links"><a href="https://github.com/otavio2019" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://www.instagram.com/otavio_cjiii/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a></div></div><form onSubmit={handleSubmit}><label>seu nome<input required name="name" placeholder="Como posso te chamar?" /></label><label>e-mail<input required type="email" name="email" placeholder="voce@email.com" /></label><label>tipo de projeto<select required name="type"><option value="">Selecione</option><option>Site ou landing page</option><option>Portfólio</option><option>Sistema web</option><option>Manutenção ou melhoria</option></select></label><label>mensagem<textarea required name="message" rows={4} placeholder="Conte um pouco sobre o que você quer construir." /></label><button className="button button-primary" type="submit"><Terminal size={15} /> {copied ? "mensagem copiada" : "preparar mensagem"}</button></form></Reveal></div></section>
    </main>

    <footer className="site-footer"><img src={logo} alt="Logo Otávio Augusto" /><div><span>desenvolvedor web em formação</span><span>© 2026 Otávio Augusto</span></div><a href="#top">voltar ao topo <ArrowUpRight size={14} /></a></footer>
  </div>;
}
