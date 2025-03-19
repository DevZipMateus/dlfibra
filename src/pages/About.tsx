
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import { CheckCircle, Clock, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0,
    professionals: 0
  });
  
  useEffect(() => {
    setIsVisible(true);
    
    // Simple counter animation
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        
        if (newCounts.years < 15) newCounts.years += 1;
        if (newCounts.clients < 350) newCounts.clients += 10;
        if (newCounts.satisfaction < 98) newCounts.satisfaction += 2;
        if (newCounts.professionals < 20) newCounts.professionals += 1;
        
        // Stop the interval when all counts reach their targets
        if (newCounts.years === 15 && newCounts.clients === 350 && 
            newCounts.satisfaction === 98 && newCounts.professionals === 20) {
          clearInterval(interval);
        }
        
        return newCounts;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-scarlet-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-700 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Sobre Nós
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Nossa <span className="text-gradient">história</span> e valores
              </h1>
              <p className={`subtitle mx-auto mb-6 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Com mais de 15 anos de experiência, oferecemos soluções contábeis simplificadas 
                e eficientes para empresas de todos os portes.
              </p>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Nossos Números</h2>
              <p className="subtitle mx-auto">
                Resultados que demonstram nosso compromisso
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.years}</h3>
                <p className="text-gray-600">Anos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.clients}+</h3>
                <p className="text-gray-600">Clientes</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.satisfaction}%</h3>
                <p className="text-gray-600">Satisfação</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.professionals}</h3>
                <p className="text-gray-600">Profissionais</p>
              </div>
            </div>
          </div>
        </section>
        
        <TeamSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default About;
