"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ThumbsUp, Calendar, Briefcase } from "lucide-react";

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

const stats = [
  {
    icon: Users,
    target: 13,
    suffix: "+",
    label: "Klien Terlayani",
    desc: "Dari berbagai jenis bisnis & industri",
    color: "text-amber",
    bg: "bg-amber/15",
  },
  {
    icon: ThumbsUp,
    target: 98,
    suffix: "%",
    label: "Tingkat Kepuasan",
    desc: "Berdasarkan feedback langsung dari klien",
    color: "text-teal",
    bg: "bg-teal/15",
  },
  {
    icon: Calendar,
    target: 3,
    suffix: "+",
    label: "Tahun Pengalaman",
    desc: "Mendampingi UMKM go digital",
    color: "text-amber",
    bg: "bg-amber/15",
  },
  {
    icon: Briefcase,
    target: 7,
    suffix: "+",
    label: "Jenis Industri",
    desc: "Dari kuliner, kesehatan, hingga kreatif",
    color: "text-teal",
    bg: "bg-teal/15",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const counts = [
    useCountUp(stats[0].target, 2, isInView),
    useCountUp(stats[1].target, 2.2, isInView),
    useCountUp(stats[2].target, 1.5, isInView),
    useCountUp(stats[3].target, 1.8, isInView),
  ];

  return (
    <section id="klien" className="bg-navy py-16 lg:py-32 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-outfit text-sm font-medium text-amber uppercase tracking-widest"
          >
            Angka yang Bicara
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-krem mt-3 leading-tight"
          >
            Bisnis Nyata, Hasil Nyata.
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 text-center overflow-hidden group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/5 to-transparent rounded-2xl" />

              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={22} className={stat.color} />
              </div>

              <div className="mb-2">
                <span className={`font-syne font-extrabold text-4xl lg:text-5xl ${stat.color}`}>
                  {counts[i]}
                </span>
                <span className={`font-syne font-extrabold text-2xl lg:text-3xl ${stat.color}`}>
                  {stat.suffix}
                </span>
              </div>

              <h3 className="font-syne font-bold text-krem text-sm lg:text-base mb-2">
                {stat.label}
              </h3>
              <p className="font-outfit text-xs text-abu-biru leading-relaxed hidden sm:block">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
