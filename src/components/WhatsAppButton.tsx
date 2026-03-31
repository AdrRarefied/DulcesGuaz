import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/523325834986?text=Hola%2C%20me%20interesa%20información%20sobre%20Dulces%20Guaz";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-soft"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
