"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12 px-6"
      style={{ background: "var(--nude-900)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(201,169,110,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <p
            className="font-serif text-2xl tracking-[0.2em] uppercase"
            style={{ color: "var(--nude-100)", fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Sophia Valentini
          </p>
          <p
            className="text-xs tracking-widest uppercase mt-1"
            style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
          >
            Modelo · Atriz · Criadora
          </p>
        </div>

        {/* Divider */}
        <div
          className="hidden md:block h-px flex-1 mx-8"
          style={{ background: "rgba(201,169,110,0.15)" }}
        />

        {/* Links */}
        <nav className="flex gap-6">
          {["#sobre", "#numeros", "#marcas", "#contato"].map((href) => (
            <button
              key={href}
              onClick={() =>
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{
                color: "var(--nude-500)",
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--nude-500)")
              }
            >
              {href.replace("#", "")}
            </button>
          ))}
        </nav>
      </div>

      <div
        className="relative max-w-6xl mx-auto mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
      >
        <p
          className="text-xs"
          style={{ color: "var(--nude-600)", fontFamily: "var(--font-sans)" }}
        >
          © {new Date().getFullYear()} Sophia Valentini. Todos os direitos reservados.
        </p>
        <p
          className="text-xs"
          style={{ color: "var(--nude-700)", fontFamily: "var(--font-sans)" }}
        >
          Mídia Kit 2025
        </p>
      </div>
    </footer>
  );
}
