"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Globe, Smartphone, BarChart3 } from "lucide-react";

const globalStats = [
  {
    icon: Globe,
    number: "5,35 M",
    suffix: "",
    label: "Pengguna Internet Aktif Dunia",
    desc: "Hampir 2/3 populasi bumi sudah online — dan mereka mencari bisnis seperti punya kamu.",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    icon: TrendingUp,
    number: "2×",
    suffix: "lebih cepat",
    label: "Pertumbuhan UMKM yang Go Digital",
    desc: "UMKM yang punya kehadiran digital tumbuh rata-rata 2x lebih cepat dibanding yang belum.",
    color: "text-amber",
    bg: "bg-amber/10",
  },
  {
    icon: Smartphone,
    number: "80%",
    suffix: "",
    label: "Konsumen Cari Bisnis Online Dulu",
    desc: "Sebelum datang atau beli, 80% orang searching dulu. Kalau bisnis kamu tidak terlihat, mereka ke kompetitor.",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    icon: BarChart3,
    number: "65 Juta",
    suffix: "+",
    label: "UMKM di Indonesia",
    desc: "Tulang punggung 60% GDP Indonesia — tapi hanya 23% yang punya kehadiran digital yang layak.",
    color: "text-amber",
    bg: "bg-amber/10",
  },
];

const insights = [
  {
    year: "2019",
    event: "Sebelum pandemi, adopsi digital UMKM di Indonesia berjalan lambat — sekitar 13%.",
  },
  {
    year: "2020",
    event: "COVID-19 memaksa percepatan digital. Dalam 12 bulan, adopsi digital UMKM melompat ke 23%.",
  },
  {
    year: "2024",
    event: "Ekonomi digital Indonesia tumbuh 11% YoY. Potensi pasar Rp 4.500 triliun menanti UMKM yang siap.",
  },
  {
    year: "2030",
    event: "Proyeksi ekonomi digital Indonesia mencapai Rp 1.600 triliun. Kamu mau jadi bagian mana?",
  },
];

export default function WhyDigital() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section id="mengapa-digital" className="bg-navy py-16 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-10 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-outfit text-sm font-medium text-amber uppercase tracking-widest"
          >
            Konteks Global
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-krem mt-3 mb-4 leading-tight"
          >
            Kenapa Harus Digital —{" "}
            <span className="text-gradient-teal">Sekarang?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-base lg:text-lg text-abu-biru max-w-2xl mx-auto leading-relaxed"
          >
            Bukan soal ikut tren. Ini soal bagaimana bisnis kamu ditemukan,
            dipercaya, dan diakses — di dunia yang sudah bergerak ke digital jauh
            sebelum pandemi datang.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-20">
          {globalStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <div className="mb-1">
                <span className={`font-syne font-extrabold text-3xl ${stat.color}`}>
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="font-outfit text-sm text-abu-biru ml-1">{stat.suffix}</span>
                )}
              </div>
              <h3 className="font-syne font-bold text-krem text-sm mb-3 leading-snug">{stat.label}</h3>
              <p className="font-outfit text-xs text-abu-biru leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={timelineInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-syne font-bold text-xl sm:text-2xl text-krem mb-7 sm:mb-10 text-center"
          >
            Bagaimana Dunia Berubah — dan Apa Artinya untuk Bisnis Kamu
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/50 via-amber/30 to-transparent" />

            <div className="space-y-8">
              {insights.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex gap-6 lg:gap-0 pl-2 sm:pl-0 ${
                    i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 sm:left-4 lg:left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber border-2 border-navy mt-5" />

                  <div className={`ml-8 sm:ml-10 lg:ml-0 lg:w-5/12 ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <span className="font-syne font-extrabold text-amber text-xl">{item.year}</span>
                      <p className="font-outfit text-sm text-abu-biru mt-2 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-outfit text-abu-biru text-base mb-6 max-w-xl mx-auto">
            Bisnis kamu sudah jalan bertahun-tahun. Yang kurang cuma satu —
            <strong className="text-krem"> kehadiran digital yang rapi dan bisa dikontrol.</strong>
          </p>
          <motion.button
            onClick={() => {
              document.querySelector("#paket")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-amber text-navy font-outfit font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-amber/90 transition-colors w-full sm:w-auto"
          >
            Mulai dari Mana yang Tepat →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
