"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  accent: "teal" | "amber" | "blue";
};

const team: TeamMember[] = [
  {
    name: "Kinarya",
    role: "Product & Strategy",
    desc: "Menyusun struktur sistem, flow operasional, dan prioritas fitur supaya hasilnya dipakai.",
    accent: "amber",
  },
  {
    name: "Loka",
    role: "Design & Branding",
    desc: "Merancang UI, identitas visual, dan materi brand yang konsisten dari website sampai social media.",
    accent: "teal",
  },
  {
    name: "Studio",
    role: "Engineering",
    desc: "Membangun website cepat, responsif, dan siap dipakai—dengan animasi halus dan struktur rapi.",
    accent: "blue",
  },
];

function getAccent(accent: TeamMember["accent"]) {
  if (accent === "teal") {
    return {
      chip: "bg-teal/15 text-teal border-teal/20",
      glow: "from-teal/25 via-teal/10 to-transparent",
      ring: "ring-teal/25",
    };
  }
  if (accent === "blue") {
    return {
      chip: "bg-blue-600/10 text-blue-700 border-blue-700/20",
      glow: "from-blue-600/20 via-blue-600/10 to-transparent",
      ring: "ring-blue-700/20",
    };
  }
  return {
    chip: "bg-amber/15 text-amber border-amber/20",
    glow: "from-amber/25 via-amber/10 to-transparent",
    ring: "ring-amber/25",
  };
}

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s.trim()[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-12, 12]);
  const scale = useTransform(xSpring, [-0.5, 0.5], [1.01, 1.01]);
  const a = getAccent(member.accent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative"
    >
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        onPointerMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          x.set(px);
          y.set(py);
        }}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className={`relative rounded-3xl bg-white border border-navy/10 shadow-sm shadow-navy/10 ring-1 ${a.ring} overflow-hidden`}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${a.glow}`} />

        <div className="p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="relative"
                style={{ transform: "translateZ(18px)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center text-krem font-syne font-bold">
                  {initials(member.name)}
                </div>
              </motion.div>
              <div style={{ transform: "translateZ(14px)" }}>
                <p className="font-syne font-extrabold text-lg text-navy leading-none">
                  {member.name}
                </p>
                <span className={`mt-2 inline-flex items-center rounded-full border px-3 py-1 text-xs font-outfit font-semibold ${a.chip}`}>
                  {member.role}
                </span>
              </div>
            </div>
          </div>

          <p
            className="font-outfit text-sm text-navy/65 leading-relaxed mt-5"
            style={{ transform: "translateZ(12px)" }}
          >
            {member.desc}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2" style={{ transform: "translateZ(10px)" }}>
            {["Rapi", "Cepat", "Dipakai"].map((label) => (
              <div
                key={label}
                className="rounded-xl bg-navy/5 border border-navy/10 px-3 py-2 text-center"
              >
                <span className="font-outfit text-xs font-semibold text-navy/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tim" className="bg-krem py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-outfit text-sm font-medium text-teal uppercase tracking-widest"
          >
            Tim Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mt-3 leading-tight"
          >
            Terasa 3D, Mengambang, dan Interaktif
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-base lg:text-lg text-navy/60 max-w-2xl mx-auto mt-4"
          >
            Gerakkan cursor ke kartu untuk melihat efek tilt yang halus. Semua animasi pakai Framer Motion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

