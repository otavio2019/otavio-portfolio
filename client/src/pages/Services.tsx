import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronDown, Globe, MessageSquare, Smartphone, Sparkles, X } from "lucide-react";
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

type CustomFeature = {
  id: string;
  title: string;
  description: string;
  category: string;
  weight: number;
};

// Recursos escritos em linguagem comercial; o peso fica apenas no cálculo interno.
const customFeatures: CustomFeature[] = [
  { id: "basic-structure", title: "Página ou tabela básica", description: "Uma estrutura simples para apresentar ou organizar informações.", category: "Estrutura e visual", weight: 1 },
  { id: "custom-layout", title: "Layout personalizado", description: "Visual criado de acordo com sua marca, objetivo e público.", category: "Estrutura e visual", weight: 1 },
  { id: "responsive", title: "Versão para celular", description: "Layout adaptado para celular, tablet e computador.", category: "Estrutura e visual", weight: 1 },
  { id: "search", title: "Pesquisa", description: "Permite que o usuário encontre informações dentro do site ou sistema.", category: "Estrutura e visual", weight: 1 },
  { id: "filters", title: "Filtros", description: "Permite filtrar produtos, registros ou conteúdos por diferentes critérios.", category: "Estrutura e visual", weight: 1 },
  { id: "sorting", title: "Ordenação", description: "Permite organizar resultados por nome, data, preço ou outro critério.", category: "Estrutura e visual", weight: 0.5 },
  { id: "pagination", title: "Paginação", description: "Divide muitos resultados em páginas menores para facilitar a navegação.", category: "Estrutura e visual", weight: 0.5 },
  { id: "records", title: "Cadastro e gerenciamento de informações", description: "Permite criar, visualizar, editar e remover registros.", category: "Dados e usuários", weight: 2 },
  { id: "database", title: "Banco de dados", description: "Armazena informações do sistema de forma organizada e segura.", category: "Dados e usuários", weight: 2 },
  { id: "auth", title: "Login e permissões", description: "Permite controlar quem acessa o sistema e o que cada usuário pode fazer.", category: "Dados e usuários", weight: 2 },
  { id: "upload", title: "Upload de arquivos e imagens", description: "Permite que usuários enviem fotos, documentos ou outros arquivos.", category: "Dados e usuários", weight: 1 },
  { id: "user-area", title: "Área exclusiva do usuário", description: "Espaço privado onde cada usuário pode visualizar suas informações e ações.", category: "Dados e usuários", weight: 2 },
  { id: "notifications", title: "Notificações", description: "Envia avisos sobre atualizações, pedidos, mensagens ou ações importantes.", category: "Dados e usuários", weight: 1 },
  { id: "payment", title: "Pagamentos online", description: "Permite receber pagamentos pelo site ou sistema.", category: "Pagamentos e transações", weight: 3 },
  { id: "pix", title: "Integração com Pix", description: "Permite gerar ou receber pagamentos via Pix.", category: "Pagamentos e transações", weight: 2 },
  { id: "credit-card", title: "Pagamento com cartão", description: "Permite integrar pagamentos com cartão de crédito ou débito.", category: "Pagamentos e transações", weight: 3 },
  { id: "checkout", title: "Carrinho e checkout", description: "Cria uma etapa para revisar produtos, dados e finalizar a compra.", category: "Pagamentos e transações", weight: 3 },
  { id: "transactions", title: "Controle de transações", description: "Permite acompanhar pagamentos, status, pedidos e histórico de transações.", category: "Pagamentos e transações", weight: 3 },
  { id: "subscription", title: "Assinaturas recorrentes", description: "Permite criar cobranças recorrentes, como planos mensais ou anuais.", category: "Pagamentos e transações", weight: 4 },
  { id: "export", title: "Exportação para Excel ou PDF", description: "Permite gerar relatórios para baixar, imprimir ou compartilhar.", category: "Relatórios e integrações", weight: 1 },
  { id: "integration", title: "Integração com outro serviço", description: "Conecta o projeto a uma API, plataforma ou ferramenta externa.", category: "Relatórios e integrações", weight: 2 },
  { id: "dashboard", title: "Painel com números e gráficos", description: "Mostra indicadores e informações importantes de forma visual.", category: "Relatórios e integrações", weight: 2 },
  { id: "testing", title: "Testes e correções extras", description: "Inclui uma etapa adicional para revisar o projeto, corrigir problemas e fazer ajustes finais.", category: "Qualidade e entrega", weight: 1 },
  { id: "deployment", title: "Publicação do projeto", description: "Configuração e publicação do site ou sistema em um ambiente online.", category: "Qualidade e entrega", weight: 1 },
];

const customFeatureCategories = Array.from(new Set(customFeatures.map((feature) => feature.category)));

function categoryId(category: string) {
  return category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

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
    price: "A partir de R$ 600",
    description: "Para uma landing page ou página única, com estrutura objetiva e responsiva.",
    items: ["Landing page ou página única", "Design responsivo", "Botão para WhatsApp", "Formulário simples", "1 rodada de alterações"],
  },
  {
    name: "Profissional",
    price: "A partir de R$ 1.200",
    description: "Para negócios que precisam apresentar seus serviços com mais espaço, organização e credibilidade.",
    featured: true,
    items: ["Site com até 5 páginas", "Design personalizado", "WhatsApp e redes sociais", "SEO básico", "Publicação do site", "2 rodadas de alterações"],
  },
  {
    name: "Completo",
    price: "A partir de R$ 2.000",
    description: "Para projetos mais completos, com integrações e suporte próximo.",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeEngagement, setActiveEngagement] = useState<string | null>(null);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<string[]>(customFeatureCategories);

  const hourlyRate = 50;
  const safetyMargin = 20;
  const minimumCustomPrice = 1800;

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

  function openWhatsapp(message: string) {
    const whatsappWindow = window.open(`https://wa.me/5583999645357?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    if (!whatsappWindow) {
      toast.error("Não foi possível abrir o WhatsApp", { description: "Verifique se o navegador bloqueou a nova aba." });
      return;
    }
    toast.success("Conversa preparada no WhatsApp");
  }

  function toggleFeature(featureId: string) {
    setSelectedFeatureIds((current) => current.includes(featureId) ? current.filter((item) => item !== featureId) : [...current, featureId]);
  }

  function toggleCategory(category: string) {
    setOpenCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
  }

  const selectedFeatures = customFeatures.filter((feature) => selectedFeatureIds.includes(feature.id));
  const estimatedWeight = selectedFeatures.reduce((total, feature) => total + feature.weight, 0);
  const basePrice = estimatedWeight * hourlyRate;
  const suggestedPrice = basePrice * (1 + safetyMargin / 100);
  const roundedPrice = Math.ceil(suggestedPrice / 100) * 100;
  const finalEstimate = Math.max(roundedPrice, minimumCustomPrice);
  const hasSelectedFeatures = selectedFeatures.length > 0;

  // O texto do WhatsApp mostra a referência comercial, sem expor o cálculo interno.
  const customWhatsappMessage = `Olá, Otávio! Vim pela sua página de serviços.

Quero conversar sobre um projeto personalizado.

Funcionalidades que me interessam:
${selectedFeatures.map((feature) => `- ${feature.title}`).join("\n")}

Estimativa inicial:
A partir de R$ ${finalEstimate.toLocaleString("pt-BR")}

Gostaria de explicar melhor o que preciso.`;

  function renderEngagementPanel(title: string) {
    if (title === "Preço fixo") {
      return (
        <div id="engagement-fixed-panel" className="engagement-panel">
          <div className="engagement-panel-heading">
            <span className="section-kicker">Escolha um pacote</span>
            <h3>Uma opção pronta para cada momento.</h3>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={plan.featured ? "price-card featured" : "price-card"}>
                {plan.featured && <span className="price-badge">Mais escolhido</span>}
                <span className="price-label">{plan.name}</span>
                <strong className="price-value">{plan.price}</strong>
                <p>{plan.description}</p>
                <ul>{plan.items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
                <button type="button" className="button secondary" onClick={() => openWhatsapp(`Olá, Otávio! Tenho interesse no ${plan.name}, no valor de ${plan.price}. Gostaria de conversar sobre os detalhes.`)}>
                  Escolher Pacote {plan.name} <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </div>
      );
    }

    if (title === "Por hora") {
      return (
        <div id="engagement-hourly-panel" className="engagement-panel hourly-panel">
          <div className="engagement-panel-heading">
            <span className="section-kicker">Como funciona</span>
            <h3>Como funciona a cobrança por hora</h3>
          </div>
          <strong className="hourly-price">R$ 50 por hora</strong>
          <p>Indicado para manutenção, correções, ajustes visuais e pequenas melhorias em projetos existentes.</p>
          <ul className="hourly-list">
            <li>Correções em sites existentes.</li>
            <li>Ajustes de layout e responsividade.</li>
            <li>Manutenção.</li>
            <li>Pequenas melhorias.</li>
            <li>Alterações em funcionalidades.</li>
            <li>Análise de problemas específicos.</li>
          </ul>
          <p className="hourly-minimum">Mínimo de contratação: 2 horas por solicitação.</p>
          <div className="hourly-table-wrapper">
            <table className="hourly-table">
              <thead><tr><th>Tempo</th><th>Referência</th></tr></thead>
              <tbody><tr><td>2 horas</td><td>R$ 100</td></tr><tr><td>4 horas</td><td>R$ 200</td></tr><tr><td>8 horas</td><td>R$ 400</td></tr></tbody>
            </table>
          </div>
          <button type="button" className="button primary" onClick={() => openWhatsapp("Olá, Otávio! Tenho interesse em contratar seu trabalho por hora. Preciso de ajuda com:")}>
            Solicitar atendimento por hora <MessageSquare size={15} />
          </button>
        </div>
      );
    }

    return (
      <div id="engagement-custom-panel" className="engagement-panel custom-builder-panel">
        <div className="engagement-panel-heading">
          <span className="section-kicker">Estimativa inicial</span>
          <h3>Monte uma ideia do seu projeto</h3>
          <p>Selecione as funcionalidades que você imagina precisar. O resultado é apenas uma estimativa inicial. O orçamento final depende do escopo, prazo e detalhes do projeto.</p>
        </div>
        <div className="custom-feature-groups">
          {customFeatureCategories.map((category) => (
              <fieldset key={category}>
                <legend className="visually-hidden">Funcionalidades de {category}</legend>
                <button type="button" className="custom-category-toggle" aria-expanded={openCategories.includes(category)} aria-controls={`features-${categoryId(category)}`} onClick={() => toggleCategory(category)}>
                <span>{category}</span><ChevronDown size={17} aria-hidden="true" />
              </button>
                {openCategories.includes(category) && <div id={`features-${categoryId(category)}`} className="custom-feature-options">
                {customFeatures.filter((feature) => feature.category === category).map((feature) => (
                  <label key={feature.id} className={selectedFeatureIds.includes(feature.id) ? "custom-feature-option selected" : "custom-feature-option"}>
                    <input type="checkbox" checked={selectedFeatureIds.includes(feature.id)} onChange={() => toggleFeature(feature.id)} />
                    <span className="custom-feature-copy">
                      <strong>{feature.title}</strong>
                      <small>{feature.description}</small>
                    </span>
                    {selectedFeatureIds.includes(feature.id) && <CheckCircle2 className="custom-feature-check" size={19} aria-hidden="true" />}
                  </label>
                ))}
              </div>}
              {category === "Pagamentos e transações" && <p className="custom-category-note">As taxas cobradas por gateways de pagamento, plataformas externas e serviços de terceiros não estão incluídas no valor do desenvolvimento.</p>}
            </fieldset>
          ))}
        </div>
        <div className={`custom-estimate ${hasSelectedFeatures ? "has-selection" : "empty"}`}>
          <span>Estimativa inicial</span>
          {!hasSelectedFeatures ? <><strong>Nenhum recurso selecionado</strong><p>Selecione as funcionalidades que você imagina precisar para visualizar uma referência de valor.</p></> : <><strong>{selectedFeatures.length} {selectedFeatures.length === 1 ? "recurso selecionado" : "recursos selecionados"}</strong><b>A partir de R$ {finalEstimate.toLocaleString("pt-BR")}</b><p>Essa é uma referência inicial. O orçamento final será definido depois de entender o escopo, prazo e detalhes do projeto.</p><button type="button" className="button primary custom-whatsapp-button" onClick={() => openWhatsapp(customWhatsappMessage)}>Conversar sobre este projeto <MessageSquare size={15} /></button></>}
        </div>
      </div>
    );
  }

  return (
    <div className="site-shell services-page">
      <a className="skip-link" href="#services-main-content">Pular para o conteúdo principal</a>
      {/* Navegação da página comercial e acesso direto ao WhatsApp. */}
      <header className="site-header">
        <a href="/" className="brand" aria-label="Voltar ao portfólio">
          <img className="brand-logo" src="/images/logo_otavio_augusto_pixel_01.png" alt="Logo Otávio Augusto" />
        </a>
        <nav id="services-navigation" className={menuOpen ? "nav services-nav open" : "nav services-nav"} aria-label="Navegação de serviços">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#contratacao" onClick={() => setMenuOpen(false)}>Contratação</a>
          <a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a>
          <a href="/" onClick={() => setMenuOpen(false)}>Portfólio</a>
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="header-cta services-cta">
          Falar no WhatsApp <MessageSquare size={15} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="services-navigation"
        >
          {menuOpen ? <X size={18} aria-hidden="true" /> : <span aria-hidden="true">+</span>}
        </button>
      </header>

      <main id="services-main-content">
        {/* Apresentação da proposta comercial e do público atendido. */}
        <section className="services-hero section">
          <div>
            <p className="eyebrow"><span className="dot" /> sites que trabalham por você</p>
            <h1>Seu negócio merece uma presença <span>profissional.</span></h1>
            <p className="services-hero-copy">Crio sites claros, responsivos e sob medida para você apresentar seu trabalho, conquistar confiança e transformar visitas em oportunidades.</p>
            <div className="hero-actions">
              <a href="#contratacao" className="button primary">Ver formas de contratação <ArrowRight size={16} /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button secondary">Falar no WhatsApp <MessageSquare size={16} /></a>
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
              <div key={option.title} className="engagement-item">
                <button
                  type="button"
                  className={`${option.featured ? "engagement-card featured" : "engagement-card"} ${activeEngagement === option.title ? "active" : ""}`}
                  onClick={() => setActiveEngagement((current) => current === option.title ? null : option.title)}
                  aria-expanded={activeEngagement === option.title}
                  aria-controls={option.title === "Preço fixo" ? "engagement-fixed-panel" : option.title === "Por hora" ? "engagement-hourly-panel" : "engagement-custom-panel"}
                >
                  {option.featured && <span className="price-badge">Mais flexível</span>}
                  <span className="price-label">{option.title}</span>
                  <p>{option.description}</p>
                  <strong>{option.price}</strong>
                  <small>{option.note}</small>
                  <span className="engagement-card-action">{activeEngagement === option.title ? "Fechar detalhes" : "Ver detalhes"} <ChevronDown size={15} /></span>
                </button>
                {activeEngagement === option.title && renderEngagementPanel(option.title)}
              </div>
            ))}
          </div>

          <div className="custom-reference-block">
            <p className="custom-reference-note">Os valores abaixo são pontos de partida. O orçamento final depende do escopo, prazo, conteúdo e funcionalidades necessárias.</p>
            <h3>Referências para projetos personalizados</h3>
            <div className="custom-table-wrapper">
              <p className="table-scroll-hint">Deslize para ver a tabela completa.</p>
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

        {/* Etapas do trabalho, do primeiro contato à entrega. */}
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

        {/* Respostas rápidas para as principais dúvidas. */}
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

        {/* Formulário comercial para entender o projeto e preparar o próximo contato. */}
        <section className="contact-section section services-contact-section">
          <div className="contact-grid">
            <div className="contact-copy services-contact-copy">
              <span className="section-kicker">05 / Fale comigo</span>
              <h2>Vamos tirar sua ideia do papel.</h2>
              <p>Você não precisa saber explicar tudo agora. Conte o que já tem em mente e eu ajudo a organizar o próximo passo.</p>
              <div className="services-contact-points">
                <div><CheckCircle2 size={19} /><span><strong>Conversa sem compromisso</strong><small>Entendo seu momento antes de falar em solução.</small></span></div>
                <div><CheckCircle2 size={19} /><span><strong>Resposta pelo WhatsApp</strong><small>Recebo sua mensagem e retorno com clareza.</small></span></div>
                <div><CheckCircle2 size={19} /><span><strong>Escopo explicado em linguagem simples</strong><small>Você sabe o que está sendo considerado no projeto.</small></span></div>
              </div>
              <a className="services-direct-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageSquare size={17} /> Prefere falar direto? Abrir WhatsApp
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="services-form-heading">
                <span className="mini-label">Primeiro contato</span>
                <h3>Conte um pouco do projeto</h3>
                <p id="services-form-help">Com essas informações, consigo entender melhor sua necessidade e responder de forma mais útil.</p>
              </div>
              <label htmlFor="services-name">Nome <span aria-hidden="true">*</span><input id="services-name" required name="name" autoComplete="name" placeholder="Seu nome" aria-describedby="services-form-help" /></label>

              <label htmlFor="services-email">E-mail <span aria-hidden="true">*</span><input id="services-email" required type="email" name="email" autoComplete="email" placeholder="seu@email.com" aria-describedby="services-form-help" /></label>

              <label htmlFor="services-project-type">Tipo de projeto <span aria-hidden="true">*</span><select id="services-project-type" required name="type" aria-describedby="services-form-help">
                  <option value="">Selecione</option>
                  <option>Site institucional</option>
                  <option>Landing page</option>
                  <option>Portfólio</option>
                  <option>Sistema web</option>
                  <option>Ainda não sei</option>
                </select></label>

              <label htmlFor="services-message">Mensagem <span aria-hidden="true">*</span><textarea id="services-message" required name="message" rows={4} placeholder="Conte um pouco do que você precisa" aria-describedby="services-form-help" /></label>

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
