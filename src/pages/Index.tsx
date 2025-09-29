import { Award, Users, Calendar, Star, Heart, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";

// Import images for preview
import competicaoImg from "@/assets/competicao.jpg";
import rottweilersImg from "@/assets/rottweilers.jpg";
import willGoldenImg from "@/assets/will-golden.jpg";
const Index = () => {
  const services = [{
    icon: Heart,
    title: "Adestramento Básico",
    description: "Comandos essenciais para uma convivência harmoniosa no dia a dia."
  }, {
    icon: Users,
    title: "Socialização",
    description: "Desenvolvimento de habilidades sociais para interação segura com outros cães e pessoas."
  }, {
    icon: Award,
    title: "Treinamento para Competições",
    description: "Preparação profissional para exposições e competições caninas."
  }, {
    icon: Star,
    title: "Correção Comportamental",
    description: "Soluções eficazes para problemas de comportamento e agressividade."
  }];
  const stats = [{
    number: "45+",
    label: "Anos de Experiência"
  }, {
    number: "10.000+",
    label: "Cães Treinados"
  }, {
    number: "50+",
    label: "Prêmios Conquistados"
  }, {
    number: "100%",
    label: "Dedicação e Amor"
  }];
  const testimonials = [{
    name: "Maria Silva",
    text: "Will transformou completamente o comportamento do meu Golden. Hoje temos uma convivência perfeita!",
    dog: "Golden Retriever - Max"
  }, {
    name: "João Santos",
    text: "Profissional incrível! Nosso Rottweiler aprendeu comandos básicos em poucas sessões.",
    dog: "Rottweiler - Thor"
  }, {
    name: "Ana Costa",
    text: "A paciência e carinho do Will com os animais é admirável. Recomendo de olhos fechados!",
    dog: "Border Collie - Luna"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Soluções completas para todas as suas necessidades e a do seu cão</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <Card key={index} className="p-6 text-center card-elevated">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Uma Trajetória de Sucesso
            </h2>
            <p className="text-lg text-muted-foreground">
              Números que refletem nossa dedicação e paixão pelo que fazemos
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Momentos Especiais
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja alguns registros da nossa jornada junto aos nossos amigos caninos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img src={competicaoImg} alt="Will em competição" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Competições Nacionais</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img src={rottweilersImg} alt="Treinamento com Rottweilers" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Treinamento Especializado</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img src={willGoldenImg} alt="Will com Golden Retrievers" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Momentos de Carinho</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/galeria">
              <Button variant="outline" size="lg">
                Ver Galeria Completa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Depoimentos reais de famílias que transformaram suas vidas com nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-6 card-elevated">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.dog}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar a Vida do Seu Cão?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca mais tempo com comportamentos problemáticos. 
            Comece hoje mesmo a jornada para uma convivência perfeita!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" className="border-primary-foreground text-background hover:bg-primary-foreground hover:text-primary" onClick={() => window.open("https://wa.me/5519993809491?text=Olá Will! Quero começar o adestramento do meu cão.", "_blank")}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Link to="/contato">
              <Button variant="secondary" size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Formulário de Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-primary">Will, Amigo dos Cães</span>
              </div>
              <p className="text-muted-foreground">
                Mais de 45 anos dedicados ao adestramento canino com amor, paciência e resultados comprovados.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-muted-foreground hover:text-primary">Início</Link>
                <Link to="/sobre" className="block text-muted-foreground hover:text-primary">Sobre Will</Link>
                <Link to="/galeria" className="block text-muted-foreground hover:text-primary">Galeria</Link>
                
                <Link to="/contato" className="block text-muted-foreground hover:text-primary">Contato</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contato</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>WhatsApp: +55 19 99380-9491</p>
                <p>Região de Mococa - SP</p>
                <p>Horário: Segunda à Sábado, 8h às 18h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Will, Amigo dos Cães. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;