import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Code, Search, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Bot,
    title: "IA Sob Medida",
    description: "Inteligência artificial personalizada integrada aos sistemas do cliente, automatizando processos e aumentando produtividade",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Plataforma Omnichannel",
    description: "Sistema completo com CRM integrado para gestão de atendimento em múltiplos canais de comunicação",
    color: "accent",
  },
  {
    icon: Code,
    title: "Micro SaaS",
    description: "Soluções de software sob demanda desenvolvidas para atender necessidades específicas de cada cliente",
    color: "primary",
  },
  {
    icon: Search,
    title: "Prospect",
    description: "Ferramenta de prospecção inteligente para identificar e qualificar leads de forma automatizada",
    color: "accent",
  },
];

const ProductsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            O que você{" "}
            <span className="text-gradient-primary">vende</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de IA e automação para empresas de todos os tamanhos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-gradient-card glass rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                  product.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <product.icon className={`w-7 h-7 ${
                    product.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <Button 
                  asChild
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                >
                  <a href="https://wa.me/5551926340030?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!" target="_blank" rel="noopener noreferrer">
                    Saiba mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
