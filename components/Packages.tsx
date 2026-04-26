"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, X, Zap, Layout, Database, Star, type LucideIcon } from "lucide-react";

type Feature = { text: string; included: boolean };

type Package = {
  id: string;
  icon: LucideIcon;
  tag?: string;
  tagColor?: string;
  name: string;
  price: string;
  priceNote: string;
  desc: string;
  features: Feature[];
  bestFor: string;
  ctaLabel: string;
  highlighted: boolean;
};

const packages: Package[] = [
  {
    id: "starter",
    icon: Zap,
    tag: "Entry Level",
    tagColor: "bg-teal/20 text-teal",
    name: "Paket Reservasi",
    price: "1.500.000",
    priceNote: "One-time payment",
    desc: "Sistem booking online siap pakai — tanpa perlu website. Ideal untuk bisnis layanan yang masih pakai manual.",
    features: [
      { text: "Setup sistem booking online (widget)", included: true },
      { text: "Konfigurasi jam operasional & kapasitas slot", included: true },
      { text: "Link reservasi siap disebarkan ke pelanggan", included: true },
      { text: "Notifikasi WhatsApp (pelanggan & admin)", included: true },
      { text: "Interface mobile-friendly", included: true },
      { text: "Panduan penggunaan lengkap", included: true },
      { text: "Support teknis 30 hari", included: true },
      { text: "Custom web design", included: false },
      { text: "Database & manajemen data", included: false },
      { text: "Domain & hosting", included: false },
    ],
    bestFor: "Salon, barbershop, spa, klinik kecil, studio",
    ctaLabel: "Pilih Paket Ini",
    highlighted: false,
  },
  {
    id: "pro",
    icon: Layout,
    tag: "Populer",
    tagColor: "bg-teal/20 text-teal",
    name: "Web + Reservasi",
    price: "3.000.000",
    priceNote: "One-time payment",
    desc: "Website profesional lengkap dengan sistem booking simpel. Bisnis kamu terlihat serius di mata pelanggan.",
    features: [
      { text: "Custom web design 1 halaman (landing page)", included: true },
      { text: "Sistem reservasi simpel (tanpa database)", included: true },
      { text: "Profil bisnis & galeri layanan/produk", included: true },
      { text: "Informasi harga & paket layanan", included: true },
      { text: "Integrasi Google Maps & arah lokasi", included: true },
      { text: "Tombol kontak & chat WhatsApp", included: true },
      { text: "Desain mobile responsive", included: true },
      { text: "Revisi desain hingga puas", included: true },
      { text: "Konsultasi domain & hosting", included: true },
      { text: "Support teknis 1 bulan", included: true },
    ],
    bestFor: "Restoran, kafe, jasa profesional, bengkel, retail",
    ctaLabel: "Pilih Paket Ini",
    highlighted: false,
  },
  {
    id: "advanced",
    icon: Database,
    tag: "Paling Banyak Dipilih",
    tagColor: "bg-amber/20 text-amber",
    name: "Web + Reservasi Pro",
    price: "5.000.000",
    priceNote: "One-time payment",
    desc: "Web design multi-halaman dengan sistem reservasi bertenaga database. Data pelanggan tersimpan rapi, bisa diakses kapan saja.",
    features: [
      { text: "Custom web design multi-halaman", included: true },
      { text: "Sistem reservasi lengkap dengan database", included: true },
      { text: "Dashboard admin kelola booking & jadwal", included: true },
      { text: "Manajemen slot otomatis & blokir waktu", included: true },
      { text: "Notifikasi otomatis WhatsApp & Email", included: true },
      { text: "Riwayat booking & database pelanggan", included: true },
      { text: "Mobile responsive + optimasi kecepatan", included: true },
      { text: "Domain & hosting (1 tahun)", included: true },
      { text: "Integrasi pembayaran (opsional)", included: true },
      { text: "Support teknis 3 bulan", included: true },
    ],
    bestFor: "Klinik, studio foto, event organizer, wedding organizer",
    ctaLabel: "Pilih Paket Ini",
    highlighted: true,
  },
  {
    id: "full",
    icon: Star,
    tag: "Full Package",
    tagColor: "bg-amber/20 text-amber",
    name: "Full Digital Package",
    price: "8.500.000",
    priceNote: "One-time payment",
    desc: "Transformasi digital menyeluruh — dari sistem, website, hingga identitas visual dan strategi konten.",
    features: [
      { text: "Semua fitur Web + Reservasi Pro", included: true },
      { text: "Desain identitas visual (logo + color system)", included: true },
      { text: "Social media kit (8 template siap pakai)", included: true },
      { text: "Setup Google My Business & Google Maps", included: true },
      { text: "SEO dasar on-page (siap dicari di Google)", included: true },
      { text: "Google Analytics + laporan bulanan", included: true },
      { text: "Landing page campaign (1 halaman promo)", included: true },
      { text: "Pelatihan penggunaan sistem (2 sesi)", included: true },
      { text: "Konsultasi strategi konten digital", included: true },
      { text: "Support prioritas 6 bulan", included: true },
    ],
    bestFor: "Bisnis yang siap naik level total — brand, sistem, dan visibility",
    ctaLabel: "Pilih Paket Ini",
    highlighted: false,
  },
];

export default function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="paket" className="bg-krem py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-outfit text-sm font-medium text-teal uppercase tracking-widest"
          >
            Pilih Sesuai Kebutuhan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mt-3 mb-4 leading-tight"
          >
            Paket Harga Raskop Digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-base lg:text-lg text-navy/60 max-w-xl mx-auto"
          >
            Semua paket sudah termasuk konsultasi awal gratis. Kita ngobrol dulu — baru
            tentukan paket yang paling sesuai.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              className={`relative rounded-2xl flex flex-col package-card ${
                pkg.highlighted
                  ? "bg-navy shadow-2xl shadow-navy/20 ring-2 ring-amber/40"
                  : "bg-white shadow-md shadow-navy/8 border border-navy/8"
              }`}
            >
              {/* Popular badge */}
              {pkg.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber text-navy font-outfit font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ Paling Banyak Dipilih
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      pkg.highlighted ? "bg-amber/20" : "bg-navy/8"
                    }`}
                  >
                    <pkg.icon
                      size={20}
                      className={pkg.highlighted ? "text-amber" : "text-navy"}
                    />
                  </div>
                  {pkg.tag && (
                    <span className={`text-xs font-outfit font-medium px-2.5 py-1 rounded-full ${pkg.tagColor}`}>
                      {pkg.tag}
                    </span>
                  )}
                </div>

                {/* Name + Price */}
                <h3
                  className={`font-syne font-bold text-lg mb-1 ${
                    pkg.highlighted ? "text-krem" : "text-navy"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-3">
                  <span
                    className={`font-syne font-extrabold text-2xl ${
                      pkg.highlighted ? "text-amber" : "text-navy"
                    }`}
                  >
                    Rp {pkg.price}
                  </span>
                  <span
                    className={`font-outfit text-xs ml-2 ${
                      pkg.highlighted ? "text-abu-biru" : "text-navy/40"
                    }`}
                  >
                    {pkg.priceNote}
                  </span>
                </div>

                <p
                  className={`font-outfit text-sm leading-relaxed mb-5 ${
                    pkg.highlighted ? "text-abu-biru" : "text-navy/60"
                  }`}
                >
                  {pkg.desc}
                </p>

                {/* Features - first 5 always visible */}
                <ul className="space-y-2.5 mb-4 flex-1">
                  {pkg.features.slice(0, 5).map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5">
                      {f.included ? (
                        <Check size={15} className="text-teal mt-0.5 flex-shrink-0" />
                      ) : (
                        <X size={15} className="text-navy/20 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={`font-outfit text-xs leading-relaxed ${
                          f.included
                            ? pkg.highlighted ? "text-krem/80" : "text-navy/80"
                            : pkg.highlighted ? "text-abu-biru/40" : "text-navy/30"
                        }`}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}

                  {/* Expandable features */}
                  <AnimatePresence>
                    {expanded === pkg.id &&
                      pkg.features.slice(5).map((f) => (
                        <motion.li
                          key={f.text}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-2.5 overflow-hidden"
                        >
                          {f.included ? (
                            <Check size={15} className="text-teal mt-0.5 flex-shrink-0" />
                          ) : (
                            <X size={15} className="text-navy/20 mt-0.5 flex-shrink-0" />
                          )}
                          <span
                            className={`font-outfit text-xs leading-relaxed ${
                              f.included
                                ? pkg.highlighted ? "text-krem/80" : "text-navy/80"
                                : pkg.highlighted ? "text-abu-biru/40" : "text-navy/30"
                            }`}
                          >
                            {f.text}
                          </span>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>

                {/* Show more toggle */}
                {pkg.features.length > 5 && (
                  <button
                    onClick={() => setExpanded(expanded === pkg.id ? null : pkg.id)}
                    className={`font-outfit text-xs font-medium mb-4 text-left hover:underline ${
                      pkg.highlighted ? "text-amber" : "text-teal"
                    }`}
                  >
                    {expanded === pkg.id ? "Sembunyikan ↑" : `+${pkg.features.length - 5} fitur lainnya ↓`}
                  </button>
                )}

                {/* Best for */}
                <div
                  className={`text-xs font-outfit rounded-lg px-3 py-2 mb-5 ${
                    pkg.highlighted ? "bg-white/5 text-abu-biru" : "bg-navy/4 text-navy/50"
                  }`}
                >
                  <span className="font-medium">Cocok untuk:</span> {pkg.bestFor}
                </div>

                {/* CTA */}
                <motion.a
                  href={`https://wa.me/6281357662424?text=Halo%20Raskop%20Digital%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}%20(Rp%20${pkg.price}).%20Boleh%20kita%20ngobrol%20dulu%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`block text-center font-outfit font-semibold text-sm py-3 rounded-xl transition-all duration-200 ${
                    pkg.highlighted
                      ? "bg-amber text-navy hover:bg-amber/90 shadow-lg shadow-amber/20"
                      : "bg-navy text-krem hover:bg-navy/90"
                  }`}
                >
                  {pkg.ctaLabel}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-outfit text-sm text-navy/50 mt-10"
        >
          Semua harga belum termasuk domain & hosting (kecuali paket yang sudah mencakup).
          Konsultasi awal selalu gratis — tanpa komitmen.
        </motion.p>
      </div>
    </section>
  );
}
