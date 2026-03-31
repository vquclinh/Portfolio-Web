import { HeroSection } from "../components/hero-section";
import { BioSection } from "../components/bio-section";
import { ContactSection } from "../components/contact-section";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <ContactSection />
    </div>
  );
}