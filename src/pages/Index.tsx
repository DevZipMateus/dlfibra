
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="max-w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsGallery />
        <ContactSection />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
