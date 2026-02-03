import { Check } from "lucide-react";
const TherapyApproachSection = () => {
  const benefits = ["Entender qué hay detrás de lo que sentís", "Cambiar patrones que ya no te sirven", "Desarrollar herramientas prácticas para el día a día", "Construir una relación más sana con vos mismo/a"];
  return <section id="enfoque" className="section-padding bg-background">
      <div className="container-therapy">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-sage-light rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-serif text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Exploramos juntos</h4>
                    <p className="text-sm text-muted-foreground">Qué pensamientos y creencias están influyendo en cómo te sentís</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-serif text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Construimos nuevas perspectivas</h4>
                    <p className="text-sm text-muted-foreground">Formas más amables y realistas de ver las situaciones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-serif text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Practicamos cambios</h4>
                    <p className="text-sm text-muted-foreground">Pequeñas acciones que generan grandes transformaciones</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-terracotta-light opacity-50"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              ¿Cómo <span className="text-primary">trabajo</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Utilizo la <strong className="text-foreground">Terapia Cognitivo Conductual</strong>, un enfoque 
              respaldado por evidencia científica que se centra en la conexión 
              entre lo que pensás, sentís y hacés.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              No se trata de darte consejos ni de decirte qué hacer. Es un proceso 
              de descubrimiento donde te acompaño a encontrar tus propias respuestas, 
              a tu ritmo y respetando tu historia.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default TherapyApproachSection;