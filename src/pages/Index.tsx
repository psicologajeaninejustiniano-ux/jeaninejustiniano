import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import SupportAreasSection from "@/components/SupportAreasSection";
import TherapyApproachSection from "@/components/TherapyApproachSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhoIHelpSection />
        <SupportAreasSection />
        <TherapyApproachSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
