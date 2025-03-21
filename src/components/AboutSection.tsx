
import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const advantages = [
  "Mais de 15 anos de experiência",
  "Equipe altamente qualificada",
  "Atendimento personalizado",
  "Tecnologia de ponta",
  "Segurança garantida",
  "Consultoria estratégica"
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-element');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-fadeIn');
            }, i * 200);
          });
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-scarlet-50" id="about">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-element">
              <span className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-scarlet-100 text-scarlet-700 mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Serviços contábeis <span className="text-scarlet-700">simplificados</span> para o seu negócio
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Desde nossa fundação, nos dedicamos a oferecer serviços contábeis de qualidade com simplicidade 
                e transparência para empresas de todos os tamanhos. Nossa missão é transformar a 
                complexidade contábil em soluções claras e eficientes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <Card key={index} className="opacity-0 animate-element border-scarlet-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-scarlet-600 mt-0.5 flex-shrink-0" />
                      <p className="ml-3 text-gray-700 font-medium">{advantage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-element order-first md:order-last">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-28 h-28 bg-scarlet-200 rounded-lg opacity-50 z-0"></div>
              <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-scarlet-100 rounded-lg opacity-30 z-0"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg z-10">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Equipe de contabilidade" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
