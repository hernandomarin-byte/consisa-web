"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isHome
    ? scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    : "bg-white shadow-md";

  const linkColor = isHome && !scrolled ? "text-white/90 hover:text-white" : "text-[#1A1A2E] hover:text-[#003087]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-consisa.jpg"
              alt="CONSISA"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${linkColor} ${pathname === link.href ? "font-bold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto" className="btn-primary text-sm py-2.5 px-6">
              Habla con un experto →
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <div className={`w-6 h-0.5 mb-1.5 ${isHome && !scrolled ? "bg-white" : "bg-[#1A1A2E]"}`} />
            <div className={`w-6 h-0.5 mb-1.5 ${isHome && !scrolled ? "bg-white" : "bg-[#1A1A2E]"}`} />
            <div className={`w-6 h-0.5 ${isHome && !scrolled ? "bg-white" : "bg-[#1A1A2E]"}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-xl p-6 mb-4 border border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#1A1A2E] font-medium border-b border-gray-50 hover:text-[#003087]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto" className="btn-primary w-full justify-center mt-4 text-sm" onClick={() => setMenuOpen(false)}>
              Habla con un experto →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
