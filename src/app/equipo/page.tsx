import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import Image from "next/image";

const team = [
  {
    name: "Hernando Ferney Marín Rodríguez",
    role: "CEO & Business Developer",
    specialty: "Magíster en Gobierno y Políticas Públicas. Consultor en gobierno, finanzas multilaterales y junta directiva.",
    years: "+30 años",
    initials: "HM",
    color: "bg-[#003087]",
    areas: ["Gobierno y Políticas Públicas","Finanzas Multilaterales","Estrategia Empresarial","Transformación Digital"],
    img: "/team/hmarin.png",
  },
  {
    name: "Luz Angela Osorio Castaño",
    role: "Arquitecta de Soluciones",
    specialty: "Especialista SAP-ERP con dominio profundo de las mejores prácticas del sector público y privado colombiano.",
    years: "30 años",
    initials: "LO",
    color: "bg-purple-600",
    areas: ["SAP S/4HANA","Arquitectura ERP","Sector Público","Mejores Prácticas"],
    img: "/team/luz-angela.png",
  },
  {
    name: "Jaime Andrés Ortega Mazorra",
    role: "Consultor Senior Gestión Pública",
    specialty: "Experto en MIPG y Sistemas de Gestión. Coautor del MECI y la NTCSP-1000. Referente nacional en calidad del sector público.",
    years: "+31 años",
    initials: "JO",
    color: "bg-teal-600",
    areas: ["MIPG","MECI","NTCSP-1000","Sistemas de Gestión"],
    img: "/team/jaom.png",
  },
  {
    name: "Jorge Alberto Bravo Rubiano",
    role: "Consultor Tributario",
    specialty: "Especialista en administraciones tributarias locales y nacional. Experto en modernización fiscal y gestión de ingresos municipales.",
    years: "+18 años",
    initials: "JB",
    color: "bg-[#00A86B]",
    areas: ["Tributación Municipal","ICA y Predial","Modernización Fiscal","DIAN"],
    img: "/team/jorge.png",
  },
  {
    name: "Sandra Luengas Aponte",
    role: "Consultora Ciencia de Datos",
    specialty: "Candidata a doctorado. Maestría en estudios políticos. Especialista en TIC, inteligencia artificial y transformación digital del Estado.",
    years: "+25 años",
    initials: "SL",
    color: "bg-rose-600",
    areas: ["Ciencia de Datos","Inteligencia Artificial","TIC","Políticas Públicas Digitales"],
    img: "/team/sandra.png",
  },
  {
    name: "Clara Inés Osorio Morales",
    role: "CFO — Directora Financiera",
    specialty: "Especialista en finanzas, normas internacionales de contabilidad y gestión financiera del sector público colombiano.",
    years: "+20 años",
    initials: "CO",
    color: "bg-amber-600",
    areas: ["NIIF","Finanzas Públicas","Control Interno","Presupuesto Público"],
    img: "/team/clara.png",
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
      <section className="py-14 bg-[#003087]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              ["27 años","Promedio de experiencia"],
              ["6","Expertos senior"],
              ["170+","Años de experiencia combinada"],
              ["8+","Entidades públicas nacionales"],
            ].map(([v,l],i) => (
              <div key={i} className="py-4">
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{v}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4">El equipo</span>
            <h2 className="section-title mb-4">Conoce a nuestros expertos</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Cada miembro del equipo aporta décadas de experiencia real en el sector público colombiano.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Photo */}
                <div className="relative h-72 bg-gray-100 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className={`w-12 h-12 ${m.color} rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                      {m.initials}
                    </div>
                    <span className="bg-white/90 text-[#003087] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                      {m.years}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-8">
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-1 leading-snug">{m.name}</h3>
                  <p className="text-[#003087] font-semibold text-sm mb-4">{m.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{m.specialty}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.areas.map(a => (
                      <span key={a} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-6">¡Conectando Juntos!</span>
              <h2 className="section-title mb-6">¿Quieres trabajar con nosotros?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Buscamos expertos apasionados por la transformación digital del sector público colombiano.
                Si tienes experiencia en ERP, IA, gestión pública o tributación, queremos conocerte.
              </p>
              <Link href="/contacto" className="btn-primary">Contáctanos →</Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
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
