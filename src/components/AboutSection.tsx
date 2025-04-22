
import { Check, Droplet, Factory, Wrench, WaveSine } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: "Tanques PRFV",
    description: "Tanques em fibra de vidro com alta durabilidade",
  },
  {
    icon: WaveSine,
    title: "Tratamento de Esgoto",
    description: "Estações de tratamento eficientes",
  },
  {
    icon: Factory,
    title: "Galvanoplastia",
    description: "Soluções específicas para sua indústria",
  },
  {
    icon: Wrench,
    title: "Peças Sob Medida",
    description: "Projetos personalizados em fibra de vidro",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dlblue mb-6">
            Sobre a DL FIBRAS
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trabalhamos com excelência em soluções de fibra de vidro, oferecendo produtos de alta qualidade e durabilidade para diversos segmentos industriais e residenciais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-dlblue" />
              </div>
              <h3 className="text-xl font-semibold text-dlblue mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <ul className="space-y-4">
            {[
              "Tanques em PRFV (fibra de vidro)",
              "Estação de tratamento de esgoto e efluentes",
              "Tanques para galvanoplastia",
              "Tanques de água e reservatórios",
              "Piscinas personalizadas",
              "Peças sob medida em fibra de vidro"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
