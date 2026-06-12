const team = [
  {
    name: "Hernando Ferney Marín Rodríguez",
    role: "CEO & Business Developer",
    specialty: "Magíster en Gobierno y Políticas Públicas. Consultor gobierno, finanzas multilaterales.",
    years: "+30 años",
    initials: "HM",
    color: "bg-blue-600",
  },
  {
    name: "Luz Angela Osorio Castaño",
    role: "Arquitecta de Soluciones",
    specialty: "SAP-ERP, mejores prácticas sector público y privado colombiano.",
    years: "30 años",
    initials: "LO",
    color: "bg-purple-600",
  },
  {
    name: "Jaime Andrés Ortega Mazorra",
    role: "Consultor Senior Gestión Pública",
    specialty: "MIPG, Sistemas de Gestión, coautor MECI y NTCSP-1000.",
    years: "+31 años",
    initials: "JO",
    color: "bg-teal-600",
  },
  {
    name: "Jorge Alberto Bravo Rubiano",
    role: "Consultor Tributario",
    specialty: "Administraciones tributarias locales y nacional, modernización fiscal.",
    years: "+18 años",
    initials: "JB",
    color: "bg-green-600",
  },
  {
    name: "Sandra Luengas Aponte",
    role: "Consultora Ciencia de Datos",
    specialty: "Candidata doctorado, Maestría estudios políticos, TIC y transformación digital.",
    years: "+25 años",
    initials: "SL",
    color: "bg-rose-600",
  },
  {
    name: "Clara Inés Osorio Morales",
    role: "CFO",
    specialty: "Finanzas, normas internacionales de contabilidad, sector público.",
    years: "+20 años",
    initials: "CO",
    color: "bg-amber-600",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Nuestro Equipo</span>
          <h2 className="section-title mb-4">Los expertos detrás de la transformación</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Promedio de <strong className="text-consisa-blue">27 años de experiencia</strong> en el sector público colombiano.
            No juniors. Seniors con trayectoria comprobada.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center text-white font-black text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {member.initials}
              </div>

              {/* Years badge */}
              <span className="inline-block bg-blue-50 text-consisa-blue text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {member.years} experiencia
              </span>

              {/* Name */}
              <h3 className="text-lg font-bold text-consisa-dark mb-1">{member.name}</h3>

              {/* Role */}
              <p className="text-consisa-blue font-semibold text-sm mb-3">{member.role}</p>

              {/* Specialty */}
              <p className="text-gray-500 text-sm leading-relaxed">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
