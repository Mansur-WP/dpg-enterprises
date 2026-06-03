import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Fuel, Zap, Leaf, Wrench, TrendingDown, Sun, Battery, ShieldCheck } from "lucide-react";

const savings = [
  { label: "Monthly Petrol (bike)", value: "₦35,000+", sub: "at current pump prices" },
  { label: "Monthly Electric (charge)", value: "₦3,500", sub: "avg. home charging cost" },
  { label: "Monthly Savings", value: "₦31,500+", sub: "straight back in your pocket", highlight: true },
  { label: "Annual Savings", value: "₦378,000+", sub: "every single year", highlight: true },
];

const comparisons = [
  {
    topic: "Fuel Cost",
    petrol: "₦35,000 – ₦50,000 / month",
    electric: "₦3,000 – ₦5,000 / month",
    winner: "electric",
  },
  {
    topic: "Maintenance",
    petrol: "Engine oil, spark plugs, carb, chains...",
    electric: "Tyres, brakes — almost nothing else",
    winner: "electric",
  },
  {
    topic: "Noise",
    petrol: "Loud exhaust — noise pollution",
    electric: "Near-silent. Smooth and quiet.",
    winner: "electric",
  },
  {
    topic: "Emissions",
    petrol: "CO₂, carbon monoxide every ride",
    electric: "Zero tail-pipe emissions",
    winner: "electric",
  },
  {
    topic: "Fuel Queues",
    petrol: "Hours wasted at filling stations",
    electric: "Plug in at home overnight",
    winner: "electric",
  },
  {
    topic: "Engine Life",
    petrol: "Complex engine wears down over time",
    electric: "Few moving parts — lasts longer",
    winner: "electric",
  },
];

const nigeriaReasons = [
  {
    icon: Fuel,
    title: "Nigeria's Fuel Crisis",
    desc: "Fuel prices have risen dramatically. With petrol at ₦1,000+ per litre, daily commuters spend fortunes just getting to work. Electric cuts that to almost zero.",
  },
  {
    icon: Sun,
    title: "Abundant Sunlight",
    desc: "Nigeria receives over 2,600 hours of sunshine per year — ideal for solar-charged electric vehicles. Pair your DPG with a small solar panel and ride for free.",
  },
  {
    icon: TrendingDown,
    title: "Falling Electricity Costs",
    desc: "Even on the grid, charging an electric scooter overnight costs less than ₦500. Off-grid solar makes it cheaper still — a game-changer for Kano residents.",
  },
  {
    icon: Wrench,
    title: "Less Maintenance Headache",
    desc: "No engine oil changes, no fuel filters, no carburettor cleaning. Electric motors have fewer moving parts — less to break, less to fix, more time riding.",
  },
  {
    icon: Leaf,
    title: "Cleaner Nigerian Cities",
    desc: "Air pollution in Kano and Lagos costs lives. Every electric rider removes one more exhaust pipe from our streets. Be part of the solution.",
  },
  {
    icon: ShieldCheck,
    title: "Energy Independence",
    desc: "Stop depending on petrol stations, queues, and price hikes. With a charged battery at home, you control your commute — nobody can hold you hostage.",
  },
];

export default function WhyElectric() {
  return (
    <div className="bg-white text-neutral-950 overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section
        className="relative pt-40 pb-28 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #04071a 0%, #08142e 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 55% at 50% 60%, rgba(58,170,53,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#3aaa35]/30 bg-[#3aaa35]/10"
          >
            <Zap className="w-3.5 h-3.5 text-[#3aaa35]" />
            <span className="text-[#3aaa35] text-xs font-bold tracking-[0.18em] uppercase">The Smart Choice for Nigeria</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
          >
            Why Go<br />
            <span style={{ color: "#3aaa35" }}>Electric</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            With fuel above ₦1,000 per litre and queues stretching hours — there has never been a better time to switch to electric. Here's the full picture.
          </motion.p>
        </div>
      </section>

      {/* ─── SAVINGS CALCULATOR ─── */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Real Numbers</p>
            <h2 className="text-4xl md:text-5xl font-black">What You Actually Save</h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto text-base">Based on a typical Kano daily commuter riding 30–50 km/day.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {savings.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-6 ${s.highlight
                  ? "bg-[#1a3a8f] text-white"
                  : "bg-white border border-neutral-100 shadow-sm"
                  }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${s.highlight ? "text-white/60" : "text-neutral-400"}`}>
                  {s.label}
                </p>
                <p className={`text-3xl font-black leading-none mb-1 ${s.highlight ? "text-white" : "text-neutral-950"}`}>
                  {s.value}
                </p>
                <p className={`text-xs mt-2 ${s.highlight ? "text-white/55" : "text-neutral-400"}`}>{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Head to Head</p>
            <h2 className="text-4xl md:text-5xl font-black">Petrol vs Electric</h2>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-100 shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-neutral-950 text-white">
              <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-400">Category</div>
              <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-400 border-l border-white/10">
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-red-400" /> Petrol Bike
                </div>
              </div>
              <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider border-l border-white/10">
                <div className="flex items-center gap-2 text-[#3aaa35]">
                  <Zap className="w-4 h-4" /> DPG Electric
                </div>
              </div>
            </div>

            {comparisons.map((row, i) => (
              <motion.div
                key={row.topic}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`grid grid-cols-3 border-t border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}`}
              >
                <div className="px-6 py-5 font-semibold text-sm text-neutral-700">{row.topic}</div>
                <div className="px-6 py-5 text-sm text-neutral-500 border-l border-neutral-100">{row.petrol}</div>
                <div className="px-6 py-5 text-sm font-semibold text-[#1a3a8f] border-l border-neutral-100 flex items-start gap-2">
                  <span className="text-[#3aaa35] mt-0.5 shrink-0">✓</span>
                  {row.electric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NIGERIA-SPECIFIC REASONS ─── */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Made for Nigeria</p>
            <h2 className="text-4xl md:text-5xl font-black">Why Electric Makes Sense<br />Right Here, Right Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nigeriaReasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#1a3a8f]/8 flex items-center justify-center mb-5">
                  <r.icon className="w-5 h-5 text-[#1a3a8f]" />
                </div>
                <h3 className="font-bold text-neutral-950 text-lg mb-2">{r.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BATTERY EXPLAINER ─── */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #04071a 0%, #08142e 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-[#3aaa35]" /> Technology
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Lithium Power.<br />Built for the Heat.
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Every DPG uses advanced lithium-ion battery technology specifically chosen for Nigeria's climate — high-temperature tolerance, fast charging, and long cycle life designed to handle Kano's heat and humidity.
              </p>
              <div className="space-y-4">
                {[
                  ["6–8 hrs", "Full charge time (standard outlet)"],
                  ["500+", "Charge cycles before any degradation"],
                  ["Home or Generator", "Charge anywhere — no special station needed"],
                ].map(([val, label]) => (
                  <div key={label} className="flex items-center gap-4 border-t border-white/8 pt-4">
                    <div className="text-white font-black text-xl min-w-[100px]">{val}</div>
                    <div className="text-neutral-400 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Battery, title: "Long Life Battery", desc: "Lasting 3–5 years under normal Nigerian use conditions" },
                { icon: Zap, title: "Fast Charging", desc: "Fully charged in 6–8 hrs on any standard 220V outlet" },
                { icon: Sun, title: "Solar Compatible", desc: "Works with home solar panels — ride for free in sunlight" },
                { icon: ShieldCheck, title: "Theft Protection", desc: "Built-in alarm and smart lock on every model" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <card.icon className="w-5 h-5 text-[#3aaa35] mb-3" />
                  <div className="text-white font-bold text-sm mb-1">{card.title}</div>
                  <div className="text-neutral-500 text-xs leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 text-center bg-white">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-5 max-w-2xl mx-auto leading-tight">
            Convinced? Let's Get You Riding.
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto mb-10 text-base">
            Visit our showroom in Kano, see the models in person, and take your first electric test ride.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#152f78] transition-all group"
            >
              See All Models <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-800 font-semibold text-sm px-8 py-4 rounded-full hover:border-neutral-400 transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
