"use client";
import { useState } from "react";

const services = [
  "SAP S/4HANA",
  "GRP Odoo — Control Presupuestal",
  "SRI GovTech — IA Normativa",
  "GTTP — Gestor Tributario",
  "Agencia IA y Automatizaciones",
  "BPO Proyectos Complejos",
  "Otro",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    entity: "",
    role: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission - replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="badge mb-4">Contacto</span>
            <h2 className="section-title mb-4">
              ¿Listo para conectar tu entidad con el futuro?
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Agenda una consulta gratuita de 30 minutos con nuestro equipo.
              Sin compromiso. Con resultados.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <p className="font-bold text-consisa-dark">Hernando Ferney Marín Rodríguez</p>
                  <p className="text-gray-500 text-sm">CEO & Business Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </div>
                <a
                  href="mailto:ceo@consisa.biz"
                  className="text-consisa-blue font-semibold hover:text-consisa-red transition-colors"
                >
                  ceo@consisa.biz
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📱
                </div>
                <a
                  href="https://wa.me/573153503014"
                  className="text-consisa-blue font-semibold hover:text-consisa-red transition-colors"
                >
                  +57 315 350 3014
                </a>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Av. 4 Norte No. 6N-67, Edificio Siglo XXI, Oficina 301<br />
                  Cali, Valle del Cauca, Colombia
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-consisa-dark mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Gracias por contactarnos. Nuestro equipo se comunicará contigo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-consisa-dark mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-consisa-blue focus:ring-2 focus:ring-consisa-blue/10 bg-white text-sm transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-consisa-dark mb-2">
                      Entidad / Empresa *
                    </label>
                    <input
                      type="text"
                      name="entity"
                      required
                      value={form.entity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-consisa-blue focus:ring-2 focus:ring-consisa-blue/10 bg-white text-sm transition-all"
                      placeholder="Alcaldía, Gobernación, Empresa..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-consisa-dark mb-2">
                      Cargo *
                    </label>
                    <input
                      type="text"
                      name="role"
                      required
                      value={form.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-consisa-blue focus:ring-2 focus:ring-consisa-blue/10 bg-white text-sm transition-all"
                      placeholder="Secretario, Director, Gerente..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-consisa-dark mb-2">
                      Email corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-consisa-blue focus:ring-2 focus:ring-consisa-blue/10 bg-white text-sm transition-all"
                      placeholder="tu@entidad.gov.co"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-consisa-dark mb-2">
                    ¿Qué necesitas?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-consisa-blue focus:ring-2 focus:ring-consisa-blue/10 bg-white text-sm transition-all text-gray-700"
                  >
                    <option value="">Selecciona un servicio...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-consisa-dark mb-2">
                    Cuéntanos más (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-consisa-blue focus:ring-2 focus:ring-consisa-blue/10 bg-white text-sm transition-all resize-none"
                    placeholder="Describe brevemente tu proyecto o necesidad..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Solicitar consulta gratuita →"
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Tu información es confidencial. Respondemos en menos de 24 horas.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
