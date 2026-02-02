import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Repeat, Percent, Shield, Rocket, Scale } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Modelo de Negócio Validado",
    description: "Método comprovado com dezenas de licenciados de sucesso",
  },
  {
    icon: Repeat,
    title: "Faturamento Recorrente",
    description: "Receita mensal previsível com contratos de longo prazo",
  },
  {
    icon: Percent,
    title: "Alta Margem de Lucro",
    description: "Margens superiores a 60% em cada projeto",
  },
  {
    icon: Shield,
    title: "Alta Retenção",
    description: "Clientes permanecem por anos devido ao alto valor entregue",
  },
  {
    icon: TrendingUp,
    title: "Demanda Crescente",
    description: "Mercado em expansão acelerada ano após ano",
  },
  {
    icon: Scale,
    title: "Alta Escalabilidade",
    description: "Cresça sua operação sem aumentar proporcionalmente os custos",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Benefícios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Por que se tornar um{" "}
            <span className="text-gradient-accent">Licenciado</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um modelo de negócio estruturado para maximizar seus resultados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-gradient-card glass rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
