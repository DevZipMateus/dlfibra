
import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Maria Silva",
    position: "Diretora",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    email: "maria@contaconnection.com.br",
    linkedin: "https://linkedin.com",
    delay: 0
  },
  {
    name: "Joel Antônio",
    position: "Contador",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    email: "joel@contaconnection.com.br",
    linkedin: "https://linkedin.com",
    delay: 200
  },
  {
    name: "Jéssica Souza",
    position: "Contadora",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
    email: "jessica@contaconnection.com.br",
    linkedin: "https://linkedin.com",
    delay: 400
  },
  {
    name: "Luiz Ricardo",
    position: "Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    email: "luiz@contaconnection.com.br",
    linkedin: "https://linkedin.com",
    delay: 600
  }
];

const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-wine-50 to-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-wine-100 text-wine-600 mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Profissionais dedicados ao seu <span className="text-wine-700">sucesso</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça a equipe que trabalha diariamente para garantir a excelência nos serviços
            prestados e o crescimento sustentável do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border-wine-50 overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden w-full aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="flex gap-3 p-4 mb-2">
                      <a href={`mailto:${member.email}`} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-wine-600 hover:bg-wine-50 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-wine-600 hover:bg-wine-50 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center bg-wine-50">
                  <h3 className="text-xl font-bold text-wine-800">{member.name}</h3>
                  <p className="text-wine-600 font-medium">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
