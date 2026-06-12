const clients = [
  "Gobernación del Valle del Cauca",
  "Municipio de Santiago de Cali",
  "EMCALI",
  "Gobernación de Cundinamarca",
  "ISS / Colpensiones",
  "ANTV",
  "World Bank — IFC / DIAN",
  "IMPRETIC EICE",
];

const partners = [
  { name: "SAP Service Partner", icon: "🏆" },
  { name: "RISE with SAP S/4HANA Cloud PE", icon: "☁️" },
  { name: "Google Cloud Partner", icon: "🌐" },
  { name: "Anthropic — Claude API", icon: "🤖" },
];

export default function Clients() {
  return (
    <section id="experiencia" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Clientes y Aliados</span>
          <h2 className="section-title mb-4">
            Confianza construida en 17 años de proyectos reales
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Hemos trabajado con las entidades más importantes del sector público colombiano.
          </p>
        </div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-consisa-blue hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-consisa-blue font-black text-sm">
                  {client.charAt(0)}
                </span>
              </div>
              <p className="text-consisa-dark font-medium text-sm leading-tight">{client}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="bg-white rounded-3xl p-10 border border-gray-100">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-medium mb-8">
            Partnerships Tecnológicos
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <span className="text-3xl">{p.icon}</span>
                <span className="text-consisa-dark font-semibold text-sm text-center">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
