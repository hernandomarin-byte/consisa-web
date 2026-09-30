import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const consultoria = [
  {
    icon: "🏛️",
    title: "Consultoría ERP — El proceso primero",
    body: "Más de 17 años de experiencia SAP nos dieron dominio profundo de los procesos del sector público. Hoy implementamos Odoo, SAP u otros ERP con el mismo rigor: la tecnología cambia, el conocimiento del proceso es nuestro diferencial.",
    tags: ["Odoo 17", "SAP", "Gestión presupuestal", "Sector público"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    icon: "🏟️",
    title: "BPO Proyectos Complejos",
    body: "Somos Operador BPO, no un outsourcer: operamos los procesos con una metodología propia de 10 módulos integrados para proyectos deportivos, inmobiliarios y de infraestructura.",
    tags: ["ERP", "CRM", "Fiducia", "Control EPC"],
    img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80",
  },
];

const agencia = [
  { icon: "📊", name: "GRP Odoo", desc: "Cadena de valor del gasto y del ingreso para entidades públicas." },
  { icon: "🏗️", name: "MFIP", desc: "Modelo financiero para la estructuración de proyectos." },
  { icon: "⚖️", name: "AHP", desc: "Toma decisiones inteligentes y soportadas con AHP, el Proceso Analítico Jerárquico." },
  { icon: "🧾", name: "FacturAP", desc: "Automatización de facturación electrónica recibida (DIAN UBL 2.1)." },
  { icon: "🔎", name: "SRI GovTech", desc: "IA normativa sobre estatutos tributarios territoriales." },
  { icon: "🗺️", name: "GTTP", desc: "Gestor Tributario Territorial Público." },
  { icon: "🤖", name: "Automatizaciones IA", desc: "Flujos inteligentes con Claude API para procesos del sector público." },
];

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="🇨🇴 Dos líneas de negocio"
        title="Consultoría que opera,"
        titleAccent="productos que escalan"
        subtitle="Combinamos 17 años de experiencia en procesos públicos con la Agencia IA creada en 2024 para construir productos propios."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
        imageAlt="Edificios sector público Colombia"
      />

      {/* Línea 1 */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="badge mb-4">Línea 1</span>
            <h2 className="section-title mb-4">Consultoría y Operación</h2>
            <p className="text-gray-500 text-lg max-w-2xl">Nuestra base histórica, ahora con Odoo y el modelo de Operador BPO.</p>
          </div>
          <div className="space-y-24">
            {consultoria.map((s, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{s.icon}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] leading-snug">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{s.body}</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {s.tags.map(t => <span key={t} className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full">{t}</span>)}
                  </div>
                  <Link href="/contacto" className="btn-primary">Hablar con un experto →</Link>
                </div>
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[400px] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Línea 2 */}
      <section className="py-28 bg-[#003087] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8401C]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block bg-[#E8401C] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">Línea 2 · Desde 2024</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Agencia IA — Productos propios</h2>
            <p className="text-white/70 text-lg max-w-2xl">Software construido por CONSISA sobre Odoo y IA Generativa para el sector público colombiano.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {agencia.map((a) => (
              <div key={a.name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
                <span className="text-4xl block mb-4">{a.icon}</span>
                <h3 className="text-white font-bold text-lg mb-2">{a.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/productos" className="btn-accent">Ver detalle de los productos →</Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-6">¿No sabes cuál necesitas?</h2>
          <p className="text-gray-500 text-lg mb-10">Agenda una consulta gratuita y te orientamos sin compromiso.</p>
          <Link href="/contacto" className="btn-primary">Consulta gratuita →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
