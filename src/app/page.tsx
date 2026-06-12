import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import WhyConsisa from "@/components/WhyConsisa";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudy />
      <WhyConsisa />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
