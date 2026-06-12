const differentiators = [
  {
    number: "01",
    title: "Expertos en procesos, no atados a una marca",
    body: "17 años de experiencia SAP nos dieron dominio profundo de los procesos de gestión pública. Eso nos habilita para implementar Odoo, SAP u otros ERPs con el mismo nivel de expertise. Somos agnósticos de plataforma, fieles al proceso.",
    icon: "🏛️",
  },
  {
    number: "02",
    title: "IA que ya opera, no que se promete",
    body: "Piloto validado en Chaparral con resultados medibles. Sistema de facturación electrónica procesando 681 documentos con 100% de éxito. GRP Odoo operativo en Google Cloud. Producción, no laboratorio.",
    icon: "🤖",
  },
  {
    number: "03",
    title: "Conocemos el Estado colombiano por dentro",
    body: "17 años en Gobernaciones, Alcaldías, EMCALI, ISS. Sabemos cómo funciona el Estado porque trabajamos en él, no solo para él. Entendemos los procesos MIPG, MECI, SIIF y los marcos normativos que los rodean.",
    icon: "🇨🇴",
  },
  {
    number: "04",
    title: "Equipo con 27 años promedio de experiencia",
    body: "No juniors aprendiendo en tus proyectos. Seniors con trayectoria comprobada en las iniciativas más complejas de Colombia. Magísteres en gobierno, doctorantes en ciencia de datos, expertos en tributación territorial.",
    icon: "👥",
  },
  {
    number: "05",
    title: "Escala desde el municipio más pequeño",
    body: "GRP Odoo desde USD 200/mes. SRI GovTech accesible para municipios categoría 4-6. Tecnología de clase mundial a precio colombiano. El tamaño de tu entidad no es una barrera.",
    icon: "📈",
  },
  {
    number: "06",
    title: "La experiencia SAP, la agilidad de Odoo, la inteligencia de la IA",
    body: "Tres capacidades únicas combinadas: credenciales SAP S/4HANA que respaldan nuestra expertise en procesos, Odoo como plataforma moderna y asequible, e IA Generativa que multiplica el valor de ambas.",
    icon: "⚡",
  },
];

export default function WhyConsisa() {
  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">¿Por qué CONSISA?</span>
          <h2 className="section-title mb-4">Lo que nos hace diferentes</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            No somos una firma de tecnología más. Somos el puente entre la norma y el ciudadano.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-consisa-blue group"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{d.icon}</span>
                <span className="text-6xl font-black text-gray-100 group-hover:text-blue-50 transition-colors leading-none">
                  {d.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-consisa-dark mb-3 group-hover:text-consisa-blue transition-colors">
                {d.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-consisa-blue rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-consisa-red/10" />
          <div className="relative z-10">
            <div className="text-5xl mb-6">💬</div>
            <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto mb-8 italic">
              "En CONSISA no implementamos software. Conectamos al Estado con sus ciudadanos a
              través de tecnología de clase mundial y experiencia que solo se gana trabajando en
              las trincheras del sector público colombiano durante 17 años."
            </blockquote>
            <div className="text-white/70 font-medium">
              — Hernando Ferney Marín Rodríguez, CEO & Business Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
