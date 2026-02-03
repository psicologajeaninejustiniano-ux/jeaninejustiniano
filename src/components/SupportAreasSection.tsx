import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/59170001773";

const SupportAreasSection = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  const areasLeft = [
    "Ansiedad (General, Social, de Salud)",
    "Dificultad para establecer límites y complacencia crónica",
    "Fatiga crónica",
    "Gestión de emociones",
    "Divorcio / Separación",
    "Identidad y Propósito",
    "Dolor crónico",
    "Duelo y pérdidas",
    "Ataques de pánico",
    "Estrés postraumático (TEPT)",
  ];

  const areasRight = [
    "Baja autoestima / Falta de confianza",
    "Trastorno obsesivo compulsivo (TOC)",
    "Estrés",
    "Desarrollo personal",
    "Violencia doméstica",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative top transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card to-transparent pointer-events-none" />
      <div className="container-therapy relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Algunas de las <span className="text-primary">áreas</span> en las que puedo acompañarte
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estas son algunas de las principales áreas en las que trabajo, pero no se limitan solo a esto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Left Column */}
          <ul className="space-y-3">
            {areasLeft.map((area, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>

          {/* Right Column */}
          <ul className="space-y-3">
            {areasRight.map((area, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-primary"
          >
            Agendar una sesión
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportAreasSection;
