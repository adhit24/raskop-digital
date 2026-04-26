"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pak Hendry S.",
    role: "Owner Salon Cantique",
    location: "Bandung",
    rating: 5,
    text: "Sebelumnya booking masih via WhatsApp manual — sering kelewat, sering bentrok jadwal. Sekarang semua rapi lewat link reservasi. Pelanggan senang, saya lebih tenang. Simple tapi impactnya besar banget.",
    package: "Paket Reservasi",
    initial: "H",
    color: "bg-teal",
  },
  {
    name: "Bu Sari W.",
    role: "Owner Warung Makan Sabar Menanti",
    location: "Jakarta Selatan",
    rating: 5,
    text: "Website-nya rapi dan profesional, tidak lebay. Sekarang waktu orang googling nama warung saya, langsung muncul lengkap. Beberapa pelanggan baru bilang nemunya dari search — yang sebelumnya nggak pernah terjadi.",
    package: "Web + Reservasi",
    initial: "S",
    color: "bg-amber",
  },
  {
    name: "Mas Reza A.",
    role: "Owner Studio Foto Moment Creative",
    location: "Surabaya",
    rating: 5,
    text: "Sistem booking-nya lebih rapi dari yang saya bayangkan. Admin gampang kelolaannya, pelanggan juga gampang pesannya. Tidak rugi invest di sini — hasilnya langsung kelihatan dalam bulan pertama.",
    package: "Web + Reservasi Pro",
    initial: "R",
    color: "bg-teal",
  },
  {
    name: "Ibu Dewi R.",
    role: "Owner Klinik Kecantikan Aura",
    location: "Yogyakarta",
    rating: 5,
    text: "Awalnya skeptis — banyak vendor yang janji manis tapi hasilnya biasa saja. Raskop Digital beda. Mereka benar-benar pelajari dulu cara klinik saya berjalan sebelum bikin sistemnya. Sekarang operasional jauh lebih teratur.",
    package: "Full Digital Package",
    initial: "D",
    color: "bg-amber",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-krem py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-outfit text-sm font-medium text-teal uppercase tracking-widest"
          >
            Kata Mereka
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mt-3 mb-4 leading-tight"
          >
            Bukan Klaim Kami —{" "}
            <span className="text-teal">Pengalaman Nyata</span> Klien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-base lg:text-lg text-navy/60 max-w-xl mx-auto"
          >
            Real feedback dari pemilik usaha yang sudah merasakan langsung perbedaannya.
          </motion.p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 shadow-sm shadow-navy/8 border border-navy/6 relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-navy" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber fill-amber" />
                ))}
              </div>

              {/* Text */}
              <p className="font-outfit text-base text-navy/75 leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="font-syne font-bold text-white text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="font-syne font-bold text-navy text-sm">{t.name}</p>
                  <p className="font-outfit text-xs text-abu-biru">{t.role} · {t.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="font-outfit text-xs text-teal bg-teal/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {t.package}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Average rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-navy/6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-amber fill-amber" />
              ))}
            </div>
            <span className="font-syne font-bold text-navy text-sm">5.0</span>
            <span className="font-outfit text-sm text-abu-biru">dari 50+ ulasan klien</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
