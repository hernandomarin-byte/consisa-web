import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const sapTimeline = [
  { year: "2008–2009", entity: "Gobernación de Cundinamarca", desc: "Soporte funcional especializado para el cierre de vigencia 2008 y la apertura de 2009 en el sistema SAP." },
  { year: "2009–2010", entity: "Instituto de Seguros Sociales — ISS", desc: "Consultoría para la sostenibilidad del conocimiento funcional y misional de los aplicativos, en la transición hacia Colpensiones." },
  { year: "2010", entity: "Gobernación de Cundinamarca — PNUD", desc: "Actualización de procesos y plan de gestión del cambio para la estabilización y sostenibilidad del sistema SAP." },
  { year: "2010–2011", entity: "Gobernación del Valle del Cauca", desc: "Banco de proyectos y gestión de proyectos con SAP Project System (PS): gestión del cambio, ajuste de procesos y soporte pos-productivo." },
  { year: "2012", entity: "Autoridad Nacional de Televisión — ANTV", desc: "Acompañamiento y asesoría financiera, presupuestal y económica en la elaboración del Estatuto Presupuestal." },
  { year: "2013–2014", entity: "EMCALI", desc: "Consultoría funcional SAP en rentas (PSCD) y core financiero." },
  { year: "2015", entity: "Alcaldía de Santiago de Cali — Banco Mundial (IFC)", desc: "Simplificación de trámites tributarios y automatización de procesos de Catastro e Impuesto Predial." },
  { year: "2016", entity: "Gobernación del Valle del Cauca", desc: "Actualización de New GL en SAP y mejora del banco de proyectos de inversión en los módulos PS y PPM." },
  { year: "2016–2017", entity: "Empresa de Recursos Tecnológicos — ERT, Cali", desc: "Consultoría de implementación y soporte de soluciones SAP." },
  { year: "2018–2019", entity: "Gobernación del Valle — Gestión de deudores", desc: "Análisis, implementación y ajuste de la solución SAP para identificar y controlar los deudores por cada concepto de las rentas departamentales." },
  { year: "2020–2023", entity: "IMPRETIC EICE — Gobernación del Valle", desc: "Mantenimiento evolutivo, soporte y sostenibilidad de herramientas de información financiera, y actualización del sistema para el Plan de Desarrollo “Valle Invencible”." },
  { year: "2020–2023", entity: "Alcaldía de Santiago de Cali — Hacienda", desc: "Adopción del catálogo presupuestal CCPET, servicios profesionales especializados en SAP y ajustes al módulo de gestión tributaria." },
  { year: "2022", entity: "INFOTIC S.A.", desc: "Servicios especializados de consultoría y soporte." },
  { year: "2023", entity: "Red SUMMA — proyecto Gobernación del Valle", desc: "Optimización del RUT y contactabilidad en la transformación digital tributaria." },
];

const aiProjects = [
  {
    title: "SRI GovTech — Entidad territorial piloto",
    date: "Mayo 2026",
    status: "Piloto validado",
    desc: "Motor RAG con Claude API, embeddings de Vertex AI y pgvector. Vectorización completa del estatuto tributario municipal (275 páginas) para consulta normativa y detección de brechas.",
    kpis: [["900", "Artículos vectorizados"], ["100", "Brechas detectadas"], ["275", "Páginas de estatuto"], ["Piloto", "Entidad territorial"]],
    tags: ["Claude API", "Vertex AI", "pgvector", "Google Cloud"],
    color: "border-[#00A86B]",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "FacturAP — Automatización de facturación electrónica",
    date: "Abril 2026",
    status: "Validado con histórico real",
    desc: "Pipeline en Python que descarga los adjuntos de facturación electrónica desde Gmail, lee los XML DIAN UBL 2.1 y genera el libro de compras en Excel. Procesó el histórico completo de la cuenta sin errores.",
    kpis: [["681", "Documentos del histórico"], ["0", "Documentos con error"], ["3", "Tipos: factura, NC, ND"], ["UBL 2.1", "Estándar DIAN"]],
    tags: ["Python", "Gmail API", "DIAN UBL 2.1", "Excel"],
    color: "border-[#003087]",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "GRP Odoo — Google Cloud",
    date: "2026",
    status: "MVP operativo",
    desc: "Módulo consisa_budget_co sobre Odoo 17 desplegado en Google Cloud. Cubre el ciclo presupuestal Apropiación → CDP → RP → PAC → Pago con integración contable y validaciones normativas (Decreto 111/1996, Ley 80/1993).",
    kpis: [["Odoo 17", "Plataforma"], ["GCP", "Infraestructura"], ["CDP→Pago", "Ciclo presupuestal"], ["1.100+", "Municipios objetivo"]],
    tags: ["Odoo 17", "Google Cloud", "PostgreSQL 15", "Cloud SQL"],
    color: "border-[#E8401C]",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
];

export default function ExperienciaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="📋 Experiencia"
        title="Dos eras,"
        titleAccent="una misma misión pública"
        subtitle="Desde 2008 modernizamos la gestión pública colombiana con SAP. Desde 2024 lo hacemos también con Odoo e Inteligencia Artificial, a través de nuestra Agencia IA."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
        imageAlt="Edificio institucional Colombia"
      />

      {/* Puente entre eras */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="#era-sap" className="block bg-white rounded-2xl p-8 border-t-4 border-[#003087] shadow-sm hover:shadow-lg transition">
            <div className="text-sm font-bold tracking-widest text-gray-400 mb-2">ANTES · 2008–2023</div>
            <h2 className="text-2xl font-bold text-[#003087] mb-3">La era SAP</h2>
            <p className="text-gray-600 leading-relaxed">Implementación y soporte de SAP en gobernaciones, alcaldías y entidades nacionales.</p>
          </a>
          <a href="#era-ia" className="block bg-white rounded-2xl p-8 border-t-4 border-[#E8401C] shadow-sm hover:shadow-lg transition">
            <div className="text-sm font-bold tracking-widest text-gray-400 mb-2">DESPUÉS · 2024–HOY</div>
            <h2 className="text-2xl font-bold text-[#E8401C] mb-3">Odoo + Agencia IA</h2>
            <p className="text-gray-600 leading-relaxed">Productos propios sobre Odoo, Google Cloud y Claude para el sector público.</p>
          </a>
        </div>
      </section>

      {/* Era SAP */}
      <section id="era-sap" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">2008 – 2023</span>
            <h2 className="section-title mb-4">La era SAP: 15 años de proyectos reales</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Una credencial construida contrato a contrato con entidades públicas colombianas.</p>
          </div>
          <ol className="space-y-8">
            {sapTimeline.map((t, i) => (
              <li key={i} className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-4 md:gap-10 bg-gray-50 rounded-2xl p-6 md:p-8 border-l-4 border-[#003087]">
                <div className="text-xl font-extrabold text-[#003087] leading-tight">{t.year}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{t.entity}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Era IA */}
      <section id="era-ia" className="py-24 bg-[#F8FAFC] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">2024 – HOY</span>
            <h2 className="section-title mb-4">La era Agencia IA: productos propios</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">No prometemos IA. La construimos, la probamos con datos reales y medimos sus resultados.</p>
          </div>
          <div className="space-y-20">
            {aiProjects.map((p, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{p.date}</span>
                    <span className="text-xs font-semibold bg-green-50 text-green-700 rounded-full px-3 py-1">{p.status}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] mb-4">{p.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {p.kpis.map(([v, l], ki) => (
                      <div key={ki} className={`bg-white rounded-xl p-4 border-l-4 ${p.color}`}>
                        <div className="text-2xl font-extrabold text-[#003087]">{v}</div>
                        <div className="text-sm text-gray-500">{l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div
                    className="h-80 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${p.img})` }}
                    role="img"
                    aria-label={p.title}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/productos" className="btn-primary">Ver todos los productos</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#003087]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">¿Modernizamos tu entidad?</h2>
          <p className="text-white/80 text-lg mb-10">Cuéntanos tu reto: del ERP a la Inteligencia Artificial, te acompañamos.</p>
          <Link href="/contacto" className="btn-accent">Hablemos</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
