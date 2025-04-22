
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/lovable-uploads/ac5030d4-3ef3-4a12-af84-1e8720595b64.png" 
                 alt="DL FIBRAS Logo" 
                 className="h-12 md:h-16 w-auto" />
          </a>

          <nav className={`fixed md:relative top-0 ${
            isMenuOpen ? 'right-0' : '-right-full'
          } md:right-0 h-screen md:h-auto w-64 md:w-auto bg-white md:bg-transparent transition-all duration-300 md:transition-none`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-8 md:p-0">
              <li>
                <a href="#home" 
                   className="text-dlblue hover:text-dlblue-light transition-colors"
                   onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" 
                   className="text-dlblue hover:text-dlblue-light transition-colors"
                   onClick={() => setIsMenuOpen(false)}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" 
                   className="text-dlblue hover:text-dlblue-light transition-colors"
                   onClick={() => setIsMenuOpen(false)}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" 
                   className="text-dlblue hover:text-dlblue-light transition-colors"
                   onClick={() => setIsMenuOpen(false)}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className="md:hidden z-50 text-dlblue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
