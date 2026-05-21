"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  { label: "Experiência", value: "8+ anos" },
  { label: "Projetos", value: "120+" },
  { label: "Países", value: "12" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--warm-white)",
        padding: "6rem 1.5rem",
      }}
    >
      {/* Decorative background shape */}
      <div
        aria-hidden
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, rgba(228,195,155,0.12) 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glass card behind */}
            <div
              className="absolute -top-4 -left-4 w-full h-full"
              style={{
                border: "1px solid rgba(201,169,110,0.3)",
                borderRadius: "4px",
              }}
            />
            {/* Photo placeholder */}
            <div
              className="relative w-full aspect-[3/4] rounded overflow-hidden"
              style={{ background: "var(--nude-200)" }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ color: "var(--nude-500)" }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  Sua foto aqui
                </span>
              </div>
              {/* Gold corner accent */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 50%, rgba(201,169,110,0.15) 50%)",
                }}
              />
            </div>

            {/* Stats pills */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="px-4 py-3 text-center shadow-lg"
                  style={{
                    background: "rgba(250,245,238,0.85)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    borderRadius: "4px",
                    minWidth: "90px",
                  }}
                >
                  <p
                    className="font-serif text-lg leading-none"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-serif)" }}
                  >
                    {h.value}
                  </p>
                  <p
                    className="text-xs mt-1 uppercase tracking-wider"
                    style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
                  >
                    {h.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "var(--gold)", fontFamily: "var(--font-sans)" }}
            >
              Sobre mim
            </p>
            <h2
              className="leading-tight mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: "var(--nude-800)",
              }}
            >
              Arte, presença<br />
              <em style={{ color: "var(--gold)" }}>e autenticidade.</em>
            </h2>
            <div
              className="w-12 h-px mb-6"
              style={{ background: "var(--gold)" }}
            />
            <p
              className="leading-relaxed mb-4 text-base md:text-lg"
              style={{
                color: "var(--nude-700)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              Sophia Valentini é modelo e atriz com carreira consolidada nas passarelas nacionais e internacionais, campanhas de moda, publicidade e produções audiovisuais de alto impacto.
            </p>
            <p
              className="leading-relaxed mb-8 text-base md:text-lg"
              style={{
                color: "var(--nude-600)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              Sua estética única une elegância atemporal e expressividade contemporânea, conectando marcas ao seu público de forma genuína e memorável.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Moda", "Publicidade", "Editorial", "Lifestyle", "Beleza", "Cinema"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-xs tracking-widest uppercase"
                  style={{
                    border: "1px solid var(--nude-300)",
                    color: "var(--nude-600)",
                    fontFamily: "var(--font-sans)",
                    borderRadius: "2px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
