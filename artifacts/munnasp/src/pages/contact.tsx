import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "08059434243",
    sub: "Available during business hours",
    href: "tel:08059434243",
  },
  {
    icon: MapPin,
    label: "Showroom Address",
    value: "Muhammadu Buhari Way",
    sub: "Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria",
    href: "https://maps.google.com/?q=Muhammadu+Buhari+Way+Kano+Nigeria",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 8:00 AM – 6:00 PM",
    sub: "Sunday: 10:00 AM – 3:00 PM",
    href: null,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+234 805 943 4243",
    sub: "Chat with us instantly",
    href: "https://wa.me/2348059434243?text=Hello%20MUNNASP%21%20I%27m%20interested%20in%20your%20electric%20scooters.",
  },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#0a0f2e] to-[#111111] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary text-xs font-bold uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-4">
            Contact <span className="gradient-text">MUNNASP</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to go electric? Have questions about our models? Our team in Kano is standing by to help.
          </p>
        </motion.div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  data-testid={`card-contact-${i}`}
                  className="glass-panel rounded-2xl p-6 flex items-start gap-4 group hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-primary transition-colors text-sm"
                        data-testid={`link-contact-${i}`}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{c.value}</p>
                    )}
                    <p className="text-muted-foreground text-xs mt-0.5">{c.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <a
                  href="https://wa.me/2348059434243?text=Hello%20MUNNASP%21%20I%27d%20like%20to%20learn%20more%20about%20your%20electric%20scooters."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-cta"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1da855] text-white font-bold text-sm transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp Now
                </a>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-panel rounded-2xl overflow-hidden h-44 relative flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-60" />
                <div className="relative text-center z-10 px-4">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Muhammadu Buhari Way</p>
                  <p className="text-muted-foreground text-xs">Kano State, Nigeria</p>
                  <a
                    href="https://maps.google.com/?q=Muhammadu+Buhari+Way+Kano+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary underline mt-1 inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-80 text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. A member of the MUNNASP team will get back to you within 24 hours.
                  </p>
                  <Button
                    className="mt-8 bg-primary text-white rounded-full px-8"
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill in the form below and our team will respond promptly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white text-sm font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          data-testid="input-name"
                          className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white text-sm font-semibold">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="08xxxxxxxxx"
                          data-testid="input-phone"
                          className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-sm font-semibold">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        data-testid="input-email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white text-sm font-semibold">Inquiry Type *</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        data-testid="select-subject"
                        className="w-full h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-primary focus:outline-none"
                      >
                        <option value="" disabled className="text-black">Select an inquiry type</option>
                        <option value="purchase" className="text-black">Purchase / Price Inquiry</option>
                        <option value="test-ride" className="text-black">Schedule a Test Ride</option>
                        <option value="partnership" className="text-black">Distributor / Partnership</option>
                        <option value="fleet" className="text-black">Fleet / Business Order</option>
                        <option value="support" className="text-black">After-Sales Support</option>
                        <option value="other" className="text-black">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white text-sm font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what you need — which model interests you, your location, or any other details that will help us assist you better."
                        data-testid="textarea-message"
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      data-testid="button-submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-bold text-base group"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
