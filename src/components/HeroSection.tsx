import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-dark" />
        
        {/* Subtle glow behind image area */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-6"
              >
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Primeiro Modelo de Franquia de IA do Brasil
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Lucre acima de{" "}
                <span className="text-primary">R$ 60.000</span>{" "}
                por mês com apenas{" "}
                <span className="text-primary">2 pessoas</span>{" "}
                na equipe
              </motion.h1>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button 
                  onClick={() => setIsContactModalOpen(true)}
                  size="lg" 
                  className="bg-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-button hover:bg-primary/90 transition-all"
                >
                  Quero ser um Licenciado
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-border/50 text-foreground hover:bg-secondary/50 px-8 py-6 text-lg rounded-full"
                >
                  <a href="#beneficios">
                    Saiba Mais
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <ContactFormModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};

export default HeroSection;
