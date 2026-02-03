import jeaninePhoto from "@/assets/jeanine-photo.png";
const AboutSection = () => {
  return <section id="sobre-mi" className="section-padding bg-card">
      <div className="container-therapy">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden">
                <img alt="Jeanine Justiniano - Psicóloga" className="w-full h-full object-cover object-top" src="/lovable-uploads/40fe18c0-cd62-4ba3-b9c7-2a5115fac95c.jpg" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl border-2 border-primary/20"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Hola, soy <span className="text-primary">Jeanine</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy psicóloga y creo firmemente que pedir ayuda es un acto de 
              valentía, no de debilidad. Mi trabajo es ofrecerte un espacio 
              donde puedas hablar sin filtros, sin miedo a ser juzgado/a.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">Cada persona tiene su propio tiempo y su propia historia. Mi rol es acompañarte a encontrar tus propias respuestas con respeto y calidez.</p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-background rounded-2xl p-5">
                <h4 className="font-serif text-lg text-foreground mb-2">Enfoque</h4>
                <p className="text-sm text-muted-foreground">Terapia Cognitivo Conductual</p>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <h4 className="font-serif text-lg text-foreground mb-2">Ubicación</h4>
                <p className="text-sm text-muted-foreground">Santa Cruz, Bolivia</p>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <h4 className="font-serif text-lg text-foreground mb-2">Modalidad</h4>
                <p className="text-sm text-muted-foreground">Online y presencial</p>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <h4 className="font-serif text-lg text-foreground mb-2">Confidencialidad</h4>
                <p className="text-sm text-muted-foreground">100% garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;