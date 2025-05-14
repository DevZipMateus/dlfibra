
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-dlblue mb-6">
                Entre em Contato
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-dlblue mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Telefone/WhatsApp</p>
                    <a href="tel:+5519222772522" className="text-gray-600 hover:text-dlblue">
                      (19) 22277-2522
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-dlblue mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">E-mail</p>
                    <a href="mailto:dlfibras@outlook.com" className="text-gray-600 hover:text-dlblue">
                      dlfibras@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-dlblue mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Endereço</p>
                    <p className="text-gray-600">
                      Rua Flaminio Barbosa Neves, 158
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3567789856544!2d-47.0622193!3d-22.9019444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f3b8f7f7d7%3A0x1b5cb1d37d47b9a0!2sRua%20Flaminio%20Barbosa%20Neves%2C%20158!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
