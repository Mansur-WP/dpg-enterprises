import React from "react";
import { Switch, Route } from "wouter";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { WhatsAppButton } from "./components/layout/whatsapp-btn";

import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
