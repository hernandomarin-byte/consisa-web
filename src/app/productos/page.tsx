import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const agenciaIA = [
  {
    icon: "📊",
    name: "GRP Odoo",
    tagline: "Cadena de Valor del Gasto y del Ingreso",
    desc: "Módulo Odoo para la gestión presupuestal pública colombiana. Cubre la cadena completa: planeación, apropiación, compromiso, obligación y pago. Cumple el Decreto 111/1996. Multi-tenant en Google Cloud.",
    status: "🟢 En producción",
    statusColor: "bg-green-50 text-green-700",
    tags: ["Odoo 17", "Google Cloud", "Decreto 111/1996", "SaaS"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "/servicios",
  },
  {
    icon: "🏗️",
    name: "MFIP",
    tagline: "Motor Financiero Integrado de Proyectos",
    desc: "Plataforma para la estructuración financiera de proyectos complejos. Cinco primitivas configurables: ingresos, CapEx, costos, nómina y financiamiento. Modela cualquier tipo de proyecto: estadios, hospitales, hoteles, vías.",
    status: "🟢 Sprint 1 completo",
    statusColor: "bg-green-50 text-green-700",
    tags: ["Next.js 15", "Python FastAPI", "Supabase", "Railway"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    href: "/servicios",
  },
  {
    icon: "⚖️",
    name: "AHP Platform",
    tagline: "Proceso Analítico Jerárquico",
    desc: "Plataforma para decisiones multicriterio con el método AHP de Saaty. Matrices de comparación pareada, pesos por autovector, Razón de Consistencia (CR) y síntesis multinivel. Para priorización de proyectos, contratación y evaluación de alternativas.",
    status: "🟡 En desarrollo",
    statusColor: "bg-yellow-50 text-yellow-700",
    tags: ["AHP", "Saaty", "Decisiones", "Multicriterio"],
    img: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&q=80",
    href: "/contacto",
  },
  {
    icon: "🧾",
    name: "FacturAP",
    tagline: "Facturación Electrónica DIAN",
    desc: "Automatización completa del ciclo de facturación electrónica bajo el estándar DIAN UBL 2.1. Pipeline Python que procesa emails con adjuntos XML, valida ante la DIAN y genera el libro de compras en Excel. 681 documentos procesados con 100% de éxito.",
    status: "🟢 En producción",
    statusColor: "bg-green-50 text-green-700",
    tags: ["DIAN UBL 2.1", "Python", "Gmail API", "Automatización"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    href: "/contacto",
  },
  {
    icon: "⚖️",
    name: "SRI GovTech",
    tagline: "IA Normativa para el Estado",
    desc: "Motor RAG sobre estatutos tributarios municipales. Vectoriza la normativa local, detecta automáticamente brechas frente a la ley nacional y genera alertas de recuperación de cartera. Asistente jurídico 24/7 con Claude API.",
    status: "🟢 Piloto validado",
    statusColor: "bg-green-50 text-green-700",
    tags: ["Claude API", "Vertex AI", "pgvector", "RAG"],
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    href: "/experiencia",
  },
  {
    icon: "🗺️",
    name: "GTTP",
    tagline: "Gestor Tributario Territorial Público",
    desc: "Centraliza las obligaciones fiscales de entidades ante los 1.100+ municipios de Colombia. Alertas automáticas de ICA, ReteICA, Predial y Estampillas. Declaraciones y pagos en un solo lugar.",
    status: "🟡 En desarrollo",
    statusColor: "bg-yellow-50 text-yellow-700",
    tags: ["Python/FastAPI", "React", "SIGEP", "SIIF"],
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    href: "/contacto",
  },
];

export default function ProductosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="🤖 Agencia IA — Productos Propios"
        title="Tecnología que construimos"
        titleAccent="para Colombia"
        subtitle="Desde 2024 CONSISA desarrolla productos de software propios para el sector público colombiano. No revendemos licencias — construimos soluciones."
        image="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80"
        imageAlt="Inteligencia Artificial y tecnología"
      />

      {/* Intro Agencia IA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="badge mb-6">Unidad de Negocio</span>
              <h2 className="section-title mb-6">Agencia IA CONSISA</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                En 2024 CONSISA creó su unidad de Inteligencia Artificial — un equipo dedicado al desarrollo de productos de software propios que resuelven problemas reales del sector público colombiano.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nuestro stack: <strong className="text-[#003087]">Odoo 17</strong> como plataforma ERP,{" "}
                <strong className="text-[#003087]">Claude API</strong> para IA Generativa,{" "}
                <strong className="text-[#003087]">Google Cloud / Vertex AI</strong> para embeddings y cómputo, y{" "}
                <strong className="text-[#003087]">Python FastAPI + Next.js</strong> para productos web.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Claude API","Odoo 17","Google Cloud","Vertex AI","Python FastAPI","Next.js 15"].map(t => (
                  <span key={t} className="bg-blue-50 text-[#003087] text-sm font-semibold px-4 py-2 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" alt="Agencia IA CONSISA" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3">
                <p className="text-[#003087] font-black text-2xl">6+</p>
                <p className="text-gray-600 text-xs uppercase tracking-wider">Productos en desarrollo</p>
              </div>
            </div>
          </div>

          {/* Productos grid */}
          <div className="text-center mb-16">
            <span className="badge mb-4">Portafolio de Productos</span>
            <h2 className="section-title mb-4">Nuestros productos propios</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Cada producto nació de un problema real identificado en proyectos con clientes del sector público colombiano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agenciaIA.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{p.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${p.statusColor}`}>{p.status}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-[#1A1A2E] mb-1">{p.name}</h3>
                  <p className="text-[#003087] font-semibold text-sm mb-4">{p.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <Link href={p.href} className="text-[#003087] font-semibold text-sm hover:text-[#E8401C] transition-colors">
                    Conocer más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#003087]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">¿Necesitas un producto a la medida?</h2>
          <p className="text-white/70 text-lg mb-10">Desarrollamos soluciones de software específicas para el sector público colombiano. Cuéntanos tu problema.</p>
          <Link href="/contacto" className="btn-accent">Hablar con nuestro equipo →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
