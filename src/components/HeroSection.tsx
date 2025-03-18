
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
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
            Contabilidade Digital para sua Empresa
          </span>
          <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
            Soluções contábeis <span className="text-gradient">inteligentes</span> para empresas de todos os portes
          </h1>
          <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
            Entre em contato agora mesmo e solicite um orçamento para sua empresa.
            Oferecemos um serviço de contabilidade digital eficiente e moderno.
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
        
        <div className={`mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 opacity-0 ${isVisible ? 'animate-slideUp delay-400' : ''}`}>
          <div className="glass-card rounded-xl p-6 card-hover">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Agenda Tributária</h3>
            <p className="text-gray-600 mb-4">Informações atualizadas sobre obrigações fiscais estaduais, federais e trabalhistas.</p>
            <Link to="/useful-links" className="button-text inline-flex items-center">
              Saiba mais
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="glass-card rounded-xl p-6 card-hover">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tabelas Práticas</h3>
            <p className="text-gray-600 mb-4">Tabelas para recolhimentos em atraso, Simples Nacional, IR e alíquotas.</p>
            <Link to="/useful-links" className="button-text inline-flex items-center">
              Saiba mais
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="glass-card rounded-xl p-6 card-hover">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Formulários Diversos</h3>
            <p className="text-gray-600 mb-4">Acesso a termos de rescisão, homologação, quitação e outros documentos.</p>
            <Link to="/useful-links" className="button-text inline-flex items-center">
              Saiba mais
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
