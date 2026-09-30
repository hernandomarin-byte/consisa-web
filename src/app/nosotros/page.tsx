import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const eraSap = [
  "Implementaciones SAP para Gobernaciones, Alcaldías y empresas de servicios públicos",
  "Dominio profundo de los procesos de gestión pública: presupuesto, tesorería, contabilidad, catastro",
  "Proyectos con Gobernación del Valle, Municipio de Cali, EMCALI, ISS/Colpensiones, ANTV y el proyecto World Bank-IFC/DIAN",
  "Consultoría en MIPG, MECI y sistemas de gestión del sector público",
];

const eraIA = [
  "Odoo 17 como plataforma ERP moderna, flexible y asequible",
  "Creación de la unidad Agencia IA: productos propios en lugar de proyectos a la medida",
  "GRP Odoo, MFIP, plataforma AHP, FacturAP, SRI GovTech y GTTP",
  "Modelo BPO Operador de 10 módulos para proyectos complejos",
  "IA Generativa con Claude API y Vertex AI aplicada a normativa, facturación y decisiones",
];

const productos = [
  { name: "GRP Odoo", desc: "Cadena de valor del gasto y del ingreso" },
  { name: "MFIP", desc: "Modelo financiero para estructurar proyectos" },
  { name: "AHP", desc: "Decisiones multicriterio" },
  { name: "FacturAP", desc: "Facturación electrónica DIAN" },
  { name: "SRI GovTech", desc: "IA normativa" },
  { name: "GTTP", desc: "Gestor tributario territorial" },
];

const differentiators = [
  { icon: "🏛️", title: "El proceso primero, la tecnología después", body: "Más de 17 años de experiencia SAP nos dieron dominio de los procesos de gestión pública. Ese conocimiento es lo que hoy ponemos dentro de Odoo y de nuestros productos de IA." },
  { icon: "🤖", title: "IA que ya opera, no que se promete", body: "Piloto validado en una entidad territorial, facturación electrónica procesando 681 documentos con 100% de éxito y GRP Odoo operativo en Google Cloud." },
  { icon: "🇨🇴", title: "Conocemos el Estado colombiano por dentro", body: "Gobernaciones, Alcaldías, EMCALI, ISS. Entendemos MIPG, MECI, SIIF y los marcos normativos que los rodean." },
  { icon: "👥", title: "Equipo senior", body: "Promedio de 27 años de experiencia. Magísteres en gobierno, doctorandos en ciencia de datos y expertos en tributación territorial." },
  { icon: "📈", title: "Escala desde el municipio más pequeño", body: "GRP Odoo desde USD 200/mes. Tecnología de clase mundial a precio colombiano para entidades de cualquier categoría." },
  { icon: "⚡", title: "Operador BPO, no revendedor", body: "No vendemos licencias: operamos los procesos con una metodología propia de 10 módulos integrados." },
];

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="🇨🇴 Quiénes Somos"
        title="De la experiencia SAP"
        titleAccent="a Odoo e Inteligencia Artificial"
        subtitle="Desde 2008 transformamos el Estado colombiano. Desde 2024 lo hacemos con Odoo, IA Generativa y productos propios creados por nuestra Agencia IA."
        image="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=1400&q=80"
        imageAlt="Cali Colombia ciudad"
      />

      {/* ANTES / DESPUÉS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">Nuestra evolución</span>
            <h2 className="section-title mb-4">Un antes y un después</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              La experiencia acumulada en procesos públicos no se perdió: se convirtió en la base de una nueva etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
            {/* ANTES */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded-full mb-6">ANTES · 2008 – 2023</span>
              <h3 className="text-2xl lg:text-3xl font-black text-[#1A1A2E] mb-2">La era SAP</h3>
              <p className="text-gray-500 mb-8">Consultoría de procesos sobre ERP corporativo</p>
              <ul className="space-y-4">
                {eraSap.map((t, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                    <span className="text-gray-400 font-bold mt-0.5">›</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PIVOTE */}
            <div className="flex lg:flex-col items-center justify-center gap-3 py-4">
              <div className="hidden lg:block w-0.5 flex-1 bg-gray-200" />
              <div className="w-24 h-24 rounded-full bg-[#E8401C] text-white flex flex-col items-center justify-center shadow-xl">
                <span className="text-2xl font-black leading-none">2024</span>
                <span className="text-[10px] uppercase tracking-wider mt-1">El giro</span>
              </div>
              <div className="hidden lg:block w-0.5 flex-1 bg-gray-200" />
            </div>

            {/* DESPUÉS */}
            <div className="bg-[#003087] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#E8401C]/20" />
              <div className="relative z-10">
                <span className="inline-block bg-[#E8401C] text-white text-xs font-bold px-4 py-2 rounded-full mb-6">DESPUÉS · 2024 – HOY</span>
                <h3 className="text-2xl lg:text-3xl font-black mb-2">Odoo + Agencia IA</h3>
                <p className="text-white/70 mb-8">Productos propios y operación de procesos</p>
                <ul className="space-y-4">
                  {eraIA.map((t, i) => (
                    <li key={i} className="flex gap-3 text-white/90 leading-relaxed">
                      <span className="text-[#E8401C] font-bold mt-0.5">›</span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Productos nacidos tras el giro */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productos.map((p) => (
              <Link key={p.name} href="/productos" className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:border-[#003087] hover:shadow-lg transition-all">
                <p className="font-black text-[#003087] mb-1">{p.name}</p>
                <p className="text-gray-500 text-xs leading-snug">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/productos" className="btn-primary">Ver todos los productos →</Link>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">¿Por qué CONSISA?</span>
            <h2 className="section-title">Lo que nos hace diferentes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#003087] group">
                <span className="text-4xl mb-6 block">{d.icon}</span>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 group-hover:text-[#003087] transition-colors">{d.title}</h3>
                <p className="text-gray-500 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80)"}} />
        <div className="absolute inset-0 bg-[#003087]/92" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-8">💬</div>
          <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-8 italic">
            "En CONSISA no implementamos software. Conectamos al Estado con sus ciudadanos a través de tecnología de clase mundial y experiencia que solo se gana trabajando en las trincheras del sector público colombiano."
          </blockquote>
          <p className="text-white/60 text-lg">— Hernando Ferney Marín Rodríguez, CEO & Socio Fundador</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Conoce a nuestro equipo</h2>
          <p className="text-gray-500 text-lg mb-10">Promedio de 27 años de experiencia en el sector público colombiano.</p>
          <Link href="/equipo" className="btn-primary">Ver equipo →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
