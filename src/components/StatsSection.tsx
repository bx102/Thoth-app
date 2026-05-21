"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

const stats = [
  {
    value: 480,
    suffix: "K",
    label: "Seguidores",
    sub: "Instagram + TikTok",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    value: 8.4,
    suffix: "%",
    label: "Taxa de engajamento",
    sub: "Média nos últimos 30 dias",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    decimal: true,
  },
  {
    value: 2.1,
    suffix: "M",
    label: "Alcance mensal",
    sub: "Impressões totais",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    decimal: true,
  },
  {
    value: 94,
    suffix: "%",
    label: "Público feminino",
    sub: "18–35 anos",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="numeros"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--nude-800)",
        padding: "6rem 1.5rem",
      }}
    >
      {/* Subtle texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.12) 0%, transparent 60%)",
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
            Números
          </p>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--nude-100)",
            }}
          >
            Alcance que{" "}
            <em style={{ color: "var(--gold)" }}>faz a diferença</em>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "rgba(201,169,110,0.1)" }}
        >
          {stats.map((s, i) => {
            const count = useCounter(
              s.decimal ? s.value * 10 : s.value,
              1800,
              inView
            );
            const display = s.decimal
              ? (count / 10).toFixed(1)
              : count.toLocaleString("pt-BR");

            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group flex flex-col items-center text-center p-8 md:p-12 transition-all duration-500"
                style={{
                  background: "rgba(78,53,32,0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: "var(--gold)",
                    background: "rgba(201,169,110,0.1)",
                  }}
                >
                  {s.icon}
                </div>

                {/* Number */}
                <div
                  className="font-serif leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "var(--nude-100)",
                    fontWeight: 300,
                  }}
                >
                  {display}
                  <span style={{ color: "var(--gold)", fontSize: "0.6em" }}>
                    {s.suffix}
                  </span>
                </div>

                <p
                  className="text-sm tracking-wide mb-1"
                  style={{ color: "var(--nude-200)", fontFamily: "var(--font-sans)" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
                >
                  {s.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
