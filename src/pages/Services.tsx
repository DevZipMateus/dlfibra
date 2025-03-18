
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import { CheckCircle, ArrowRight, FileText, Calculator, Briefcase, Building2, ScaleIcon, FileCheck, Coins, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Workaround for missing ScaleIcon
const Scale = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8 3-6 8h4v10h8V11h4l-6-8Z" />
    <path d="M12 3v18" />
  </svg>
);

const serviceDetails = [
  {
    id: 1,
    title: "Contabilidade Completa",
    description: "Nossos serviços contábeis são adaptados às necessidades específicas da sua empresa, garantindo conformidade legal, precisão e transparência.",
    icon: Calculator,
    features: [
      "Lançamentos e conciliações contábeis",
      "Elaboração de balancetes mensais",
      "Demonstrações contábeis anuais",
      "Balanço patrimonial",
      "Demonstração de resultado do exercício",
      "Análise de demonstrações financeiras",
      "Controle de ativos e depreciações",
      "Gestão de contas a pagar e receber"
    ]
  },
  {
    id: 2,
    title: "Serviços Fiscais",
    description: "Nossa equipe fiscal mantém sua empresa em conformidade com as obrigações tributárias, evitando penalidades e identificando oportunidades de economia.",
    icon: FileText,
    features: [
      "Apuração e declaração de impostos",
      "Emissão e gestão de notas fiscais",
      "Obrigações acessórias (DCTF, SPED, etc.)",
      "Planejamento tributário",
      "Parcelamento de débitos fiscais",
      "Consultoria em regimes tributários",
      "Representação junto a órgãos fiscais",
      "Orientação em fiscalizações"
    ]
  },
  {
    id: 3,
    title: "Abertura de Empresas",
    description: "Simplificamos o processo de abertura da sua empresa, cuidando de toda a burocracia e orientando sobre a melhor estrutura para seu negócio.",
    icon: Briefcase,
    features: [
      "Elaboração de contrato social",
      "Registro na Junta Comercial",
      "Obtenção de CNPJ",
      "Inscrições municipais e estaduais",
      "Alvarás e licenças de funcionamento",
      "Cadastros em órgãos reguladores",
      "Orientação sobre regime tributário",
      "Planejamento societário e sucessório"
    ]
  },
  {
    id: 4,
    title: "Departamento Societário",
    description: "Cuidamos de todos os aspectos legais relacionados à estrutura societária da sua empresa, garantindo segurança jurídica e conformidade.",
    icon: Building2,
    features: [
      "Alterações contratuais",
      "Atas de assembleias e reuniões",
      "Registro de filiais",
      "Transformação de tipos societários",
      "Incorporações e fusões",
      "Cisões e reorganizações societárias",
      "Encerramento de empresas",
      "Consultoria em governança corporativa"
    ]
  },
  {
    id: 5,
    title: "Departamento Pessoal",
    description: "Nossa equipe de departamento pessoal cuida de todos os processos relacionados aos seus colaboradores, garantindo conformidade trabalhista e previdenciária.",
    icon: FileCheck,
    features: [
      "Folha de pagamento",
      "Admissões e demissões",
      "Férias e 13º salário",
      "Obrigações acessórias (CAGED, RAIS, etc.)",
      "Gestão de benefícios",
      "Cálculo de encargos sociais",
      "Homologações sindicais",
      "Consultoria em legislação trabalhista"
    ]
  },
  {
    id: 6,
    title: "Consultoria Tributária",
    description: "Oferecemos orientação estratégica para otimizar a carga tributária da sua empresa de forma legal e segura, identificando oportunidades de economia.",
    icon: Scale,
    features: [
      "Análise de regimes tributários",
      "Identificação de benefícios fiscais",
      "Recuperação de créditos tributários",
      "Planejamento para reorganizações",
      "Revisão fiscal preventiva",
      "Orientação em processos administrativos",
      "Análise de impactos de novas legislações",
      "Simulações de carga tributária"
    ]
  },
  {
    id: 7,
    title: "Gestão Financeira",
    description: "Auxiliamos na organização e controle das finanças da sua empresa, oferecendo insights valiosos para decisões estratégicas e crescimento sustentável.",
    icon: Coins,
    features: [
      "Controle de fluxo de caixa",
      "Análise de viabilidade de investimentos",
      "Orçamento empresarial",
      "Gestão de custos",
      "Indicadores financeiros",
      "Projeções financeiras",
      "Relatórios gerenciais",
      "Consultoria para captação de recursos"
    ]
  },
  {
    id: 8,
    title: "Contabilidade Consultiva",
    description: "Vamos além dos números, oferecendo análises e insights estratégicos que ajudam a impulsionar o crescimento e o sucesso do seu negócio.",
    icon: LineChart,
    features: [
      "Análise de desempenho financeiro",
      "Identificação de tendências e oportunidades",
      "Apoio na tomada de decisões estratégicas",
      "Avaliação de investimentos",
      "Análise de viabilidade de novos negócios",
      "Estudos de precificação",
      "Gestão de resultados",
      "Consultoria para expansão e crescimento"
    ]
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Nossos Serviços
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Soluções contábeis <span className="text-gradient">inteligentes</span> para cada necessidade
              </h1>
              <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Oferecemos serviços contábeis completos, personalizados para atender às necessidades 
                específicas do seu negócio, desde a abertura da empresa até a contabilidade consultiva.
              </p>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="heading-lg text-center mb-16">Conheça nossos serviços em detalhes</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {serviceDetails.map((service, index) => (
                <div key={service.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="ml-18">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 pl-14">O que incluímos:</h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-14">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="button-primary">
                Solicitar orçamento
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
        <PlansSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Services;
