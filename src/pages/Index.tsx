import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OpportunitySection from "@/components/OpportunitySection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductsSection from "@/components/ProductsSection";
import ResultsSection from "@/components/ResultsSection";
import SimulatorSection from "@/components/SimulatorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OpportunitySection />
      <AboutSection />
      <section id="beneficios">
        <BenefitsSection />
      </section>
      <section id="como-funciona">
        <HowItWorksSection />
      </section>
      <section id="produtos">
        <ProductsSection />
      </section>
      <section id="resultados">
        <ResultsSection />
      </section>
      <SimulatorSection />
      <Footer />
    </div>
  );
};

export default Index;
