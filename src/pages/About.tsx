
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowRight, Users, Award, History, Target, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Sobre Nós
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Conheça a <span className="text-gradient">ContaConnection</span>
              </h1>
              <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Somos um escritório de contabilidade com mais de 15 anos de experiência, 
                dedicados a oferecer soluções contábeis completas e personalizadas para empresas 
                de todos os tamanhos e segmentos.
              </p>
            </div>

            <div className={`mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 ${isVisible ? 'animate-slideUp delay-400' : ''}`}>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe Qualificada</h3>
                <p className="text-gray-600">Profissionais experientes e constantemente atualizados.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excelência</h3>
                <p className="text-gray-600">Comprometimento com a qualidade em todos os serviços.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <History className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tradição</h3>
                <p className="text-gray-600">Mais de 15 anos de experiência no mercado contábil.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Foco no Cliente</h3>
                <p className="text-gray-600">Soluções personalizadas para cada necessidade.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="heading-lg text-center mb-12">Nossa História</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="rounded-xl overflow-hidden h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt="Fundação da ContaConnection" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Fundação</h3>
                    <p className="text-gray-600 mb-4">
                      A ContaConnection nasceu em 2008 do sonho de oferecer serviços contábeis acessíveis e de qualidade para empreendedores e empresas em crescimento. Começamos com uma pequena equipe e um grande propósito: facilitar a vida contábil dos nossos clientes.
                    </p>
                    <p className="text-gray-600">
                      Desde o início, adotamos uma abordagem consultiva, tratando cada cliente como único e oferecendo soluções personalizadas para suas necessidades específicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3 order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Crescimento e Expansão</h3>
                    <p className="text-gray-600 mb-4">
                      Ao longo dos anos, expandimos nossa equipe e nossos serviços, sempre mantendo nosso compromisso com a qualidade e a atenção personalizada. Desenvolvemos expertise em diversos setores e passamos a atender empresas de todos os portes.
                    </p>
                    <p className="text-gray-600">
                      Em 2015, iniciamos nosso processo de transformação digital, implementando tecnologias avançadas para oferecer serviços ainda mais eficientes e acessíveis aos nossos clientes.
                    </p>
                  </div>
                  <div className="md:w-1/3 order-1 md:order-2">
                    <div className="rounded-xl overflow-hidden h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                        alt="Crescimento da empresa" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="rounded-xl overflow-hidden h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" 
                        alt="ContaConnection hoje" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Onde Estamos Hoje</h3>
                    <p className="text-gray-600 mb-4">
                      Hoje, a ContaConnection é reconhecida como uma referência no setor contábil, unindo tradição e inovação para oferecer os melhores serviços aos nossos clientes. Contamos com uma equipe multidisciplinar de mais de 30 profissionais dedicados.
                    </p>
                    <p className="text-gray-600">
                      Nosso compromisso com a qualidade, a ética e a satisfação do cliente permanece o mesmo desde o primeiro dia, e continua a impulsionar tudo o que fazemos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="heading-lg text-center mb-12">Nossos Valores</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confiabilidade</h3>
                <p className="text-gray-600">
                  Construímos relacionamentos baseados na confiança, integridade e transparência, honrando nossos compromissos e mantendo a confidencialidade das informações dos clientes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excelência</h3>
                <p className="text-gray-600">
                  Buscamos a excelência em tudo o que fazemos, desde a qualidade dos nossos serviços até o atendimento aos clientes, superando expectativas e estabelecendo novos padrões.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação</h3>
                <p className="text-gray-600">
                  Abraçamos a inovação e as novas tecnologias para oferecer soluções mais eficientes e acessíveis, adaptando-nos continuamente às mudanças do mercado.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empatia</h3>
                <p className="text-gray-600">
                  Colocamo-nos no lugar dos nossos clientes, compreendendo suas necessidades e desafios para oferecer um atendimento humanizado e soluções personalizadas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Responsabilidade</h3>
                <p className="text-gray-600">
                  Assumimos responsabilidade pelas nossas ações e decisões, comprometendo-nos com práticas éticas e sustentáveis em todas as nossas operações.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Crescimento</h3>
                <p className="text-gray-600">
                  Incentivamos o crescimento contínuo dos nossos colaboradores e clientes, investindo em desenvolvimento profissional e estabelecendo parcerias duradouras.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default About;
