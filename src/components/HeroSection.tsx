
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-scarlet-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-700 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
            Contabilidade Digital para sua Empresa
          </span>
          <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
            Soluções contábeis <span className="text-gradient">simplificadas</span> para seu negócio
          </h1>
          <p className={`subtitle mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
            Entre em contato agora mesmo e solicite um orçamento para sua empresa.
            Oferecemos serviços contábeis de forma simples e eficiente.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 opacity-0 ${isVisible ? 'animate-slideDown delay-300' : ''}`}>
            <Link to="/contact" className="button-primary group">
              Solicitar Orçamento
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="button-secondary">
              Nossos serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
