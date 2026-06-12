import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

const highlights = [
  {
    icon: "📊",
    title: "GRP Odoo",
    desc: "Control presupuestal SaaS para municipios. Desde USD 200/mes.",
    href: "/servicios",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    icon: "⚖️",
    title: "SRI GovTech",
    desc: "IA normativa con Claude API. Piloto validado: $480M COP recuperados.",
    href: "/servicios",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    icon: "🤖",
    title: "Agencia IA",
    desc: "Automatizaciones inteligentes para el sector público colombiano.",
    href: "/servicios",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Highlights strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-4">Nuestras soluciones</span>
            <h2 className="section-title mb-4">Tecnología que transforma el Estado colombiano</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Desde ERP modernos hasta Inteligencia Artificial aplicada a la gestión pública.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map((h, i) => (
              <Link key={i} href={h.href} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.img} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{h.icon}</span>
                  </div>
                </div>
                <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#003087] transition-colors">{h.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/servicios" className="btn-primary">Ver todos los servicios →</Link>
          </div>
        </div>
      </section>

      {/* Chaparral banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80)"}} />
        <div className="absolute inset-0 bg-[#003087]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm font-medium mb-6">✅ Caso validado — Mayo 2026</span>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">IA en producción. Resultados reales.</h2>
          <p className="text-white/70 text-lg mb-10">Piloto SRI GovTech — Chaparral, Tolima</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {[["900","Artículos vectorizados"],["100","Brechas detectadas"],["$480M","COP recuperación"],["414%","ROI fiscalización"]].map(([v,l],i)=>(
              <div key={i} className="bg-white rounded-2xl p-6 text-center">
                <div className={`text-4xl font-extrabold mb-1 ${i===2?"text-[#00A86B]":i===3?"text-[#F59E0B]":i===1?"text-[#E8401C]":"text-[#003087]"}`}>{v}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
          <Link href="/experiencia" className="btn-accent">Ver caso completo →</Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">¿Listo para transformar tu entidad?</h2>
          <p className="text-gray-500 text-lg mb-8">Consulta gratuita de 30 minutos con nuestro equipo de expertos.</p>
          <Link href="/contacto" className="btn-primary text-base py-4 px-10">Habla con un experto →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
