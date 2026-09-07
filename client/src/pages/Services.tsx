import { ArrowRight, Check, ChevronDown, Globe, MessageSquare, Smartphone, Sparkles } from "lucide-react";
import { toast } from "sonner";

// Serviços apresentados para quem está conhecendo a página comercial.
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

// Formas de contratação para diferentes níveis de escopo e previsibilidade.
const engagementOptions = [
  {
    title: "Preço fixo",
    description: "Pacotes e projetos com escopo definido, entregas claras e prazo combinado antes do início.",
    price: "A partir de R$ 600",
    note: "Projetos sob medida com escopo específico podem começar em R$ 900.",
  },
  {
    title: "Por hora",
    description: "Para manutenção, correções e melhorias pontuais.",
    price: "R$ 50 por hora",
    note: "Mínimo de 2 horas por solicitação.",
  },
  {
    title: "Personalizado",
    description: "Para sistemas, integrações e soluções sob medida que precisam de análise e orçamento próprio.",
    price: "A partir de R$ 1.800",
    note: "O valor final depende do escopo, prazo, conteúdo e funcionalidades necessárias.",
    featured: true,
  },
];

// Faixas de referência para orientar o primeiro escopo de projetos maiores.
const customProjectReferences = [
  ["Landing page personalizada", "A partir de R$ 1.800", "Página estratégica com estrutura e visual sob medida"],
  ["Site institucional personalizado", "A partir de R$ 2.500", "Negócios com várias páginas e informações"],
  ["Sistema web ou painel", "A partir de R$ 3.500", "Interfaces, fluxos e funcionalidades próprias"],
  ["Integrações e soluções maiores", "Sob orçamento", "Login, banco de dados, APIs e regras complexas"],
];

// Pacotes comerciais exibidos na seção de contratação.
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
    items: ["Site com até 8 páginas", "Animações leves", "Integrações externas", "Configuração de domínio e hospedagem", "Até 3 rodadas de alterações", "30 dias de suporte"],
  },
];

// Etapas que explicam o fluxo de desenvolvimento do projeto.
const steps = [
  ["01", "Conversa inicial", "Entendo seu negócio, objetivo e o que você precisa comunicar."],
  ["02", "Planejamento", "Organizo a estrutura, referências visuais e o escopo do projeto."],
  ["03", "Construção", "Desenvolvo a solução com foco em clareza, velocidade e responsividade."],
  ["04", "Entrega", "Publico o site, apresento o resultado e faço os ajustes combinados."],
];

// Dúvidas frequentes sobre escopo, responsividade e pagamento.
const faqs = [
  ["Você cria o conteúdo do site?", "Posso orientar a estrutura e a organização das informações. Textos, fotos e materiais finais são fornecidos pelo cliente, salvo contratação específica."],
  ["O site funciona no celular?", "Sim. Todos os projetos são construídos para funcionar bem em celulares, tablets e computadores."],
  ["Como funciona o pagamento?", "O pagamento é dividido em 50% no início e 50% na entrega. O prazo começa após o recebimento da entrada e dos materiais necessários."],
];

const whatsappUrl = "https://wa.me/5583999645357?text=Ol%C3%A1%20Ot%C3%A1vio%2C%20quero%20conhecer%20seus%20servi%C3%A7os.";

export default function Services() {
  // Monta os dados do formulário e abre uma conversa comercial no WhatsApp.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = `Olá, Otávio! Vim pela sua página de serviços.\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nTipo de projeto: ${data.get("type")}\n\nMensagem:\n${data.get("message")}`;
    const whatsappLink = `https://wa.me/5583999645357?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappLink, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      toast.error("Não foi possível abrir o WhatsApp", {
        description: "Verifique se o navegador bloqueou a nova aba.",
      });
      return;
    }

    toast.success("Conversa preparada no WhatsApp");
    form.reset();
  }

  return (
    <div className="site-shell services-page">
      {/* Navegação da página comercial e acesso direto ao WhatsApp. */}
      <header className="site-header">
        <a href="/" className="brand" aria-label="Voltar ao portfólio">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
        </a>
        <nav className="nav services-nav">
          <a href="#servicos">Serviços</a>
          <a href="#contratacao">Contratação</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#processo">Processo</a>
          <a href="/">Portfólio</a>
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="header-cta services-cta">
          Falar no WhatsApp <MessageSquare size={15} />
        </a>
      </header>

      <main>
        {/* Apresentação da proposta comercial e do público atendido. */}
        <section className="services-hero section">
          <div>
            <p className="eyebrow"><span className="dot" /> sites que trabalham por você</p>
            <h1>Seu negócio merece uma presença <span>profissional.</span></h1>
            <p className="services-hero-copy">Crio sites claros, responsivos e sob medida para você apresentar seu trabalho, conquistar confiança e transformar visitas em oportunidades.</p>
            <div className="hero-actions">
              <a href="#contratacao" className="button primary">Ver formas de contratação <ArrowRight size={16} /></a>
              <a href="#pacotes" className="button secondary">Conhecer os pacotes <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="services-hero-note">
            <span className="mini-label">Para quem é</span>
            <strong>Profissionais autônomos, pequenos negócios e pessoas com uma ideia pronta para sair do papel.</strong>
            <p>Uma solução digital com linguagem simples, visual marcante e estrutura pensada para o seu objetivo.</p>
          </div>
        </section>

        {/* Tipos de solução oferecidos. */}
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

        {/* Formas de contratação e referências para escopos personalizados. */}
        <section id="contratacao" className="content-section section engagement-section">
          <div className="section-header">
            <div>
              <span className="section-kicker">02 / Formas de contratação</span>
              <h2>Um formato adequado para cada tipo de projeto.</h2>
            </div>
          </div>

          <div className="engagement-grid">
            {engagementOptions.map((option) => (
              <article key={option.title} className={option.featured ? "engagement-card featured" : "engagement-card"}>
                {option.featured && <span className="price-badge">Mais flexível</span>}
                <span className="price-label">{option.title}</span>
                <p>{option.description}</p>
                <strong>{option.price}</strong>
                <small>{option.note}</small>
              </article>
            ))}
          </div>

          <div className="custom-reference-block">
            <p className="custom-reference-note">Os valores abaixo são pontos de partida. O orçamento final depende do escopo, prazo, conteúdo e funcionalidades necessárias.</p>
            <h3>Referências para projetos personalizados</h3>
            <div className="custom-table-wrapper">
              <table className="custom-reference-table">
                <thead>
                  <tr>
                    <th>Projeto</th>
                    <th>Referência</th>
                    <th>Indicado para</th>
                  </tr>
                </thead>
                <tbody>
                  {customProjectReferences.map(([project, price, description]) => (
                    <tr key={project}>
                      <th scope="row">{project}</th>
                      <td>{price}</td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="services-cost-note">Custos de domínio, hospedagem, serviços externos e ferramentas de terceiros são pagos separadamente pelo cliente.</p>
        </section>

        {/* Pacotes, valores e itens incluídos em cada opção. */}
        <section id="pacotes" className="content-section dark-section section services-pricing">
          <div className="section-header">
            <div>
              <span className="section-kicker">03 / Pacotes</span>
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

        {/* Etapas do trabalho, do primeiro contato à entrega. */}
        <section id="processo" className="content-section section">
          <div className="section-header">
            <div>
              <span className="section-kicker">04 / Como funciona</span>
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

        {/* Respostas rápidas para as principais dúvidas. */}
        <section className="services-faq content-section dark-section section">
          <div className="section-header">
            <div>
              <span className="section-kicker">05 / Dúvidas</span>
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

        {/* Formulário comercial para entender o projeto e preparar o próximo contato. */}
        <section className="contact-section section services-contact-section">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">06 / Fale comigo</span>
              <h2>Conte o que você precisa.</h2>
              <p>Preencha o formulário com as informações iniciais do projeto. A partir disso, posso entender o contexto e indicar o melhor caminho.</p>
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
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
