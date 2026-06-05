import { Link } from "wouter";
import logoSrc from "@assets/dpg_logo.png";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Zap } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoSrc} alt="DPG Enterprises" className="h-12 w-auto" />
              <span className="font-black text-2xl tracking-tight text-white">DPG Enterprises</span>
            </div>
            <p className="text-[#3aaa35] text-xs font-bold uppercase tracking-[0.2em] mb-4">Go Electric, Go Smart!</p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
              Nigeria's premium electric mobility brand. Leading the charge toward sustainable, affordable, and aspirational electric transportation.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3aaa35] flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Models</p>
            <ul className="space-y-3">
              {[
                { label: "Urban X", href: "/products" },
                { label: "E-Rider Pro", href: "/products" },
                { label: "City Volt", href: "/products" },
                { label: "Smart Cruiser", href: "/products" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-neutral-400 text-sm hover:text-[#3aaa35] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Explore</p>
            <ul className="space-y-3">
              {[
                { label: "Why Electric?", href: "/why-electric" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-neutral-400 text-sm hover:text-[#3aaa35] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3aaa35] shrink-0 mt-0.5" />
                <span className="text-neutral-400 text-sm leading-relaxed">Muhammadu Buhari Way, Kano State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3aaa35] shrink-0" />
                <a href="https://wa.me/2348059434243" className="text-neutral-400 text-sm hover:text-[#3aaa35] transition-colors">
                  08059434243
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#3aaa35] shrink-0" />
                <span className="text-neutral-400 text-sm">Mon–Sat 8AM–6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500 text-xs md:text-sm">
          <p>© {currentYear} DPG Enterprises. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#privacy" className="hover:text-[#3aaa35] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#3aaa35] transition-colors">
              Terms of Service
            </a>
            <a href="#sitemap" className="hover:text-[#3aaa35] transition-colors">
              Sitemap
            </a>
          </div>
        </div>

        {/* Powered by notice */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-neutral-600 text-xs">
          <p>Designed & built with <Zap className="w-3 h-3 inline text-[#3aaa35]" /> by Ami-go</p>
        </div>
      </div>
    </footer>
  );
}
