import HeroSection from "../components/HeroSection/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection/PortfolioSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <section id="home" className="section">
        <HeroSection />
      </section>
      <section id="portfolio" className="section">
        <PortfolioSection />
      </section>
      <section id="contact" className="section">
        <ContactSection />
      </section>
    </main>
  );
}