"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, CheckCircle, Star, Users } from "lucide-react";
import FigmaImage from "@/components/FigmaImage";

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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen bg-krem overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-amber/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-teal/15 blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-10 lg:pb-16 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Badge */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-4 py-1.5 mb-6 shadow-sm shadow-navy/10"
            >
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse-slow" />
              <span className="font-outfit text-sm text-navy/60">
                Partner Digital UMKM Indonesia
              </span>
            </motion.div>

            <div className="mb-6">
              {headline.map((line, lineIdx) => (
                <div key={lineIdx} className="overflow-hidden">
                  <motion.h1
                    custom={lineIdx + 0.4}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-syne font-extrabold text-[2.2rem] leading-[1.05] sm:text-5xl lg:text-6xl text-navy tracking-tight"
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-outfit text-base sm:text-lg text-navy/60 leading-relaxed mb-7 sm:mb-10 max-w-xl"
            >
              KINARYALOKA Digital Studio hadir untuk UMKM yang sudah siap — kami bantu
              terjemahkan cara bisnis kamu jalan ke dalam sistem digital yang{" "}
              <span className="text-navy font-semibold">rapi, jelas, dan kepakai</span>.
            </motion.p>

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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-amber text-navy font-outfit font-semibold text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-200 w-full sm:w-auto shadow-sm shadow-amber/25"
              >
                Ngobrol Dulu Yuk
              </motion.a>
              <motion.button
                onClick={() => {
                  document.querySelector("#paket")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border border-navy/15 text-navy font-outfit font-semibold text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-navy/5 transition-all duration-200 w-full sm:w-auto"
              >
                Lihat Paket
              </motion.button>
            </motion.div>

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
                  <span className="font-outfit text-sm text-navy/60">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-amber/15 via-teal/10 to-amber/10 blur-2xl" />
              <div className="relative bg-white border border-navy/10 rounded-[32px] shadow-sm shadow-navy/10 overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  <FigmaImage
                    fileKey="KwvnEqdqpk1dzDEYtRkO0u"
                    nodeId="132:404"
                    alt="Preview design KINARYALOKA"
                    className="absolute inset-0 w-full h-full object-cover"
                    scale={2}
                  />
                  <Image
                    src="/logo_kinaryaloka.png"
                    alt="KINARYALOKA"
                    width={72}
                    height={72}
                    className="absolute top-5 left-5 w-[64px] h-[64px] object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {floatingBadges.map((badge) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: badge.delay }}
                    className="flex items-center gap-3 bg-white border border-navy/10 rounded-2xl px-4 py-3 shadow-sm shadow-navy/10"
                  >
                    <badge.icon size={18} className="text-amber" />
                    <div className="leading-none">
                      <p className="font-syne font-extrabold text-xl text-navy">
                        {badge.value}
                      </p>
                      <p className="font-outfit text-xs text-navy/55 mt-1">
                        {badge.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-outfit text-xs text-navy/45 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-navy/45" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent pointer-events-none" />
    </section>
  );
}
