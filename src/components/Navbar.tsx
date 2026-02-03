import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import alieviLogo from "@/assets/alievi-logo-simple.png";
import ContactFormModal from "./ContactFormModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div 
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
            isScrolled 
              ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-lg" 
              : "bg-background/50 backdrop-blur-md border border-border/30"
          }`}
        >
          <div className="flex items-center justify-between h-14 px-6">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src={alieviLogo} alt="Alievi Analytics" className="h-7 md:h-8" />
            </a>

            {/* Desktop Menu - Centered */}
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
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary text-primary-foreground font-medium rounded-full px-6 shadow-button hover:bg-primary/90 transition-all"
              >
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-auto max-w-6xl bg-background/90 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg"
          >
            <div className="py-4 space-y-2">
              <a href="#beneficios" className="block px-6 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                Benefícios
              </a>
              <a href="#como-funciona" className="block px-6 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                Como Funciona
              </a>
              <a href="#produtos" className="block px-6 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                Produtos
              </a>
              <a href="#resultados" className="block px-6 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                Resultados
              </a>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary text-primary-foreground font-medium rounded-full"
                >
                  Quero ser Licenciado
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <ContactFormModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};

export default Navbar;
