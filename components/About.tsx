"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Tepat Sasaran",
    desc: "Kami tidak jual fitur sebanyak-banyaknya. Kami pelajari bisnis kamu dulu, baru bikin sistemnya.",
  },
  {
    icon: Heart,
    title: "Partner, Bukan Vendor",
    desc: "Kami tidak pergi setelah project selesai. Support dan komunikasi tetap berjalan.",
  },
  {
    icon: Zap,
    title: "Langsung Kepakai",
    desc: "Semua yang kami bangun dirancang agar bisa dipakai sehari-hari — tanpa perlu teknikal tinggi.",
  },
  {
    icon: Shield,
    title: "Transparan & Jelas",
    desc: "Harga jelas, progress jelas, hasil jelas. Tidak ada biaya tersembunyi atau janji kosong.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tentang" className="bg-krem py-16 lg:py-32 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left: Text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-outfit text-sm font-medium text-teal uppercase tracking-widest">
                Siapa Kami
              </span>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mt-3 mb-5 leading-tight">
                Bukan Agency Biasa.{" "}
                <span className="text-teal">Partner</span> yang Ngerti Bisnis Kamu.
              </h2>
              <p className="font-outfit text-base lg:text-lg text-navy/70 leading-relaxed mb-5">
                KINARYALOKA Digital Studio lahir dari pemahaman satu hal: kebanyakan UMKM bukan tidak mau
                digital — mereka tidak tahu mulai dari mana, atau sudah coba tapi hasilnya
                tidak kepakai.
              </p>
              <p className="font-outfit text-base lg:text-lg text-navy/70 leading-relaxed mb-6">
                Kami tidak duduk di balik layar dan desain sesuatu yang kelihatan bagus di
                portofolio. Kami duduk <em>bareng kamu</em> — pelajari cara bisnis kamu
                berjalan di lapangan, lalu bantu terjemahkannya ke sistem digital yang{" "}
                <strong className="text-navy">rapi, jelas, dan bisa dikontrol</strong>.
              </p>

              {/* Quote block */}
              <div className="border-l-4 border-amber pl-6 py-2">
                <p className="font-syne font-bold text-lg text-navy italic leading-snug">
                  &ldquo;Website itu bukan tujuan akhir, tapi alat biar operasional
                  jadi lebih rapi dan jelas.&rdquo;
                </p>
                <p className="font-outfit text-sm text-abu-biru mt-2">— KINARYALOKA Digital Studio</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Values grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((val) => (
              <motion.div
                key={val.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm shadow-navy/5 border border-navy/5 group"
              >
                <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal transition-colors duration-300">
                  <val.icon size={20} className="text-amber group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-syne font-bold text-navy text-base mb-2">{val.title}</h3>
                <p className="font-outfit text-sm text-navy/60 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Handle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 lg:mt-16 text-center"
        >
          <p className="font-outfit text-abu-biru text-sm">@kinaryalokadigitalstudio</p>
        </motion.div>
      </div>
    </section>
  );
}
