
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import NewsSection from "@/components/NewsSection";
import { Search, Calendar, ArrowRight, User } from "lucide-react";
import { useState, useEffect } from "react";

// Importe news data from the NewsSection component
const newsItems = [
  {
    id: 1,
    title: "Como as taxas de juros afetam os Pequenos Negócios",
    excerpt: "As taxas de juros têm um impacto significativo nas micro e pequenas empresas. Entenda como se preparar para cenários de alta ou baixa.",
    image: "/placeholder.svg",
    date: "15 de Maio, 2023",
    author: "Maria Silva",
    category: "Economia",
    content: `
      <p>As micro e pequenas empresas são particularmente sensíveis às flutuações nas taxas de juros, pois frequentemente dependem de financiamentos para suas operações e expansões. Quando as taxas sobem, o custo do capital aumenta, reduzindo a capacidade de investimento e potencialmente afetando a lucratividade.</p>
      
      <h3>Impactos diretos das altas taxas</h3>
      <p>O aumento das taxas de juros eleva o custo de empréstimos e financiamentos, o que pode comprometer o fluxo de caixa das pequenas empresas. Isso pode levar a uma desaceleração nos investimentos em novos equipamentos, contratações ou expansão de atividades.</p>
      
      <h3>Estratégias para períodos de alta</h3>
      <p>Durante períodos de taxas de juros elevadas, é fundamental que os pequenos negócios revisem seus planos financeiros, priorizem a redução de dívidas existentes e busquem alternativas de financiamento com custos mais competitivos, como linhas específicas para MPEs ou programas governamentais de incentivo.</p>
      
      <h3>Oportunidades em cenários de baixa</h3>
      <p>Por outro lado, quando as taxas de juros diminuem, criam-se oportunidades para refinanciamento de dívidas em condições mais favoráveis e para a realização de investimentos estratégicos que estavam represados.</p>
      
      <h3>Planejamento é essencial</h3>
      <p>Independentemente do cenário, o planejamento financeiro sólido é essencial. Manter uma reserva de emergência, diversificar fontes de receita e estar atento às tendências do mercado são práticas que ajudam a proteger o negócio das oscilações econômicas.</p>
    `
  },
  {
    id: 2,
    title: "Bancos passam a oferecer parcelamento do saldo total",
    excerpt: "Uma nova opção de parcelamento do saldo total é a mais nova aposta do setor de pagamentos para lidar com taxas de juros elevadas.",
    image: "/placeholder.svg",
    date: "10 de Maio, 2023",
    author: "João Paulo",
    category: "Finanças",
    content: `
      <p>Em um contexto de juros elevados, instituições financeiras têm buscado alternativas para oferecer maior flexibilidade aos clientes. Uma dessas inovações é o parcelamento do saldo total da fatura do cartão de crédito, que permite ao consumidor dividir o valor total devido em parcelas fixas, com taxas de juros mais baixas que as do rotativo.</p>
      
      <h3>Como funciona</h3>
      <p>O parcelamento do saldo total permite que o cliente transforme o valor integral da fatura em um financiamento com parcelas fixas, juros menores que os do rotativo e prazo definido para quitação, geralmente entre 6 e 24 meses, dependendo da instituição.</p>
      
      <h3>Vantagens para os consumidores</h3>
      <p>Esta modalidade oferece previsibilidade de pagamentos, taxas de juros significativamente menores que as do rotativo do cartão, e a possibilidade de reorganizar o orçamento sem comprometer todo o limite do cartão.</p>
      
      <h3>Impacto para as empresas</h3>
      <p>Para as empresas, especialmente pequenos negócios que dependem de cartões corporativos para gerenciar despesas, esta opção pode representar uma ferramenta importante de gestão financeira, permitindo diluir grandes desembolsos em períodos mais longos.</p>
      
      <h3>Cuidados necessários</h3>
      <p>Apesar das vantagens, é importante analisar as condições oferecidas, como taxas de juros, prazos e eventual incidência de IOF. O parcelamento deve ser visto como um recurso pontual, não como solução permanente para problemas de fluxo de caixa.</p>
    `
  },
  {
    id: 3,
    title: "Conexão entre loja física e online no varejo é tendência",
    excerpt: "O varejo está se reinventando para atrair e conquistar clientes, especialmente em datas comemorativas.",
    image: "/placeholder.svg",
    date: "05 de Maio, 2023",
    author: "Ana Luiza",
    category: "Varejo",
    content: `
      <p>A integração entre os canais físicos e digitais, conhecida como omnicanalidade, deixou de ser uma tendência futura e se tornou uma necessidade presente para o varejo. Esta conexão permite uma experiência de compra mais fluida e personalizada, respondendo às expectativas dos consumidores contemporâneos.</p>
      
      <h3>O novo comportamento do consumidor</h3>
      <p>Estudos mostram que os consumidores modernos utilizam múltiplos canais durante sua jornada de compra. Eles podem pesquisar online, experimentar na loja física e finalizar a compra pelo aplicativo. Esta fluidez exige que as empresas ofereçam uma experiência consistente em todos os pontos de contato.</p>
      
      <h3>Estratégias de integração</h3>
      <p>Entre as estratégias mais eficazes estão o "clique e retire" (compra online com retirada na loja), estoque unificado que permite verificar disponibilidade em tempo real, e programas de fidelidade que funcionam tanto nas lojas físicas quanto nas plataformas digitais.</p>
      
      <h3>Tecnologias facilitadoras</h3>
      <p>Diversas tecnologias têm apoiado esta transformação, como sistemas de gestão integrados, aplicativos de realidade aumentada que permitem "experimentar" produtos virtualmente, e análise de dados para personalização da experiência do cliente.</p>
      
      <h3>Desafios para pequenos negócios</h3>
      <p>Para pequenas e médias empresas, implementar uma estratégia omnichannel pode parecer desafiador, mas existem soluções escaláveis que permitem uma adoção gradual, começando por integrações básicas como inventário unificado e presença consistente nas redes sociais.</p>
    `
  },
  {
    id: 4,
    title: "Governo anuncia novo pacote de medidas para apoiar pequenas empresas",
    excerpt: "Medidas incluem linhas de crédito com juros reduzidos e simplificação tributária para micro e pequenas empresas.",
    image: "/placeholder.svg",
    date: "28 de Abril, 2023",
    author: "Carlos Eduardo",
    category: "Legislação",
    content: `
      <p>O governo federal anunciou um novo conjunto de medidas para apoiar micro e pequenas empresas, com foco em facilitar o acesso ao crédito e reduzir a burocracia. O pacote é visto como uma resposta aos desafios enfrentados pelo setor após os impactos econômicos dos últimos anos.</p>
      
      <h3>Linhas de crédito especiais</h3>
      <p>Entre as principais medidas está a ampliação de linhas de crédito com taxas de juros subsidiadas, operacionalizadas através de bancos públicos e com garantias facilitadas para pequenos empreendedores.</p>
      
      <h3>Simplificação tributária</h3>
      <p>O pacote também inclui medidas de simplificação tributária, com consolidação de obrigações acessórias e ampliação do limite de faturamento para empresas do Simples Nacional, além de um período de carência para regularização de pendências fiscais.</p>
      
      <h3>Capacitação digital</h3>
      <p>Reconhecendo a importância da digitalização para a competitividade, o governo anunciou programas de capacitação em tecnologias digitais e subsídios para aquisição de soluções tecnológicas por micro e pequenas empresas.</p>
      
      <h3>Expectativas do mercado</h3>
      <p>Associações empresariais receberam positivamente as medidas, mas apontam que ainda são necessárias reformas estruturais para melhorar significativamente o ambiente de negócios no país. Analistas estimam que o pacote pode beneficiar mais de 5 milhões de empresas.</p>
    `
  },
  {
    id: 5,
    title: "Novas regras contábeis para PMEs entram em vigor em 2023",
    excerpt: "O Conselho Federal de Contabilidade aprovou mudanças nas normas contábeis aplicáveis às pequenas e médias empresas.",
    image: "/placeholder.svg",
    date: "20 de Abril, 2023",
    author: "Roberta Almeida",
    category: "Contabilidade",
    content: `
      <p>O Conselho Federal de Contabilidade (CFC) aprovou importantes atualizações nas Normas Brasileiras de Contabilidade aplicáveis às Pequenas e Médias Empresas (NBC TG 1000), alinhando-as às melhores práticas internacionais e às necessidades específicas deste segmento empresarial.</p>
      
      <h3>Principais mudanças</h3>
      <p>As atualizações incluem simplificações nos métodos de reconhecimento e mensuração de ativos e passivos, novos critérios para apresentação de demonstrações financeiras, e orientações mais claras sobre operações específicas como arrendamentos e instrumentos financeiros.</p>
      
      <h3>Objetivos das alterações</h3>
      <p>As mudanças visam aumentar a transparência e comparabilidade das demonstrações financeiras, facilitar o acesso a financiamentos, e proporcionar informações mais relevantes para a tomada de decisões gerenciais.</p>
      
      <h3>Impacto para as empresas</h3>
      <p>Empresas afetadas precisarão adaptar seus sistemas e processos contábeis, atualizar políticas internas e possivelmente investir em capacitação. Contudo, os benefícios de longo prazo incluem melhor gestão financeira e maior credibilidade junto a investidores e credores.</p>
      
      <h3>Cronograma de implementação</h3>
      <p>As novas regras entram em vigor oficialmente para exercícios iniciados a partir de janeiro de 2023, mas o CFC recomenda que as empresas iniciem o processo de adaptação o quanto antes, possivelmente com implementação antecipada voluntária.</p>
    `
  },
  {
    id: 6,
    title: "Inteligência Artificial: como pequenas empresas podem aproveitar esta tecnologia",
    excerpt: "Conheça aplicações práticas da Inteligência Artificial que podem ser implementadas por empresas de todos os portes.",
    image: "/placeholder.svg",
    date: "15 de Abril, 2023",
    author: "Marcos Vinicius",
    category: "Tecnologia",
    content: `
      <p>A Inteligência Artificial (IA) não é mais exclusividade de grandes corporações com orçamentos robustos para tecnologia. Hoje, existem soluções acessíveis e prontas para uso que permitem que pequenas e médias empresas também se beneficiem desta tecnologia transformadora.</p>
      
      <h3>Aplicações práticas para PMEs</h3>
      <p>Entre as aplicações mais viáveis estão chatbots para atendimento ao cliente, ferramentas de análise de dados para identificar tendências de vendas, sistemas de recomendação para e-commerce, e automação de tarefas administrativas repetitivas.</p>
      
      <h3>Benefícios esperados</h3>
      <p>A implementação de soluções de IA pode resultar em redução de custos operacionais, melhoria na experiência do cliente, insights valiosos sobre o negócio e liberação da equipe para atividades estratégicas que requerem criatividade e raciocínio humano.</p>
      
      <h3>Por onde começar</h3>
      <p>Especialistas recomendam que pequenas empresas iniciem com soluções específicas para problemas bem definidos, utilizando ferramentas já existentes no mercado, muitas delas com modelos de preço baseados em uso, o que reduz a barreira de entrada.</p>
      
      <h3>Desafios e considerações</h3>
      <p>Os principais desafios incluem a necessidade de dados de qualidade, questões relacionadas à privacidade e segurança da informação, e a importância de uma cultura organizacional aberta à inovação e ao aprendizado contínuo.</p>
    `
  }
];

const News = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsItems);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    if (searchTerm) {
      const filtered = newsItems.filter(
        item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews(newsItems);
    }
  }, [searchTerm]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the useEffect above
  };
  
  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };
  
  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Notícias
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Fique por dentro das <span className="text-gradient">novidades</span>
              </h1>
              <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Acompanhe as últimas notícias e artigos sobre contabilidade, finanças, 
                legislação e outros temas relevantes para o seu negócio.
              </p>
              
              <form onSubmit={handleSearch} className={`max-w-2xl mx-auto relative opacity-0 ${isVisible ? 'animate-slideUp delay-400' : ''}`}>
                <input
                  type="text"
                  placeholder="Pesquisar notícias..."
                  className="w-full h-14 px-6 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {selectedArticle ? (
              <div className="max-w-3xl mx-auto">
                <button
                  onClick={handleBackToList}
                  className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Voltar para a lista
                </button>
                
                <article>
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
                      <div className="flex items-center mr-6 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{selectedArticle.date}</span>
                      </div>
                      
                      <div className="flex items-center mr-6 mb-2">
                        <User className="w-4 h-4 mr-1" />
                        <span>{selectedArticle.author}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                          {selectedArticle.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden mb-6">
                      <img 
                        src={selectedArticle.image} 
                        alt={selectedArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="prose prose-blue prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                </article>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredNews.length > 0 ? (
                    filteredNews.map((article) => (
                      <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="aspect-w-16 aspect-h-9">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">{article.date}</span>
                            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                              {article.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <button
                            onClick={() => handleArticleSelect(article)}
                            className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                          >
                            Ler mais
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma notícia encontrada</h3>
                      <p className="text-gray-600">Tente usar outros termos na sua pesquisa.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
        
        {!selectedArticle && <NewsSection />}
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default News;
