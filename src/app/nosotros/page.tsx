import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const differentiators = [
  { icon: "🏛️", title: "Expertos en procesos, no atados a una marca", body: "17 años de experiencia SAP nos dieron dominio profundo de los procesos de gestión pública. Eso nos habilita para implementar Odoo, SAP u otros ERPs con el mismo nivel de expertise. Somos agnósticos de plataforma, fieles al proceso." },
  { icon: "🤖", title: "IA que ya opera, no que se promete", body: "Piloto validado en entidad territorial con resultados medibles. Sistema de facturación electrónica procesando 681 documentos con 100% de éxito. GRP Odoo operativo en Google Cloud. Producción, no laboratorio." },
  { icon: "🇨🇴", title: "Conocemos el Estado colombiano por dentro", body: "17 años en Gobernaciones, Alcaldías, EMCALI, ISS. Sabemos cómo funciona el Estado porque trabajamos en él, no solo para él. Entendemos MIPG, MECI, SIIF y los marcos normativos que los rodean." },
  { icon: "👥", title: "Equipo con 27 años promedio de experiencia", body: "No juniors aprendiendo en tus proyectos. Seniors con trayectoria comprobada en las iniciativas más complejas de Colombia. Magísteres en gobierno, doctorantes en ciencia de datos, expertos en tributación." },
  { icon: "📈", title: "Escala desde el municipio más pequeño", body: "GRP Odoo desde USD 200/mes. SRI GovTech accesible para municipios categoría 4-6. Tecnología de clase mundial a precio colombiano. El tamaño de tu entidad no es una barrera." },
  { icon: "⚡", title: "La experiencia SAP, la agilidad de Odoo, la inteligencia de la IA", body: "Tres capacidades únicas combinadas: más de 17 años de expertise SAP en procesos, Odoo como plataforma moderna y asequible, e IA Generativa que multiplica el valor de ambas." },
];

const timeline = [
  { year: "2008", event: "Fundación de CONSISA en Cali, Valle del Cauca" },
  { year: "2010", event: "Primera implementación SAP en Gobernación del Valle del Cauca" },
  { year: "2013", event: "Contratos EMCALI — gestión financiera y presupuestal" },
  { year: "2016", event: "Proyecto World Bank-IFC/DIAN — Municipio de Santiago de Cali" },
  { year: "2020", event: "Expansión a consultoría estratégica de gobierno y políticas públicas" },
  { year: "2024", event: "Pivote estratégico: Odoo + IA como plataforma principal" },
  { year: "2026", event: "Piloto SRI GovTech validado en entidad territorial. $480M COP recuperados." },
];

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="🇨🇴 Quiénes Somos"
        title="17 años transformando"
        titleAccent="el Estado colombiano"
        subtitle="Somos una firma de consultoría empresarial con ADN colombiano, especializada en la transformación digital del sector público y privado. Expertos SAP con más de 17 años de experiencia, líderes en Odoo e Inteligencia Artificial Generativa."
        image="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=1400&q=80"
        imageAlt="Cali Colombia ciudad"
      />

      {/* Misión / Visión */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
            <div>
              <span className="badge mb-6">Nuestra esencia</span>
              <h2 className="section-title mb-8">El proceso primero.<br />La tecnología después.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                En CONSISA no vendemos software. Conectamos al Estado con sus ciudadanos a través de tecnología de clase mundial y experiencia que solo se gana trabajando en las trincheras del sector público colombiano durante 17 años.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Hoy nuestro enfoque estratégico es <strong className="text-[#003087]">Odoo + IA</strong>: Odoo como ERP moderno, flexible y asequible, potenciado con Inteligencia Artificial Generativa para crear soluciones que antes solo estaban al alcance de grandes organizaciones.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Odoo Partner","Expertos SAP +17 años","Anthropic — Claude API","Google Cloud"].map(p => (
                  <span key={p} className="bg-blue-50 text-[#003087] text-sm font-semibold px-4 py-2 rounded-full">{p}</span>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Equipo de trabajo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/30 to-transparent" />
            </div>
          </div>

          {/* Diferenciadores */}
          <div className="text-center mb-16">
            <span className="badge mb-4">¿Por qué CONSISA?</span>
            <h2 className="section-title">Lo que nos hace diferentes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-10 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <span className="text-4xl mb-6 block">{d.icon}</span>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 group-hover:text-[#003087] transition-colors">{d.title}</h3>
                <p className="text-gray-500 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>

          {/* Timeline — FIXED */}
          <div className="text-center mb-16">
            <span className="badge mb-4">Nuestra historia</span>
            <h2 className="section-title">17 años de trayectoria</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 mb-8 items-start">
                {/* Year column — fixed width */}
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-[#E8401C] font-black text-xl">{t.year}</span>
                </div>
                {/* Connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#003087] mt-1.5 flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-1 min-h-[32px]" />}
                </div>
                {/* Content */}
                <div className="bg-white rounded-xl px-6 py-4 border border-gray-100 shadow-sm hover:border-[#003087] transition-colors flex-1 mb-1">
                  <p className="text-gray-700 font-medium leading-relaxed">{t.event}</p>
                </div>
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
            "En CONSISA no implementamos software. Conectamos al Estado con sus ciudadanos a través de tecnología de clase mundial y experiencia que solo se gana trabajando en las trincheras del sector público colombiano durante 17 años."
          </blockquote>
          <p className="text-white/60 text-lg">— Hernando Ferney Marín Rodríguez, CEO & Business Developer</p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
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
