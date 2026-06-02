import { motion } from "framer-motion";
import { Target, Eye, Heart, Leaf, Cpu, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoSrc from "@assets/image_1780424986415.png";
import showroomImg from "@assets/image_1780425029747.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We are relentless in our pursuit of quality. Every product we bring to market must meet the highest standards before it earns the MUNNASP name.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Our commitment to the planet is non-negotiable. We build electric mobility solutions because we believe a cleaner Nigeria is possible in our lifetime.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    description: "We stay at the cutting edge of electric vehicle technology, constantly seeking smarter, more efficient ways to move people and goods across Nigeria.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We are proud to be a Nigerian company serving Nigerian communities. Your success on two wheels is our greatest achievement.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing. Honest performance claims. Honest after-sales support. We build trust the old-fashioned way — by earning it every single day.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We see a Nigeria where electric mobility is accessible, affordable, and aspirational. That future isn't a dream — it's our roadmap.",
  },
];

const milestones = [
  { year: "Est.", label: "Founded in Kano", detail: "MUNNASP NIG. LTD. was established in Kano State with a singular mission: accelerate Nigeria's electric mobility transition." },
  { year: "Fleet", label: "4 Premium Models", detail: "From the Urban X to the Smart Cruiser — four purpose-built electric scooters covering every rider profile and use case." },
  { year: "100km", label: "Maximum Range", detail: "Our flagship City Volt delivers up to 100 km on a single charge — setting the benchmark for range in our class." },
  { year: "Kano", label: "Showroom Open", detail: "Our flagship showroom on Muhammadu Buhari Way serves riders, business owners, and partners from across the state." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0f2e] to-[#111111]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 md:px-6 text-center"
        >
          <img src={logoSrc} alt="MUNNASP Logo" className="h-14 mx-auto mb-8" />
          <span className="text-secondary text-xs font-bold uppercase tracking-widest">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-6">
            About <span className="gradient-text">MUNNASP</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Born in Kano, built for Nigeria. We are the electric mobility company that believes the future of transportation is already here — and it runs on electricity.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-secondary text-xs font-bold uppercase tracking-widest">Who We Are</span>
              <h2 className="text-4xl font-black mt-3 mb-6">
                Nigeria's Electric <span className="gradient-text">Mobility Pioneer</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MUNNASP NIG. LTD. is a premium electric mobility company headquartered in Kano State, Nigeria. We source, distribute, and support high-performance electric scooters and bikes designed to thrive on Nigerian roads and serve Nigerian riders.
                </p>
                <p>
                  We established ourselves at the intersection of a critical moment: rising fuel costs, growing environmental awareness, and an urgent demand for smarter urban transportation. MUNNASP exists to meet that moment head-on.
                </p>
                <p>
                  From our showroom on Muhammadu Buhari Way, we serve individual riders, businesses, logistics operators, and institutions seeking to modernize their fleets with clean, cost-effective electric mobility solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={showroomImg}
                alt="MUNNASP Showroom"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">Our Kano Showroom</p>
                  <p className="text-muted-foreground text-sm">Muhammadu Buhari Way, Kano State</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="glass-panel rounded-2xl p-10 border-l-4 border-primary"
              data-testid="card-mission"
            >
              <Target className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate Nigeria's transition to electric mobility by delivering premium, reliable, and affordable electric scooters — empowering individuals and businesses to move smarter, spend less, and pollute never.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="glass-panel rounded-2xl p-10 border-l-4 border-secondary"
              data-testid="card-vision"
            >
              <Eye className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Nigeria where electric mobility is the default — where every street, every city, every community has access to clean, intelligent transportation that powers progress without poisoning the environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-black mt-3">
              Where We <span className="gradient-text">Stand Today</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-panel rounded-2xl p-6 text-center"
                data-testid={`card-milestone-${i}`}
              >
                <div className="text-4xl font-black gradient-text mb-2">{m.year}</div>
                <div className="text-white font-bold mb-3">{m.label}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-4xl font-black mt-3">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-panel rounded-2xl p-6 group hover:border-primary/40 transition-all"
                data-testid={`card-value-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-to-r from-[#051a05] to-[#0a0f2e]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <Leaf className="w-14 h-14 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-6">
                Our Commitment to <span className="gradient-text">Sustainability</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Every electric scooter we put on Nigerian roads displaces the equivalent of thousands of litres of petrol over its lifetime. We are not just a business — we are an environmental statement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We actively work toward a future where Nigerian cities breathe easier, where fuel volatility no longer dictates how far someone can travel, and where electric mobility is the standard, not the exception. At MUNNASP, sustainability is not a marketing slogan — it is the reason we exist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Join the <span className="gradient-text">Electric Revolution</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Whether you are a rider, investor, distributor, or business partner — there is a place for you in the MUNNASP story.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base font-bold group"
          >
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
