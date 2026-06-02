import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Battery, Clock, Gauge, ArrowRight } from "lucide-react";
import urbanXImg from "@assets/image_1780425003258.png";
import eRiderImg from "@assets/image_1780425006540.png";
import cityVoltImg from "@assets/image_1780425010140.png";
import smartCruiserImg from "@assets/image_1780425014398.png";

const products = [
  {
    name: "MUNNASP Urban X",
    tagline: "The City Conqueror",
    description:
      "Engineered for urban dominance. The Urban X blends futuristic styling with raw electric performance. Its angular body, intelligent dashboard, and powerful hub motor make it the definitive choice for professionals navigating Nigeria's busiest streets.",
    image: urbanXImg,
    bg: "#eef2ff",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "65 km/h" },
      { icon: Zap, label: "Range", value: "80 km" },
      { icon: Battery, label: "Battery", value: "72V 32Ah" },
      { icon: Clock, label: "Charge Time", value: "6–8 hrs" },
    ],
    features: ["LED Halo Headlight", "Digital Dashboard", "Anti-Theft Alarm", "USB Charging Port"],
  },
  {
    name: "MUNNASP E-Rider Pro",
    tagline: "Classic Reimagined",
    description:
      "A timeless silhouette meets cutting-edge electric technology. The E-Rider Pro preserves the classic scooter aesthetic while delivering a completely silent, zero-emission ride. Ideal for riders who value elegance and efficiency in equal measure.",
    image: eRiderImg,
    bg: "#f5f5f5",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "55 km/h" },
      { icon: Zap, label: "Range", value: "60 km" },
      { icon: Battery, label: "Battery", value: "60V 20Ah" },
      { icon: Clock, label: "Charge Time", value: "4–6 hrs" },
    ],
    features: ["Classic Chrome Accents", "Comfortable Dual Seat", "Under-Seat Storage", "Disc Brakes"],
  },
  {
    name: "MUNNASP City Volt",
    tagline: "Maximum Range Champion",
    description:
      "When distance matters, the City Volt delivers. Boasting the highest range in our lineup at 100 km per charge, this model is built for delivery riders, daily commuters, and anyone who refuses to stop short.",
    image: cityVoltImg,
    bg: "#f0fff6",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "70 km/h" },
      { icon: Zap, label: "Range", value: "100 km" },
      { icon: Battery, label: "Battery", value: "72V 40Ah" },
      { icon: Clock, label: "Charge Time", value: "8 hrs" },
    ],
    features: ["Extended Battery Pack", "Regenerative Braking", "Heavy-Duty Suspension", "Smart App Ready"],
  },
  {
    name: "MUNNASP Smart Cruiser",
    tagline: "Stealth and Power",
    description:
      "Matte black finish, aggressive stance, whisper-quiet performance. The Smart Cruiser is for riders who prefer their power understated. A head-turner that lets the ride do the talking.",
    image: smartCruiserImg,
    bg: "#f7f7f7",
    specs: [
      { icon: Gauge, label: "Top Speed", value: "60 km/h" },
      { icon: Zap, label: "Range", value: "75 km" },
      { icon: Battery, label: "Battery", value: "60V 28Ah" },
      { icon: Clock, label: "Charge Time", value: "5–7 hrs" },
    ],
    features: ["Matte Stealth Finish", "Keyless Ignition", "Hydraulic Shock Absorbers", "Integrated Tail Box"],
  },
];

export default function Products() {
  return (
    <div className="bg-white text-neutral-950 min-h-screen">
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

              <Link
                href="/contact"
                data-testid={`button-quote-${i}`}
                className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#152f78] transition-all w-fit group"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

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
