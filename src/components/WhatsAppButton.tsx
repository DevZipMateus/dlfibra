
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/551922277252?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
