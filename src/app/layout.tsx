import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CONSISA — Consultoría y Sistemas S.A.S. | ERP · IA · Sector Público Colombia",
  description: "17 años transformando el sector público colombiano con SAP, Odoo e Inteligencia Artificial. Implementaciones ERP, GRP Odoo, SRI GovTech, GTTP y Agencia IA. ¡Conectando Juntos!",
  keywords: "consultoría ERP sector público Colombia, Odoo Colombia, SAP sector público, inteligencia artificial sector público, GRP Odoo municipios, CONSISA",
  authors: [{ name: "CONSISA — Consultoría y Sistemas S.A.S." }],
  openGraph: {
    title: "CONSISA — ERP · IA · Sector Público Colombia",
    description: "17 años transformando el sector público colombiano. Odoo + IA para municipios y entidades territoriales.",
    url: "https://www.consisa.biz",
    siteName: "CONSISA",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONSISA — ERP · IA · Sector Público Colombia",
    description: "17 años transformando el sector público colombiano con Odoo, SAP e IA Generativa.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CPVHWHPS4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CPVHWHPS4');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
