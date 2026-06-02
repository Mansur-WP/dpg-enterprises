import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-neutral-950">

      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">Contact Us</h1>
          <p className="text-neutral-500 text-lg max-w-lg">
            Ready to go electric? Our team in Kano is here to help you find the right model and answer every question.
          </p>
        </motion.div>
      </div>

      {/* ─── MAP ─── */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-neutral-100 shadow-sm"
          style={{ height: "360px" }}
        >
          <iframe
            title="MUNNASP NIG. LTD. Showroom Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Muhammadu+Buhari+Way,+Kofar+Kabuga,+Kano,+Nigeria&output=embed&z=15"
            allowFullScreen
          />
        </motion.div>
        <p className="text-neutral-400 text-xs mt-3 px-1">
          📍 Muhammadu Buhari Way, Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Info */}
          <div className="lg:col-span-2 space-y-0">
            {[
              { icon: Phone, label: "Phone", value: "08059434243", sub: "Available during business hours", href: "tel:08059434243" },
              { icon: MapPin, label: "Showroom", value: "Muhammadu Buhari Way", sub: "Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria", href: "https://maps.google.com/?q=Muhammadu+Buhari+Way+Kano+Nigeria" },
              { icon: Clock, label: "Business Hours", value: "Mon – Sat: 8:00 AM – 6:00 PM", sub: "Sunday: 10:00 AM – 3:00 PM", href: null },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-t border-neutral-100 py-8"
                data-testid={`card-contact-${i}`}
              >
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="font-bold text-neutral-950 hover:text-[#1a3a8f] transition-colors text-base"
                    data-testid={`link-contact-${i}`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-bold text-neutral-950 text-base">{item.value}</p>
                )}
                <p className="text-neutral-400 text-sm mt-1">{item.sub}</p>
              </motion.div>
            ))}

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="border-t border-neutral-100 pt-8"
            >
              <a
                href="https://wa.me/2348059434243?text=Hello%20MUNNASP%21%20I%27d%20like%20to%20learn%20more%20about%20your%20electric%20scooters."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-whatsapp"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#1db954] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-3 bg-neutral-50 rounded-3xl p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-80 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <CheckCircle className="w-16 h-16 text-[#3aaa35] mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-black mb-3">Message Sent</h3>
                <p className="text-neutral-500 max-w-sm text-sm">Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                <button
                  className="mt-8 text-sm font-semibold text-[#1a3a8f] underline underline-offset-4"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} data-testid="form-contact" className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                        data-testid="input-name"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-[#1a3a8f] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Phone *</label>
                      <input id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="08xxxxxxxxx"
                        data-testid="input-phone"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-[#1a3a8f] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                      data-testid="input-email"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-[#1a3a8f] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Inquiry Type *</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange} required
                      data-testid="select-subject"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 focus:outline-none focus:border-[#1a3a8f] transition-colors"
                    >
                      <option value="" disabled>Select inquiry type</option>
                      <option value="purchase">Purchase / Price Inquiry</option>
                      <option value="test-ride">Schedule a Test Ride</option>
                      <option value="partnership">Distributor / Partnership</option>
                      <option value="fleet">Fleet / Business Order</option>
                      <option value="support">After-Sales Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us which model interests you, your location, or anything else we should know."
                      data-testid="textarea-message"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-[#1a3a8f] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="button-submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1a3a8f] text-white font-semibold text-sm px-7 py-4 rounded-xl hover:bg-[#152f78] transition-all group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
