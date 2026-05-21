"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  { name: "Vogue Brasil", category: "Editorial" },
  { name: "L'Oréal Paris", category: "Beleza" },
  { name: "Animale", category: "Moda" },
  { name: "Renner", category: "Varejo" },
  { name: "Natura", category: "Cosméticos" },
  { name: "Farm Rio", category: "Moda" },
  { name: "Globo", category: "TV/Streaming" },
  { name: "Heineken", category: "Lifestyle" },
  { name: "Reserva", category: "Moda" },
];

const testimonials = [
  {
    quote:
      "A Sophia trouxe exatamente a energia que precisávamos para a campanha. Profissionalismo e resultados acima da expectativa.",
    author: "Diretora Criativa",
    brand: "L'Oréal Paris",
  },
  {
    quote:
      "Nossa parceria gerou um ROI 3x acima da média. O engajamento genuíno do público dela é incomparável.",
    author: "Head de Marketing",
    brand: "Farm Rio",
  },
];

export default function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="marcas"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--nude-50)", padding: "6rem 1.5rem" }}
    >
      {/* Decoration */}
      <div
        aria-hidden
        className="absolute left-0 top-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,174,135,0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--gold)", fontFamily: "var(--font-sans)" }}
          >
            Parcerias
          </p>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--nude-800)",
            }}
          >
            Marcas que confiam{" "}
            <em style={{ color: "var(--gold)" }}>no meu trabalho</em>
          </h2>
        </motion.div>

        {/* Brands grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-20">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group flex flex-col items-center justify-center p-6 md:p-8 transition-all duration-400 cursor-default"
              style={{
                background: "rgba(253,248,243,0.8)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(212,174,135,0.2)",
                borderRadius: "4px",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 40px rgba(78,53,32,0.1)",
                borderColor: "rgba(201,169,110,0.5)",
              }}
            >
              <span
                className="text-xs mb-2 tracking-widest uppercase"
                style={{ color: "var(--nude-400)", fontFamily: "var(--font-sans)" }}
              >
                {brand.category}
              </span>
              <span
                className="text-center font-serif"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--nude-700)",
                  fontWeight: 400,
                }}
              >
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p
            className="text-center text-xs tracking-[0.4em] uppercase mb-10"
            style={{ color: "var(--gold)", fontFamily: "var(--font-sans)" }}
          >
            Depoimentos
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                className="p-8"
                style={{
                  background: "rgba(250,245,238,0.7)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  borderRadius: "4px",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <p
                  className="text-base leading-relaxed mb-4 italic"
                  style={{
                    color: "var(--nude-700)",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                  }}
                >
                  "{t.quote}"
                </p>
                <footer>
                  <span
                    className="text-xs tracking-wide"
                    style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
                  >
                    {t.author} — <strong style={{ color: "var(--nude-700)" }}>{t.brand}</strong>
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
