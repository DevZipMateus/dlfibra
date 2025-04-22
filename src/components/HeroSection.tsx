import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="home" className="pt-28 md:pt-32 pb-16 bg-[#e8f8ff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left pr-0 md:pr-8">
            <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
            </div>
            
            <h1 className={`text-3xl md:text-5xl font-bold text-dlblue mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Mais que tanques, <br />
              <span className="text-dlblue-light">soluções inteligentes!</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-gray-600 mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Especialistas em soluções de fibra de vidro para sua empresa
            </p>
            
            <a href="https://wa.me/5519987639094?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Phone className="w-5 h-5 mr-2" />
              Solicite um orçamento
            </a>
          </div>
          
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/lovable-uploads/ac5030d4-3ef3-4a12-af84-1e8720595b64.png" alt="DL FIBRAS Logo" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;