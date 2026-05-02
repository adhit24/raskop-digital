"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Mengapa Digital", href: "#mengapa-digital" },
  { label: "Paket", href: "#paket" },
  { label: "Klien", href: "#klien" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative ${
          scrolled
            ? "bg-navy shadow-lg shadow-navy/25"
            : "bg-navy"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[84px] md:h-[92px] flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/logo_kinaryaloka.png"
              alt="KINARYALOKA Digital Studio"
              width={80}
              height={80}
              className="object-contain w-[72px] h-[72px] md:w-[80px] md:h-[80px]"
            />
            <span className="font-syne font-bold text-white text-lg leading-none">
              KINARYALOKA<span className="text-amber">.</span>Digital
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-outfit text-sm text-abu-biru hover:text-white transition-colors duration-200 animated-underline"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://wa.me/6281357662424?text=Halo%20KINARYALOKA%20Digital%20Studio%2C%20saya%20ingin%20ngobrol%20dulu%20soal%20kebutuhan%20digital%20saya."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-amber text-navy font-outfit font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-amber/90 hover:shadow-lg hover:shadow-amber/20"
            >
              Ngobrol Sekarang
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-amber via-teal to-amber opacity-80"
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu fixed inset-0 z-40 bg-navy/95 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(link.href)}
                className="font-syne font-bold text-3xl text-krem hover:text-amber transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              href="https://wa.me/6281357662424?text=Halo%20KINARYALOKA%20Digital%20Studio%2C%20saya%20ingin%20ngobrol%20dulu%20soal%20kebutuhan%20digital%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-amber text-navy font-outfit font-semibold text-lg px-8 py-3 rounded-full"
            >
              Ngobrol Sekarang
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
