import Image from "next/image";

const footerLinks = {
  Servicios: [
    { label: "Consultoría ERP", href: "#servicios" },
    { label: "GRP Odoo", href: "#servicios" },
    { label: "SRI GovTech", href: "#servicios" },
    { label: "GTTP", href: "#servicios" },
    { label: "Agencia IA", href: "#servicios" },
    { label: "BPO Proyectos", href: "#servicios" },
  ],
  Empresa: [
    { label: "Quiénes Somos", href: "#nosotros" },
    { label: "Equipo", href: "#equipo" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Caso Chaparral", href: "#chaparral" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-consisa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-3 inline-block mb-6">
              <Image
                src="/logo-consisa.jpg"
                alt="CONSISA"
                width={140}
                height={52}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Consultoría y Sistemas S.A.S. — Transformando organizaciones colombianas
              con Odoo, SAP e Inteligencia Artificial desde 2008.
            </p>
            <p className="text-consisa-red font-bold text-lg mb-6">¡Conectando Juntos!</p>

            {/* Partnerships */}
            <div className="flex flex-wrap gap-2">
              {["SAP Service Partner", "RISE with SAP", "Google Cloud", "Anthropic"].map((p) => (
                <span
                  key={p}
                  className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full border border-white/10"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm text-center md:text-left">
              © 2008–2026 Consultoría y Sistemas S.A.S. — CONSISA. Todos los derechos reservados.
              <br className="md:hidden" />
              {" "}Av. 4 Norte No. 6N-67, Ed. Siglo XXI Of. 301, Cali, Colombia.
            </div>
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <span>📞 +57 602 2371451</span>
              <span>|</span>
              <a href="mailto:ceo@consisa.biz" className="hover:text-white transition-colors">
                ceo@consisa.biz
              </a>
              <span>|</span>
              <a href="https://www.consisa.biz" className="hover:text-white transition-colors">
                consisa.biz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
