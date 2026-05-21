"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#numeros", label: "Números" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(250, 245, 238, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.2)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(78,53,32,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="font-serif text-xl tracking-[0.15em] uppercase"
            style={{ color: "var(--nude-800)", fontFamily: "var(--font-serif)" }}
          >
            SV
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="relative text-sm tracking-widest uppercase cursor-pointer"
                style={{
                  color: "var(--nude-700)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                }}
              >
                <span className="animated-underline">{l.label}</span>
              </button>
            ))}
            <button
              onClick={() => handleNav("#contato")}
              className="px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                background: "var(--nude-800)",
                color: "var(--cream)",
                fontFamily: "var(--font-sans)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background = "var(--nude-600)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = "var(--nude-800)")
              }
            >
              Trabalhe comigo
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--nude-800)",
                transform: open ? "rotate(45deg) translate(4px,4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--nude-800)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--nude-800)",
                transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden"
          style={{
            background: "rgba(250,245,238,0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="px-6 pb-6 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-sm tracking-widest uppercase py-2 border-b"
                style={{
                  color: "var(--nude-700)",
                  borderColor: "var(--nude-200)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
