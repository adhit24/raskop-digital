"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/6281357662424",
  },
  {
    icon: Mail,
    label: "rasakoppii@gmail.com",
    href: "mailto:rasakoppii@gmail.com",
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/Logo_kinaryaloka.png"
              alt="KINARYALOKA"
              width={36}
              height={36}
              className="object-contain"
            />
            <Image
              src="/kinaryaloka font.png"
              alt="KINARYALOKA Digital"
              width={100}
              height={28}
              className="object-contain h-6 w-auto"
            />
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {contacts.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 font-outfit text-xs text-abu-biru hover:text-amber transition-colors"
              >
                <Icon size={13} className="flex-shrink-0" />
                {label}
              </motion.a>
            ))}
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-3">
            <p className="font-outfit text-xs text-abu-biru/50">
              © {new Date().getFullYear()} KINARYALOKA Digital Studio
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-7 h-7 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-abu-biru hover:text-amber hover:border-amber/30 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
