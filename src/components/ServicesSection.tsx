import { WavesIcon, Factory, Droplet, Container, Wrench } from 'lucide-react';

const services = [
  {
    icon: WavesIcon,
    title: "Estações de Tratamento",
    description: "Soluções completas para tratamento de esgoto e efluentes industriais",
  },
  {
    icon: Factory,
    title: "Tanques para Galvanoplastia",
    description: "Tanques especializados para processos de galvanoplastia",
  },
  {
    icon: Droplet,
    title: "Tanques de Água",
    description: "Reservatórios e tanques para armazenamento de água",
  },
  {
    icon: Container,
    title: "Piscinas em Fibra",
    description: "Piscinas personalizadas em fibra de vidro",
  },
  {
    icon: Wrench,
    title: "Peças sob Medida",
    description: "Desenvolvimento de peças especiais em fibra de vidro",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dlblue mb-6">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em fibra de vidro para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-dlblue" />
              </div>
              <h3 className="text-xl font-semibold text-dlblue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
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
