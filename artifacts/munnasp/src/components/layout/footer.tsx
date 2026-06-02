import { Link } from "wouter";
import logoSrc from "@assets/image_1780424986415.png";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <img src={logoSrc} alt="MUNASSAP NIG. LTD." className="h-10 mb-5" />
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Go Electric, Go Smart!</p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Leading Nigeria into a sustainable future with premium electric mobility solutions built for power, style, and efficiency.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white text-sm font-bold mb-5">Quick Links</p>
            <ul className="space-y-3">
              {[["Models", "/products"], ["Gallery", "/gallery"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-neutral-400 text-sm hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white text-sm font-bold mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3aaa35] shrink-0 mt-0.5" />
                <span className="text-neutral-400 text-sm leading-relaxed">Muhammadu Buhari Way, Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3aaa35] shrink-0" />
                <a href="https://wa.me/2349042834479?text=Hello%20MUNASSAP%21%20I%27d%20like%20to%20learn%20more%20about%20your%20electric%20scooters." target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm hover:text-white transition-colors">09042834479</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} MUNASSAP NIG. LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
