import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 glass border-b border-border" : ""
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="font-display text-xl font-bold text-gradient-primary">
            Franquia IA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#produtos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Produtos
            </a>
            <a href="#resultados" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resultados
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary text-primary-foreground font-medium shadow-button hover:opacity-90 transition-opacity">
              Quero ser Licenciado
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 glass border-t border-border"
          >
            <div className="py-4 space-y-4">
              <a href="#beneficios" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Benefícios
              </a>
              <a href="#como-funciona" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Como Funciona
              </a>
              <a href="#produtos" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Produtos
              </a>
              <a href="#resultados" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Resultados
              </a>
              <div className="px-4">
                <Button className="w-full bg-gradient-primary text-primary-foreground font-medium">
                  Quero ser Licenciado
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
