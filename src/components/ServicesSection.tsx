
import { useEffect, useRef } from 'react';
import { Calculator, FileText, Briefcase, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    delay: 100
  },
  {
    title: "Abertura de Empresa",
    description: "Auxiliamos na estruturação societária adequada ao seu negócio, visando economia tributária e eficiência operacional.",
    icon: Briefcase,
    delay: 200
  },
  {
    title: "Societário",
    description: "Nossos serviços societários abrangem todas as questões legais junto a órgãos públicos e privados para sua tranquilidade.",
    icon: Building2,
    delay: 300
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
          
          // Animate cards sequentially
          const cards = document.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fadeIn');
              card.classList.remove('opacity-0');
            }, index * 100);
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
    <section className="py-16 bg-gradient-to-b from-white to-scarlet-50" id="services">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-700 mb-3">
            Nossos Serviços
          </span>
          <h2 className="heading-lg mb-4">
            Serviços contábeis <span className="text-gradient">completos</span> para o seu negócio
          </h2>
          <p className="subtitle">
            Oferecemos soluções contábeis personalizadas para empresas de todos os portes,
            com foco em qualidade, eficiência e atendimento humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card p-6 rounded-xl transition-all duration-300",
                "bg-white border border-scarlet-100 hover:border-scarlet-300",
                "hover:shadow-md hover:-translate-y-1 flex flex-col items-start"
              )}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-scarlet-100 to-scarlet-200 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-scarlet-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/services" className="mt-auto">
                <Button variant="link" className="p-0 h-auto">
                  Saiba mais
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
