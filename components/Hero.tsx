"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CheckCircle, Star, Users } from "lucide-react";

const floatingBadges = [
  { icon: Users, value: "13+", label: "Klien Aktif", delay: 0.8, x: "right-8 top-1/3", mobileX: "right-4 top-1/3" },
  { icon: Star, value: "98%", label: "Kepuasan Klien", delay: 1.0, x: "right-8 bottom-1/3", mobileX: "right-4 bottom-1/3" },
];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const headline = ["Bisnis Kamu", "Butuh Lebih", "dari Sekadar Hadir."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen bg-navy overflow-hidden flex items-center"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="animate-blob-1 absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "#E8874A" }}
        />
        <div
          className="animate-blob-2 absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-15 blur-3xl"
          style={{ background: "#2A8C8C" }}
        />
        <div
          className="animate-blob-3 absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "#E8874A" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,244,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,238,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-12 lg:pb-16 w-full"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse-slow" />
            <span className="font-outfit text-sm text-abu-biru">
              Partner Digital UMKM Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6">
            {headline.map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden">
                <motion.h1
                  custom={lineIdx + 0.4}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-syne font-extrabold text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-7xl text-krem tracking-tight"
                >
                  {lineIdx === 0 && (
                    <>
                      {line.split(" ")[0]}{" "}
                      <span className="text-gradient-amber">{line.split(" ")[1]}</span>
                    </>
                  )}
                  {lineIdx !== 0 && line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-outfit text-base sm:text-lg text-abu-biru leading-relaxed mb-7 sm:mb-10 max-w-xl"
          >
            KINARYALOKA Digital Studio hadir untuk UMKM yang sudah siap — kami bantu
            terjemahkan cara bisnis kamu jalan ke dalam sistem digital yang{" "}
            <span className="text-krem font-medium">rapi, jelas, dan kepakai</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.a
              href="https://wa.me/6281357662424?text=Halo%20KINARYALOKA%20Digital%20Studio%2C%20saya%20ingin%20ngobrol%20dulu%20soal%20kebutuhan%20digital%20saya."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(232,135,74,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-amber text-navy font-outfit font-semibold text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-200 w-full sm:w-auto"
            >
              Kita Ngobrol Dulu
            </motion.a>
            <motion.button
              onClick={() => {
                document.querySelector("#paket")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-krem font-outfit font-medium text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
            >
              Lihat Paket
            </motion.button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            {[
              "Tanpa komitmen di awal",
              "Support setelah selesai",
              "Harga transparan",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal flex-shrink-0" />
                <span className="font-outfit text-sm text-abu-biru">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating stat badges */}
        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: badge.delay }}
            className={`hidden lg:flex absolute ${badge.x} flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 min-w-[120px] animate-float`}
            style={{ animationDelay: badge.delay + "s" }}
          >
            <badge.icon size={20} className="text-amber mb-1" />
            <span className="font-syne font-bold text-2xl text-white">{badge.value}</span>
            <span className="font-outfit text-xs text-abu-biru text-center">{badge.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-outfit text-xs text-abu-biru tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-abu-biru" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent pointer-events-none" />
    </section>
  );
}
