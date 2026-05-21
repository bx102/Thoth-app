"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Soft background gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-15%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(228,195,155,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "50vw",
            height: "50vw",
            bottom: "-10%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(212,174,135,0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xs uppercase mb-8"
          style={{
            color: "var(--gold)",
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
          }}
        >
          Modelo · Atriz · Criadora
        </motion.p>

        {/* Main name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-none"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "var(--nude-800)",
              letterSpacing: "-0.02em",
            }}
          >
            Sophia
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-none italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "var(--gold)",
              letterSpacing: "-0.02em",
            }}
          >
            Valentini
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="my-8 mx-auto"
          style={{
            width: "80px",
            height: "1px",
            background: "var(--gold)",
            transformOrigin: "left",
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg md:text-xl max-w-md mx-auto leading-relaxed"
          style={{
            color: "var(--nude-600)",
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          "Presença que transforma marcas em histórias inesquecíveis."
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 text-xs tracking-widest uppercase transition-all duration-400 hover:scale-105"
            style={{
              background: "var(--nude-800)",
              color: "var(--cream)",
              fontFamily: "var(--font-sans)",
              borderRadius: "2px",
            }}
          >
            Fechar parceria
          </button>
          <button
            onClick={() =>
              document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "var(--nude-800)",
              fontFamily: "var(--font-sans)",
              border: "1px solid var(--nude-400)",
              borderRadius: "2px",
            }}
          >
            Conhecer
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--nude-400)", fontFamily: "var(--font-sans)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
