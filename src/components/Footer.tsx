
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 pb-12">
          <div>
            <Link to="/" className="text-xl font-display font-bold text-white mb-6 block">
              Conta<span className="text-blue-400">Connection</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Soluções contábeis inteligentes para empresas de todos os portes. Oferecemos serviços de contabilidade digital eficiente e moderna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/useful-links" className="text-gray-400 hover:text-white transition-colors">
                  Agenda Tributária
                </Link>
              </li>
              <li>
                <Link to="/useful-links" className="text-gray-400 hover:text-white transition-colors">
                  Tabelas Práticas
                </Link>
              </li>
              <li>
                <Link to="/useful-links" className="text-gray-400 hover:text-white transition-colors">
                  Formulários Diversos
                </Link>
              </li>
              <li>
                <Link to="/useful-links" className="text-gray-400 hover:text-white transition-colors">
                  Consulta CNPJ
                </Link>
              </li>
              <li>
                <Link to="/useful-links" className="text-gray-400 hover:text-white transition-colors">
                  Calculadoras
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">(11) 4002-8922</p>
                  <p className="text-gray-400">(11) 98765-4321</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">contato@contaconnection.com.br</p>
                  <p className="text-gray-400">atendimento@contaconnection.com.br</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">
                  Avenida Paulista, 1000<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ContaConnection. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors focus:outline-none"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
