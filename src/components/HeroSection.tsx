import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
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

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Agora você pode lucrar com inteligência artificial mesmo sem entender de tecnologia. 
              Invista <span className="text-primary font-semibold">R$ 39.900</span>, seja dono da sua empresa de tecnologia 
              e fature mais de R$ 20.000/mês de forma recorrente a partir do 3º mês!
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
            >
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/30">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-foreground font-semibold text-sm">+R$ 20k/mês</span>
                <span className="text-muted-foreground text-xs">recorrente</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/30">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-foreground font-semibold text-sm">2 pessoas</span>
                <span className="text-muted-foreground text-xs">na equipe</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/30">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-foreground font-semibold text-sm">3º mês</span>
                <span className="text-muted-foreground text-xs">início do lucro</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                asChild
                size="lg" 
                className="bg-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-button hover:bg-primary/90 transition-all"
              >
                <a href="https://wa.me/5551926340030?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!" target="_blank" rel="noopener noreferrer">
                  Quero ser um Licenciado
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-border/50 text-foreground hover:bg-secondary/50 px-8 py-6 text-lg rounded-full"
              >
                <a href="https://wa.me/5551926340030?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!" target="_blank" rel="noopener noreferrer">
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
  );
};

export default HeroSection;
