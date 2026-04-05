import { HeroSection } from "../components/hero-section";
import { BioSection } from "../components/bio-section";
import { ContactSection } from "../components/contact-section";
import signature from "../../../assets/signature.svg"

export function HomePage() {
  return (
    <div className="min-h-screen relative">
      <img
         src={signature}
         alt="Signature"
         className="hidden sm:block absolute top-6 right-6 w-55 opacity-80 pointer-events-none z-10"
         style={{ filter: "invert(1)" }}
      />
      <HeroSection />
      <BioSection />
      <ContactSection />
    </div>
  );
}