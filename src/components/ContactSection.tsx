import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/59170001773";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container-therapy">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estoy disponible para acompañarte. Escribime y conversemos.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
            <div className="space-y-6">
              {/* Phone / WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono / WhatsApp</p>
                  <p className="font-medium text-foreground">+591 70001773</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correo electrónico</p>
                  <p className="font-medium text-foreground">psicologajeaninejustiniano@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-primary flex-1 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Escribirme por WhatsApp
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline"
                className="flex-1 rounded-full"
              >
                Contactarme
              </Button>
            </div>

            {/* Confidentiality note */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              🔒 Tu información es confidencial y está protegida bajo el código ético profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
