import { motion } from "framer-motion";
import { Users, Briefcase, Award, Calendar } from "lucide-react";

const metrics = [
  { icon: Users, value: "50+", label: "Pessoas na equipe" },
  { icon: Briefcase, value: "1.300+", label: "Projetos implementados" },
  { icon: Award, value: "78+", label: "Licenciados ativos" },
  { icon: Calendar, value: "12+", label: "Anos de história" },
];

const AboutSection = () => {
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
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Líderes em{" "}
            <span className="text-gradient-primary">automação com IA</span>{" "}
            no Brasil
          </h2>
        </motion.div>

        <div className="relative">
          {/* Brazil Map Placeholder with Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-card glass rounded-3xl p-8 md:p-12 border border-border"
          >
            {/* Map Background */}
            <div className="relative h-64 md:h-96 flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full max-w-md opacity-20"
                  fill="none"
                >
                  {/* Simplified Brazil shape */}
                  <path
                    d="M200 50 L300 100 L350 200 L300 300 L250 350 L150 350 L100 300 L50 200 L100 100 Z"
                    fill="hsl(var(--primary))"
                    className="animate-pulse-glow"
                  />
                </svg>
              </div>
              
              {/* Floating dots representing presence */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="absolute w-3 h-3 bg-primary rounded-full shadow-glow"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-7xl font-display font-bold text-gradient-primary mb-2">
                  Brasil
                </div>
                <div className="text-muted-foreground">Presença Nacional</div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
