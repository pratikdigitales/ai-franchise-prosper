import { motion } from "framer-motion";
import { CreditCard, Settings, GraduationCap, Target, DollarSign } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    number: "01",
    title: "Invista na Licença",
    description: "Faça seu investimento inicial e entre para a rede de licenciados",
  },
  {
    icon: Settings,
    number: "02",
    title: "Criamos e Instalamos Tudo",
    description: "Configuramos toda infraestrutura necessária para você começar a vender",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Treinamento Completo",
    description: "Receba todo treinamento comercial e técnico necessário",
  },
  {
    icon: Target,
    number: "04",
    title: "Prospecte e Venda",
    description: "Utilize nossas técnicas e materiais fornecidos para conquistar clientes",
  },
  {
    icon: DollarSign,
    number: "05",
    title: "Desfrute dos Lucros",
    description: "Receba lucros mensais recorrentes dos pagamentos de seus clientes",
  },
];

const HowItWorksSection = () => {
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
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Seu caminho para o{" "}
            <span className="text-gradient-primary">sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5 passos simples para começar a lucrar com IA
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-gradient-card glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-2xl font-display font-bold text-primary/50">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
