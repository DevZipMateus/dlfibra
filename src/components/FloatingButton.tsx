
import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, Share2 } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-lg p-4 w-64 border border-gray-100 animate-fadeIn">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Como podemos ajudar?</h3>
          
          <div className="space-y-3">
            <a 
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium block">WhatsApp</span>
                <span className="text-sm text-gray-500">Resposta em instantes</span>
              </div>
            </a>
            
            <a 
              href="tel:+551140028922"
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium block">Ligar</span>
                <span className="text-sm text-gray-500">(11) 4002-8922</span>
              </div>
            </a>
            
            <a 
              href="mailto:contato@contaconnection.com.br"
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mr-3">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium block">Email</span>
                <span className="text-sm text-gray-500">Resposta em 24h</span>
              </div>
            </a>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none transform transition-all duration-300 ${
          isOpen ? 'bg-gray-800 rotate-45' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label={isOpen ? "Fechar opções de contato" : "Abrir opções de contato"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Share2 className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
