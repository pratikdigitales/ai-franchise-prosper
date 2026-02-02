import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Briefcase, Award, Calendar } from "lucide-react";
import { useRef } from "react";
import planetBrazil from "@/assets/planet-brazil.png";

const metrics = [
  { icon: Users, value: "50+", label: "Pessoas na equipe" },
  { icon: Briefcase, value: "1.300+", label: "Projetos implementados" },
  { icon: Award, value: "78+", label: "Licenciados ativos" },
  { icon: Calendar, value: "12+", label: "Anos de história" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.4, 0.5, 1.25, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.3, 1, 1, 0.5]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
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
            {/* Planet Image */}
            <div className="relative h-72 md:h-[28rem] flex items-center justify-center mb-8 overflow-hidden">
              <motion.img
                src={planetBrazil}
                alt="Planeta Brasil - Presença Nacional"
                className="w-full max-w-xl md:max-w-2xl object-contain -mb-16 md:-mb-24"
                style={{ scale, opacity }}
              />
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
