"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  {
    label: "Instagram",
    handle: "@sophiavalentini",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@sophiavalentini",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  {
    label: "E-mail",
    handle: "assessoria@sophiavalentini.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--cream)", padding: "6rem 1.5rem" }}
    >
      {/* Decorative blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "50vw",
            height: "50vw",
            bottom: "-20%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(212,174,135,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

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
            Contato
          </p>
          <h2
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--nude-800)",
            }}
          >
            Vamos criar algo{" "}
            <em style={{ color: "var(--gold)" }}>juntos?</em>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{
              color: "var(--nude-600)",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            Envie sua proposta e entraremos em contato em até 48 horas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
            >
              Redes & Contato direto
            </p>
            {socials.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 p-4 transition-all duration-300 group cursor-default"
                style={{
                  background: "rgba(253,248,243,0.8)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(212,174,135,0.2)",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="p-2 rounded-full transition-colors duration-300"
                  style={{
                    background: "rgba(201,169,110,0.1)",
                    color: "var(--gold)",
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--nude-700)", fontFamily: "var(--font-sans)" }}
                  >
                    {s.handle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div
              className="p-8 md:p-10"
              style={{
                background: "rgba(253,248,243,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(201,169,110,0.25)",
                borderRadius: "6px",
                boxShadow: "0 8px 40px rgba(78,53,32,0.07)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(201,169,110,0.15)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p
                    className="font-serif text-2xl mb-2"
                    style={{ color: "var(--nude-800)", fontFamily: "var(--font-serif)" }}
                  >
                    Mensagem enviada!
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
                  >
                    Retornaremos em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Seu nome"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="E-mail"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </div>
                  <Field
                    label="Marca / Empresa"
                    value={form.brand}
                    onChange={(v) => setForm({ ...form, brand: v })}
                  />
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
                    >
                      Sua proposta
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="resize-none outline-none px-4 py-3 transition-all duration-200 text-sm"
                      style={{
                        background: "var(--warm-white)",
                        border: "1px solid var(--nude-200)",
                        borderRadius: "3px",
                        color: "var(--nude-800)",
                        fontFamily: "var(--font-sans)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--gold)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--nude-200)")
                      }
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 py-4 text-xs tracking-widest uppercase w-full transition-colors duration-300"
                    style={{
                      background: "var(--nude-800)",
                      color: "var(--cream)",
                      fontFamily: "var(--font-sans)",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.background = "var(--nude-600)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.background = "var(--nude-800)")
                    }
                  >
                    Enviar proposta
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs tracking-widest uppercase"
        style={{ color: "var(--nude-500)", fontFamily: "var(--font-sans)" }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="outline-none px-4 py-3 transition-all duration-200 text-sm"
        style={{
          background: "var(--warm-white)",
          border: "1px solid var(--nude-200)",
          borderRadius: "3px",
          color: "var(--nude-800)",
          fontFamily: "var(--font-sans)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--nude-200)")}
      />
    </div>
  );
}
