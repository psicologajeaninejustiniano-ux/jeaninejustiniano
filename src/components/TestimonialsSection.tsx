import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const TestimonialsSection = () => {
  const testimonials = [{
    text: "Desde la primera sesión me sentí escuchada de verdad. No me sentí juzgada en ningún momento, y eso para mí fue fundamental.",
    name: "Carolina",
    context: "32 años"
  }, {
    text: "Llegué sintiéndome muy perdida. Jeanine me ayudó a entenderme mejor, sin presionarme, respetando mi ritmo.",
    name: "María L.",
    context: "28 años"
  }, {
    text: "El espacio que encontré fue seguro y cálido. Por primera vez pude hablar de cosas que nunca había dicho en voz alta.",
    name: "Andrea",
    context: "45 años"
  }, {
    text: "Me costó mucho dar el primer paso, pero valió la pena. Sentí acompañamiento real, no solo técnicas.",
    name: "Valentina",
    context: "36 años"
  }];
  return <section className="section-padding bg-background overflow-hidden">
      <div className="container-therapy">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">Experiencias de quienes me han <span className="text-primary">confiado</span> su proceso</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Cada proceso es único y se vive de manera diferente en cada persona.</p>
        </div>

        <div className="max-w-2xl mx-auto px-12">
          <Carousel opts={{
          align: "center",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index}>
                  <div className="bg-card rounded-2xl p-8 md:p-10 relative min-h-[280px] flex flex-col justify-between">
                    <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
                    
                    <p className="text-foreground text-lg md:text-xl leading-relaxed italic pr-8">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-8">
                      <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                        <span className="text-primary font-serif text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.context}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            
            <CarouselPrevious className="left-0 border-none bg-transparent hover:bg-sage-light/50 text-primary" />
            <CarouselNext className="right-0 border-none bg-transparent hover:bg-sage-light/50 text-primary" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => <div key={index} className="w-2 h-2 rounded-full bg-primary/20" />)}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
          Por respeto a la privacidad, los nombres han sido modificados. 
          Todos los testimonios son reales y compartidos con autorización.
        </p>
      </div>
    </section>;
};
export default TestimonialsSection;