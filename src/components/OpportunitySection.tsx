import { motion } from "framer-motion";
import { TrendingUp, Globe, Clock, Rocket } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "1 bilhão",
    label: "usuários em menos de 2 anos",
    description: "Enquanto a internet levou 10+ anos",
  },
  {
    icon: TrendingUp,
    value: "US$ 1 trilhão",
    label: "mercado global até 2030",
    description: "Crescimento exponencial",
  },
  {
    icon: Rocket,
    value: "30%",
    label: "crescimento ao ano no Brasil",
    description: "Mercado aquecido",
  },
];

const OpportunitySection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            A Oportunidade do Século
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            O momento certo para começar é{" "}
            <span className="text-gradient-primary">agora</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-card glass rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
                <stat.icon className="w-10 h-10 text-primary mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-card glass rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              A maioria das empresas já sabe que precisa de IA — mas não tem ideia de como implementar.
              <span className="block mt-4 text-foreground font-medium">
                É exatamente aí que nasce a oportunidade.
              </span>
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <Clock className="w-5 h-5" />
              <span className="font-medium">
                Cada mês sem agir significa perder espaço para quem já entendeu o jogo.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto"
        >
          Se vender energia elétrica, internet ou celular foi o negócio mais lucrativo do seu tempo,{" "}
          <span className="text-accent font-semibold">vender IA em 2025</span> é a oportunidade da sua geração.
        </motion.p>
      </div>
    </section>
  );
};

export default OpportunitySection;
