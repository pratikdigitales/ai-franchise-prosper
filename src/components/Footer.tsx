import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="font-display text-2xl font-bold text-gradient-primary mb-4">
            Franquia IA
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Primeiro modelo de franquia de IA do Brasil
          </p>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
