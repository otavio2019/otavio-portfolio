import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="not-found-screen">
      <div className="not-found-content">
        <AlertCircle size={56} />
        <span>404</span>
        <h1>Página não encontrada</h1>
        <p>Esse endereço não existe ou foi movido.</p>
        <button className="button primary" onClick={handleGoHome}>
          <Home size={16} />
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
