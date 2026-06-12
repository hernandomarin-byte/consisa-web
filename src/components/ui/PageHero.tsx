interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export default function PageHero({ badge, title, titleAccent, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={imageAlt}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#003087]/95 via-[#003087]/80 to-[#003087]/40" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-white/90 text-sm font-medium tracking-wide">{badge}</span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {title}{" "}
            {titleAccent && <span className="text-[#E8401C]">{titleAccent}</span>}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
