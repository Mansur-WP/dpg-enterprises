import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import img1 from "@assets/image_1780425003258.png";
import img2 from "@assets/image_1780425006540.png";
import img3 from "@assets/image_1780425010140.png";
import img4 from "@assets/image_1780425014398.png";
import img5 from "@assets/image_1780424999546.png";
import img6 from "@assets/image_1780425029747.png";

const items = [
  { src: img6, alt: "DPG Showroom", caption: "Our Kano Showroom — Ready for Your Visit", span: "col-span-2 row-span-2" },
  { src: img1, alt: "DPG Urban X", caption: "DPG Urban X — The City Conqueror", span: "" },
  { src: img2, alt: "DPG E-Rider Pro", caption: "DPG E-Rider Pro — Classic Reimagined", span: "" },
  { src: img5, alt: "Detail Shot", caption: "Precision Engineering — Halo Headlight", span: "" },
  { src: img3, alt: "DPG City Volt", caption: "DPG City Volt — Maximum Range", span: "" },
  { src: img4, alt: "DPG Smart Cruiser", caption: "DPG Smart Cruiser — Stealth and Power", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#3aaa35] text-xs font-bold tracking-[0.2em] uppercase mb-3">Showroom</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">Gallery</h1>
          <p className="text-neutral-500 text-lg max-w-md">
            A visual journey through the DPG lineup. Click any image to view in full.
          </p>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              data-testid={`gallery-item-${i}`}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 ${item.span}`}
              onClick={() => setLightbox({ src: item.src, caption: item.caption })}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain object-center bg-neutral-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-2xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn className="w-7 h-7 text-white" />
                  <p className="text-white text-xs font-medium text-center px-4">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                data-testid="button-close-lightbox"
                className="absolute -top-5 -right-5 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-white/50 text-sm mt-4">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
