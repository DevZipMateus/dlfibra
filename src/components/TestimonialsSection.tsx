
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Elina Santos",
    position: "Diretora da BJT Transportadora",
    quote: "A equipe sempre entrega nossos documentos com pontualidade, além de oferecer um suporte atencioso quando precisamos de ajuda. Recomendo fortemente!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Joel Gomes",
    position: "Administrador da Torque Implementos",
    quote: "O que mais me impressiona é o comprometimento da equipe com a satisfação do cliente. Eles realmente se importam com as necessidades da minha empresa.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "João Meneses",
    position: "Diretor da Ágil Mecânica",
    quote: "O atendimento é prestativo e rápido, sempre esclarecendo minhas dúvidas. Os serviços contábeis são executados com excelência e profissionalismo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-scarlet-50" id="testimonials">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fadeIn">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-4">
            Depoimentos
          </span>
          <h2 className="heading-lg mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="subtitle">
            A satisfação dos nossos clientes é o nosso maior indicador de sucesso.
            Confira os depoimentos de quem já confia em nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] sm:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col md:flex-row gap-8 items-center transition-all duration-700 ease-in-out p-8 glass-card rounded-2xl ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: '400ms' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <Quote className="text-scarlet-300 mb-2 w-10 h-10 mx-auto md:mx-0" />
                  <p className="text-lg text-gray-700 italic mb-4">{testimonial.quote}</p>
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-scarlet-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === activeIndex ? 'bg-scarlet-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
