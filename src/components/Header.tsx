import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/59170001773";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-1" 
          : "bg-transparent py-2"
      }`}
    >
      <div className="container-therapy px-6">
        <nav className="flex items-center justify-between">
          {/* Logo - horizontally scrollable on mobile */}
          <div className="flex-1 min-w-0 overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <a href="/" className="inline-flex items-center">
              <img
                src="/lovable-uploads/logo-jeanine.png"
                alt="Jeanine Justiniano Psicóloga"
                className="h-16 sm:h-20 md:h-20 lg:h-24 w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[360px] object-contain shrink-0"
              />
            </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("a-quien-acompano")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              A quién acompaño
            </button>
            <button
              onClick={() => scrollToSection("enfoque")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Enfoque
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mí
            </button>
            <a
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground rounded-full px-6 hover:bg-primary/90"
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in bg-background/98 backdrop-blur-md rounded-lg shadow-lg mx-2 px-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("a-quien-acompano")}
                className="text-left text-foreground font-medium hover:text-primary transition-colors py-3 border-b border-border/50"
              >
                A quién acompaño
              </button>
              <button
                onClick={() => scrollToSection("enfoque")}
                className="text-left text-foreground font-medium hover:text-primary transition-colors py-3 border-b border-border/50"
              >
                Enfoque
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-foreground font-medium hover:text-primary transition-colors py-3 border-b border-border/50"
              >
                Sobre mí
              </button>
              <a
                href="/blog"
                className="text-left text-foreground font-medium hover:text-primary transition-colors py-3 border-b border-border/50"
              >
                Blog
              </a>
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-primary w-full mt-2"
              >
                Escríbeme
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
