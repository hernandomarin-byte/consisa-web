const kpis = [
  { value: "900", label: "Artículos vectorizados", color: "text-consisa-blue" },
  { value: "100", label: "Brechas normativas detectadas", color: "text-consisa-red" },
  { value: "$480M", label: "COP recuperación potencial", color: "text-consisa-green" },
  { value: "414%", label: "ROI fiscalización ICA", color: "text-consisa-gold" },
];

export default function CaseStudy() {
  return (
    <section id="chaparral" className="py-24 bg-consisa-blue relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-consisa-red/10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm font-medium mb-6">
            ✅ Caso de éxito validado
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            IA en producción. Resultados reales.
          </h2>
          <p className="text-white/70 text-lg">
            Piloto SRI GovTech — Chaparral, Tolima — Mayo 2026
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kpis.map((kpi, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-xl"
            >
              <div className={`text-4xl lg:text-5xl font-extrabold ${kpi.color} mb-2`}>
                {kpi.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Vectorizamos el estatuto tributario completo del municipio (275 páginas), identificamos
            automáticamente <strong className="text-white">100 brechas normativas</strong> respecto a la ley
            nacional y calculamos un potencial de recuperación de{" "}
            <strong className="text-white">$480 millones COP</strong>. Todo en tiempo real con{" "}
            <strong className="text-white">Claude AI + Google Cloud</strong>.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Claude API (Anthropic)", "Vertex AI Embeddings", "pgvector", "Google Cloud", "Python"].map((tech) => (
              <span
                key={tech}
                className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <a href="#contacto" className="btn-accent text-base py-4 px-10">
            ¿Tu municipio tiene estas brechas? Averígualo gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
