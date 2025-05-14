
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    id: 1,
    image: "/lovable-uploads/9be7e63f-cc33-445c-9c85-65ab6c00e674.png",
    title: "Caixa da água tipo taça",
    location: ""
  },
  {
    id: 2,
    image: "/lovable-uploads/f4ac85dd-95a7-4f28-986b-d08888fd8b1c.png",
    title: "Linha de verniz cataforético",
    location: ""
  },
  {
    id: 3,
    image: "/lovable-uploads/236aef35-f35f-460a-bd32-da54e02f579d.png",
    title: "Estação de Tratamento Industrial",
    location: "Borborema - SP"
  },
  {
    id: 4,
    image: "/lovable-uploads/fae716f4-d839-480b-b857-aeba36e6a5e5.png",
    title: "Tanques de Tratamento Industrial",
    location: "Borborema - SP"
  },
  {
    id: 5,
    image: "/lovable-uploads/c99da902-ee39-4584-8524-f043daa13668.png",
    title: "Tanque Cilíndrico Horizontal",
    location: ""
  },
  {
    id: 6,
    image: "/lovable-uploads/c3cd6bd0-0919-4aa0-85a6-55f5741f4372.png",
    title: "Estação de Tratamento Industrial",
    location: "Borborema - SP"
  },
  {
    id: 7,
    image: "/lovable-uploads/a67a2f0e-854f-4b6a-b6ed-1bb143040f68.png",
    title: "Tanques de Galvanoplastia",
    location: ""
  }
];

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projetos" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-dlblue mb-2">
            Nossos Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dlblue mb-4">
            Estações de Tratamento e Tanques
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça alguns de nossos projetos realizados em diversas cidades do Brasil
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={() => openModal(project.id)}
              >
                <div className="h-64 overflow-hidden">
                  <AspectRatio ratio={4/3} className="bg-blue-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </AspectRatio>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative overflow-hidden rounded-lg shadow-md h-64"
                    onClick={() => openModal(project.id)}
                  >
                    <AspectRatio ratio={3/4} className="bg-blue-100">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80" />
            <CarouselNext className="right-2 bg-white/80" />
          </Carousel>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1 text-gray-800 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {projects.find(p => p.id === selectedProject) && (
                <>
                  <div className="h-96">
                    <img 
                      src={projects.find(p => p.id === selectedProject)?.image} 
                      alt={projects.find(p => p.id === selectedProject)?.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-dlblue">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h3>
                    <p className="text-gray-600">
                      {projects.find(p => p.id === selectedProject)?.location}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
