import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const WHATSAPP_URL = "https://wa.me/5551926340030?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!";
const WEBHOOK_URL = "https://backsec.alievichat.com/webhook/cadastros-site-novo";

const contactSchema = z.object({
  nome: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  telefone: z.string().trim().min(10, "Telefone inválido (DDD + número)").max(15, "Telefone inválido"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  investimento: z.string().trim().min(1, "Informe o valor de investimento"),
});

const formatCurrency = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const cents = parseInt(digits, 10);
  return (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  buttonText?: string;
}

const ContactFormModal = ({ open, onOpenChange, buttonText = "Entrar em contato" }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    investimento: "",
  });
  const [errors, setErrors] = useState<{ nome?: string; telefone?: string; email?: string; investimento?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { nome?: string; telefone?: string; email?: string; investimento?: string } = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field as keyof typeof fieldErrors] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Webhook may not have CORS enabled
        body: JSON.stringify({
          nome: formData.nome.trim(),
          telefone: formData.telefone.trim(),
          email: formData.email.trim(),
          investimento: formData.investimento.trim(),
          data: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar webhook:", error);
      // Continue even if webhook fails
    }

    // Redirect to WhatsApp
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    
    // Reset form and close modal
    setFormData({ nome: "", telefone: "", email: "", investimento: "" });
    setErrors({});
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const isFormValid = formData.nome.length >= 3 && formData.telefone.length >= 10 && formData.email.includes("@") && formData.investimento.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Preencha seus dados
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Complete o formulário abaixo para entrar em contato conosco via WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-foreground">Nome completo</Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              className={errors.nome ? "border-destructive" : ""}
            />
            {errors.nome && <p className="text-sm text-destructive">{errors.nome}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone" className="text-foreground">DDD + Número</Label>
            <Input
              id="telefone"
              placeholder="51999999999"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value.replace(/\D/g, ""))}
              className={errors.telefone ? "border-destructive" : ""}
              maxLength={15}
            />
            {errors.telefone && <p className="text-sm text-destructive">{errors.telefone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="investimento" className="text-foreground">Qual valor de investimento você possui atualmente?</Label>
            <Input
              id="investimento"
              placeholder="R$ 0,00"
              value={formData.investimento}
              onChange={(e) => handleInputChange("investimento", formatCurrency(e.target.value))}
              className={errors.investimento ? "border-destructive" : ""}
            />
            {errors.investimento && <p className="text-sm text-destructive">{errors.investimento}</p>}
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-primary text-primary-foreground font-semibold py-6 text-lg rounded-full shadow-button hover:bg-primary/90 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                {buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
