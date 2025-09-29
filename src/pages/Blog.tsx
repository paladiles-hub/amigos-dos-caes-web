import { Calendar, User, ArrowRight, Heart, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Os Primeiros Passos no Adestramento de Filhotes",
      excerpt: "Descubra as técnicas essenciais para começar o treinamento do seu filhote da maneira correta, criando bases sólidas para um futuro harmonioso.",
      date: "15 de Março, 2024",
      author: "Will",
      category: "Filhotes",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Como Corrigir Comportamentos Agressivos",
      excerpt: "Entenda as principais causas da agressividade canina e aprenda métodos eficazes para transformar comportamentos problemáticos.",
      date: "8 de Março, 2024",
      author: "Will",
      category: "Comportamento",
      readTime: "7 min",
      featured: false
    },
    {
      id: 3,
      title: "A Importância da Socialização Canina",
      excerpt: "Por que socializar seu cão é fundamental para seu desenvolvimento emocional e como fazer isso de forma segura e efetiva.",
      date: "1 de Março, 2024",
      author: "Will",
      category: "Socialização",
      readTime: "4 min",
      featured: false
    },
    {
      id: 4,
      title: "Preparando Seu Cão para Competições",
      excerpt: "Dicas profissionais de quem já conquistou prêmios nacionais e internacionais sobre como preparar seu cão para competições.",
      date: "22 de Fevereiro, 2024",
      author: "Will",
      category: "Competições",
      readTime: "8 min",
      featured: false
    },
    {
      id: 5,
      title: "Exercícios Mentais: Mantendo Seu Cão Estimulado",
      excerpt: "Atividades e jogos para manter a mente do seu cão ativa e saudável, prevenindo comportamentos destrutivos.",
      date: "15 de Fevereiro, 2024",
      author: "Will",
      category: "Bem-estar",
      readTime: "6 min",
      featured: false
    },
    {
      id: 6,
      title: "Entendendo a Linguagem Corporal Canina",
      excerpt: "Aprenda a interpretar os sinais que seu cão está enviando através de sua postura, expressões e movimentos.",
      date: "8 de Fevereiro, 2024",
      author: "Will",
      category: "Comportamento",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = [
    { name: "Todos", count: blogPosts.length },
    { name: "Filhotes", count: 1 },
    { name: "Comportamento", count: 2 },
    { name: "Socialização", count: 1 },
    { name: "Competições", count: 1 },
    { name: "Bem-estar", count: 1 }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog do Will
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dicas, experiências e conhecimento sobre adestramento canino direto de quem dedica a vida a esse universo
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <Card className="overflow-hidden card-elevated">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">Post em Destaque</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-6">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span>{featuredPost.readTime} de leitura</span>
                      </div>
                      <Button variant="hero">
                        Ler Artigo Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-24 w-24 text-primary mx-auto mb-4" />
                      <p className="text-lg font-medium text-foreground">
                        Conteúdo Exclusivo do Will
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category.name}
                <span className="ml-2 text-xs bg-primary/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden card-elevated group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer Receber Dicas Exclusivas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato pelo WhatsApp e receba conteúdos exclusivos sobre adestramento canino diretamente do Will.
          </p>
          <Button 
            variant="outline" 
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => window.open("https://wa.me/5519993809491?text=Olá Will! Gostaria de receber dicas sobre adestramento canino.", "_blank")}
          >
            Falar com Will no WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;