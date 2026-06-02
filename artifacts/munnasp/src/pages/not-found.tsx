import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import logoSrc from "@assets/image_1780424986415.png";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "linear-gradient(135deg, #04071a 0%, #08142e 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(58,170,53,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <Link href="/">
          <img src={logoSrc} alt="MUNASSAP NIG. LTD." className="h-12 mb-12 opacity-90" />
        </Link>

        {/* 404 number */}
        <div
          className="text-[10rem] font-black leading-none tracking-tighter mb-4 select-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-black text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-neutral-400 text-base max-w-sm leading-relaxed mb-10">
          The page you're looking for doesn't exist. Let's get you back on the road.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all group"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white/45 hover:text-white transition-all group"
          >
            View Models <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-14 text-white/20 text-xs font-bold tracking-[0.25em] uppercase">
          MUNASSAP NIG. LTD. · Go Electric, Go Smart
        </p>
      </motion.div>
    </div>
  );
}
