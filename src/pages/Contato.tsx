import { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    nomeCao: "",
    raca: "",
    idade: "",
    problema: "",
    mensagem: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Ola Will! 🐕

*Informacoes de Contato:*
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}

*Informacoes do Cao:*
Nome do cao: ${formData.nomeCao}
Raca: ${formData.raca}
Idade: ${formData.idade}

*Problema/Objetivo:*
${formData.problema}

*Mensagem adicional:*
${formData.mensagem}

Gostaria de agendar uma consulta para adestramento. Obrigado!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5519993809491?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp com sua mensagem preenchida.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      info: "+55 19 99380-9491",
      action: () => window.open("https://wa.me/5519993809491", "_blank")
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Região de Campinas - SP",
      action: null
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda à Sábado: 8h às 18h",
      action: null
    }
  ];

  const services = [
    "Adestramento básico para filhotes",
    "Correção de comportamentos problemáticos",
    "Treinamento para competições",
    "Socialização canina",
    "Obediência avançada",
    "Preparação para exposições"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contato e descubra como Will pode transformar a vida do seu melhor amigo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4 card-elevated">
                      <div className="flex items-start">
                        <info.icon className="h-6 w-6 text-primary mr-3 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.info}
                          </p>
                          {info.action && (
                            <Button 
                              variant="link" 
                              className="p-0 h-auto mt-2"
                              onClick={info.action}
                            >
                              Contatar agora
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp */}
              <Card className="p-6 bg-green-50 border-green-200">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">
                    Contato Rápido
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Fale diretamente com Will pelo WhatsApp
                  </p>
                  <Button 
                    variant="whatsapp" 
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/5519993809491?text=${encodeURIComponent("Ola Will! Gostaria de saber mais sobre os servicos de adestramento.")}`, "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </Card>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Nossos Serviços
                </h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <Heart className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 card-elevated">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Formulário de Contato
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha as informações abaixo e será redirecionado para o WhatsApp com sua mensagem pronta.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Seu Nome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(19) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Dog Info */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Informações do Cão
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="nomeCao">Nome do Cão</Label>
                        <Input
                          id="nomeCao"
                          name="nomeCao"
                          value={formData.nomeCao}
                          onChange={handleInputChange}
                          placeholder="Nome do seu cão"
                        />
                      </div>
                      <div>
                        <Label htmlFor="raca">Raça</Label>
                        <Input
                          id="raca"
                          name="raca"
                          value={formData.raca}
                          onChange={handleInputChange}
                          placeholder="Ex: Golden Retriever"
                        />
                      </div>
                      <div>
                        <Label htmlFor="idade">Idade</Label>
                        <Input
                          id="idade"
                          name="idade"
                          value={formData.idade}
                          onChange={handleInputChange}
                          placeholder="Ex: 2 anos"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="problema">Principal Problema ou Objetivo</Label>
                    <Textarea
                      id="problema"
                      name="problema"
                      value={formData.problema}
                      onChange={handleInputChange}
                      placeholder="Descreva o comportamento que gostaria de corrigir ou o objetivo do treinamento"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensagem">Mensagem Adicional</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Informações adicionais ou perguntas específicas"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca tempo! Cada dia é uma oportunidade de fortalecer o vínculo com seu cão.
          </p>
          <Button 
            variant="outline" 
            size="xl"
            className="border-primary-foreground text-green-600 hover:bg-primary-foreground hover:text-primary"
            onClick={() => window.open(`https://wa.me/5519993809491?text=${encodeURIComponent("Ola Will! Quero comecar o adestramento do meu cao hoje mesmo!")}`, "_blank")}
          >
            Começar Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contato;