import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

const productos = [
  { icon: "📊", name: "GRP Odoo", desc: "Cadena de valor del gasto y del ingreso para entidades públicas.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { icon: "🏗️", name: "MFIP", desc: "Modelo financiero para estructurar proyectos complejos.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
  { icon: "⚖️", name: "SRI GovTech", desc: "IA normativa sobre estatutos tributarios territoriales.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Antes y después */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">Nuestra evolución</span>
            <h2 className="section-title mb-4">La experiencia SAP, ahora con Odoo e IA</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              El conocimiento de los procesos públicos no se perdió: es la base de nuestros productos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded-full mb-5">2008 – 2023</span>
              <h3 className="text-2xl font-black text-[#1A1A2E] mb-3">Era SAP</h3>
              <p className="text-gray-600 leading-relaxed">Consultoría de procesos para Gobernaciones, Alcaldías y empresas de servicios públicos.</p>
            </div>
            <div className="bg-[#003087] rounded-3xl p-10 text-white">
              <span className="inline-block bg-[#E8401C] text-white text-xs font-bold px-4 py-2 rounded-full mb-5">2024 – HOY</span>
              <h3 className="text-2xl font-black mb-3">Odoo + Agencia IA</h3>
              <p className="text-white/85 leading-relaxed">Productos propios, IA Generativa y operación de procesos como BPO Operador.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/nosotros" className="btn-secondary">Ver nuestra evolución →</Link>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">Agencia IA</span>
            <h2 className="section-title mb-4">Productos que construimos para Colombia</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              GRP Odoo, MFIP, AHP Decision Maker, FacturAP, SRI GovTech y GTTP: soluciones propias para el sector público.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {productos.map((p) => (
              <Link key={p.name} href="/productos" className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-4xl">{p.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#003087] transition-colors">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/productos" className="btn-primary">Ver los 6 productos →</Link>
          </div>
        </div>
      </section>

      {/* Piloto */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80)" }} />
        <div className="absolute inset-0 bg-[#003087]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm font-medium mb-6">✅ Caso validado</span>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">IA en producción. Resultados reales.</h2>
          <p className="text-white/70 text-lg mb-12">Piloto SRI GovTech — Entidad territorial piloto</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[["900","Artículos vectorizados"],["100","Brechas detectadas"],["275","Páginas de estatuto"],["Claude","IA normativa con Claude API"]].map(([v, l], i) => (
              <div key={i} className="bg-white rounded-2xl p-7 text-center">
                <div className={`text-4xl font-extrabold mb-2 ${i === 2 ? "text-[#00A86B]" : i === 3 ? "text-[#F59E0B]" : i === 1 ? "text-[#E8401C]" : "text-[#003087]"}`}>{v}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
          <Link href="/experiencia" className="btn-accent">Ver experiencia →</Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-6">¿Listo para transformar tu entidad?</h2>
          <p className="text-gray-500 text-lg mb-10">Consulta gratuita de 30 minutos con nuestro equipo de expertos.</p>
          <Link href="/contacto" className="btn-primary text-base py-4 px-10">Habla con un experto →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
