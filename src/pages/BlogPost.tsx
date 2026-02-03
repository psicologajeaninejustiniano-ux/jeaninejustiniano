import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";

import blogAnxiety from "@/assets/blog-anxiety.jpg";
import blogAutoestima from "@/assets/blog-autoestima.jpg";
import blogAutocuidado from "@/assets/blog-autocuidado.jpg";

const WHATSAPP_URL = "https://wa.me/59170001773";

const blogPostsContent = {
  "ansiedad-y-estres": {
    title: "Entendiendo la ansiedad: no sos tu mente acelerada",
    image: blogAnxiety,
    readTime: "4 min",
    category: "Ansiedad",
    content: `
      <p class="lead">La ansiedad es una de las experiencias emocionales más comunes, y sin embargo, puede sentirse increíblemente solitaria. Si alguna vez sentiste que tu mente no para, que tu cuerpo está en alerta constante o que algo malo está por pasar aunque no sepas qué, no estás solo/a.</p>

      <h2>¿Qué es realmente la ansiedad?</h2>
      <p>La ansiedad es una respuesta natural de nuestro cuerpo ante situaciones que percibe como amenazantes. Es como un sistema de alarma interno que nos prepara para actuar. El problema surge cuando esa alarma se activa con demasiada frecuencia o intensidad, incluso ante situaciones que no representan un peligro real.</p>
      <p>Es importante entender que sentir ansiedad no significa que algo esté "mal" en vos. Tu mente y tu cuerpo están tratando de protegerte, aunque a veces lo hagan de maneras que resultan agotadoras.</p>

      <h2>¿Cómo reconocer las señales?</h2>
      <p>La ansiedad se manifiesta de muchas formas diferentes. Algunas personas sienten un nudo en el estómago, otras experimentan pensamientos acelerados que no pueden controlar. También puede aparecer como dificultad para dormir, tensión muscular, o incluso como una sensación de irrealidad.</p>
      <p>No existe una forma "correcta" de experimentar ansiedad. Lo importante es aprender a reconocer cómo se manifiesta en vos, sin juzgarte por ello.</p>

      <h2>¿Qué pequeños pasos podés dar hacia el alivio?</h2>
      <p>Aunque la ansiedad puede sentirse abrumadora, hay estrategias que pueden ayudarte a regularla. La respiración consciente, por ejemplo, es una herramienta poderosa: cuando respiramos lento y profundo, enviamos una señal a nuestro sistema nervioso de que estamos a salvo.</p>
      <p>También puede ser útil practicar la observación de tus pensamientos sin engancharte con ellos. No sos tus pensamientos; sos quien los observa. Esta distinción, aunque sutil, puede marcar una gran diferencia en cómo te relacionás con tu ansiedad.</p>

      <h2>¿Cuándo es momento de buscar apoyo?</h2>
      <p>Si la ansiedad está afectando tu calidad de vida, tus relaciones o tu capacidad de disfrutar las cosas que antes te gustaban, puede ser momento de buscar apoyo profesional. Un espacio terapéutico te permite explorar las raíces de tu ansiedad y desarrollar herramientas personalizadas para tu situación.</p>
      <p>Pedir ayuda no es una señal de debilidad; es un acto de valentía y autocuidado.</p>

      <h2>Reflexión final</h2>
      <p>La ansiedad no tiene que definir quién sos ni limitar tu vida. Con comprensión, paciencia y las herramientas adecuadas, es posible aprender a convivir con ella de una manera más amable. Recordá: no tenés que enfrentar esto solo/a.</p>
    `,
  },
  "autoestima-y-autocritica": {
    title: "Cuando la autocrítica se vuelve tu peor enemigo",
    image: blogAutoestima,
    readTime: "3 min",
    category: "Autoestima",
    content: `
      <p class="lead">Todos tenemos una voz interna que nos habla. A veces esa voz nos alienta, pero otras veces puede ser increíblemente dura. Si tu diálogo interno está lleno de críticas, exigencias y reproches, es posible que estés lidiando con una autocrítica que se ha vuelto dañina.</p>

      <h2>¿Cuál es la diferencia entre reflexión y autocrítica destructiva?</h2>
      <p>Es saludable poder evaluarnos a nosotros mismos y reconocer áreas donde podemos mejorar. Sin embargo, hay una gran diferencia entre una reflexión constructiva y un patrón de autocrítica que nos hace sentir inadecuados, insuficientes o simplemente "no lo suficientemente buenos".</p>
      <p>La autocrítica destructiva suele ser exagerada, generalizadora y despiadada. Transforma un error en una sentencia sobre nuestro valor como personas.</p>

      <h2>¿De dónde viene esa voz?</h2>
      <p>Muchas veces, nuestra voz crítica interna tiene raíces en experiencias pasadas. Quizás creciste en un ambiente donde las exigencias eran muy altas, o donde los errores eran castigados. Con el tiempo, internalizamos esas voces externas y las convertimos en nuestro propio diálogo interno.</p>
      <p>Entender el origen de esa voz no es para culpar a nadie, sino para comprender que esa forma de hablarte no es la única posible, ni es necesariamente la verdad sobre vos.</p>

      <h2>¿Cómo aprender a tratarte con compasión?</h2>
      <p>La autocompasión no significa darte permiso para no esforzarte o evitar la responsabilidad. Significa tratarte con la misma amabilidad que le ofrecerías a un buen amigo que está pasando por un momento difícil.</p>
      <p>Cuando notes que tu voz crítica está siendo especialmente dura, intentá pausar y preguntarte: "¿Le diría esto a alguien que quiero?". Si la respuesta es no, quizás sea momento de reformular ese mensaje.</p>

      <h2>¿Cómo construir una relación más amable con vos mismo/a?</h2>
      <p>Cambiar años de autocrítica no sucede de la noche a la mañana. Es un proceso que requiere paciencia, práctica y, a veces, apoyo profesional. Pero cada pequeño paso hacia una relación más compasiva con vos mismo/a marca una diferencia.</p>
      <p>Merecés hablarte con respeto, reconocer tus esfuerzos y celebrar tus logros, por pequeños que parezcan.</p>

      <h2>Reflexión final</h2>
      <p>Tu valor no depende de ser perfecto/a. Sos suficiente tal como sos, con tus fortalezas y tus áreas de crecimiento. Aprender a silenciar esa voz crítica es uno de los regalos más grandes que podés darte.</p>
    `,
  },
  "autocuidado-emocional": {
    title: "Pequeños actos de autocuidado que transforman tu día",
    image: blogAutocuidado,
    readTime: "3 min",
    category: "Bienestar",
    content: `
      <p class="lead">Cuando escuchamos "autocuidado", muchas veces pensamos en spas, vacaciones o actividades que requieren tiempo y dinero. Pero el autocuidado emocional real está en los pequeños gestos cotidianos que hacemos para nutrir nuestro bienestar interior.</p>

      <h2>¿Qué es el autocuidado emocional?</h2>
      <p>El autocuidado emocional se refiere a las acciones conscientes que tomamos para cuidar nuestra salud mental y emocional. No se trata de lujos o recompensas ocasionales, sino de prácticas regulares que nos ayudan a mantenernos equilibrados y conectados con nosotros mismos.</p>
      <p>Es aprender a escucharte, a respetar tus límites y a darte lo que necesitás en cada momento.</p>

      <h2>¿Qué pequeños gestos pueden generar un gran impacto?</h2>
      <p>A veces, los actos más simples son los más poderosos. Tomarte unos minutos por la mañana para respirar antes de empezar el día. Permitirte decir "no" cuando algo no te hace bien. Llamar a alguien que te hace sentir acompañado/a.</p>
      <p>También puede ser tan simple como hacer una pausa cuando sentís que tu mente está agotada, o darte permiso de sentir lo que estás sintiendo sin juzgarlo.</p>

      <h2>¿Cómo crear pequeños rituales?</h2>
      <p>Los rituales nos dan estructura y nos ayudan a incorporar el autocuidado en nuestra vida diaria. Puede ser una taza de té por la tarde, un paseo después del trabajo, o unos minutos de escritura antes de dormir.</p>
      <p>Lo importante no es qué hagas, sino que sea algo que te conecte con vos y que puedas mantener de manera consistente. Los pequeños hábitos, practicados regularmente, generan cambios profundos.</p>

      <h2>¿Cómo escuchar tus necesidades?</h2>
      <p>Una parte fundamental del autocuidado es aprender a escucharte. ¿Qué necesitás hoy? A veces será movimiento, otras veces será descanso. A veces será compañía, otras veces será soledad.</p>
      <p>No existe una fórmula universal de autocuidado que funcione para todos. Tu camino es único, y parte del proceso es descubrir qué es lo que realmente te nutre.</p>

      <h2>Reflexión final</h2>
      <p>El autocuidado no es egoísta ni un lujo. Es una necesidad fundamental para poder funcionar, relacionarnos y disfrutar de la vida. No esperes a estar agotado/a para empezar a cuidarte. Los pequeños actos de hoy construyen el bienestar del mañana.</p>
    `,
  },
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPostsContent[postId as keyof typeof blogPostsContent];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-28 section-padding">
          <div className="container-therapy text-center">
            <h1 className="font-serif text-3xl text-foreground mb-4">
              Artículo no encontrado
            </h1>
            <Link to="/blog" className="text-primary hover:underline">
              Volver al blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <article className="section-padding">
          <div className="container-therapy max-w-3xl">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} de lectura
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Article content */}
            <div 
              className="max-w-none text-muted-foreground text-base leading-relaxed
                [&_.lead]:text-lg [&_.lead]:text-foreground [&_.lead]:font-medium [&_.lead]:mb-8
                [&_h2]:font-serif [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:lg:text-4xl [&_h2]:font-bold [&_h2]:leading-tight
                [&_p]:mb-5 [&_p]:text-base [&_p]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-12 p-8 bg-sage-light rounded-2xl text-center">
              <h3 className="font-serif text-2xl text-foreground mb-3">
                ¿Te gustaría hablar sobre esto?
              </h3>
              <p className="text-muted-foreground mb-6">
                Si algo de lo que leíste resonó con vos, estoy aquí para acompañarte.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-primary gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbeme por WhatsApp
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
