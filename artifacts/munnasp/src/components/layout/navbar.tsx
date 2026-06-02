import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import logoSrc from "@assets/image_1780424986415.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Models" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white border-b border-neutral-150 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src={logoSrc}
            alt="MUNNASP NIG. LTD."
            className="h-9 w-auto"
            data-testid="img-logo"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-neutral-700 hover:text-neutral-950"
              }`}
              data-testid={`link-nav-${l.label.toLowerCase()}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            data-testid="button-nav-quote"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
              transparent
                ? "bg-white text-neutral-950 hover:bg-white/90"
                : "bg-[#1a3a8f] text-white hover:bg-[#152f78]"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            transparent ? "text-white" : "text-neutral-800"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-menu-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-neutral-800 hover:text-neutral-950 py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-full bg-[#1a3a8f] text-white"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
