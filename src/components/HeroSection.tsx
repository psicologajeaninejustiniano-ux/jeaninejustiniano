import { Button } from "@/components/ui/button";
import jeaninePhoto from "@/assets/jeanine-photo.png";
const WHATSAPP_URL = "https://wa.me/59170001773";
const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };
  return <section className="gradient-hero min-h-screen flex items-center section-padding pt-24 md:pt-28">
      <div className="container-therapy w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
            {/* Name and Credentials */}
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              Jeanine Justiniano
            </h2>
            
            {/* Credential Card */}
            <div className="inline-block mb-4">
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-3 text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-1.5">
                  Credenciales
                </p>
                <div className="space-y-0.5 text-xs text-muted-foreground">
                  <p>Min. de Salud: J-6305206</p>
                  <p>SEDES: P24-0320</p>
                  <p>Colegio de Psicólogos de Santa Cruz: JJM-964-24</p>
                </div>
              </div>
            </div>
            
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Psicóloga · Santa Cruz, Bolivia
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 text-balance">
              Estoy aquí para <span className="text-primary">acompañarte</span>. No estás solo/a.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              Si estás pasando por un momento difícil, no tenés que enfrentarlo solo/a. 
              Estoy aquí para acompañarte con calidez, respeto y sin juicios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={handleWhatsAppClick} className="btn-primary text-lg px-8 py-6 h-auto">
                Escribime por WhatsApp
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground px-6 py-6 h-auto" onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Conoceme
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Confidencialidad garantizada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Online o presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>A tu ritmo</span>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img alt="Jeanine Justiniano - Psicóloga" className="w-full h-full object-cover object-top" src="/lovable-uploads/0a7de1ec-013b-4a91-8297-c79ceea8cfef.jpg" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-terracotta-light opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-sage-light opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;