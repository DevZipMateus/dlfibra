
import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: "Maria Silva",
    position: "Diretora",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    delay: 0
  },
  {
    name: "Joel Antônio",
    position: "Contador",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    delay: 200
  },
  {
    name: "Jéssica Souza",
    position: "Contadora",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
    delay: 400
  },
  {
    name: "Luiz Ricardo",
    position: "Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    delay: 600
  }
];

const TeamSection = () => {
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
    <section className="section-padding bg-white" id="team">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-duration-700">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-3">
            Nossa Equipe
          </span>
          <h2 className="heading-lg mb-4">
            Profissionais dedicados ao seu sucesso
          </h2>
          <p className="subtitle">
            Conheça a equipe que trabalha diariamente para garantir a excelência nos serviços
            prestados e o crescimento sustentável do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center opacity-0 animate-duration-700"
              style={{ animationDelay: `${member.delay}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-3 w-full aspect-square shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-scarlet-600 font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
