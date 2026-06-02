import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Zap, Leaf, Shield, BarChart3, Cpu, Globe, BatteryCharging, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/image_1780425003258.png";
import product1Img from "@assets/image_1780425006540.png";
import product2Img from "@assets/image_1780425010140.png";
import product3Img from "@assets/image_1780425014398.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Transportation",
    description: "Zero emissions, zero compromise. Our electric fleet produces no exhaust, reducing Kano's carbon footprint one ride at a time.",
  },
  {
    icon: BarChart3,
    title: "Low Running Costs",
    description: "Slash your transportation expenses by up to 80% compared to petrol motorcycles. Charge overnight, ride all day.",
  },
  {
    icon: BatteryCharging,
    title: "Advanced Battery Technology",
    description: "Lithium-ion cells engineered for Nigeria's climate — built to perform in heat, dust, and demanding urban conditions.",
  },
  {
    icon: Shield,
    title: "Reliable Performance",
    description: "Each model undergoes rigorous quality checks before reaching you. Dependable power for daily commutes and deliveries.",
  },
  {
    icon: Cpu,
    title: "Smart Urban Mobility",
    description: "Intelligent digital displays, anti-theft systems, and smart charging management built into every MUNNASP model.",
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description: "Join the movement reshaping African transportation. Every MUNNASP on the road is a vote for a cleaner Nigeria.",
  },
];

const featuredProducts = [
  {
    name: "MUNNASP Urban X",
    image: heroImg,
    tagline: "The City Conqueror",
    range: "80 km",
    speed: "65 km/h",
    battery: "72V 32Ah",
  },
  {
    name: "MUNNASP E-Rider Pro",
    image: product1Img,
    tagline: "Classic Reimagined",
    range: "60 km",
    speed: "55 km/h",
    battery: "60V 20Ah",
  },
  {
    name: "MUNNASP City Volt",
    image: product2Img,
    tagline: "Maximum Range",
    range: "100 km",
    speed: "70 km/h",
    battery: "72V 40Ah",
  },
  {
    name: "MUNNASP Smart Cruiser",
    image: product3Img,
    tagline: "Stealth & Power",
    range: "75 km",
    speed: "60 km/h",
    battery: "60V 28Ah",
  },
];

const benefits = [
  { icon: BarChart3, stat: "80%", label: "Fuel Cost Savings", sub: "vs. petrol motorcycles" },
  { icon: Leaf, stat: "0g", label: "CO2 Emissions", sub: "clean, green, guilt-free" },
  { icon: Wind, stat: "100%", label: "Quiet Operation", sub: "whisper-silent motors" },
  { icon: Zap, stat: "8 hrs", label: "Fast Recharge", sub: "from empty to full" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#111111] to-[#0d1a10] z-0" />
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, hsl(224,70%,40%) 0%, transparent 60%), radial-gradient(circle at 20% 80%, hsl(117,53%,30%) 0%, transparent 50%)",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent z-10" />
          <motion.img
            src={heroImg}
            alt="MUNNASP Urban X"
            className="h-full w-full object-contain object-right"
            initial={{ opacity: 0, x: 80, scale: 1.05 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <Zap className="w-3.5 h-3.5" />
              Nigeria's Electric Mobility Leader
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-6"
            >
              Driving Nigeria's{" "}
              <span className="gradient-text">Electric Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Premium Electric Bikes, Scooters and Smart Mobility Solutions Built for the Next Generation of Transportation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                data-testid="button-explore-models"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold group"
              >
                <Link href="/products">
                  Explore Models
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                data-testid="button-contact-us"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-14 flex gap-8"
            >
              {[
                { val: "4+", lbl: "Models Available" },
                { val: "100km", lbl: "Max Range" },
                { val: "80%", lbl: "Cost Savings" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="text-2xl font-black gradient-text">{s.val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* mobile hero image */}
        <div className="lg:hidden absolute bottom-0 right-0 w-full h-48 z-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Why MUNNASP</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Built Different. <span className="gradient-text">Driven Better.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              We don't just sell electric bikes. We deliver a complete smart mobility experience crafted for Nigerian roads and Nigerian riders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-panel rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group"
                data-testid={`card-feature-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <span className="text-secondary text-xs font-bold uppercase tracking-widest">Our Fleet</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Featured <span className="gradient-text">Models</span>
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-6"
            >
              <Link href="/products">View All Models <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-testid={`card-product-${i}`}
                className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-52 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/30 px-2 py-0.5 rounded-full">
                      {p.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-base mb-3">{p.name}</h3>
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div className="bg-white/5 rounded-lg py-2">
                      <div className="text-xs font-bold text-white">{p.range}</div>
                      <div className="text-[10px] text-muted-foreground">Range</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-2">
                      <div className="text-xs font-bold text-white">{p.speed}</div>
                      <div className="text-[10px] text-muted-foreground">Top Speed</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-2">
                      <div className="text-xs font-bold text-white">{p.battery.split(" ")[0]}</div>
                      <div className="text-[10px] text-muted-foreground">Battery</div>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 hover:border-primary rounded-xl text-xs font-semibold transition-all"
                  >
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / BENEFITS STRIP */}
      <section className="py-20 bg-gradient-to-r from-[#0a0f2e] via-[#0d1a10] to-[#0a0f2e] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
                data-testid={`stat-${i}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-4xl font-black gradient-text mb-1">{b.stat}</div>
                <div className="text-white font-semibold text-sm">{b.label}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{b.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Go <span className="gradient-text">Electric?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Visit our showroom in Kano or reach out to our team today. Your journey to smarter, cleaner transportation starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                data-testid="button-cta-quote"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 py-6 text-base font-bold"
              >
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-6 text-base font-bold"
              >
                <Link href="/gallery">View Showroom</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
