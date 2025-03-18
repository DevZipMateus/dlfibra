
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada",
        description: "Recebemos sua mensagem e retornaremos em breve.",
        variant: "default",
      });
      
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-4">
            Contato
          </span>
          <h2 className="heading-lg mb-6">
            Entre em contato conosco
          </h2>
          <p className="subtitle">
            Estamos prontos para atender suas necessidades contábeis. Envie-nos uma mensagem
            e retornaremos o mais breve possível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="glass-card rounded-xl p-8 animate-slideInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors resize-none"
                  placeholder="Descreva como podemos ajudar..."
                />
              </div>
              
              <div className="text-sm text-gray-500">
                Seus dados pessoais coletados neste formulário têm por finalidade o retorno à sua mensagem 
                e não serão utilizados para outra finalidade.
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensagem
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de contato</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 4002-8922</p>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@contaconnection.com.br</p>
                  <p className="text-gray-600">atendimento@contaconnection.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">Avenida Paulista, 1000</p>
                  <p className="text-gray-600">Bela Vista, São Paulo - SP</p>
                  <p className="text-gray-600">CEP: 01310-100</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Horário de Atendimento</h4>
              <p className="text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
              <p className="text-gray-600">Sábados: 09:00 às 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
