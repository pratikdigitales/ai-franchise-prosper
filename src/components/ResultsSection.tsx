import { motion } from "framer-motion";
import { Star, Award, Crown } from "lucide-react";

const tiers = [
  {
    icon: Star,
    level: "Iniciante",
    revenue: "R$ 10.000",
    period: "a R$ 20.000/mês",
    description: "Primeiros meses de operação focando em construir base de clientes",
    features: ["3-5 contratos ativos", "Foco em prospecção", "Suporte intensivo"],
    color: "primary",
  },
  {
    icon: Award,
    level: "Intermediário",
    revenue: "R$ 20.000",
    period: "a R$ 40.000/mês",
    description: "Operação consolidada com carteira de clientes recorrentes",
    features: ["8-12 contratos ativos", "Indicações de clientes", "Processos otimizados"],
    color: "accent",
    featured: true,
  },
  {
    icon: Crown,
    level: "Expert",
    revenue: "R$ 40.000",
    period: "a R$ 80.000+/mês",
    description: "Máxima maturidade com operação escalada e equipe própria",
    features: ["15+ contratos ativos", "Equipe de vendas", "Múltiplos segmentos"],
    color: "accent",
  },
];

const ResultsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Resultados
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Em 6 meses nossos licenciados{" "}
            <span className="text-gradient-accent">faturam em média:</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos licenciados evoluem ao longo do tempo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative ${tier.featured ? "md:-mt-6 md:mb-4 pt-4" : ""}`}
            >
              {tier.featured && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full z-10">
                  Mais Comum
                </div>
              )}
              <div className={`h-full bg-gradient-card glass rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                tier.featured ? "border-accent/50 shadow-glow" : "border-border hover:border-primary/50"
              }`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                  tier.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <tier.icon className={`w-7 h-7 ${
                    tier.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                
                <div className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {tier.level}
                </div>
                
                <div className="mb-4">
                  <span className={`text-3xl font-display font-bold ${
                    tier.color === "primary" ? "text-gradient-primary" : "text-gradient-accent"
                  }`}>
                    {tier.revenue}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>
                
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        tier.color === "primary" ? "bg-primary" : "bg-accent"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
