
import { WavesIcon, Factory, Droplet, Container, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: WavesIcon,
    title: "Estações de Tratamento",
    description: "Soluções completas para tratamento de esgoto e efluentes industriais",
    projectTab: "estacao",
  },
  {
    icon: Factory,
    title: "Tanques para Galvanoplastia",
    description: "Tanques especializados para processos de galvanoplastia",
    projectTab: "tanques",
  },
  {
    icon: Droplet,
    title: "Tanques de Água",
    description: "Reservatórios e tanques para armazenamento de água",
    projectTab: "reservatorio",
  },
  {
    icon: Container,
    title: "Piscinas em Fibra",
    description: "Piscinas personalizadas em fibra de vidro",
    projectTab: "estacao", // Default to estacao since there isn't a specific tab for this
  },
  {
    icon: Wrench,
    title: "Peças sob Medida",
    description: "Desenvolvimento de peças especiais em fibra de vidro",
    projectTab: "estacao", // Default to estacao since there isn't a specific tab for this
  },
];

const ServicesSection = () => {
  // Function to scroll to project tab
  const scrollToProjectTab = (tabId: string) => {
    // First navigate to the projects section
    const projectsSection = document.getElementById('projetos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Then try to activate the correct tab
      setTimeout(() => {
        // Find the tab button and click it
        const tabButton = document.querySelector(`[data-value="${tabId}"]`);
        if (tabButton && tabButton instanceof HTMLElement) {
          tabButton.click();
        }
      }, 500); // Give it time to scroll first
    }
  };

  return (
    <section id="servicos" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dlblue mb-6">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Oferecemos soluções completas em fibra de vidro para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => scrollToProjectTab(service.projectTab)}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <service.icon className="w-6 h-6 text-dlblue" />
              </div>
              <h3 className="text-xl font-semibold text-dlblue mb-3 text-center md:text-left">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
