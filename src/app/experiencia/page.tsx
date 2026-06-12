import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const clients = [
  { name: "Gobernación del Valle del Cauca", desc: "Múltiples contratos 2008–2024. Implementación SAP financiero y presupuestal.", icon: "🏛️", color: "border-[#003087]" },
  { name: "Municipio de Santiago de Cali", desc: "SAP PS, BPM Catastro-Predial. Proyecto World Bank-IFC/DIAN.", icon: "🏙️", color: "border-[#E8401C]" },
  { name: "EMCALI", desc: "Contratos 0557-2013 y 0376-2014. Gestión financiera y presupuestal.", icon: "⚡", color: "border-[#00A86B]" },
  { name: "Gobernación de Cundinamarca", desc: "Implementación SAP sector público. Gestión presupuestal y financiera.", icon: "🏔️", color: "border-[#003087]" },
  { name: "ISS / Colpensiones", desc: "Consultoría SAP para el sistema pensional colombiano.", icon: "👴", color: "border-[#F59E0B]" },
  { name: "ANTV", desc: "Autoridad Nacional de Televisión. Implementación ERP.", icon: "📺", color: "border-purple-500" },
  { name: "World Bank — IFC / DIAN", desc: "Proyecto de modernización tributaria. Catastro predial Cali.", icon: "🌐", color: "border-[#003087]" },
  { name: "IMPRETIC EICE", desc: "Empresa de Recursos Tecnológicos Valle del Cauca.", icon: "💻", color: "border-[#E8401C]" },
];

const aiProjects = [
  {
    title: "SRI GovTech — Chaparral, Tolima",
    date: "Mayo 2026",
    desc: "Motor RAG con Claude API + Vertex AI embeddings + pgvector. Vectorización completa del estatuto tributario municipal (275 páginas).",
    kpis: [["900","Artículos vectorizados"],["100","Brechas detectadas"],["$480M","COP recuperación"],["414%","ROI ICA"]],
    tags: ["Claude API","Vertex AI","pgvector","Google Cloud"],
    color: "border-[#00A86B]",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Sistema Facturación Electrónica",
    date: "Abril 2026",
    desc: "Pipeline Python automático. Gmail API + DIAN UBL 2.1 → Excel libro de compras. Procesamiento diario automatizado.",
    kpis: [["681","Documentos procesados"],["100%","Tasa de éxito"],["Diario","Procesamiento"],["0","Errores manuales"]],
    tags: ["Python","Gmail API","DIAN UBL 2.1","Automatización"],
    color: "border-[#003087]",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "GRP Odoo — Google Cloud",
    date: "2026",
    desc: "Módulo consisa_budget_co en producción. VM e2-standard-2 · Cloud SQL PostgreSQL 15 · IP estática. Ya operativo para entidades territoriales.",
    kpis: [["Odoo 17","Plataforma"],["GCP","Infraestructura"],["USD 200","Desde /mes"],["1.100+","Municipios objetivo"]],
    tags: ["Odoo 17","Google Cloud","PostgreSQL 15","Cloud SQL"],
    color: "border-[#E8401C]",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
];

export default function ExperienciaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="📋 Casos de Éxito"
        title="17 años de proyectos"
        titleAccent="reales en Colombia"
        subtitle="Hemos trabajado con las entidades más importantes del sector público colombiano. Nuestra credencial no es un certificado — son los resultados medibles en cada proyecto."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
        imageAlt="Edificio institucional Colombia"
      />

      {/* Proyectos IA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">IA en Producción 2026</span>
            <h2 className="section-title mb-4">Proyectos con resultados medibles</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">No prometemos IA. La desplegamos y medimos sus resultados.</p>
          </div>
          <div className="space-y-16">
            {aiProjects.map((p, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{p.date}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] mb-4">{p.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {p.kpis.map(([v,l],ki) => (
                      <div key={ki} className={`bg-gray-50 rounded-xl p-4 border-l-4 ${p.color}`}>
                        <div className="text-2xl font-extrabold text-[#003087]">{v}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`relative rounded-2xl overflow-hidden shadow-xl h-80 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">Clientes</span>
            <h2 className="section-title mb-4">Confianza construida en 17 años</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Entidades que han confiado en CONSISA para sus proyectos de transformación digital.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((c, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border-t-4 ${c.color} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <span className="text-3xl mb-4 block">{c.icon}</span>
                <h3 className="font-bold text-[#1A1A2E] mb-2 text-sm">{c.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#003087]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Tu entidad podría ser el próximo caso de éxito?</h2>
          <p className="text-white/70 text-lg mb-8">Agenda una consulta gratuita y evaluamos tu situación sin compromiso.</p>
          <Link href="/contacto" className="btn-accent">Hablar con un experto →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
