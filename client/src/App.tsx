// Design: Oficina Modular — shell mínimo; a narrativa e a identidade vivem na Home.
import NotFound from "@/pages/NotFound";
import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Services from "./pages/Services";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/servicos" component={Services} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><Toaster /><Router /></ErrorBoundary>;
}
