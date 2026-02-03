import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, ArrowRight } from "lucide-react";

import blogAnxiety from "@/assets/blog-anxiety.jpg";
import blogAutoestima from "@/assets/blog-autoestima.jpg";
import blogAutocuidado from "@/assets/blog-autocuidado.jpg";

const blogPosts = [
  {
    id: "ansiedad-y-estres",
    title: "Entendiendo la ansiedad: no sos tu mente acelerada",
    excerpt: "La ansiedad puede sentirse abrumadora, pero hay formas de comprenderla y acompañarla. Aprendé a reconocer sus señales y a cuidarte.",
    image: blogAnxiety,
    readTime: "4 min",
    category: "Ansiedad",
  },
  {
    id: "autoestima-y-autocritica",
    title: "Cuando la autocrítica se vuelve tu peor enemigo",
    excerpt: "Todos tenemos una voz interna, pero cuando es demasiado dura, puede afectar cómo nos sentimos. Exploremos juntos cómo tratarte con más compasión.",
    image: blogAutoestima,
    readTime: "3 min",
    category: "Autoestima",
  },
  {
    id: "autocuidado-emocional",
    title: "Pequeños actos de autocuidado que transforman tu día",
    excerpt: "El autocuidado no tiene que ser complicado. A veces, los gestos más simples son los que más nos nutren emocionalmente.",
    image: blogAutocuidado,
    readTime: "3 min",
    category: "Bienestar",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="section-padding gradient-hero">
          <div className="container-therapy text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reflexiones, herramientas y acompañamiento para tu bienestar emocional.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container-therapy">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer más <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
