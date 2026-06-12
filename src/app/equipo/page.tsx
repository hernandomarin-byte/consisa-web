import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const team = [
  {
    name: "Hernando Ferney Marín Rodríguez",
    role: "CEO & Business Developer",
    specialty: "Magíster en Gobierno y Políticas Públicas. Consultor en gobierno, finanzas multilaterales y junta directiva.",
    years: "+30 años",
    initials: "HM",
    color: "bg-[#003087]",
    areas: ["Gobierno y Políticas Públicas","Finanzas Multilaterales","Estrategia Empresarial","Transformación Digital"],
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Luz Angela Osorio Castaño",
    role: "Arquitecta de Soluciones",
    specialty: "Especialista SAP-ERP con dominio profundo de las mejores prácticas del sector público y privado colombiano.",
    years: "30 años",
    initials: "LO",
    color: "bg-purple-600",
    areas: ["SAP S/4HANA","Arquitectura ERP","Sector Público","Mejores Prácticas"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Jaime Andrés Ortega Mazorra",
    role: "Consultor Senior Gestión Pública",
    specialty: "Experto en MIPG y Sistemas de Gestión. Coautor del MECI y la NTCSP-1000. Referente nacional en calidad del sector público.",
    years: "+31 años",
    initials: "JO",
    color: "bg-teal-600",
    areas: ["MIPG","MECI","NTCSP-1000","Sistemas de Gestión"],
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Jorge Alberto Bravo Rubiano",
    role: "Consultor Tributario",
    specialty: "Especialista en administraciones tributarias locales y nacional. Experto en modernización fiscal y gestión de ingresos municipales.",
    years: "+18 años",
    initials: "JB",
    color: "bg-[#00A86B]",
    areas: ["Tributación Municipal","ICA y Predial","Modernización Fiscal","DIAN"],
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Sandra Luengas Aponte",
    role: "Consultora Ciencia de Datos",
    specialty: "Candidata a doctorado. Maestría en estudios políticos. Especialista en TIC, inteligencia artificial y transformación digital del Estado.",
    years: "+25 años",
    initials: "SL",
    color: "bg-rose-600",
    areas: ["Ciencia de Datos","Inteligencia Artificial","TIC","Políticas Públicas Digitales"],
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Clara Inés Osorio Morales",
    role: "CFO — Directora Financiera",
    specialty: "Especialista en finanzas, normas internacionales de contabilidad y gestión financiera del sector público colombiano.",
    years: "+20 años",
    initials: "CO",
    color: "bg-amber-600",
    areas: ["NIIF","Finanzas Públicas","Control Interno","Presupuesto Público"],
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
  },
];

export default function EquipoPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        badge="👥 Nuestro Equipo"
        title="Los expertos detrás"
        titleAccent="de la transformación"
        subtitle="Promedio de 27 años de experiencia en el sector público colombiano. No juniors aprendiendo en tus proyectos — seniors con trayectoria comprobada en las iniciativas más complejas de Colombia."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
        imageAlt="Equipo profesional de trabajo"
      />

      {/* KPI strip */}
      <section className="py-12 bg-[#003087]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[["27 años","Promedio de experiencia"],["6","Expertos senior"],["170+","Años de experiencia combinada"],["8+","Entidades públicas nacionales"]].map(([v,l],i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{v}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/80 via-[#003087]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 ${m.color} rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                      {m.initials}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-[#003087] text-xs font-bold px-3 py-1 rounded-full">
                      {m.years}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{m.name}</h3>
                  <p className="text-[#003087] font-semibold text-sm mb-3">{m.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{m.specialty}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.areas.map(a => (
                      <span key={a} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">¡Conectando Juntos!</span>
              <h2 className="section-title mb-4">¿Quieres trabajar con nosotros?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Buscamos expertos apasionados por la transformación digital del sector público colombiano. Si tienes experiencia en ERP, IA, gestión pública o tributación, queremos conocerte.
              </p>
              <Link href="/contacto" className="btn-primary">Contáctanos →</Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" alt="Trabajo en equipo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
