import { Heart, Brain, Users, Frown, HeartCrack } from "lucide-react";
const WhoIHelpSection = () => {
  const helpItems = [{
    icon: Brain,
    title: "Ansiedad y estrés",
    description: "Cuando los pensamientos no paran, el cuerpo se tensa y sentís que todo te supera."
  }, {
    icon: Heart,
    title: "Baja autoestima",
    description: "Si sentís que no sos suficiente, te cuesta poner límites o buscás aprobación constantemente."
  }, {
    icon: HeartCrack,
    title: "Dependencia emocional",
    description: "Cuando tus relaciones te generan más angustia que bienestar y no sabés cómo salir de ese patrón."
  }, {
    icon: Frown,
    title: "Duelo y pérdidas",
    description: "Acompañamiento para procesar despedidas, cambios importantes o etapas que terminan."
  }, {
    icon: Users,
    title: "Violencia y maltrato",
    description: "Un espacio seguro para quienes han vivido situaciones de control, abuso o violencia."
  }];
  return <section id="a-quien-acompano" className="section-padding bg-card relative overflow-hidden">
      {/* Transition element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      <div className="container-therapy relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            ¿Te <span className="text-primary">identificás</span> con algo de esto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No necesitás tener un diagnóstico para buscar ayuda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {helpItems.map((item, index) => <div key={index} className="group bg-background rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhoIHelpSection;