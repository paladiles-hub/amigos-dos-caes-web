import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-will.jpg";
const Hero = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5519993809491?text=Olá! Gostaria de saber mais sobre os serviços de adestramento.", "_blank");
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Will, Amigo dos{" "}
            <span className="text-accent">Cães</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">Adestramento profissional com amor e dedicação. Transformando a relação entre você e seu melhor amigo desde 1978.</p>

          {/* Features */}
          

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" onClick={handleWhatsAppContact} className="bg-white text-primary hover:bg-white/90">
              Fale Conosco no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Conheça Nosso Work
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;