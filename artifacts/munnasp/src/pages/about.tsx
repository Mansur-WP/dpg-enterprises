import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Leaf, Wrench } from "lucide-react";
import logoSrc from "@assets/image_1780424986415.png";
import showroomImg from "@assets/image_1780425029747.png";

const values = [
  { title: "Excellence", desc: "Every product that earns the DPG name has been held to the highest standard. We don't cut corners — we set them." },
  { title: "Sustainability", desc: "Our commitment to the planet is non-negotiable. Electric mobility isn't a product category for us — it's a conviction." },
  { title: "Innovation", desc: "We stay at the cutting edge of EV technology, constantly seeking smarter, more efficient ways to move Nigeria forward." },
  { title: "Integrity", desc: "Honest pricing. Honest performance claims. Honest after-sales support. We earn trust the old-fashioned way — every day." },
  { title: "Community", desc: "We are proudly Nigerian, serving Nigerian communities. Your success on two wheels is our greatest achievement." },
  { title: "Vision", desc: "We see a Nigeria where electric mobility is accessible, affordable, and aspirational. That's not a dream — it's our roadmap." },
];

export default function About() {
  return (
    <div className="bg-white text-neutral-950 min-h-screen">

      {/* Hero */}
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[#3aaa35] text-sm font-bold tracking-[0.3em] uppercase mb-4">We Are DPG Enterprises</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Born in Kano.<br />Built for Nigeria.
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
            We are the electric mobility company that believes the future of transportation has already arrived — and it runs on electricity.
          </p>
        </motion.div>
      </div>

      {/* Showroom image full-width */}
      <div className="relative h-[50vh] overflow-hidden mb-24">
        <img src={showroomImg} alt="DPG Showroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-end p-10">
          <div>
            <p className="text-white font-black text-2xl">Our Flagship Showroom</p>
            <p className="text-white/70 text-sm mt-1">Muhammadu Buhari Way, Kano State, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Company overview */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Who We Are</p>
            <h2 className="text-4xl font-black mb-8">Nigeria's Electric Mobility Pioneer</h2>
            <div className="space-y-5 text-neutral-500 leading-relaxed">
              <p>DPG Enterprises is a premium electric mobility company headquartered in Kano State, Nigeria. We source, distribute, and support high-performance electric scooters and bikes designed to thrive on Nigerian roads and serve Nigerian riders.</p>
              <p>We established ourselves at the intersection of a critical moment: rising fuel costs, growing environmental awareness, and urgent demand for smarter urban transportation. DPG exists to meet that moment head-on.</p>
              <p>From our showroom on Muhammadu Buhari Way, we serve individual riders, businesses, logistics operators, and institutions seeking to modernize their fleets with clean, cost-effective electric mobility.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-2"
          >
            <div className="border-t border-neutral-100 pt-6">
              <Target className="w-8 h-8 text-[#1a3a8f] mb-4" />
              <h3 className="font-black text-xl mb-3">Our Mission</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">To accelerate Nigeria's transition to electric mobility by delivering premium, reliable, and affordable electric scooters — empowering individuals and businesses to move smarter, spend less, and pollute never.</p>
            </div>
            <div className="border-t border-neutral-100 pt-6">
              <Eye className="w-8 h-8 text-[#3aaa35] mb-4" />
              <h3 className="font-black text-xl mb-3">Our Vision</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">A Nigeria where electric mobility is the default — clean, intelligent transportation that powers progress without poisoning the environment.</p>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="bg-neutral-950 rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[["4+", "Premium Models"], ["100 km", "Max Range"], ["80%", "Fuel Savings"], ["0g", "CO₂ Emissions"]].map(([val, lbl]) => (
            <div key={lbl} className="text-center">
              <div className="text-4xl font-black text-white mb-1">{val}</div>
              <div className="text-neutral-400 text-xs uppercase tracking-widest">{lbl}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-24">
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-4">What We Stand For</p>
          <h2 className="text-4xl font-black mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-testid={`card-value-${i}`}
                className="border-t border-neutral-100 pt-6"
              >
                <h3 className="font-black text-lg mb-3">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Local Support */}
        <div className="mb-24 bg-neutral-50 rounded-3xl p-12 lg:p-16 border border-neutral-100">
          <Wrench className="w-10 h-10 text-[#1a3a8f] mb-6" />
          <h2 className="text-3xl md:text-4xl font-black mb-6 max-w-2xl">
            Local Service, Not Just Sales
          </h2>
          <p className="text-neutral-500 leading-relaxed max-w-3xl mb-8">
            We understand that switching to electric mobility requires trust. That’s why DPG operates a fully-equipped service center alongside our Kano showroom. We don’t just sell scooters—we support them. From routine maintenance to battery diagnostics, our certified technicians are here to ensure your vehicle stays on the road for years to come.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
            <div>
              <h4 className="font-bold text-neutral-950 mb-2">Available Spare Parts</h4>
              <p className="text-sm text-neutral-500">Tyres, brake pads, controllers, and replacement lithium batteries always in stock.</p>
            </div>
            <div>
              <h4 className="font-bold text-neutral-950 mb-2">Expert Technicians</h4>
              <p className="text-sm text-neutral-500">In-house EV specialists trained to handle diagnostics and repairs quickly.</p>
            </div>
          </div>
        </div>

        {/* Sustainability */}
        <div className="bg-[#f0fff4] rounded-3xl p-12 lg:p-16">
          <Leaf className="w-10 h-10 text-[#3aaa35] mb-6" />
          <h2 className="text-3xl md:text-4xl font-black mb-6 max-w-xl">
            Our Commitment to Sustainability
          </h2>
          <p className="text-neutral-500 leading-relaxed max-w-2xl mb-8">
            Every electric scooter we put on Nigerian roads displaces the equivalent of thousands of litres of petrol over its lifetime. We are not just a business — we are an environmental statement. We actively work toward a future where Nigerian cities breathe easier, where fuel volatility no longer dictates how far someone can travel.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a3a8f] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#152f78] transition-all group"
          >
            Join the Movement <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
