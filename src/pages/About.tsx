
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import { CheckCircle, Clock, Award, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0,
    professionals: 0
  });
  
  useEffect(() => {
    setIsVisible(true);
    
    // Simple counter animation
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        
        if (newCounts.years < 15) newCounts.years += 1;
        if (newCounts.clients < 350) newCounts.clients += 10;
        if (newCounts.satisfaction < 98) newCounts.satisfaction += 2;
        if (newCounts.professionals < 20) newCounts.professionals += 1;
        
        // Stop the interval when all counts reach their targets
        if (newCounts.years === 15 && newCounts.clients === 350 && 
            newCounts.satisfaction === 98 && newCounts.professionals === 20) {
          clearInterval(interval);
        }
        
        return newCounts;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const milestones = [
    {
      year: "2008",
      title: "Fundação da Empresa",
      description: "Iniciamos nossas atividades com um pequeno escritório e grandes sonhos."
    },
    {
      year: "2012",
      title: "Expansão de Serviços",
      description: "Ampliamos nossa oferta de serviços para incluir consultoria fiscal e tributária."
    },
    {
      year: "2015",
      title: "Novo Escritório",
      description: "Mudamos para um escritório maior para acomodar nossa equipe em crescimento."
    },
    {
      year: "2018",
      title: "Transformação Digital",
      description: "Implementamos tecnologias avançadas para otimizar nossos processos contábeis."
    },
    {
      year: "2023",
      title: "Certificação de Qualidade",
      description: "Recebemos certificação por excelência em serviços contábeis e atendimento ao cliente."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Sobre Nós
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Compromisso com <span className="text-gradient">excelência</span> e resultados
              </h1>
              <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Com mais de 15 anos de experiência, oferecemos soluções contábeis personalizadas 
                e inovadoras para empresas de todos os portes e segmentos.
              </p>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Nossos Números</h2>
              <p className="subtitle mx-auto">
                Resultados que demonstram nosso compromisso com a qualidade e satisfação dos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{counts.years}</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{counts.clients}+</h3>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{counts.satisfaction}%</h3>
                <p className="text-gray-600">Satisfação dos Clientes</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{counts.professionals}</h3>
                <p className="text-gray-600">Profissionais</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Nossa Trajetória</h2>
              <p className="subtitle mx-auto">
                Conheça os marcos importantes da nossa história.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
                
                {/* Timeline items */}
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative z-10 mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:mr-auto md:pr-16 md:pl-0'} md:w-1/2 pl-12`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-8 h-8 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{milestone.year.slice(2)}</span>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <span className="text-sm font-semibold text-blue-600 block mb-2">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Nossos Valores</h2>
              <p className="subtitle mx-auto">
                Princípios que norteiam nossa atuação e relacionamento com os clientes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integridade</h3>
                <p className="text-gray-600">
                  Trabalhamos com transparência e ética em todas as nossas ações, construindo 
                  relacionamentos baseados na confiança e no respeito.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excelência</h3>
                <p className="text-gray-600">
                  Buscamos a excelência em tudo o que fazemos, investindo em tecnologia, 
                  capacitação e processos que garantem a qualidade dos nossos serviços.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 12-4 4-4-4" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compromisso</h3>
                <p className="text-gray-600">
                  Mantemos um compromisso inabalável com os resultados e o sucesso dos 
                  nossos clientes, oferecendo soluções que agregam valor real aos seus negócios.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação</h3>
                <p className="text-gray-600">
                  Estamos sempre em busca de novas soluções e tecnologias que possam 
                  melhorar nossos processos e trazer vantagens competitivas para nossos clientes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <circle cx="12" cy="10" r="2" />
                    <line x1="8" x2="8" y1="2" y2="4" />
                    <line x1="16" x2="16" y1="2" y2="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Acessibilidade</h3>
                <p className="text-gray-600">
                  Mantemos canais de comunicação abertos e eficientes, garantindo que 
                  nossos clientes tenham acesso facilitado às informações e à nossa equipe.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Relacionamento</h3>
                <p className="text-gray-600">
                  Valorizamos o relacionamento próximo e duradouro com nossos clientes, 
                  colaboradores e parceiros, baseado na confiança e no respeito mútuo.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <TeamSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default About;
