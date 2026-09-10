import { useState } from "react";
import { toast } from "sonner";
import {
  AboutSection,
  ContactSection,
  HomeFooter,
  HomeHeader,
  HomeHero,
  ProjectsSection,
  ServicesSection,
  TechnologiesSection,
} from "./HomeSections";

// Página principal: mantém apenas estado, comportamento e composição das seções.
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monta a mensagem e abre o WhatsApp sem enviar dados para um servidor próprio.
  function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const message = `Olá, Otávio! Vim pelo seu portfólio.\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nTipo de contato: ${data.get("type")}\n\nMensagem:\n${data.get("message")}`;
    const whatsappWindow = window.open(
      `https://wa.me/5583999645357?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    if (!whatsappWindow) {
      toast.error("Não foi possível abrir o WhatsApp", {
        description: "Verifique se o navegador bloqueou a nova aba.",
      });
      return;
    }

    toast.success("Mensagem preparada no WhatsApp");
    form.reset();
  }

  return (
    <div className="site-shell">
      {/* Link de acessibilidade para saltar diretamente ao conteúdo. */}
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo principal
      </a>

      <HomeHeader
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(current => !current)}
        onNavigate={() => setIsMenuOpen(false)}
      />

      <main id="main-content">
        {/* Cada seção cuida apenas de um bloco da experiência da Home. */}
        <HomeHero />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection onSubmit={handleContactSubmit} />

        {/* Entrada discreta para a página comercial de serviços. */}
        <aside className="home-services-link section">
          <div>
            <span>Para quem busca uma solução digital</span>
            <strong>Conheça meus serviços</strong>
          </div>
          <a href="/servicos">Ver página de serviços</a>
        </aside>
      </main>

      <HomeFooter />
    </div>
  );
}
