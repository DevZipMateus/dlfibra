
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
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <div className="py-2">
          <ServicesSection />
        </div>
        <div className="py-2">
          <AboutSection />
        </div>
        <div className="py-2">
          <TeamSection />
        </div>
        <div className="py-2">
          <PlansSection />
        </div>
        <div className="py-2">
          <TestimonialsSection />
        </div>
        <div className="py-2">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
