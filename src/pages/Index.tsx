
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <PlansSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
