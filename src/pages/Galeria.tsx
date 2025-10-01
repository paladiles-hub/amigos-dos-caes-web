import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

// Import images
import competicaoImg from "@/assets/competicao.jpg";
import rottweilersImg from "@/assets/rottweilers.jpg";
import treinamentoImg from "@/assets/treinamento-individual.jpg";
import grupoCachorrosImg from "@/assets/grupo-cachorros.jpg";
import onibusCachorrosImg from "@/assets/onibus-cachorros.jpg";
import premiacaoImg from "@/assets/premiacao.jpg";
import willGoldenImg from "@/assets/will-golden.jpg";
import borderCollieBusImg from "@/assets/border-collie-bus.jpg";
import petjindePodioImg from "@/assets/petjinde-podio.jpg";
import goldenTwoPawsImg from "@/assets/golden-two-paws.jpg";
import pastorAlemaoOutdoorImg from "@/assets/pastor-alemao-outdoor.jpg";
import panamericanaTrophyImg from "@/assets/panamericana-trophy.jpg";
import melhorRacaAwardImg from "@/assets/melhor-raca-award.jpg";
import dogWhiteTwoPawsImg from "@/assets/dog-white-two-paws.jpg";
import doisCaesSentadosImg from "@/assets/dois-caes-sentados.jpg";
import rottweilerProtectionImg from "@/assets/rottweiler-protection.jpg";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: competicaoImg,
      title: "Competição Nacional",
      description: "Will em ação durante competição nacional de adestramento"
    },
    {
      src: rottweilersImg,
      title: "Treinamento de Rottweilers",
      description: "Sessão de treinamento especializada para cães da raça Rottweiler"
    },
    {
      src: treinamentoImg,
      title: "Treinamento Individual",
      description: "Sessão personalizada de adestramento individual"
    },
    {
      src: grupoCachorrosImg,
      title: "Grupo de Socialização",
      description: "Will com um grupo diverso de cães em treinamento de socialização"
    },
    {
      src: onibusCachorrosImg,
      title: "Viagem com os Cães",
      description: "Will acompanhando cães durante viagem para competição"
    },
    {
      src: premiacaoImg,
      title: "Cerimônia de Premiação",
      description: "Will recebendo reconhecimento por sua excelência no adestramento"
    },
    {
      src: willGoldenImg,
      title: "Will e Seus Golden Retrievers",
      description: "Will com seus queridos Golden Retrievers em momento descontraído"
    },
    {
      src: borderCollieBusImg,
      title: "Border Collie em Frente ao Ônibus",
      description: "Adestramento de todas as raças - Border Collie treinado demonstrando disciplina"
    },
    {
      src: goldenTwoPawsImg,
      title: "Golden Retriever em Duas Patas",
      description: "Demonstração de treinamento avançado com Golden Retriever em posição vertical"
    },
    {
      src: pastorAlemaoOutdoorImg,
      title: "Pastor Alemão ao Ar Livre",
      description: "Sessão de treinamento com Pastor Alemão em ambiente natural"
    },
    {
      src: panamericanaTrophyImg,
      title: "Troféu Panamericana 2019",
      description: "2º Best in Show KC ABC FEV 2019 - Conquista internacional com cão campeão"
    },
    {
      src: melhorRacaAwardImg,
      title: "Melhor de Raça",
      description: "Premiação Melhor de Raça com Pastor Alemão campeão em competição oficial"
    },
    {
      src: dogWhiteTwoPawsImg,
      title: "Cão em Pé com Treinador",
      description: "Demonstração de comando avançado - cão em posição vertical ao lado do treinador"
    },
    {
      src: doisCaesSentadosImg,
      title: "Dupla de Cães Sentados",
      description: "Border Collie e Golden Retriever executando comando de sentar em sincronia"
    },
    {
      src: rottweilerProtectionImg,
      title: "Treinamento de Guarda com Rottweiler",
      description: "Exercício especializado de proteção e obediência com Rottweiler"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Galeria de Momentos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja alguns dos momentos mais especiais da jornada de Will com seus amigos de quatro patas
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer card-elevated"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-lg mb-1" style={{ color: '#dbce83' }}>
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f3dd7d]">
            Seu Cão Também Pode Ser Uma Estrela!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato e comece a jornada de transformação do seu melhor amigo.
          </p>
          <Button 
            variant="outline" 
            size="xl"
            className="border-primary-foreground text-green-600 hover:bg-primary-foreground hover:text-primary"
            onClick={() => window.open("https://wa.me/5519993809491?text=Olá! Vi a galeria e gostaria de saber mais sobre o adestramento.", "_blank")}
          >
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-semibold text-lg mb-1" style={{ color: '#dbce83' }}>
                {images[selectedImage].title}
              </h3>
              <p className="text-white/80">
                {images[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;