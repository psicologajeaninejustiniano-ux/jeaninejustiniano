import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/59170001773";

const WhatsAppButton = () => {

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="text-white font-medium hidden sm:inline">Habla conmigo</span>
    </a>
  );
};

export default WhatsAppButton;
