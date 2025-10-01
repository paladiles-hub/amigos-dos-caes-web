import { Award, Calendar, Heart, Star, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import premiosImage from "@/assets/premio-awards.jpg";
import astroShowImage from "@/assets/astro-dog-show.jpg";
const Sobre = () => {
  const achievements = [{
    icon: Calendar,
    title: "1978",
    description: "Início da jornada profissional no adestramento canino"
  }, {
    icon: Trophy,
    title: "Prêmios Nacionais",
    description: "Premiações em competições brasileiras"
  }, {
    icon: Star,
    title: "Reconhecimento Internacional",
    description: "Prêmios e reconhecimentos em competições alemãs"
  }, {
    icon: Users,
  title: "Ampla Experiência",
  description: "Mais de 100 cães treinados ao longo da carreira"
  }];
  const specialties = ["Adestramento básico e avançado", "Correção de comportamentos problemáticos", "Treinamento para competições", "Socialização de filhotes", "Obediência para cães de guarda", "Preparação para exposições caninas"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conheça Will
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma vida dedicada ao amor e compreensão dos nossos melhores amigos de quatro patas
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Mais de 45 Anos de Paixão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Will iniciou sua jornada no mundo do adestramento canino em 1978, movido por uma 
                  paixão genuína pelos cães e o desejo de fortalecer os laços entre humanos e seus 
                  companheiros de quatro patas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ao longo de sua carreira, desenvolveu técnicas únicas baseadas no amor, paciência 
                  e compreensão, sempre respeitando a natureza individual de cada animal. Sua filosofia 
                  se baseia em construir uma relação de confiança mútua entre o cão e seu tutor.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">Participante de diversos campeonatos nacionais e internacionais, Will não apenas treina cães, mas também educa famílias inteiras sobre como viver em harmonia com seus pets, criando lares mais felizes e equilibrados.</p>
              </div>

              <Button variant="whatsapp" size="lg" onClick={() => window.open("https://wa.me/5519993809491?text=Olá! Gostaria de conhecer mais sobre o trabalho do Will.", "_blank")}>
                <Heart className="mr-2 h-5 w-5" />
                Converse com Will
              </Button>
            </div>

            <div className="space-y-6">
              <img src={premiosImage} alt="Will recebendo prêmios em competições" className="w-full rounded-lg shadow-lg" />
              <img src={astroShowImage} alt="Will no Astro Dog Show" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conquistas e Reconhecimentos
            </h2>
            <p className="text-lg text-muted-foreground">
              Uma trajetória marcada pela excelência e dedicação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => <Card key={index} className="p-6 text-center card-elevated">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Especialidades
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Will oferece uma gama completa de serviços de adestramento, 
                adaptados às necessidades específicas de cada cão e família.
              </p>
              
              <div className="grid gap-4">
                {specialties.map((specialty, index) => <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{specialty}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Metodologia Will
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Amor e Paciência</h4>
                    <p className="text-muted-foreground">Base de todo treinamento eficaz</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Envolvimento da Família</h4>
                    <p className="text-muted-foreground">Todos participam do processo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Trophy className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Resultados Duradouros</h4>
                    <p className="text-muted-foreground">Mudanças permanentes de comportamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f3dd7d]">
            Pronto para Transformar a Vida do Seu Cão?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato e descubra como Will pode ajudar você e seu melhor amigo 
            a desenvolverem uma relação ainda mais especial.
          </p>
          <Button variant="outline" size="xl" className="border-primary-foreground text-green-600 hover:bg-primary-foreground hover:text-primary" onClick={() => window.open("https://wa.me/5519993809491?text=Olá Will! Gostaria de agendar uma consulta para meu cão.", "_blank")}>
            Agendar Consulta no WhatsApp
          </Button>
        </div>
      </section>
    </div>;
};
export default Sobre;