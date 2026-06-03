import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Zap, Leaf, Shield, BarChart3, BatteryCharging, Cpu, MapPin, Phone, Fuel } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import showroomImg from "@assets/image_1780425029747.png";
import urbanXImg from "@assets/image_1780425003258.png";
import eRiderImg from "@assets/image_1780425006540.png";
import cityVoltImg from "@assets/image_1780425010140.png";
import smartCruiserImg from "@assets/image_1780425014398.png";
import detailImg from "@assets/image_1780424999546.png";

const products = [
  { name: "Urban X", tagline: "The City Conqueror", range: "80 km", speed: "65 km/h", image: urbanXImg, bg: "#eef2ff" },
  { name: "E-Rider Pro", tagline: "Classic Reimagined", range: "60 km", speed: "55 km/h", image: eRiderImg, bg: "#f5f5f5" },
  { name: "City Volt", tagline: "Maximum Range", range: "100 km", speed: "70 km/h", image: cityVoltImg, bg: "#f0fff4" },
  { name: "Smart Cruiser", tagline: "Stealth & Power", range: "75 km", speed: "60 km/h", image: smartCruiserImg, bg: "#f7f7f7" },
];

const reasons = [
  { icon: Leaf, title: "Zero Emissions", desc: "No exhaust, no guilt. Every ride is a vote for cleaner Nigerian cities." },
  { icon: BarChart3, title: "80% Lower Running Cost", desc: "Electricity costs a fraction of petrol. Charge overnight, ride all day." },
  { icon: BatteryCharging, title: "Advanced Battery Tech", desc: "Lithium-ion cells engineered for Nigeria's heat, dust, and daily demand." },
  { icon: Shield, title: "Built to Last", desc: "Rigorous quality checks. Every DPG leaves our showroom ready to perform." },
  { icon: Cpu, title: "Smart Features", desc: "Digital displays, anti-theft alarms, and smart charging in every model." },
  { icon: Zap, title: "Instant Torque", desc: "Electric motors deliver full power the moment you twist the throttle." },
];

const comparisons = [
  { topic: "Fuel Cost", petrol: "₦35,000 – ₦50,000 / month", electric: "₦3,000 – ₦5,000 / month" },
  { topic: "Maintenance", petrol: "Engine oil, spark plugs...", electric: "Tyres, brakes — almost nothing else" },
  { topic: "Noise", petrol: "Loud exhaust — noise pollution", electric: "Near-silent. Smooth and quiet." },
  { topic: "Emissions", petrol: "CO₂, carbon monoxide every ride", electric: "Zero tail-pipe emissions" },
];

const faqs = [
  {
    q: "How do I charge it when there is no light (power outage)?",
    a: "Our scooters come with removable batteries. You can detach the battery and charge it indoors using a generator, solar inverter, or standard wall socket. It uses very little electricity."
  },
  {
    q: "Are spare parts available in Nigeria?",
    a: "Yes! We stock all essential spare parts (tyres, brake pads, batteries, controllers) at our Kano showroom. Our local technicians are always ready to help."
  },
  {
    q: "Do I need a special license to ride?",
    a: "No special license is required beyond a standard motorcycle riding permit. Our bikes are classified as standard two-wheelers under Nigerian traffic laws."
  },
  {
    q: "What happens if I ride it in the rain?",
    a: "DPG electric scooters are IP65 water-resistant. The battery and motor are fully sealed, so riding through typical rain and small puddles is completely safe."
  }
];

export default function Home() {
  return (
    <div className="bg-white text-neutral-950 overflow-x-hidden">

      {/* ─── HERO: Full-bleed photo, centered headline — NIU/Gogoro style ─── */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background photo */}
        <img
          src={showroomImg}
          alt="DPG Showroom"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.45)" }}
        />

        {/* Gradient overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          {/* Live pulsing badge — NIU style */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3aaa35] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3aaa35]" />
            </span>
            <span className="text-white text-xs font-semibold tracking-[0.18em] uppercase">
              Now Available in Kano, Nigeria
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6"
          >
            Go Electric.
            <br />
            <span style={{ color: "#3aaa35" }}>Go Smart.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nigeria's premium electric scooter brand. Save 80% on fuel. Ride cleaner. Live smarter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold text-sm px-8 py-4 rounded-full hover:bg-white/92 transition-all group shadow-lg shadow-black/20"
            >
              Explore All Models
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/2348059434243?text=Hello%20DPG%21%20I%27d%20like%20to%20book%20a%20test%20ride%20at%20your%20showroom."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3aaa35] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#2d8828] transition-all shadow-lg shadow-[#3aaa35]/20"
            >
              Book a Test Ride
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/35 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-white/65 hover:bg-white/8 transition-all backdrop-blur-sm"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Stats bar at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <div className="bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-white/10">
              {[
                ["4+", "Electric Models"],
                ["100 km", "Max Range"],
                ["80%", "Fuel Cost Saved"],
              ].map(([val, lbl]) => (
                <div key={lbl} className="text-center px-4">
                  <div className="text-white font-black text-2xl md:text-3xl">{val}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="bg-[#1a3a8f] py-3.5 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_22s_linear_infinite] whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-white/75 text-xs font-semibold tracking-[0.22em] uppercase shrink-0">
              GO ELECTRIC, GO SMART &nbsp;·&nbsp; Zero Emissions &nbsp;·&nbsp; Premium Electric Mobility &nbsp;·&nbsp; Kano, Nigeria &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ─── FEATURED: URBAN X with floating tags (NIU-style) ─── */}
      <section className="py-28" style={{ background: "linear-gradient(135deg, #04071a 0%, #08142e 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-[#3aaa35]" /> Flagship Model
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                DPG<br />Urban X
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-md">
                Engineered for urban dominance. Futuristic styling meets real-world performance — the definitive choice for Nigeria's modern city rider.
              </p>

              {/* Spec pills */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[["80 km", "Range"], ["65 km/h", "Top Speed"], ["72V 32Ah", "Battery"]].map(([v, l]) => (
                  <div key={l} className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-white font-black text-lg leading-none">{v}</div>
                    <div className="text-neutral-500 text-xs uppercase tracking-wider mt-1.5">{l}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all group"
              >
                Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: scooter image + floating feature tags */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 relative"
            >
              {/* Glow ring behind scooter */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 65% at 50% 52%, rgba(26,58,143,0.4) 0%, transparent 70%)",
                }}
              />

              <div className="relative aspect-square flex items-center justify-center">
                <img
                  src={urbanXImg}
                  alt="DPG Urban X"
                  className="w-5/6 h-5/6 object-contain relative z-10"
                  style={{
                    maskImage: "radial-gradient(ellipse 80% 78% at 50% 52%, black 40%, rgba(0,0,0,0.8) 58%, transparent 76%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 78% at 50% 52%, black 40%, rgba(0,0,0,0.8) 58%, transparent 76%)",
                  }}
                />

                {/* Floating feature tags — NIU style */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[14%] left-[2%] z-20 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)" }}
                >
                  <Zap className="w-4 h-4 text-[#3aaa35] shrink-0" />
                  <div>
                    <div className="text-white text-xs font-bold leading-none">65 km/h</div>
                    <div className="text-white/50 text-[10px] mt-0.5">Top Speed</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[32%] right-[0%] z-20 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)" }}
                >
                  <BatteryCharging className="w-4 h-4 text-[#3aaa35] shrink-0" />
                  <div>
                    <div className="text-white text-xs font-bold leading-none">80 km</div>
                    <div className="text-white/50 text-[10px] mt-0.5">Full Range</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                  className="absolute bottom-[18%] left-[4%] z-20 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)" }}
                >
                  <Shield className="w-4 h-4 text-[#3aaa35] shrink-0" />
                  <div>
                    <div className="text-white text-xs font-bold leading-none">Smart Lock</div>
                    <div className="text-white/50 text-[10px] mt-0.5">Anti-Theft</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Fleet</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Premium Electric<br />Models
            </h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a3a8f] hover:gap-3 transition-all group">
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
              className="group cursor-pointer"
            >
              <Link href="/products">
                <div className="rounded-2xl overflow-hidden mb-4 relative aspect-square flex items-center justify-center" style={{ backgroundColor: p.bg }}>
                  <img src={p.image} alt={p.name} className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-1">
                  <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">{p.tagline}</p>
                  <h3 className="font-bold text-neutral-950 text-base mb-2">DPG {p.name}</h3>
                  <div className="flex gap-4 text-sm text-neutral-500">
                    <span><strong className="text-neutral-950">{p.range}</strong> range</span>
                    <span><strong className="text-neutral-950">{p.speed}</strong> top</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── WHY DPG ─── */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
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
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-[#1a3a8f]" />
                </div>
                <h3 className="font-bold text-neutral-950 text-lg mb-2">{r.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Customer Stories</p>
          <h2 className="text-4xl md:text-5xl font-black">What Riders Are Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "I was spending over ₦40,000 a month on fuel. Since switching to DPG, I spend less than ₦4,000 on charging. The savings paid for most of the bike in the first year.",
              name: "Mansur Nasir",
              role: "Student, NWU Kano",
              initial: "M",
              color: "#1a3a8f",
            },
            {
              quote: "The Urban X is smooth, quiet, and gets me through Kano traffic with zero stress. No fuel queues, no engine problems. I should have done this two years ago.",
              name: "Ibrahim Suleiman",
              role: "Business Owner, Kano",
              initial: "I",
              color: "#3aaa35",
            },
            {
              quote: "As a delivery rider, running costs are everything. DPG cut my expenses dramatically. The team at the showroom were very helpful with the right model for my routes.",
              name: "Yakubu Danladi",
              role: "Delivery Rider, Kano",
              initial: "Y",
              color: "#1a3a8f",
            },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="rounded-3xl p-8 bg-neutral-50 border border-neutral-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 text-sm leading-relaxed flex-grow mb-7">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-neutral-100 pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-neutral-950 text-sm">{t.name}</div>
                  <div className="text-neutral-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── COMPARISON TABLE (Moved to Home) ─── */}
      <section className="py-24 px-6 bg-neutral-50">
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

      {/* ─── FAQ SECTION ─── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Got Questions?</p>
          <h2 className="text-4xl md:text-5xl font-black">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-neutral-100 py-2">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-[#1a3a8f]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ─── DETAIL SHOT ─── */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={detailImg} alt="Electric bike detail" className="w-full h-full object-cover object-center" style={{ filter: "brightness(0.55)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white px-8 md:px-16 lg:px-24 max-w-2xl"
          >
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Precision Engineering</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Every Detail. Engineered for Nigeria.</h2>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Visit Us in Kano</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5 max-w-2xl mx-auto leading-tight">Ready to Go Electric?</h2>
          <p className="text-neutral-500 text-base max-w-md mx-auto mb-10">
            Visit our showroom on Muhammadu Buhari Way, Kano. Talk to our team and take your first electric ride.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="https://wa.me/2348059434243?text=Hello%20DPG%21%20I%27d%20like%20to%20book%20a%20test%20ride%20at%20your%20showroom."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3aaa35] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#2d8828] transition-all shadow-lg shadow-[#3aaa35]/20"
            >
              Book a Test Ride
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#152f78] transition-all group"
            >
              See All Models <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/why-electric"
              className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-800 font-semibold text-sm px-8 py-4 rounded-full hover:border-neutral-400 transition-all"
            >
              Why Go Electric?
            </Link>
          </div>

          {/* Quick contact links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <a href="https://wa.me/2348059434243?text=Hello%20DPG%21%20I%27d%20like%20to%20learn%20more%20about%20your%20electric%20scooters." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900 transition-colors">
              <Phone className="w-4 h-4" /> 08059434243
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Muhammadu Buhari Way, Kano
            </span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
