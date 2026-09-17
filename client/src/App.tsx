// Design: Oficina Modular — shell mínimo; a narrativa e a identidade vivem na Home.
import NotFound from "@/pages/NotFound";
import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Resume from "./pages/Resume";
import Services from "./pages/Services";

const routes = [
  { path: "/", component: Home },
  { path: "/servicos", component: Services },
  { path: "/biblioteca", component: Library },
  { path: "/curriculo", component: Resume },
  { path: "/404", component: NotFound },
] as const;

function Router() {
  return (
    <Switch>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} component={Component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Toaster />
      <Router />
    </ErrorBoundary>
  );
}
