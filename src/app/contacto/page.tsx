"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";

const services = [
  "Consultoría ERP (SAP / Odoo)",
  "GRP Odoo — Control Presupuestal",
  "SRI GovTech — IA Normativa",
  "GTTP — Gestor Tributario",
  "Agencia IA y Automatizaciones",
  "BPO Proyectos Complejos",
  "Otro",
];

const faqs = [
  { q: "¿Cuánto tiempo toma una implementación Odoo?", a: "Dependiendo del alcance, entre 3 y 6 meses para una implementación estándar en una entidad territorial." },
  { q: "¿GRP Odoo funciona para municipios categoría 6?", a: "Sí. GRP Odoo fue diseñado específicamente para ser asequible para municipios de cualquier categoría, desde USD 200/mes." },
  { q: "¿Qué diferencia a SRI GovTech de otros sistemas tributarios?", a: "SRI GovTech usa IA Generativa (Claude API) para detectar brechas normativas automáticamente — algo que ningún sistema tributario tradicional hace." },
  { q: "¿CONSISA sigue haciendo proyectos SAP?", a: "Sí. Tenemos más de 17 años de experiencia SAP y seguimos prestando soporte y consultoría para clientes con implementaciones SAP activas." },
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name:"", entity:"", role:"", email:"", service:"", message:"" });
  const [openFaq, setOpenFaq] = useState<number|null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setError("Hubo un problema al enviar. Por favor escríbenos directamente a contacto@consisa.biz");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <Navbar />
      <PageHero
        badge="📞 Contáctanos"
        title="Hablemos de tu"
        titleAccent="próximo proyecto"
        subtitle="Agenda una consulta gratuita de 30 minutos con nuestro equipo. Sin compromiso. Con resultados."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80"
        imageAlt="Comunicación y contacto profesional"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="badge mb-6">Información de contacto</span>
              <h2 className="section-title mb-8">¿Listo para conectar tu entidad con el futuro?</h2>
              <div className="space-y-6 mb-12">
                {[
                  { icon:"👤", title:"Hernando Ferney Marín Rodríguez", sub:"CEO & Socio Fundador" },
                  { icon:"✉️", title:"contacto@consisa.biz", sub:"Email corporativo", href:"mailto:contacto@consisa.biz" },
                  { icon:"📱", title:"+57 315 350 3014", sub:"WhatsApp disponible", href:"https://wa.me/573153503014" },
                  { icon:"📍", title:"Av. 4 Norte No. 6N-67, Edificio Siglo XXI, Of. 301", sub:"Cali, Valle del Cauca, Colombia" },
                ].map((c,i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                    <div>
                      {c.href
                        ? <a href={c.href} className="font-bold text-[#003087] hover:text-[#E8401C] transition-colors">{c.title}</a>
                        : <p className="font-bold text-[#1A1A2E]">{c.title}</p>
                      }
                      <p className="text-gray-500 text-sm">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">Preguntas frecuentes</h3>
                <div className="space-y-3">
                  {faqs.map((faq,i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span className="font-semibold text-[#1A1A2E] text-sm">{faq.q}</span>
                        <span className={`text-[#003087] font-bold text-lg transition-transform duration-200 ${openFaq===i?"rotate-45":"rotate-0"} flex-shrink-0`}>+</span>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 sticky top-24">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 leading-relaxed">Gracias por contactarnos. Nuestro equipo se comunicará contigo en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Solicitar consulta gratuita</h3>
                  <p className="text-gray-500 text-sm mb-6">Respondemos en menos de 24 horas.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name:"name", label:"Nombre completo *", placeholder:"Tu nombre", type:"text", required:true },
                      { name:"entity", label:"Entidad / Empresa *", placeholder:"Alcaldía, Gobernación...", type:"text", required:true },
                      { name:"role", label:"Cargo *", placeholder:"Secretario, Director...", type:"text", required:true },
                      { name:"email", label:"Email corporativo *", placeholder:"tu@entidad.gov.co", type:"email", required:true },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">{f.label}</label>
                        <input type={f.type} name={f.name} required={f.required} value={(form as Record<string,string>)[f.name]} onChange={handleChange} placeholder={f.placeholder}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003087] focus:ring-2 focus:ring-[#003087]/10 bg-white text-sm transition-all" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">¿Qué necesitas?</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003087] focus:ring-2 focus:ring-[#003087]/10 bg-white text-sm transition-all text-gray-700">
                      <option value="">Selecciona un servicio...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">Cuéntanos más (opcional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Describe brevemente tu proyecto..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003087] focus:ring-2 focus:ring-[#003087]/10 bg-white text-sm transition-all resize-none" />
                  </div>
                  {error && <p className="text-[#E8401C] text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>}
                  <button type="submit" disabled={loading} className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70">
                    {loading ? (
                      <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</>
                    ) : "Solicitar consulta gratuita →"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">Tu información es confidencial. Respondemos en menos de 24 horas.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
