import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const profiles = [
  { id: "iniciante", label: "Iniciante", ticketMin: 2000, ticketMax: 3000 },
  { id: "intermediario", label: "Intermediário", ticketMin: 3000, ticketMax: 5000 },
  { id: "expert", label: "Expert", ticketMin: 5000, ticketMax: 8000 },
];

const SimulatorSection = () => {
  const [months, setMonths] = useState(6);
  const [selectedProfile, setSelectedProfile] = useState("intermediario");
  const [ticketType, setTicketType] = useState<"min" | "avg">("avg");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const profile = profiles.find((p) => p.id === selectedProfile)!;
  const ticketValue = ticketType === "min" ? profile.ticketMin : (profile.ticketMin + profile.ticketMax) / 2;
  
  // Calculate cumulative revenue based on profile growth
  const calculateRevenue = () => {
    let totalRevenue = 0;
    let contracts = 0;
    
    for (let m = 1; m <= months; m++) {
      // Contracts grow over time
      if (selectedProfile === "iniciante") {
        contracts = Math.min(m, 5);
      } else if (selectedProfile === "intermediario") {
        contracts = Math.min(m * 1.5, 12);
      } else {
        contracts = Math.min(m * 2, 20);
      }
      totalRevenue += contracts * ticketValue;
    }
    
    return totalRevenue;
  };

  const revenue = calculateRevenue();
  const monthlyAvg = revenue / months;

  return (
    <>
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
              Simulador
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Você gosta de{" "}
              <span className="text-gradient-accent">perder tempo</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja quanto você já poderia ter ganhado se tivesse começado antes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-card glass rounded-3xl p-8 md:p-12 border border-border">
              {/* Profile Selection */}
              <div className="mb-10">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  Selecione seu perfil
                </label>
                <div className="flex flex-wrap gap-3">
                  {profiles.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProfile(p.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        selectedProfile === p.id
                          ? "bg-primary text-primary-foreground shadow-button"
                          : "bg-secondary text-foreground hover:bg-muted"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticket Selection */}
              <div className="mb-10">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  Ticket por contrato
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setTicketType("min")}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      ticketType === "min"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    Mínimo (R$ {profile.ticketMin.toLocaleString("pt-BR")})
                  </button>
                  <button
                    onClick={() => setTicketType("avg")}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      ticketType === "avg"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    Médio (R$ {((profile.ticketMin + profile.ticketMax) / 2).toLocaleString("pt-BR")})
                  </button>
                </div>
              </div>

              {/* Months Slider */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-muted-foreground">
                    Há quantos meses você poderia ter começado?
                  </label>
                  <span className="text-2xl font-display font-bold text-primary">
                    {months} meses
                  </span>
                </div>
                <Slider
                  value={[months]}
                  onValueChange={(value) => setMonths(value[0])}
                  min={1}
                  max={24}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1 mês</span>
                  <span>24 meses</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-sm">Faturamento Acumulado</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient-accent">
                    R$ {revenue.toLocaleString("pt-BR")}
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm">Média Mensal</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary">
                    R$ {monthlyAvg.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Cada mês que passa é dinheiro deixado na mesa
                </p>
                <Button 
                  onClick={() => setIsContactModalOpen(true)}
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg shadow-button hover:opacity-90 transition-opacity"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};

export default SimulatorSection;
