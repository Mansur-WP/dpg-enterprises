import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Leaf, Zap, Shield, BarChart3, BatteryCharging, Cpu } from "lucide-react";
import urbanXImg from "@assets/image_1780425003258.png";
import showroomImg from "@assets/image_1780425029747.png";
import eRiderImg from "@assets/image_1780425006540.png";
import cityVoltImg from "@assets/image_1780425010140.png";
import smartCruiserImg from "@assets/image_1780425014398.png";
import detailImg from "@assets/image_1780424999546.png";

const products = [
  {
    name: "MUNNASP Urban X",
    tagline: "The City Conqueror",
    range: "80 km",
    speed: "65 km/h",
    image: urbanXImg,
    bg: "#f0f4ff",
  },
  {
    name: "MUNNASP E-Rider Pro",
    tagline: "Classic Reimagined",
    range: "60 km",
    speed: "55 km/h",
    image: eRiderImg,
    bg: "#f5f5f5",
  },
  {
    name: "MUNNASP City Volt",
    tagline: "Maximum Range",
    range: "100 km",
    speed: "70 km/h",
    image: cityVoltImg,
    bg: "#f0fff4",
  },
  {
    name: "MUNNASP Smart Cruiser",
    tagline: "Stealth and Power",
    range: "75 km",
    speed: "60 km/h",
    image: smartCruiserImg,
    bg: "#f7f7f7",
  },
];

const reasons = [
  { icon: Leaf, title: "Zero Emissions", desc: "No exhaust, no guilt. Every ride is a vote for cleaner Nigerian cities." },
  { icon: BarChart3, title: "80% Lower Running Cost", desc: "Electricity costs a fraction of petrol. Charge overnight, ride all day." },
  { icon: BatteryCharging, title: "Advanced Battery Tech", desc: "Lithium-ion cells engineered for Nigeria's heat, dust, and daily demand." },
  { icon: Shield, title: "Built to Last", desc: "Rigorous quality checks. Every MUNNASP leaves our showroom ready to perform." },
  { icon: Cpu, title: "Smart Features", desc: "Digital displays, anti-theft alarms, and smart charging in every model." },
  { icon: Zap, title: "Instant Torque", desc: "Electric motors deliver full power the moment you twist the throttle." },
];

export default function Home() {
  return (
    <div className="bg-white text-neutral-950 overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center"
        style={{ background: "linear-gradient(135deg, #04071a 0%, #08142e 40%, #061520 100%)" }}
      >
        {/* Ambient blue glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 72% 50%, rgba(26,58,143,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Product image — right side, masked edges to blend seamlessly */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] flex items-center justify-center"
        >
          <img
            src={urbanXImg}
            alt="MUNNASP Urban X"
            className="w-full max-w-[660px] h-auto object-contain"
            style={{
              maskImage:
                "radial-gradient(ellipse 82% 80% at 52% 52%, black 35%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.5) 65%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 82% 80% at 52% 52%, black 35%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.5) 65%, transparent 80%)",
            }}
          />
        </motion.div>

        {/* Left text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full py-32">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-px bg-[#3aaa35]" />
              <span className="text-[#3aaa35] text-xs font-bold tracking-[0.22em] uppercase">
                Nigeria's Electric Mobility Leader
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6"
            >
              Driving<br />
              Nigeria's<br />
              <span style={{ color: "#3aaa35" }}>Electric</span> Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="text-white/55 text-base leading-relaxed mb-10 max-w-sm"
            >
              Premium electric scooters and smart mobility built for the next generation of Nigerian transportation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/products"
                data-testid="button-hero-explore"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all group"
              >
                Explore Models
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                data-testid="button-hero-contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white/50 hover:text-white transition-all"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="flex gap-8 mt-14 pt-8 border-t border-white/10"
            >
              {[["4+", "Models"], ["100km", "Max Range"], ["80%", "Cost Savings"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-white font-black text-2xl">{val}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-0.5">{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div className="bg-[#1a3a8f] py-4 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-white/80 text-xs font-semibold tracking-[0.25em] uppercase shrink-0">
              GO ELECTRIC, GO SMART &nbsp;&nbsp;·&nbsp;&nbsp; Zero Emissions &nbsp;&nbsp;·&nbsp;&nbsp; Premium Electric Mobility &nbsp;&nbsp;·&nbsp;&nbsp; Made for Nigeria
            </span>
          ))}
        </div>
      </div>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Fleet</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Premium Electric<br />Models
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a3a8f] hover:gap-3 transition-all group"
          >
            View all models <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-testid={`card-product-${i}`}
              className="group cursor-pointer"
            >
              <Link href="/products">
                <div
                  className="rounded-2xl overflow-hidden mb-4 relative aspect-square flex items-center justify-center"
                  style={{ backgroundColor: p.bg }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-1">
                  <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">{p.tagline}</p>
                  <h3 className="font-bold text-neutral-950 text-base mb-2">{p.name}</h3>
                  <div className="flex gap-4 text-sm text-neutral-500">
                    <span><strong className="text-neutral-950">{p.range}</strong> range</span>
                    <span><strong className="text-neutral-950">{p.speed}</strong> top speed</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FULL-BLEED PRODUCT FEATURE ─── */}
      <section className="bg-neutral-950 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Flagship Model</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                MUNNASP<br />Urban X
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                Engineered for urban dominance. The Urban X combines futuristic styling with 80 km of range, intelligent dashboard, and a powerful hub motor — the definitive choice for Nigeria's modern city rider.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[["80 km", "Range"], ["65 km/h", "Top Speed"], ["72V 32Ah", "Battery"]].map(([val, lbl]) => (
                  <div key={lbl} className="border-t border-white/10 pt-4">
                    <div className="text-white font-black text-xl mb-0.5">{val}</div>
                    <div className="text-neutral-500 text-xs uppercase tracking-widest">{lbl}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                data-testid="button-feature-quote"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all group"
              >
                Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square bg-neutral-800/50 rounded-3xl flex items-center justify-center overflow-hidden">
                <img src={urbanXImg} alt="MUNNASP Urban X" className="w-5/6 h-5/6 object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY MUNNASP ─── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-black">Built Different. Driven Better.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              data-testid={`card-reason-${i}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a3a8f]/8 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-[#1a3a8f]" />
              </div>
              <h3 className="font-bold text-neutral-950 text-lg mb-2">{r.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── DETAIL SHOT FULL-WIDTH ─── */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={detailImg} alt="Electric bike detail" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-6"
          >
            <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-4">Precision Engineering</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-2xl mx-auto">
              Every Detail. Engineered for Nigeria.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Visit Us in Kano</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Go Electric?
          </h2>
          <p className="text-neutral-500 text-lg max-w-lg mx-auto mb-10">
            Visit our showroom on Muhammadu Buhari Way, Kano State. Talk to our team, see the bikes in person, and take your first electric ride.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              data-testid="button-cta-contact"
              className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#152f78] transition-all group"
            >
              Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 font-semibold text-sm px-8 py-4 rounded-full hover:border-neutral-500 transition-all"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
