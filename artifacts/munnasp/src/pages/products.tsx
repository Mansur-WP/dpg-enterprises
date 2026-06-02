import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Battery, Clock, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import urbanXImg from "@assets/image_1780425003258.png";
import eRiderImg from "@assets/image_1780425006540.png";
import cityVoltImg from "@assets/image_1780425010140.png";
import smartCruiserImg from "@assets/image_1780425014398.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const products = [
  {
    name: "MUNNASP Urban X",
    tagline: "The City Conqueror",
    description:
      "Engineered for urban dominance, the Urban X blends futuristic styling with raw electric performance. Its angular body, intelligent dashboard, and powerful hub motor make it the go-to choice for professionals navigating Nigeria's busiest streets.",
    image: urbanXImg,
    specs: [
      { icon: Gauge, label: "Top Speed", value: "65 km/h" },
      { icon: Zap, label: "Range", value: "80 km" },
      { icon: Battery, label: "Battery", value: "72V 32Ah" },
      { icon: Clock, label: "Charging Time", value: "6–8 hrs" },
    ],
    features: ["LED Headlight System", "Digital Instrument Cluster", "Anti-Theft Alarm", "USB Charging Port"],
    color: "from-blue-900/30 to-transparent",
    accent: "primary",
  },
  {
    name: "MUNNASP E-Rider Pro",
    tagline: "Classic Reimagined",
    description:
      "A timeless silhouette meets cutting-edge electric technology. The E-Rider Pro preserves the classic scooter aesthetic while delivering a completely silent, zero-emission ride. Ideal for riders who value elegance and efficiency in equal measure.",
    image: eRiderImg,
    specs: [
      { icon: Gauge, label: "Top Speed", value: "55 km/h" },
      { icon: Zap, label: "Range", value: "60 km" },
      { icon: Battery, label: "Battery", value: "60V 20Ah" },
      { icon: Clock, label: "Charging Time", value: "4–6 hrs" },
    ],
    features: ["Classic Chrome Accents", "Comfortable Dual Seat", "Under-Seat Storage", "Disc Brakes"],
    color: "from-zinc-900/50 to-transparent",
    accent: "secondary",
  },
  {
    name: "MUNNASP City Volt",
    tagline: "Maximum Range Champion",
    description:
      "When distance matters, the City Volt delivers. Boasting the highest range in our lineup at 100 km per charge, this model is built for delivery riders, daily commuters, and anyone who refuses to compromise on how far they can go.",
    image: cityVoltImg,
    specs: [
      { icon: Gauge, label: "Top Speed", value: "70 km/h" },
      { icon: Zap, label: "Range", value: "100 km" },
      { icon: Battery, label: "Battery", value: "72V 40Ah" },
      { icon: Clock, label: "Charging Time", value: "8 hrs" },
    ],
    features: ["Extended Range Battery Pack", "Regenerative Braking", "Smart App Connectivity", "Heavy-Duty Suspension"],
    color: "from-green-900/20 to-transparent",
    accent: "secondary",
  },
  {
    name: "MUNNASP Smart Cruiser",
    tagline: "Stealth and Power",
    description:
      "Matte black finish, aggressive stance, and whisper-quiet performance define the Smart Cruiser. Built for those who prefer their power understated, this model is a head-turner that lets the riding experience speak for itself.",
    image: smartCruiserImg,
    specs: [
      { icon: Gauge, label: "Top Speed", value: "60 km/h" },
      { icon: Zap, label: "Range", value: "75 km" },
      { icon: Battery, label: "Battery", value: "60V 28Ah" },
      { icon: Clock, label: "Charging Time", value: "5–7 hrs" },
    ],
    features: ["Matte Stealth Finish", "Keyless Ignition", "Hydraulic Shock Absorbers", "Integrated Tail Box"],
    color: "from-zinc-800/30 to-transparent",
    accent: "primary",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#0a0f2e] to-[#111111] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary text-xs font-bold uppercase tracking-widest">Our Fleet</span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-4">
            Electric <span className="gradient-text">Models</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four distinct electric scooters engineered for Nigerian roads, each purpose-built for a different kind of rider.
          </p>
        </motion.div>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6 space-y-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              data-testid={`card-product-${i}`}
              className={`glass-panel rounded-3xl overflow-hidden ${i % 2 === 0 ? "" : ""}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div
                  className={`relative bg-gradient-to-br ${product.color} flex items-center justify-center p-10 min-h-72 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-72 object-contain w-full"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/30 px-3 py-1 rounded-full">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl font-black text-white mb-3">{product.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                        <spec.icon className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <div className="text-white font-bold text-sm">{spec.value}</div>
                          <div className="text-muted-foreground text-xs">{spec.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-medium text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    data-testid={`button-quote-${i}`}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 w-fit group"
                  >
                    <Link href="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0a0f2e] to-[#0d1a10] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Not sure which model is right for you?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Our team is ready to help you find the perfect match. Get in touch and we'll guide you through every option.
          </p>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 py-6 text-base font-bold"
          >
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
