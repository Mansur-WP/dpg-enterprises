import React from "react";
import { Link } from "wouter";
import logoSrc from "@assets/image_1780424986415.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <img src={logoSrc} alt="MUNNASP Logo" className="h-10 cursor-pointer" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">Models</Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass-panel border-b border-white/10 py-4 flex flex-col items-center gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-medium">Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-base font-medium">Models</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-base font-medium">Gallery</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-base font-medium">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-base font-medium">Contact</Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 w-3/4 mt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
