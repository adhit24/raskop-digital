"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Mengapa Digital", href: "#mengapa-digital" },
  { label: "Paket Harga", href: "#paket" },
  { label: "Klien & Statistik", href: "#klien" },
];

const services = [
  "Sistem Reservasi Simpel",
  "Web Design Profesional",
  "Reservasi + Database",
  "Full Digital Package",
  "Branding & Identitas Visual",
  "Konsultasi Digital UMKM",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Raskop Digital Studio"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="font-syne font-bold text-white text-xl">
                Raskop<span className="text-amber">.</span>Digital
              </span>
            </div>
            <p className="font-outfit text-abu-biru text-sm leading-relaxed max-w-sm mb-6">
              Partner digital untuk UMKM yang sudah siap naik level. Kami bantu terjemahkan
              cara bisnis kamu jalan ke dalam sistem yang rapi, jelas, dan bisa dipakai
              sehari-hari.
            </p>
            <p className="font-syne font-bold text-krem/50 text-sm italic mb-6">
              &ldquo;Digital bukan pilihan, ini kebutuhan.&rdquo;
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/raskop_digital/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(232,135,74,0.2)" }}
                className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-abu-biru hover:text-amber transition-colors"
              >
                <Instagram size={17} />
              </motion.a>
              <motion.a
                href="https://wa.me/6281357662424"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(232,135,74,0.2)" }}
                className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-abu-biru hover:text-amber transition-colors"
              >
                <MessageCircle size={17} />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-syne font-bold text-krem text-sm mb-5 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-outfit text-sm text-abu-biru hover:text-amber transition-colors animated-underline text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-bold text-krem text-sm mb-5 uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-outfit text-sm text-abu-biru">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="font-outfit text-xs text-abu-biru/60">
              © {new Date().getFullYear()} Raskop Digital. All rights reserved.
            </p>
          </div>
          <p className="font-outfit text-xs text-abu-biru/60 text-center">
            Solusi digital yang nyata — untuk bisnis yang nyata.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-abu-biru hover:text-amber hover:border-amber/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
