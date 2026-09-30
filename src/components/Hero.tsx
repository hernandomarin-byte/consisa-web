"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const kpis = [
  { value: "17+", label: "Años de experiencia" },
  { value: "2024", label: "Nace la Agencia IA" },
  { value: "6", label: "Productos propios" },
  { value: "1.100+", label: "Municipios en nuestro mercado" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  const show = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=1600&q=80)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#003087]/97 via-[#003087]/85 to-[#001A4D]/70" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#E8401C]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-4xl">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${show}`}>
            <span className="text-2xl">🇨🇴</span>
            <span className="text-white/90 text-sm font-medium tracking-wide">ERP · Odoo · Agencia IA · Desde 2008</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 transition-all duration-700 delay-100 ${show}`}>
            De la experiencia SAP a{" "}
            <span className="text-[#E8401C]">Odoo e Inteligencia Artificial</span>
          </h1>

          <p className={`text-lg sm:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${show}`}>
            Más de 17 años dominando los procesos del Estado colombiano. Desde 2024, productos propios con Odoo e IA Generativa creados por nuestra Agencia IA.{" "}
            <strong className="text-white">¡Conectando Juntos!</strong>
          </p>

          <div className={`flex flex-wrap gap-4 mb-20 transition-all duration-700 delay-300 ${show}`}>
            <Link href="/productos" className="btn-accent text-base py-4 px-8">Conoce nuestros productos →</Link>
            <Link href="/nosotros" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200">
              Nuestra evolución
            </Link>
          </div>

          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${show}`}>
            {kpis.map((kpi, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all">
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{kpi.value}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-white/30 rounded-full animate-pulse" />
      </div>
    </section>
  );
}
