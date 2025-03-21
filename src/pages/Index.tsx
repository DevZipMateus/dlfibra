
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
        <div id="hero">
          <HeroSection />
        </div>
        <div className="bg-white" id="services">
          <ServicesSection />
        </div>
        <div className="bg-scarlet-50" id="about">
          <AboutSection />
        </div>
        <div className="bg-white" id="team">
          <TeamSection />
        </div>
        <div className="bg-scarlet-50" id="plans">
          <PlansSection />
        </div>
        <div className="bg-white" id="testimonials">
          <TestimonialsSection />
        </div>
        <div className="bg-scarlet-50" id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
