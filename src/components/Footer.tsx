
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
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-800 pt-12 md:pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div>
            <Link to="/" className="text-xl md:text-2xl font-display font-bold text-wine-800 mb-4 block hover:text-wine-600 transition-colors">
              Conta<span className="text-wine-600">Connection</span>
            </Link>
            <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
              Soluções contábeis inteligentes para empresas de todos os portes. Oferecemos serviços de contabilidade digital eficiente e moderna.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: "#", label: "Facebook" },
                { Icon: Instagram, link: "#", label: "Instagram" },
                { Icon: Twitter, link: "#", label: "Twitter" },
                { Icon: Linkedin, link: "#", label: "LinkedIn" }
              ].map(({ Icon, link, label }) => (
                <a 
                  key={label} 
                  href={link} 
                  className="text-wine-700 hover:text-wine-500 transition-colors" 
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-wine-700">Links Rápidos</h3>
            <ul className="space-y-2 grid grid-cols-2 md:grid-cols-1">
              {[
                { label: "Início", to: "/" },
                { label: "Sobre Nós", to: "/about" },
                { label: "Serviços", to: "/services" },
                { label: "Contato", to: "/contact" }
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link 
                    to={to} 
                    className="text-gray-700 hover:text-wine-600 transition-colors flex items-center text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-wine-500 rounded-full mr-2 inline-block"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-wine-700">Contato</h3>
            <ul className="space-y-4">
              {[
                { 
                  Icon: Phone, 
                  items: ["(11) 4002-8922"],
                  className: "text-wine-600"
                },
                { 
                  Icon: Mail, 
                  items: ["contato@contaconnection.com.br"],
                  className: "text-wine-600"
                },
                { 
                  Icon: MapPin, 
                  items: [
                    "Avenida Paulista, 1000", 
                    "Bela Vista, São Paulo - SP"
                  ],
                  className: "text-wine-600"
                }
              ].map(({ Icon, items, className }, index) => (
                <li key={index} className="flex items-start">
                  <Icon className={`w-5 h-5 ${className} mr-3 flex-shrink-0 mt-0.5`} />
                  <div>
                    {items.map((item, i) => (
                      <p key={i} className="text-gray-700 text-sm md:text-base">{item}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ContaConnection. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="bg-wine-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-wine-500 transition-colors focus:outline-none focus:ring-2 focus:ring-wine-400 focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
