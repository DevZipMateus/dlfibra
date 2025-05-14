
import { Check, Droplet, Factory, Wrench, WavesIcon } from 'lucide-react';

const features = [{
  icon: Droplet,
  title: "Tanques PRFV",
  description: "Tanques em fibra de vidro com alta durabilidade"
}, {
  icon: WavesIcon,
  title: "Tratamento de Esgoto",
  description: "Estações de tratamento eficientes"
}, {
  icon: Factory,
  title: "Galvanoplastia",
  description: "Soluções específicas para sua indústria"
}, {
  icon: Wrench,
  title: "Peças Sob Medida",
  description: "Projetos personalizados em fibra de vidro"
}];

const AboutSection = () => {
  return <section id="sobre" className="py-16 bg-white">
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-scarlet-100 rounded-full mb-4">
                  <Icon className="text-scarlet-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          
        </div>
      </div>
    </section>;
};

export default AboutSection;
