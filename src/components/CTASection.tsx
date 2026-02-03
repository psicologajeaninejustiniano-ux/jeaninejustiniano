import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/59170001773";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section id="agendar" className="section-padding bg-background">
      <div className="container-therapy">
        <div className="bg-sage-light rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            ¿Listo/a para dar el <span className="text-primary">primer paso</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            No necesitás tener todo claro. Solo necesitás querer sentirte mejor. 
            Escribime y conversemos sobre cómo puedo acompañarte.
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            className="btn-primary text-lg px-10 py-6 h-auto"
          >
            Escribime ahora
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">
            Sin compromiso. Sin presión. A tu ritmo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
