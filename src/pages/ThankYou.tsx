import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/555198642271?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!";

const ThankYou = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <CheckCircle className="w-20 h-20 text-primary mx-auto" />
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Obrigado!
        </h1>
        <p className="text-muted-foreground text-lg">
          Seus dados foram enviados com sucesso. Você será redirecionado para o WhatsApp em{" "}
          <span className="text-primary font-bold">{countdown}</span> segundo{countdown !== 1 ? "s" : ""}...
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary underline hover:text-primary/80 transition-colors"
        >
          Clique aqui se não for redirecionado
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
