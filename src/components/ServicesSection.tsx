
import { useEffect, useRef } from 'react';
import { Calculator, FileText, Briefcase, Building2 } from 'lucide-react';

const services = [
  {
    title: "Contabilidade",
    description: "Nossos serviços de contabilidade são especializados para atender às necessidades legais da sua empresa com precisão e pontualidade.",
    icon: Calculator,
    delay: 0
  },
  {
    title: "Fiscal",
    description: "Oferecemos assessoria completa para o cumprimento de todas as obrigações fiscais da sua empresa, minimizando riscos de penalidades.",
    icon: FileText,
    delay: 200
  },
  {
    title: "Abertura de Empresa",
    description: "Auxiliamos na estruturação societária adequada ao seu negócio, visando economia tributária e eficiência operacional.",
    icon: Briefcase,
    delay: 400
  },
  {
    title: "Societário",
    description: "Nossos serviços societários abrangem todas as questões legais junto a órgãos públicos e privados para sua tranquilidade.",
    icon: Building2,
    delay: 600
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
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
    <section className="section-padding bg-white" id="services">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-duration-700">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-4">
            Nossos Serviços
          </span>
          <h2 className="heading-lg mb-6">
            Serviços contábeis completos para o seu negócio
          </h2>
          <p className="subtitle">
            Oferecemos soluções contábeis personalizadas para empresas de todos os portes,
            com foco em qualidade, eficiência e atendimento humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card p-6 flex flex-col items-start opacity-0`}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-scarlet-100 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-scarlet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
