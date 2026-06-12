"use client";
import { useEffect, useRef, useState } from "react";

const kpis = [
  { value: "17+", label: "Años de experiencia" },
  { value: "20+", label: "Entidades transformadas" },
  { value: "1.100+", label: "Municipios en nuestro mercado" },
  { value: "$480M", label: "COP recuperados con IA" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero-gradient hero-pattern flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-consisa-red/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-consisa-blue-light/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-white/3 -translate-x-1/2 -translate-y-1/2 border border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-2xl">🇨🇴</span>
            <span className="text-white/90 text-sm font-medium tracking-wide">
              ERP · IA · Sector Público · Desde 2008
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Transformamos organizaciones colombianas con{" "}
            <span className="text-consisa-red">Odoo, IA</span> y experiencia real en procesos
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            17 años de expertise en procesos de negocio. Odoo + IA para el sector público y
            privado colombiano. <strong className="text-white">¡Conectando Juntos!</strong>
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-20 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a href="#contacto" className="btn-accent text-base py-4 px-8">
              Habla con un experto →
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Conoce nuestros proyectos
            </a>
          </div>

          {/* KPIs */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center"
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                  {kpi.value}
                </div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-white/30 rounded-full animate-pulse" />
      </div>
    </section>
  );
}
