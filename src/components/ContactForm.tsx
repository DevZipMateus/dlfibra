
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-scarlet-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-4">
            Contato
          </span>
          <h2 className="heading-lg mb-6">
            Entre em contato conosco
          </h2>
          <p className="subtitle">
            Estamos prontos para atender suas necessidades contábeis através dos nossos canais de comunicação.
            Entre em contato por telefone, e-mail ou WhatsApp e retornaremos o mais breve possível.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 animate-slideInRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Nossos Canais de Atendimento</h3>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-scarlet-100 flex items-center justify-center mr-6">
                  <Phone className="w-7 h-7 text-scarlet-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h4>
                  <p className="text-gray-600 text-lg">(11) 4002-8922</p>
                  <p className="text-gray-600 text-lg">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-scarlet-100 flex items-center justify-center mr-6">
                  <Mail className="w-7 h-7 text-scarlet-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h4>
                  <p className="text-gray-600 text-lg">contato@contaconnection.com.br</p>
                  <p className="text-gray-600 text-lg">atendimento@contaconnection.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mr-6">
                  <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-gray-600 text-lg">(11) 98765-4321</p>
                  <p className="text-gray-600 text-lg mb-2">Atendimento rápido para dúvidas e agendamentos</p>
                  <a 
                    href="https://wa.me/551199999999?text=Olá,%20gostaria%20de%20mais%20informações" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary inline-flex items-center"
                  >
                    <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                    Fale conosco pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-scarlet-50 rounded-lg border border-scarlet-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Horário de Atendimento</h4>
              <p className="text-gray-600 text-center text-lg">Segunda a Sexta: 08:00 às 18:00</p>
              <p className="text-gray-600 text-center text-lg">Sábados: 09:00 às 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
