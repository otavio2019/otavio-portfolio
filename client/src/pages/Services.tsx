import { ArrowRight, Check, ChevronDown, Globe, MessageSquare, Smartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "Landing pages",
    description: "Uma página clara e estratégica para apresentar seu negócio e gerar contatos.",
    icon: Globe,
  },
  {
    title: "Sites profissionais",
    description: "Um site responsivo para explicar seus serviços, transmitir confiança e ser encontrado online.",
    icon: Sparkles,
  },
  {
    title: "Interfaces web",
    description: "Telas e experiências digitais organizadas para produtos, sistemas e negócios em crescimento.",
    icon: Smartphone,
  },
];

const plans = [
  {
    name: "Essencial",
    price: "R$ 600",
    description: "Para começar com uma presença digital objetiva.",
    items: ["Landing page ou página única", "Design responsivo", "Botão para WhatsApp", "Formulário simples", "1 rodada de alterações"],
  },
  {
    name: "Profissional",
    price: "R$ 1.200",
    description: "Para negócios que precisam apresentar seus serviços com mais espaço e credibilidade.",
    featured: true,
    items: ["Site com até 5 páginas", "Design personalizado", "WhatsApp e redes sociais", "SEO básico", "Publicação do site", "2 rodadas de alterações"],
  },
  {
    name: "Completo",
    price: "R$ 2.000",
    description: "Para projetos que pedem uma experiência mais completa e suporte próximo.",
    items: ["Site com até 8 páginas", "Animações leves", "Integrações externas", "Domínio e hospedagem", "Até 3 rodadas de alterações", "30 dias de suporte"],
  },
];

const steps = [
  ["01", "Conversa inicial", "Entendo seu negócio, objetivo e o que você precisa comunicar."],
  ["02", "Planejamento", "Organizo a estrutura, referências visuais e o escopo do projeto."],
  ["03", "Construção", "Desenvolvo a solução com foco em clareza, velocidade e responsividade."],
  ["04", "Entrega", "Publico o site, apresento o resultado e faço os ajustes combinados."],
];

const faqs = [
  ["Você cria o conteúdo do site?", "Posso orientar a estrutura e a organização das informações. Textos, fotos e materiais finais são fornecidos pelo cliente, salvo contratação específica."],
  ["O site funciona no celular?", "Sim. Todos os projetos são construídos para funcionar bem em celulares, tablets e computadores."],
  ["Como funciona o pagamento?", "O pagamento é dividido em 50% no início e 50% na entrega. O prazo começa após o recebimento da entrada e dos materiais necessários."],
];

const whatsappUrl = "https://wa.me/5583999645357?text=Ol%C3%A1%20Ot%C3%A1vio%2C%20quero%20conhecer%20seus%20servi%C3%A7os.";

export default function Services() {
  return (
    <div className="site-shell services-page">
      <header className="site-header">
        <a href="/" className="brand" aria-label="Voltar ao portfólio">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
        </a>
        <nav className="nav services-nav">
          <a href="#servicos">Serviços</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#processo">Processo</a>
          <a href="/">Portfólio</a>
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="header-cta services-cta">
          Falar no WhatsApp <MessageSquare size={15} />
        </a>
      </header>

      <main>
        <section className="services-hero section">
          <div>
            <p className="eyebrow"><span className="dot" /> sites que trabalham por você</p>
            <h1>Seu negócio merece uma presença <span>profissional.</span></h1>
            <p className="services-hero-copy">Crio sites claros, responsivos e sob medida para você apresentar seu trabalho, conquistar confiança e transformar visitas em oportunidades.</p>
            <div className="hero-actions">
              <a href="#pacotes" className="button primary">Ver pacotes <ArrowRight size={16} /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button secondary">Tirar uma dúvida <MessageSquare size={16} /></a>
            </div>
          </div>
          <div className="services-hero-note">
            <span className="mini-label">Para quem é</span>
            <strong>Profissionais autônomos, pequenos negócios e pessoas com uma ideia pronta para sair do papel.</strong>
            <p>Uma solução digital com linguagem simples, visual marcante e estrutura pensada para o seu objetivo.</p>
          </div>
        </section>

        <section id="servicos" className="content-section section">
          <div className="section-header services-section-header">
            <div>
              <span className="section-kicker">01 / O que eu faço</span>
              <h2>Uma base digital feita para o próximo passo.</h2>
            </div>
          </div>
          <div className="services-grid">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="service-card">
                <div className="service-icon"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pacotes" className="content-section dark-section section services-pricing">
          <div className="section-header">
            <div>
              <span className="section-kicker">02 / Pacotes</span>
              <h2>Escolha o ponto de partida.</h2>
            </div>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={plan.featured ? "price-card featured" : "price-card"}>
                {plan.featured && <span className="price-badge">Mais escolhido</span>}
                <span className="price-label">Pacote {plan.name}</span>
                <strong className="price-value">{plan.price}</strong>
                <p>{plan.description}</p>
                <ul>{plan.items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button secondary">Conversar sobre este pacote <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="processo" className="content-section section">
          <div className="section-header">
            <div>
              <span className="section-kicker">03 / Como funciona</span>
              <h2>Do primeiro papo até o site no ar.</h2>
            </div>
          </div>
          <div className="workflow-grid">
            {steps.map(([number, title, description]) => (
              <article key={number} className="workflow-card">
                <span className="workflow-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-faq content-section dark-section section">
          <div className="section-header">
            <div>
              <span className="section-kicker">04 / Dúvidas</span>
              <h2>Antes de começar.</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question} className="faq-item">
                <summary>{question}<ChevronDown size={18} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="services-final-cta section">
          <span className="section-kicker">05 / Vamos conversar</span>
          <h2>Tem uma ideia ou precisa de um site?</h2>
          <p>Me conte o que você precisa. A gente transforma sua necessidade em uma solução web clara, responsiva e profissional.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button primary">Chamar no WhatsApp <MessageSquare size={16} /></a>
        </section>
      </main>
    </div>
  );
}
