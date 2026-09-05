// Design: Oficina Modular — brutalismo editorial contemporâneo, marfim/grafite/petróleo e Circuit Lime. A assimetria orienta a narrativa; motion curto e funcional.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Braces, Check, Clipboard, Code2, ExternalLink, Github, Instagram, Menu, Minus, Send, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

const projects = [
  {
    number: "01",
    name: "Infinite Worlds Platform",
    type: "Produto em construção",
    description: "Plataforma autoral para organizar mundos, campanhas e fichas de RPG, com regras, progressão e espaços de jogo conectados.",
    tags: ["TypeScript", "React", "Drizzle", "Socket.IO"],
    link: "https://github.com/otavio2019/infinite-worlds-platform",
    accent: "bg-[#12343B]",
    artifact: "mapa de sistema / dados conectados",
    featured: true,
  },
  {
    number: "02",
    name: "Feiticeiros Homebrew",
    type: "Experimento publicado",
    description: "Projeto de conteúdo homebrew para RPG, apresentado como uma experiência web com identidade própria.",
    tags: ["TypeScript", "React"],
    link: "https://feiticeiros-homebrew.vercel.app",
    accent: "bg-[#253c36]",
    artifact: "caderno homebrew / conteúdo modular",
  },
  {
    number: "03",
    name: "CITI-DE",
    type: "Repaginação",
    description: "Projeto público de repaginação, mostrando interesse em transformar estruturas existentes em experiências mais claras.",
    tags: ["TypeScript", "CSS"],
    link: "https://github.com/otavio2019/CITI-DE",
    accent: "bg-[#2d3546]",
    artifact: "camada visual / repaginação",
  },
  {
    number: "04",
    name: "Ficha F&M",
    type: "Sistema autoral",
    description: "Base para uma ficha digital de RPG, explorando criação de personagem, progressão, auditoria e persistência de regras.",
    tags: ["TypeScript", "MySQL", "Drizzle"],
    link: "https://github.com/otavio2019/Ficha-F-M",
    accent: "bg-[#3a3030]",
    artifact: "ficha digital / regras persistentes",
  },
];

const techGroups = [
  { label: "Interface", items: ["TypeScript", "React", "Vite", "Tailwind CSS", "Radix UI"] },
  { label: "Produto & dados", items: ["Express", "Drizzle ORM", "MySQL", "Socket.IO", "Zod"] },
  { label: "Linguagens", items: ["JavaScript", "CSS", "HTML", "Python"] },
  { label: "Prática", items: ["GitHub", "Open source", "RPG digital", "Aprendizado contínuo"] },
];

const services = [
  { index: "A", title: "Sites que explicam", text: "Páginas pessoais, portfólios e landing pages com estrutura clara, personalidade visual e foco em conversão.", benefit: "Para apresentar uma ideia sem parecer mais um template.", icon: Code2 },
  { index: "B", title: "Sistemas web", text: "Interfaces para produtos e ferramentas que precisam organizar fluxos, dados e regras de negócio.", benefit: "Para transformar uma operação confusa em uma experiência utilizável.", icon: Braces },
  { index: "C", title: "Projetos em evolução", text: "Apoio em manutenção, melhorias de interface e integrações compatíveis com a fase real do projeto.", benefit: "Para sair do protótipo e construir com mais segurança.", icon: Sparkles },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Mark({ small = false }: { small?: boolean }) {
  return <img src="/manus-storage/otavio-mark_8eaad183.png" alt="Símbolo Otávio" className={small ? "h-8 w-8" : "h-12 w-12"} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useReveal();

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const summary = `Olá, Otávio! Meu nome é ${form.get("name")}.\n\nTipo de projeto: ${form.get("type")}\nOrçamento: ${form.get("budget") || "Ainda não definido"}\n\n${form.get("message")}`;
    navigator.clipboard?.writeText(summary);
    setCopied(true);
    toast.success("Mensagem copiada", { description: "Cole o texto ao falar com Otávio pelo Instagram." });
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#182225] selection:bg-[#b8f25a] selection:text-[#182225]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#182225]/10 bg-[#f4f0e8]/92 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Voltar ao início"><Mark small /><span className="font-display text-xl font-bold tracking-[-0.05em]">OTÁVIO<span className="text-[#6f9f27]">.</span></span></a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#182225]/65 md:flex" aria-label="Navegação principal">
            {[["Sobre", "sobre"], ["Serviços", "servicos"], ["Projetos", "projetos"], ["Contato", "contato"]].map(([label, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-[#182225]">{label}</a>)}
          </nav>
          <a href="#contato" className="hidden items-center gap-2 border border-[#182225] bg-[#182225] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8] transition hover:bg-[#6f9f27] hover:text-[#182225] md:inline-flex">Vamos conversar <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <button className="rounded-md p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#182225]/10 bg-[#f4f0e8] px-5 py-5 md:hidden" aria-label="Navegação móvel">{[["Sobre", "sobre"], ["Serviços", "servicos"], ["Projetos", "projetos"], ["Contato", "contato"]].map(([label, id]) => <a onClick={() => setMenuOpen(false)} key={id} href={`#${id}`} className="block border-b border-[#182225]/10 py-3 font-mono text-xs uppercase tracking-[0.18em]">{label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="relative border-b border-[#182225]/10 pt-[72px]" aria-labelledby="hero-title">
          <div className="mx-auto grid min-h-[690px] max-w-[1280px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:py-24">
            <div className="relative z-10 reveal">
              <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#55720e]"><span className="inline-block h-2 w-2 bg-[#b8f25a] ring-4 ring-[#b8f25a]/25" /> Disponível para construir</div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#182225]/55">Olá, eu sou</p>
              <h1 id="hero-title" className="max-w-[780px] font-display text-[clamp(4.1rem,10vw,8.6rem)] font-bold leading-[0.84] tracking-[-0.085em]">Otávio<br /><span className="text-[#55720e]">Augusto.</span></h1>
              <p className="mt-9 max-w-[580px] font-display text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">Desenvolvedor em formação, criando interfaces e sistemas que fazem ideias ganharem forma.</p>
              <p className="mt-5 max-w-[500px] text-base leading-7 text-[#182225]/66">Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, RPG, games e projetos open source. Gosto de aprender construindo.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#projetos" className="group inline-flex items-center gap-3 bg-[#182225] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.13em] text-[#f4f0e8] transition hover:bg-[#55720e]">Ver meus projetos <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a><a href="#contato" className="inline-flex items-center gap-3 border border-[#182225]/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.13em] transition hover:border-[#182225]">Entrar em contato <ArrowUpRight className="h-4 w-4" /></a></div>
            </div>
            <div className="relative reveal" style={{ transitionDelay: "120ms" }}><div className="absolute -right-8 -top-8 z-10 hidden h-24 w-24 border-r border-t border-[#b8f25a] lg:block" /><div className="relative min-h-[390px] overflow-hidden border border-[#182225]/20 bg-[#182225] lg:min-h-[510px]"><img src="/manus-storage/otavio-hero-editorial_af963efb.png" alt="Composição editorial abstrata com módulos de interface e linhas técnicas" className="absolute inset-0 h-full w-full object-cover opacity-90" /><div className="absolute inset-0 bg-gradient-to-r from-[#182225]/55 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8]/70"><span className="h-2 w-2 bg-[#b8f25a]" /> construindo desde o rascunho</div></div><div className="mt-4 flex items-center justify-between border-t border-[#182225]/20 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#182225]/50"><span>PB / BR</span><span>37°16' S · 37°17' W</span><span>2026</span></div></div>
          </div>
          <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-5 pb-8 font-mono text-[10px] uppercase tracking-[0.18em] text-[#182225]/42 lg:px-10"><span className="h-px w-12 bg-[#182225]/25" /> Role para conhecer o trabalho</div>
        </section>

        <section id="sobre" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 lg:px-10 lg:py-36" aria-labelledby="sobre-title">
          <div className="grid gap-14 lg:grid-cols-[.28fr_1fr] lg:gap-20"><div className="reveal"><p className="section-kicker">01 / sobre</p><div className="mt-10 hidden h-40 w-px bg-[#182225]/20 lg:block" /></div><div className="reveal max-w-[850px]" style={{ transitionDelay: "80ms" }}><h2 id="sobre-title" className="font-display text-4xl font-bold leading-[0.96] tracking-[-0.065em] sm:text-6xl">Não quero só<br /><span className="text-[#55720e]">escrever código.</span></h2><div className="mt-10 grid gap-8 text-lg leading-8 text-[#182225]/70 md:grid-cols-2"><p>Quero entender o problema, organizar as possibilidades e construir algo que faça sentido para quem vai usar. Minha trajetória ainda está em formação — e isso faz parte do que me move.</p><p>Entre estudos, experimentos e projetos de RPG, venho desenvolvendo uma forma de trabalhar que mistura curiosidade, atenção ao detalhe e vontade de colocar ideias no mundo real.</p></div><div className="mt-12 grid border-y border-[#182225]/18 py-6 sm:grid-cols-3"><div><p className="font-display text-3xl font-bold">14</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#182225]/50">repositórios públicos</p></div><div className="mt-5 border-[#182225]/15 sm:mt-0 sm:border-l sm:pl-7"><p className="font-display text-3xl font-bold">PB</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#182225]/50">Patos, Paraíba</p></div><div className="mt-5 border-[#182225]/15 sm:mt-0 sm:border-l sm:pl-7"><p className="font-display text-3xl font-bold">∞</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#182225]/50">mundos para construir</p></div></div></div></div>
        </section>

        <section id="tecnologias" className="border-y border-[#182225]/10 bg-[#e7e1d5] scroll-mt-24" aria-labelledby="tech-title"><div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.28fr_1fr] lg:gap-20"><div className="reveal"><p className="section-kicker">02 / repertório</p><p className="mt-5 max-w-[170px] text-sm leading-6 text-[#182225]/55">Ferramentas que aparecem nos projetos públicos e na prática que estou desenvolvendo.</p></div><div className="reveal" style={{ transitionDelay: "80ms" }}><h2 id="tech-title" className="max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.06em] sm:text-6xl">A caixa de ferramentas<br /><span className="text-[#182225]">é parte do processo.</span></h2><div className="mt-14 grid gap-px border border-[#182225]/15 bg-[#182225]/15 sm:grid-cols-2">{techGroups.map((group) => <div key={group.label} className="bg-[#e7e1d5] p-6 transition hover:bg-[#f4f0e8]"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#55720e]">{group.label}</p><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="border border-[#182225]/20 px-2.5 py-1.5 font-mono text-[11px] text-[#182225]/72">{item}</span>)}</div></div>)}</div></div></div></div></section>

        <section id="servicos" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 lg:px-10 lg:py-36" aria-labelledby="services-title"><div className="grid gap-14 lg:grid-cols-[.28fr_1fr] lg:gap-20"><div className="reveal"><p className="section-kicker">03 / o que posso fazer</p></div><div><div className="reveal"><h2 id="services-title" className="max-w-4xl font-display text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Seu projeto não precisa<br /><span className="text-[#182225]">parecer complicado.</span></h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#182225]/65">Posso ajudar a transformar uma ideia em uma experiência mais clara, útil e possível de evoluir.</p></div><div className="mt-14 divide-y divide-[#182225]/18 border-y border-[#182225]/18">{services.map(({ index, title, text, benefit, icon: Icon }, i) => <article key={title} className="group reveal grid gap-6 py-8 transition-colors hover:bg-[#e7e1d5] sm:grid-cols-[56px_1fr_auto] sm:items-start" style={{ transitionDelay: `${i * 70}ms` }}><span className="font-mono text-xs text-[#55720e]">{index}</span><div><h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{title}</h3><p className="mt-3 max-w-xl leading-7 text-[#182225]/62">{text}</p><p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[#55720e]"><Check className="h-3.5 w-3.5" /> {benefit}</p></div><Icon className="h-7 w-7 text-[#182225]/25 transition group-hover:text-[#55720e]" /></article>)}</div></div></div></section>

        <section id="projetos" className="border-y border-[#182225]/10 bg-[#182225] text-[#f4f0e8] scroll-mt-24" aria-labelledby="projects-title"><div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-10 lg:py-36"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="reveal"><p className="section-kicker section-kicker-dark">04 / projetos selecionados</p><h2 id="projects-title" className="mt-8 max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-6xl">Ideias viram sistemas<br /><span className="text-[#b8f25a]">quando a gente constrói.</span></h2></div><a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="reveal inline-flex items-center gap-2 border border-[#f4f0e8]/25 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] transition hover:border-[#b8f25a] hover:text-[#b8f25a]">Ver GitHub <Github className="h-4 w-4" /></a></div><div className="mt-16 grid gap-5 lg:grid-cols-2">{projects.map((project, i) => <a key={project.name} href={project.link} target="_blank" rel="noreferrer" className={`group reveal relative min-h-[340px] overflow-hidden border border-[#f4f0e8]/15 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8f25a]/70 ${project.accent}`} style={{ transitionDelay: `${i * 70}ms` }}><div className="absolute inset-0 opacity-25">{i < 3 && <img src={i === 0 ? "/manus-storage/otavio-hero-editorial_af963efb.png" : i === 1 ? "/manus-storage/otavio-project-texture_f3b6b1e7.png" : "/manus-storage/otavio-process-diagram_693a100b.png"} alt="" className="h-full w-full object-cover mix-blend-screen" />} {i === 3 && <div className="absolute right-10 top-16 h-36 w-36 border border-[#b8f25a]/50"><div className="absolute -right-5 -top-5 h-20 w-20 border border-[#f4f0e8]/25" /><div className="absolute -bottom-4 -left-4 h-10 w-10 bg-[#b8f25a]" /></div>}</div><div className="relative flex h-full flex-col justify-between"><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#b8f25a]">[{project.number}] / {project.type}</span><ArrowUpRight className="h-5 w-5 text-[#f4f0e8]/45 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b8f25a]" /></div><div><div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8]/45"><span className="h-1.5 w-1.5 bg-[#b8f25a]" /> {project.artifact}</div><h3 className="max-w-md font-display text-3xl font-bold tracking-[-0.05em]">{project.name}</h3><p className="mt-4 max-w-md leading-7 text-[#f4f0e8]/66">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-[#f4f0e8]/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#f4f0e8]/70">{tag}</span>)}</div></div></div></a>)}</div><div className="mt-20 grid gap-8 border-t border-[#f4f0e8]/15 pt-8 lg:grid-cols-[.3fr_1fr]"><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b8f25a]">Projeto em destaque</div><div className="grid gap-8 md:grid-cols-3"><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8]/45">Problema</p><p className="mt-3 leading-7 text-[#f4f0e8]/72">Organizar regras, personagens e campanhas de RPG em uma experiência digital coerente.</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8]/45">Solução</p><p className="mt-3 leading-7 text-[#f4f0e8]/72">Uma plataforma autoral que aproxima ficha, progressão, auditoria e colaboração.</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8]/45">Implementação</p><p className="mt-3 leading-7 text-[#f4f0e8]/72">TypeScript, React, Express, Drizzle, MySQL, Socket.IO e uma base de testes em evolução.</p></div></div></div></div></section>

        <section id="processo" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 lg:px-10 lg:py-32" aria-labelledby="process-title"><div className="grid gap-12 lg:grid-cols-[.28fr_1fr] lg:gap-20"><div className="reveal"><p className="section-kicker">05 / como trabalhamos</p></div><div className="reveal" style={{ transitionDelay: "80ms" }}><h2 id="process-title" className="max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Do primeiro rabisco<br /><span className="text-[#182225]">à próxima versão.</span></h2><div className="mt-14 grid gap-0 border-t border-[#182225]/18 md:grid-cols-5">{["Você apresenta a ideia", "Entendemos o projeto", "Definimos a solução", "Eu desenvolvo", "Entregamos e ajustamos"].map((step, i) => <div key={step} className="relative border-b border-[#182225]/18 py-6 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"><span className="font-mono text-xs text-[#55720e]">0{i + 1}</span><p className="mt-6 max-w-[150px] font-display text-xl font-bold leading-tight tracking-[-0.035em]">{step}</p></div>)}</div></div></div></section>

        <section id="contato" className="border-t border-[#182225]/10 bg-[#b8f25a] scroll-mt-24" aria-labelledby="contact-title"><div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div className="reveal"><p className="section-kicker">06 / contato</p><h2 id="contact-title" className="mt-10 max-w-2xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.07em] sm:text-7xl">Vamos transformar sua ideia em código?</h2><p className="mt-7 max-w-md text-lg leading-8 text-[#182225]/70">Conte um pouco sobre o que você quer construir. A primeira conversa serve para entender o problema e descobrir o próximo passo.</p><div className="mt-10 flex flex-wrap gap-3"><a href="https://www.instagram.com/otavio_cjiii/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#182225]/25 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition hover:border-[#182225]"><Instagram className="h-4 w-4" /> @otavio_cjiii</a><a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#182225]/25 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition hover:border-[#182225]"><Github className="h-4 w-4" /> GitHub</a></div></div><form onSubmit={handleForm} className="reveal space-y-5" style={{ transitionDelay: "100ms" }}><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Seu nome<input required name="name" className="field-input" placeholder="Como posso te chamar?" /></label><label className="field-label">E-mail<input required type="email" name="email" className="field-input" placeholder="voce@empresa.com" /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Tipo de projeto<select required name="type" className="field-input"><option value="">Selecione uma opção</option><option>Site ou landing page</option><option>Portfólio</option><option>Sistema web</option><option>Manutenção ou melhoria</option><option>Ainda estou descobrindo</option></select></label><label className="field-label">Orçamento <span className="font-normal normal-case tracking-normal opacity-60">(opcional)</span><input name="budget" className="field-input" placeholder="Ainda não definido" /></label></div><label className="field-label">Mensagem<textarea required name="message" rows={5} className="field-input resize-y" placeholder="O que você quer colocar no mundo?" /></label><button type="submit" className="group inline-flex items-center gap-3 bg-[#182225] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f4f0e8] transition hover:bg-[#55720e]">{copied ? <Clipboard className="h-4 w-4" /> : <Send className="h-4 w-4" />} {copied ? "Mensagem copiada" : "Preparar mensagem"}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#182225]/50">O formulário prepara e copia a mensagem para você enviar pelo canal disponível.</p></form></div></div></section>
      </main>

      <footer className="bg-[#182225] text-[#f4f0e8]"><div className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="flex items-center gap-3"><Mark small /><div><p className="font-display text-xl font-bold tracking-[-0.05em]">OTÁVIO<span className="text-[#b8f25a]">.</span></p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f4f0e8]/45">Desenvolvedor em formação</p></div></div><div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.13em] text-[#f4f0e8]/55"><a href="https://github.com/otavio2019" target="_blank" rel="noreferrer" className="transition hover:text-[#b8f25a]">GitHub</a><a href="https://www.instagram.com/otavio_cjiii/" target="_blank" rel="noreferrer" className="transition hover:text-[#b8f25a]">Instagram</a><a href="#top" className="transition hover:text-[#b8f25a]">Voltar ao topo <ArrowUpRight className="inline h-3 w-3" /></a></div></div><div className="mt-10 flex flex-col justify-between gap-2 border-t border-[#f4f0e8]/15 pt-5 font-mono text-[10px] uppercase tracking-[0.13em] text-[#f4f0e8]/35 sm:flex-row"><span>Feito em Patos, PB</span><span>© 2026 Otávio Augusto</span></div></div></footer>
    </div>
  );
}
