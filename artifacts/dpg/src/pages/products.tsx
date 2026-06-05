import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Battery, Clock, Gauge, ArrowRight } from "lucide-react";
import urbanXImg from "@assets/image_1780425003258.png";
import eRiderImg from "@assets/image_1780425006540.png";
import cityVoltImg from "@assets/image_1780425010140.png";
import smartCruiserImg from "@assets/image_1780425014398.png";

const products = [
  {
    name: "DPG Urban X",
    tagline: "The City Conqueror",
    description:
      "Engineered for urban dominance. The Urban X blends futuristic styling with raw electric performance. Its angular body, intelligent dashboard, and powerful hub motor make it the definitive choice for professionals navigating Nigeria's busiest streets. Built for speed, built for style, built to dominate.",
    image: urbanXImg,
    bg: "#eef2ff",
    price: "₦1,200,000",
    ideal: "City professionals, speed enthusiasts, delivery riders",
    warranty: "2 years",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "65 km/h" },
      { icon: Zap, label: "Range", value: "80 km" },
      { icon: Battery, label: "Battery", value: "72V 32Ah LiPo" },
      { icon: Clock, label: "Charge Time", value: "6–8 hrs" },
    ],
    features: ["LED Halo Headlight", "Digital Dashboard Display", "Anti-Theft Alarm System", "USB Charging Port", "Dual Disc Brakes", "IP65 Water Resistant"],
  },
  {
    name: "DPG E-Rider Pro",
    tagline: "Classic Reimagined",
    description:
      "A timeless silhouette meets cutting-edge electric technology. The E-Rider Pro preserves the classic scooter aesthetic while delivering a completely silent, zero-emission ride. Ideal for riders who value elegance and efficiency in equal measure. Experience luxury meets sustainability.",
    image: eRiderImg,
    bg: "#f5f5f5",
    price: "₦1,100,000",
    ideal: "Commuters, leisure riders, family use",
    warranty: "2 years",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "55 km/h" },
      { icon: Zap, label: "Range", value: "60 km" },
      { icon: Battery, label: "Battery", value: "60V 20Ah LiPo" },
      { icon: Clock, label: "Charge Time", value: "4–6 hrs" },
    ],
    features: ["Classic Chrome Accents", "Comfortable Dual Seat", "Under-Seat Storage Box", "Disc Brakes System", "Removable Battery", "Phone Mount"],
  },
  {
    name: "DPG City Volt",
    tagline: "Maximum Range Champion",
    description:
      "When distance matters, the City Volt delivers. Boasting the highest range in our lineup at 100 km per charge, this model is built for delivery riders, daily commuters, and anyone who refuses to stop short. The ultimate endurance machine.",
    image: cityVoltImg,
    bg: "#f0fff6",
    price: "₦750,000",
    ideal: "Delivery operators, long-distance commuters, fleet use",
    warranty: "18 months",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "70 km/h" },
      { icon: Zap, label: "Range", value: "100 km" },
      { icon: Battery, label: "Battery", value: "72V 40Ah Extended" },
      { icon: Clock, label: "Charge Time", value: "8 hrs" },
    ],
    features: ["Extended Battery Pack", "Regenerative Braking", "Heavy-Duty Suspension", "Smart App Integration", "Cargo Rack Ready", "All-Weather Capable"],
  },
  {
    name: "DPG Smart Cruiser",
    tagline: "Stealth and Power",
    description:
      "Matte black finish, aggressive stance, whisper-quiet performance. The Smart Cruiser is for riders who prefer their power understated. A head-turner that lets the ride do the talking. Pure performance, zero noise.",
    image: smartCruiserImg,
    bg: "#f7f7f7",
    price: "₦750,000",
    ideal: "Urban riders, night commuters, enthusiasts",
    warranty: "18 months",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "60 km/h" },
      { icon: Zap, label: "Range", value: "75 km" },
      { icon: Battery, label: "Battery", value: "60V 28Ah LiPo" },
      { icon: Clock, label: "Charge Time", value: "5–7 hrs" },
    ],
    features: ["Matte Stealth Finish", "Keyless Ignition System", "Hydraulic Shock Absorbers", "Integrated Tail Box", "LED Light Package", "Sport Mode"],
  },
];

import SEO from "../components/seo";

export default function Products() {
  return (
    <div className="bg-white text-neutral-950 min-h-screen">
      <SEO
        title="Electric Scooter Models — Urban X, E-Rider Pro, City Volt & More"
        description="Browse DPG Enterprises' full electric scooter lineup. Compare specs, pricing from ₦750,000, and features of the DPG Urban X, E-Rider Pro, City Volt, and Smart Cruiser. Available in Kano, Nigeria."
        path="/products"
        keywords="DPG Urban X, DPG E-Rider Pro, DPG City Volt, DPG Smart Cruiser, electric scooter models Nigeria, buy electric scooter Kano, electric bike price Nigeria"
      />
      {/* Header */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Fleet</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Electric<br />Models
          </h1>
        </motion.div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 pb-28 space-y-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid={`card-product-${i}`}
            className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            style={{ backgroundColor: p.bg }}
          >
            {/* Image side */}
            <div className={`flex items-center justify-center p-12 min-h-72 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={p.image}
                alt={p.name}
                className="max-h-80 w-full object-contain"
              />
            </div>

            {/* Text side */}
            <div className={`bg-white p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-neutral-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">{p.tagline}</p>
              <h2 className="text-3xl font-black text-neutral-950 mb-4">{p.name}</h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">{p.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {p.specs.map((s) => (
                  <div key={s.label} className="border-t border-neutral-100 pt-3">
                    <div className="flex items-center gap-2 mb-0.5">
                      <s.icon className="w-3.5 h-3.5 text-[#1a3a8f]" />
                      <span className="text-neutral-400 text-xs uppercase tracking-wider">{s.label}</span>
                    </div>
                    <span className="font-black text-neutral-950 text-lg">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs font-medium text-neutral-600 border border-neutral-200 bg-white px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Pricing badge */}
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-[#f0fff4] border border-[#3aaa35]/20">
                <span className="text-[#3aaa35] text-lg font-black">₦</span>
                <div>
                  <div className="font-bold text-neutral-950 text-sm">{p.price.replace('₦', '')}</div>
                  <div className="text-neutral-400 text-xs mt-0.5">Contact us for exact pricing and availability</div>
                </div>
                <a
                  href={`https://wa.me/2348059434243?text=Hello%20DPG%21%20I%27d%20like%20to%20know%20the%20exact%20price%20of%20the%20${encodeURIComponent(p.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto shrink-0 text-xs font-bold text-[#3aaa35] underline underline-offset-2 hover:text-[#2d8828] transition-colors"
                >
                  WhatsApp →
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  data-testid={`button-quote-${i}`}
                  className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#152f78] transition-all w-fit group"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/2348059434243?text=Hello%20DPG%21%20I%27d%20like%20to%20book%20a%20test%20ride%20for%20the%20${encodeURIComponent(p.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3aaa35] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#2d8828] transition-all w-fit"
                >
                  Book Test Ride
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── PRODUCT COMPARISON TABLE ─── */}
      <section className="py-24 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Head-to-Head</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Compare All Models</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-4 px-4 font-bold text-neutral-950">Feature</th>
                  {products.map((p) => (
                    <th key={p.name} className="text-center py-4 px-4 font-bold text-neutral-950">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Price", values: products.map(p => p.price) },
                  { label: "Top Speed", values: products.map(p => p.specs[0].value) },
                  { label: "Range", values: products.map(p => p.specs[1].value) },
                  { label: "Battery", values: products.map(p => p.specs[2].value) },
                  { label: "Charge Time", values: products.map(p => p.specs[3].value) },
                  { label: "Warranty", values: products.map(p => p.warranty) },
                  { label: "Ideal For", values: products.map(p => p.ideal) },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-neutral-50' : ''}`}>
                    <td className="py-4 px-4 font-semibold text-neutral-950">{row.label}</td>
                    {row.values.map((value, j) => (
                      <td key={j} className="text-center py-4 px-4 text-neutral-600 text-sm">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── AFTER-SALES SUPPORT ─── */}
      <section className="py-24 px-6 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Peace of Mind</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">After-Sales Support & Warranty</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100"
            >
              <div className="w-12 h-12 bg-[#f0fff4] rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#3aaa35]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Extended Warranty</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Up to 2-year warranty on select models covering motor, battery, and core electronic components. Your investment is protected.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100"
            >
              <div className="w-12 h-12 bg-[#eef2ff] rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#1a3a8f]" />
              </div>
              <h3 className="font-bold text-xl mb-3">Local Spare Parts Stock</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                No delays. We stock batteries, tyres, brake pads, controllers, and body panels at our Kano showroom. Get parts today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100"
            >
              <div className="w-12 h-12 bg-[#f5f5f5] rounded-2xl flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6 text-neutral-700" />
              </div>
              <h3 className="font-bold text-xl mb-3">Expert EV Technicians</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Certified mechanics trained on electric systems. Fast diagnostics, reliable repairs, and preventative maintenance plans available.
              </p>
            </motion.div>
          </div>

          {/* Additional support features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <h4 className="font-bold text-neutral-950 mb-2">Free Maintenance (Year 1)</h4>
              <p className="text-sm text-neutral-500">Regular checks, battery health monitoring, and software updates included in warranty period.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <h4 className="font-bold text-neutral-950 mb-2">24/7 Support Line</h4>
              <p className="text-sm text-neutral-500">WhatsApp support, roadside assistance, and emergency repair coordination always available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-neutral-950 py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Not sure which model suits you?</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">Talk to our team and we'll help you find the perfect match.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-all group"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
