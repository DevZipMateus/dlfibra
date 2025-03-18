
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={`bg-blue-600 text-white transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="mailto:contato@contaconnection.com.br" className="flex items-center text-sm hover:text-blue-100 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              <span>contato@contaconnection.com.br</span>
            </a>
            <a href="tel:+551140028922" className="flex items-center text-sm hover:text-blue-100 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              <span>(11) 4002-8922</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-blue-100 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-100 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-100 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-100 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-display font-bold text-blue-600">
            Conta<span className="text-gray-800">Connection</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Sobre Nós
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Serviços
            </Link>
            <Link to="/news" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Notícias
            </Link>
            <Link to="/useful-links" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Links Úteis
            </Link>
            <Link to="/contact" className="button-primary !py-2 !px-4 text-sm">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '3.5rem' }}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          <Link 
            to="/" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre Nós
          </Link>
          <Link 
            to="/services" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            to="/news" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Notícias
          </Link>
          <Link 
            to="/useful-links" 
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Links Úteis
          </Link>
          <Link 
            to="/contact" 
            className="button-primary text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </Link>
          <div className="pt-6 border-t border-gray-100 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
