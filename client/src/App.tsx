import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Layout>
      <Router />
      <Toaster />
    </Layout>
  );
}

export default App;
