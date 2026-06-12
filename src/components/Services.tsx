const services = [
  {
    icon: "🏛️",
    title: "Consultoría ERP — El proceso primero",
    body: "17 años implementando SAP nos dieron dominio profundo de los procesos del sector público. Hoy implementamos Odoo, SAP u otros ERPs con el mismo rigor. La tecnología cambia; el conocimiento del proceso es nuestro diferencial.",
    badge: "SAP Partner · Odoo Implementador",
    badgeType: "default",
    cta: "Ver casos de éxito →",
    href: "#experiencia",
    color: "border-consisa-blue",
    iconBg: "bg-blue-50",
  },
  {
    icon: "📊",
    title: "GRP Odoo — Control Presupuestal SaaS",
    body: "El módulo de gestión presupuestal pública que cumple el Decreto 111/1996. Multi-tenant, en Google Cloud, disponible para los 1.100+ municipios y 32 departamentos de Colombia.",
    badge: "🆕 SaaS · Desde USD 200/mes",
    badgeType: "new",
    cta: "Solicitar demo →",
    href: "#contacto",
    color: "border-consisa-red",
    iconBg: "bg-red-50",
  },
  {
    icon: "⚖️",
    title: "SRI GovTech — IA Normativa",
    body: "De la norma al sistema. RAG sobre estatutos tributarios, brechas normativas automáticas y asistente jurídico 24/7 con Claude AI. Piloto validado: 900 artículos vectorizados, $480M COP de recuperación potencial.",
    badge: "✅ Piloto validado — Chaparral 2026",
    badgeType: "success",
    cta: "Ver resultados →",
    href: "#chaparral",
    color: "border-consisa-green",
    iconBg: "bg-green-50",
  },
  {
    icon: "🗺️",
    title: "GTTP — Gestor Tributario Territorial",
    body: "Centraliza las obligaciones fiscales de tu entidad ante los 1.100+ municipios de Colombia. Alertas automáticas de ICA, ReteICA, Predial y Estampillas. Declaraciones y pagos en un solo lugar.",
    badge: "En desarrollo",
    badgeType: "default",
    cta: "Lista de espera →",
    href: "#contacto",
    color: "border-gray-200",
    iconBg: "bg-gray-50",
  },
  {
    icon: "🤖",
    title: "Agencia IA y Automatizaciones",
    body: "Workflows inteligentes con Claude API, automatización documental DIAN UBL 2.1, asistentes IA especializados en sector público. 681 facturas procesadas con 100% de éxito. IA que trabaja, no que promete.",
    badge: "🔥 Nuevo servicio",
    badgeType: "new",
    cta: "Explorar servicios →",
    href: "#contacto",
    color: "border-consisa-red",
    iconBg: "bg-orange-50",
  },
  {
    icon: "🏟️",
    title: "BPO Proyectos Complejos",
    body: "Metodología de 10 módulos integrados para proyectos deportivos, inmobiliarios y de infraestructura. ERP + CRM + Fiducia + Control EPC. Referencia ejecutada: Deportivo Cali.",
    badge: "Proyectos de gran escala",
    badgeType: "default",
    cta: "Conocer metodología →",
    href: "#contacto",
    color: "border-gray-200",
    iconBg: "bg-purple-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Portafolio de Servicios</span>
          <h2 className="section-title mb-4">
            Soluciones para cada etapa de la transformación
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Desde la consultoría ERP hasta la Inteligencia Artificial aplicada al Estado colombiano.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card flex flex-col border-t-4 ${s.color}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${s.iconBg} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {s.icon}
              </div>

              {/* Badge */}
              <span
                className={`self-start mb-3 text-xs font-semibold px-3 py-1 rounded-full ${
                  s.badgeType === "new"
                    ? "bg-consisa-red text-white"
                    : s.badgeType === "success"
                    ? "bg-green-50 text-consisa-green"
                    : "bg-blue-50 text-consisa-blue"
                }`}
              >
                {s.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-consisa-dark mb-3">
                {s.title}
              </h3>

              {/* Body */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                {s.body}
              </p>

              {/* CTA */}
              <a
                href={s.href}
                className="text-consisa-blue font-semibold text-sm hover:text-consisa-red transition-colors duration-200"
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
