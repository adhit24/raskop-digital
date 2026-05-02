"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", label: "Hubungi kami via WhatsApp" },
  { num: "02", label: "Cerita soal bisnis & kebutuhanmu" },
  { num: "03", label: "Kami rekomendasikan paket yang tepat" },
  { num: "04", label: "Project dimulai — rapi dan terstruktur" },
];

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-navy py-16 lg:py-32 relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber/8 blur-3xl pointer-events-none animate-blob-1" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/8 blur-3xl pointer-events-none animate-blob-2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left: Main CTA */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-outfit text-sm font-medium text-amber uppercase tracking-widest"
            >
              Mulai Sekarang
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-krem mt-3 mb-5 leading-tight"
            >
              Kita Ngobrol Dulu.{" "}
              <span className="text-gradient-amber">Tanpa Komitmen.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-outfit text-base lg:text-lg text-abu-biru leading-relaxed mb-7"
            >
              Kami tidak langsung nawarin paket di awal. Kami dengarkan dulu — cara bisnis
              kamu berjalan, apa yang sudah jalan, dan apa yang masih mentok. Dari situ
              baru kami rekomendasikan yang paling masuk akal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-8 sm:mb-10"
            >
              <motion.a
                href="https://wa.me/6281357662424?text=Halo%20KINARYALOKA%20Digital%20Studio%2C%20saya%20ingin%20ngobrol%20dulu%20soal%20kebutuhan%20digital%20saya."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(232,135,74,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-amber text-navy font-outfit font-semibold text-base px-7 py-4 rounded-full hover:bg-amber/90 transition-colors w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Chat via WhatsApp
              </motion.a>
            </motion.div>

            {/* Sign-off */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-l-4 border-teal pl-5"
            >
              <p className="font-syne font-bold text-krem/60 text-sm italic">
                Digital bukan pilihan, ini kebutuhan.
              </p>
              <p className="font-outfit text-xs text-abu-biru mt-1">— KINARYALOKA Digital Studio</p>
            </motion.div>
          </div>

          {/* Right: How it works */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-syne font-bold text-krem text-xl mb-8">
              Cara kerjanya simpel:
            </h3>
            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full border border-amber/40 flex items-center justify-center flex-shrink-0 group-hover:bg-amber/10 transition-colors">
                    <span className="font-syne font-extrabold text-amber text-sm">{step.num}</span>
                  </div>
                  <p className="font-outfit text-krem/80 text-base leading-snug flex-1">
                    {step.label}
                  </p>
                  {i < steps.length - 1 && (
                    <ArrowRight size={16} className="text-abu-biru/40 flex-shrink-0 hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <p className="font-outfit text-sm text-abu-biru mb-4">Atau hubungi langsung:</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://wa.me/6281357662424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-outfit text-sm text-krem hover:text-amber transition-colors"
                >
                  <Phone size={15} className="text-amber" />
                  +62 813-5766-2424
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
