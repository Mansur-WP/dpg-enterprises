import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import img1 from "@assets/image_1780425003258.png";
import img2 from "@assets/image_1780425006540.png";
import img3 from "@assets/image_1780425010140.png";
import img4 from "@assets/image_1780425014398.png";
import img5 from "@assets/image_1780424999546.png";
import img6 from "@assets/image_1780425029747.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const galleryItems = [
  { src: img1, alt: "MUNNASP Urban X", caption: "MUNNASP Urban X — The City Conqueror", wide: true },
  { src: img2, alt: "MUNNASP E-Rider Pro", caption: "MUNNASP E-Rider Pro — Classic Reimagined", wide: false },
  { src: img5, alt: "Electric Bike Detail", caption: "Precision Engineering — Circular Halo Headlight", wide: false },
  { src: img3, alt: "MUNNASP City Volt", caption: "MUNNASP City Volt — Maximum Range Champion", wide: false },
  { src: img4, alt: "MUNNASP Smart Cruiser", caption: "MUNNASP Smart Cruiser — Stealth and Power", wide: false },
  { src: img6, alt: "MUNNASP Showroom", caption: "Our Kano Showroom — Ready for Your Visit", wide: true },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#0a0f2e] to-[#111111] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary text-xs font-bold uppercase tracking-widest">Showroom</span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A visual journey through the MUNNASP lineup. Click any image to view it in full detail.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-testid={`gallery-item-${i}`}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-white/5 ${
                  item.wide ? "sm:col-span-2" : ""
                }`}
                style={{ minHeight: item.wide ? "340px" : "280px" }}
                onClick={() => setLightbox({ src: item.src, caption: item.caption })}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: item.wide ? "340px" : "280px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                    <span className="text-white text-xs font-semibold">View Full</span>
                  </div>
                  <p className="text-white/80 text-sm text-center">{item.caption}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                data-testid="button-close-lightbox"
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-center text-white/70 text-sm mt-4">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
