import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const services = [
  {
    icon: "🏛️",
    title: "Consultoría ERP — El proceso primero",
    body: "17 años implementando SAP nos dieron dominio profundo de los procesos del sector público colombiano. Hoy implementamos Odoo, SAP u otros ERPs con el mismo rigor. La tecnología cambia; el conocimiento del proceso es nuestro diferencial.",
    badge: "Expertos SAP · Odoo Implementador",
    badgeColor: "bg-blue-50 text-[#003087]",
    cta: "Hablar con un experto",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["SAP S/4HANA","Odoo 17","Sector Público","Gestión Presupuestal"],
  },
  {
    icon: "📊",
    title: "GRP Odoo — Control Presupuestal SaaS",
    body: "Módulo de gestión presupuestal pública que cumple el Decreto 111/1996. Multi-tenant, en Google Cloud, para los 1.100+ municipios y 32 departamentos de Colombia. Desde USD 200/mes.",
    badge: "🆕 SaaS · Desde USD 200/mes",
    badgeColor: "bg-[#E8401C] text-white",
    cta: "Solicitar demo",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Odoo 17","Google Cloud","Decreto 111/1996","Multi-tenant"],
  },
  {
    icon: "⚖️",
    title: "SRI GovTech — IA Normativa",
    body: "De la norma al sistema. RAG sobre estatutos tributarios, detección automática de brechas normativas y asistente jurídico 24/7 con Claude AI. Piloto validado en Chaparral: $480M COP de recuperación potencial.",
    badge: "✅ Piloto validado 2026",
    badgeColor: "bg-green-50 text-[#00A86B]",
    cta: "Ver resultados",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    tags: ["Claude API","Vertex AI","pgvector","Google Cloud"],
  },
  {
    icon: "🗺️",
    title: "GTTP — Gestor Tributario Territorial",
    body: "Centraliza las obligaciones fiscales de tu entidad ante los 1.100+ municipios de Colombia. Alertas automáticas de ICA, ReteICA, Predial y Estampillas. Declaraciones y pagos en un solo lugar.",
    badge: "En desarrollo",
    badgeColor: "bg-gray-100 text-gray-600",
    cta: "Lista de espera",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    tags: ["Python/FastAPI","React","AWS/GCP","SIGEP·SIIF"],
  },
  {
    icon: "🤖",
    title: "Agencia IA y Automatizaciones",
    body: "Workflows inteligentes con Claude API, automatización documental DIAN UBL 2.1, asistentes IA especializados en sector público. 681 facturas procesadas con 100% de éxito. IA que trabaja, no que promete.",
    badge: "🔥 Nuevo servicio",
    badgeColor: "bg-[#E8401C] text-white",
    cta: "Explorar servicios",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["Claude API","n8n","Make","DIAN UBL 2.1"],
  },
  {
    icon: "🏟️",
    title: "BPO Proyectos Complejos",
    body: "Metodología de 10 módulos integrados para proyectos deportivos, inmobiliarios y de infraestructura. ERP + CRM + Fiducia + Control EPC. Referencia ejecutada: Deportivo Cali.",
    badge: "Proyectos de gran escala",
    badgeColor: "bg-purple-50 text-purple-700",
    cta: "Conocer metodología",
    img: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80",
    tags: ["ERP","CRM","Fiducia","Control EPC"],
  },
];

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="🇨🇴 Portafolio de Servicios"
        title="Soluciones para cada etapa"
        titleAccent="de la transformación"
        subtitle="Desde la consultoría ERP hasta la Inteligencia Artificial aplicada al Estado colombiano. 17 años de expertise en procesos de negocio."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
        imageAlt="Edificios sector público Colombia"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((s, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ${s.badgeColor}`}>{s.badge}</span>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{s.icon}</span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">{s.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{s.body}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <Link href="/contacto" className="btn-primary">{s.cta} →</Link>
                </div>
                <div className={`relative rounded-2xl overflow-hidden shadow-xl h-72 lg:h-96 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#003087]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿No sabes cuál servicio necesitas?</h2>
          <p className="text-white/70 text-lg mb-8">Agenda una consulta gratuita y te orientamos sin compromiso.</p>
          <Link href="/contacto" className="btn-accent">Consulta gratuita →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
