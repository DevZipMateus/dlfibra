
import { Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-6 md:py-10 bg-gradient-to-b from-scarlet-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-2">
            Contato
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
            Entre em contato conosco
          </h2>
          <p className="text-sm md:text-lg text-gray-600">
            Estamos prontos para atender suas necessidades contábeis através dos nossos canais de comunicação.
            Entre em contato por telefone, e-mail ou WhatsApp e retornaremos o mais breve possível.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-4 md:p-6 animate-slideInRight">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Nossos Canais de Atendimento</h3>
            
            <div className="space-y-5 md:space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-scarlet-100 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                  <Phone className="w-5 h-5 text-scarlet-600" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-base md:text-lg text-gray-600">(19) 22277-2522</p>
                  <p className="text-base md:text-lg text-gray-600">(19) 98763-9094</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-scarlet-100 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                  <Mail className="w-5 h-5 text-scarlet-600" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-base md:text-lg text-gray-600">contato@contaconnection.com.br</p>
                  <p className="text-base md:text-lg text-gray-600">atendimento@contaconnection.com.br</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                  <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-base md:text-lg text-gray-600">(19) 22277-2522</p>
                  <p className="text-base md:text-lg text-gray-600 mb-2">Atendimento rápido para dúvidas e agendamentos</p>
                  <a 
                    href="https://wa.me/5519222772522?text=Olá,%20gostaria%20de%20mais%20informações" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary inline-flex items-center justify-center w-full md:w-auto"
                  >
                    <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                    Fale conosco pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-3 md:p-4 bg-scarlet-50 rounded-lg border border-scarlet-100">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Horário de Atendimento</h4>
              <p className="text-sm md:text-base text-center text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
              <p className="text-sm md:text-base text-center text-gray-600">Sábados: 09:00 às 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
