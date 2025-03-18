
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import NewsSection from "@/components/NewsSection";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const articles = [
  {
    id: 1,
    title: "Como as taxas de juros afetam os Pequenos Negócios",
    summary: "Entenda como as flutuações nas taxas de juros podem impactar diretamente o fluxo de caixa e as operações das micro e pequenas empresas.",
    content: "As taxas de juros têm um papel fundamental na economia e afetam diretamente o dia a dia das micro e pequenas empresas. Quando as taxas sobem, o custo do crédito aumenta, impactando negativamente os empréstimos, financiamentos e capital de giro. Isso pode resultar em redução de investimentos e desaceleração do crescimento. Por outro lado, quando as taxas caem, há estímulo ao consumo e maior facilidade para obtenção de crédito, o que pode impulsionar os negócios. É essencial que empresários acompanhem as tendências das taxas de juros e planejem suas estratégias financeiras considerando esses ciclos econômicos.",
    date: "10 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Carlos Mendes",
    category: "Finanças"
  },
  {
    id: 2,
    title: "Bancos passam a oferecer parcelamento do saldo total",
    summary: "O setor de pagamentos passa a oferecer uma nova opção para os consumidores: o parcelamento do saldo total da fatura do cartão de crédito.",
    content: "Os principais bancos do país estão implementando uma nova modalidade de crédito: o parcelamento do saldo total da fatura do cartão. Esta opção permite que o cliente divida o valor total da fatura em parcelas mensais, com taxas de juros geralmente menores que as do crédito rotativo tradicional. A medida surge como uma alternativa para reduzir o endividamento dos consumidores e oferecer melhores condições de pagamento. No entanto, é importante que os usuários compreendam completamente os termos e condições, incluindo as taxas de juros aplicadas e o impacto no limite do cartão durante o período de parcelamento.",
    date: "5 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Mariana Alves",
    category: "Finanças"
  },
  {
    id: 3,
    title: "Conexão entre loja física e online no varejo é tendência",
    summary: "O varejo se reinventa para atrair e conquistar clientes, especialmente nas datas comemorativas que movimentam o setor durante o ano.",
    content: "A integração entre canais físicos e digitais, conhecida como estratégia omnichannel, está se consolidando como uma tendência irreversível no varejo. As empresas estão percebendo que os consumidores modernos transitam naturalmente entre diferentes plataformas de compra e esperam uma experiência consistente e conectada. Recursos como "compre online e retire na loja", "devoluções cross-channel" e sistemas unificados de estoque são exemplos dessa integração. Lojistas que conseguem oferecer essa experiência fluida têm observado aumento no valor médio das compras e maior fidelização de clientes. Para pequenos varejistas, investir em tecnologias que permitam essa integração se tornou essencial para manter a competitividade no mercado.",
    date: "1 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Paulo Rodrigues",
    category: "Varejo"
  },
  {
    id: 4,
    title: "Novas regras para o MEI entram em vigor em 2023",
    summary: "Confira as mudanças nas regras para Microempreendedores Individuais que passam a valer neste ano e como elas podem afetar o seu negócio.",
    content: "O programa do Microempreendedor Individual (MEI) passou por diversas atualizações em 2023, incluindo mudanças no limite de faturamento anual, que foi ajustado para acompanhar a inflação. Além disso, novas atividades foram incluídas no cadastro permitido para MEIs, ampliando as possibilidades para pequenos empreendedores. Outra novidade importante é a obrigatoriedade da Declaração Anual do MEI em formato digital, o que exigirá maior familiaridade com ferramentas tecnológicas. As multas por atraso nas obrigações fiscais também foram atualizadas. É fundamental que os microempreendedores se mantenham informados sobre essas mudanças para garantir a regularidade de seus negócios e evitar penalidades.",
    date: "28 de Abril, 2023",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Amanda Soares",
    category: "Legislação"
  },
  {
    id: 5,
    title: "Estratégias para gestão de fluxo de caixa em pequenas empresas",
    summary: "Aprenda técnicas eficientes para gerenciar o fluxo de caixa da sua empresa e garantir a saúde financeira do negócio mesmo em tempos desafiadores.",
    content: "Uma gestão eficiente do fluxo de caixa é vital para a sobrevivência e crescimento de pequenas empresas. Entre as estratégias essenciais estão: acompanhamento diário das entradas e saídas, estabelecimento de um fundo de reserva para emergências, negociação de prazos mais longos com fornecedores e mais curtos com clientes, e uso de ferramentas digitais para automação e controle financeiro. É igualmente importante separar as finanças pessoais das empresariais, realizar projeções de fluxo de caixa para períodos futuros e revisar periodicamente contratos e despesas fixas. Empresas que implementam essas práticas tendem a ter maior resiliência durante crises econômicas e melhor capacidade de investimento em oportunidades de crescimento.",
    date: "25 de Abril, 2023",
    image: "https://images.unsplash.com/photo-1565372595781-69119f6204be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Roberto Castro",
    category: "Gestão"
  },
  {
    id: 6,
    title: "Guia completo sobre o SPED Fiscal para empresas",
    summary: "Entenda o que é o SPED Fiscal, sua importância para o cumprimento das obrigações tributárias e como implementá-lo corretamente na sua empresa.",
    content: "O Sistema Público de Escrituração Digital (SPED) Fiscal revolucionou a forma como as empresas brasileiras cumprem suas obrigações tributárias. Este sistema digital integra os processos de coleta, validação e transmissão de informações fiscais, substituindo os antigos livros fiscais em papel. Para implementá-lo corretamente, as empresas devem investir em sistemas de gestão compatíveis, garantir a qualidade dos dados inseridos e manter uma equipe capacitada. Os benefícios incluem redução de erros, otimização de processos, diminuição de custos com impressão e armazenamento, além de melhor relacionamento com o fisco. No entanto, desafios como a complexidade da legislação e a necessidade de atualização constante dos sistemas exigem atenção especial dos gestores.",
    date: "20 de Abril, 2023",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Lucia Fernandes",
    category: "Fiscal"
  }
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const articlesPerPage = 4;
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const results = articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(results);
    setCurrentPage(1);
  }, [searchTerm]);
  
  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Blog e Notícias
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Acompanhe nosso <span className="text-gradient">blog</span> e fique por dentro
              </h1>
              <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Artigos, notícias e atualizações sobre contabilidade, tributação, finanças
                e outros temas relevantes para o seu negócio.
              </p>
              
              <div className={`max-w-xl mx-auto opacity-0 ${isVisible ? 'animate-slideUp delay-300' : ''}`}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar artigos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {currentArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-60 md:h-auto">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500 ml-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-gray-500 text-sm">Por {article.author}</span>
                        <Link to={`/news/${article.id}`} className="button-text inline-flex items-center">
                          Ler mais
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {filteredArticles.length > articlesPerPage && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mr-2 ${
                    currentPage === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'
                  }`}
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mx-1 ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage < Math.ceil(filteredArticles.length / articlesPerPage) ? currentPage + 1 : currentPage)}
                  disabled={currentPage === Math.ceil(filteredArticles.length / articlesPerPage)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ml-2 ${
                    currentPage === Math.ceil(filteredArticles.length / articlesPerPage)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'
                  }`}
                  aria-label="Próxima página"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nenhum artigo encontrado</h3>
                <p className="text-gray-600 mb-6">Não encontramos artigos que correspondam à sua pesquisa.</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="button-secondary"
                >
                  Ver todos os artigos
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default News;
