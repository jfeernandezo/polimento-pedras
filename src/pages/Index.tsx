
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Phone, Mail, MapPin, Star, CheckCircle, Sparkles, Clock, Award, DollarSign, Zap } from 'lucide-react';
import { MobileMenu } from '@/components/ui/mobile-menu';

interface VisibilityState {
  hero?: boolean;
  story?: boolean;
  services?: boolean;
  differentials?: boolean;
  process?: boolean;
  testimonials?: boolean;
  contact?: boolean;
}

const Index = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Polimento de Mármore e Granito",
      description: "Devolvemos o brilho original, removendo riscos e desgastes, deixando suas pedras como novas.",
      icon: <Sparkles className="w-8 h-8 text-elegant-600" />
    },
    {
      title: "Restauração e Limpeza de Pedras",
      description: "Soluções completas para revitalizar e proteger a beleza natural de qualquer tipo de pedra.",
      icon: <Award className="w-8 h-8 text-elegant-600" />
    },
    {
      title: "Limpeza Pós-Obra",
      description: "Removemos sujeiras e resíduos de forma eficaz, entregando seu ambiente pronto para uso.",
      icon: <CheckCircle className="w-8 h-8 text-elegant-600" />
    },
    {
      title: "Aplicação e Remoção de Rejunte",
      description: "Precisão e acabamento perfeito para rejuntes, garantindo durabilidade e estética impecável.",
      icon: <Star className="w-8 h-8 text-elegant-600" />
    }
  ];

  const differentials = [
    {
      title: "Compromisso com o Prazo",
      description: "Serviço entregue dentro do prazo combinado, sem surpresas!",
      icon: <Clock className="w-6 h-6 text-elegant-600" />
    },
    {
      title: "Qualidade Imbatível",
      description: "Cada detalhe é tratado com a máxima dedicação para um resultado excepcional.",
      icon: <Award className="w-6 h-6 text-elegant-600" />
    },
    {
      title: "Preço Justo",
      description: "Oferecemos o melhor custo-benefício, com a qualidade que você merece.",
      icon: <DollarSign className="w-6 h-6 text-elegant-600" />
    },
    {
      title: "Atendimento Nota 10",
      description: "Sua satisfação é nossa prioridade. Conte com uma resposta rápida e suporte amigável.",
      icon: <Zap className="w-6 h-6 text-elegant-600" />
    }
  ];

  // Hero background image removed in favor of a single static image

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Polimento Pedras Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-16'
                } w-auto object-contain filter ${
                  isScrolled ? 'brightness-90' : 'brightness-100'
                }`}
                loading="eager"
              />
            </div>

            {/* Navigation - Mobile First */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#services" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-elegant-600' 
                    : 'text-white hover:text-elegant-200'
                }`}
              >
                Serviços
              </a>
              <a 
                href="#differentials" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-elegant-600' 
                    : 'text-white hover:text-elegant-200'
                }`}
              >
                Diferenciais
              </a>
              <a 
                href="#testimonials" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-elegant-600' 
                    : 'text-white hover:text-elegant-200'
                }`}
              >
                Depoimentos
              </a>
              <a 
                href="#contact" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-elegant-600' 
                    : 'text-white hover:text-elegant-200'
                }`}
              >
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                className="hidden md:flex bg-elegant-600 hover:bg-elegant-700 text-white transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </Button>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <img 
            src="https://images.pexels.com/photos/17132265/pexels-photo-17132265.jpeg?_gl=1*7h699g*_ga*MTkzODIxNjg1Mi4xNzUwOTExMDI1*_ga_8JE65Q40S6*czE3NTA5MTQxNTckbzIkZzEkdDE3NTA5MTQzOTgkajYwJGwwJGgw"
            alt="Mármore polido brilhante"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible.hero ? 'animate-fade-in' : 'opacity-0'}`}>
          <Badge variant="outline" className="mb-6 text-white border-white/50 bg-white/10 backdrop-blur-sm">
            Especialistas em Tratamento de Pedras
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Seu Ambiente
            {/* Esta span vira um bloco, forçando a quebra de linha */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 relative">
              Merece Brilhar
              {/* O efeito de brilho continua funcionando perfeitamente */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-30 animate-shine"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Especialistas em polimento e impermeabilização de mármore, granito, marmorite, granito. limpeza de pedras em geral. Remoção e aplicação de resinas, rejuntamento com massa plástica.
            <span className="font-semibold text-white"> Qualidade impecável, atendimento rápido e preço justo.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-elegant-600 hover:bg-elegant-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(`https://wa.me/5531988495042?text=${encodeURIComponent('Olá, vim do site e gostaria de um orçamento.')}`, '_blank')}
            >
              Solicite Seu Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/50 text-gray-800 hover:bg-white/10 px-8 py-6 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Storytelling Section with Marble Image */}
      <section 
        id="story" 
        className="py-20 bg-gradient-to-r from-white via-marble-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.story ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Marble Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/about-session.png"
                  alt="Mármore brilhante polido"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-stone-800">Resultado Profissional</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-elegant-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-marble-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8">
                Mais que um Serviço, um <span className="text-elegant-600">Cuidado Artesanal</span>
              </h2>
              
              <div className="prose prose-lg prose-stone max-w-none text-stone-600 leading-relaxed space-y-6">
                <p className="text-xl">
                  Nós somos a equipe que respira <strong className="text-elegant-700">cuidado e excelência</strong> em cada centímetro de pedra. 
                  Na Andreia Dias, entendemos que seu piso não é apenas uma superfície, é o coração do seu ambiente, 
                  contando histórias e recebendo sonhos.
                </p>
                
                <p className="text-lg">
                  Desde a remoção de um rejunte teimoso até o polimento final que reflete sua satisfação, 
                  nosso compromisso é com a <strong className="text-elegant-700">renovação e revitalização</strong>.
                </p>
                
                <p className="text-lg">
                  Com <strong className="text-elegant-700">responsabilidade e técnica apurada</strong>, transformamos ambientes, 
                  entregando não só um piso limpo e agradável, mas a certeza de um trabalho bem-feito. 
                  Afinal, cuidar do seu espaço é o que nos move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-20 bg-stone-50"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'animate-fade-in' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-4 text-elegant-700 border-elegant-300">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Expertise que Deixa Marcas, <span className="text-elegant-600">Só que de Brilho!</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Descomplicamos o tratamento de pedras com uma gama completa de serviços feitos sob medida para sua necessidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-stone-200 ${
                  isVisible.services ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section 
        id="differentials" 
        className="py-20 bg-gradient-to-br from-elegant-50 to-marble-100"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.differentials ? 'animate-fade-in' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-4 text-elegant-700 border-elegant-300">
              Por Que Nos Escolher?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Nossos Diferenciais São Seu <span className="text-elegant-600">Brilho!</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Sabemos que você busca confiança, qualidade e resultados. É por isso que na Andreia Dias, você encontra:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cards na Vertical */}
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                    isVisible.differentials ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-elegant-100 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carrossel */}
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${
              isVisible.differentials ? 'animate-slide-in-right' : 'opacity-0'
            }`}>
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    "/diferencial-1.png",
                    "/diferencial-2.png",
                    "/diferencial-3.png"
                  ].map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] w-full">
                        <img
                          src={image}
                          alt={`Diferencial ${index + 1}`}
                          className="object-cover w-full h-full rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.process ? 'animate-fade-in' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-4 text-elegant-700 border-elegant-300">
              Nosso Processo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              A Magia Acontece com <span className="text-elegant-600">Técnica e Respeito</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12">
              Para garantir um resultado que realmente brilha, seguimos um processo rigoroso e transparente:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Análise Detalhada", desc: "Entendemos a necessidade do seu material e ambiente." },
                { step: "02", title: "Preparação Cuidadosa", desc: "Respeitamos o tempo e as características de cada material." },
                { step: "03", title: "Execução Precisa", desc: "Seguimos a sequência ideal de lixas e produtos para o acabamento perfeito." },
                { step: "04", title: "Entrega do Brilho", desc: "Você recebe um ambiente renovado, limpo e com a qualidade Andreia Dias." }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    isVisible.process ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-elegant-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-elegant-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Facilidade no Pagamento!
          </h2>
          <p className="text-lg mb-8">
            Pensando em você, aceitamos <strong>todos os cartões</strong> e oferecemos um <strong>desconto especial para pagamento à vista</strong>!
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-gray-800 hover:bg-gray800 hover:text-elegant-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Consulte Condições
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className="py-20 bg-stone-50"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible.testimonials ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              O Que Nossos <span className="text-elegant-600">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">
              A confiança e a satisfação de quem contrata nossos serviços são nosso maior orgulho. Veja o que eles têm a dizer.
            </p>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Mariana Campos",
                  title: "Arquiteta",
                  quote: "O trabalho da Polir Pedras foi o toque final que meu projeto precisava. O polimento do mármore ficou impecável, com um brilho que valorizou todo o ambiente. Profissionalismo e pontualidade do início ao fim. Viraram parceiros de confiança."
                },
                {
                  name: "Roberto Siqueira",
                  title: "Engenheiro Civil",
                  quote: "Contratei a Polir Pedras para a limpeza pós-obra de um empreendimento e fiquei impressionado. Chegaram no prazo, executaram o serviço com uma eficiência incrível e entregaram o piso pronto para a vistoria do cliente. Recomendo fortemente."
                },
                {
                  name: "Fernando Costa",
                  title: "Reforma Residencial",
                  quote: "Meu piso de mármore estava completamente sem vida, cheio de riscos. A equipe da Polir Pedras fez uma restauração completa que transformou minha sala. O cuidado com os detalhes e a limpeza durante o processo foram notáveis. Parece novo!"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-md flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col flex-grow">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-stone-600 mb-4 italic text-left flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-stone-800">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-elegant-600 to-elegant-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Renovar Seu Ambiente?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não deixe seu piso perder o brilho! Entre em contato agora e descubra como podemos transformar seu espaço.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-6 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(`https://wa.me/5531988495042?text=${encodeURIComponent('Olá, vim do site e gostaria de um orçamento.')}`, '_blank')}
          >
            Solicite Seu Orçamento Sem Compromisso!
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-4 text-elegant-700 border-elegant-300">
              Entre em Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Vamos Conversar sobre Seu <span className="text-elegant-600">Projeto</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className={`shadow-lg transition-all duration-1000 ${isVisible.contact ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-stone-800 mb-6">
                  Formulário de Contato
                </h3>
                {formStatus === 'submitted' && (
                  <div className="p-4 rounded-lg mb-4 bg-green-100 text-green-700">
                    Mensagem enviada com sucesso! Em breve entraremos em contato.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 rounded-lg mb-4 bg-red-100 text-red-700">
                    Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                  </div>
                )}
                <form 
                  action="https://formspree.io/f/xovlebbl" 
                  method="POST"
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus('submitting');
                    
                    try {
                      const form = e.target as HTMLFormElement;
                      const response = await fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                          'Accept': 'application/json'
                        }
                      });

                      if (response.ok) {
                        setFormStatus('submitted');
                        form.reset();
                      } else {
                        setFormStatus('error');
                      }
                    } catch (error) {
                      setFormStatus('error');
                    }
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      placeholder="Seu Nome" 
                      className="border-stone-300"
                      required
                    />
                    <Input 
                      name="phone"
                      placeholder="Seu Telefone" 
                      className="border-stone-300"
                      required
                    />
                  </div>
                  <Input 
                    name="email"
                    placeholder="Seu E-mail" 
                    type="email" 
                    className="border-stone-300"
                    required
                  />
                  <Textarea 
                    name="message"
                    placeholder="Descreva seu projeto ou dúvida..." 
                    rows={4}
                    className="border-stone-300"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-elegant-600 hover:bg-elegant-700 text-white py-3 font-semibold transition-all duration-300"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible.contact ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-elegant-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-elegant-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">Telefone</p>
                      <p className="text-stone-600">(31) 98849-5042</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-elegant-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-elegant-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">E-mail</p>
                      <p className="text-stone-600">contato@polimentopedras.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-elegant-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-elegant-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">Atendimento</p>
                      <p className="text-stone-600">Atendemos em BH e Região Metropolitana</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-elegant-50 p-6 rounded-lg">
                <h4 className="font-semibold text-stone-800 mb-3">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-stone-600">
                  <p>Segunda a Sexta: 08:00 - 18:00</p>
                  <p>Sábado: 08:00 - 14:00</p>
                  <p>Domingo: Plantão por WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-elegant-300">
                Polimento Pedras
              </h3>
              <p className="text-stone-300 mb-4">
                Especialistas em tratamento, polimento e restauração de pedras naturais. 
                Transformando ambientes com qualidade e excelência.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+5531988495042" className="w-8 h-8 bg-elegant-600 rounded-full flex items-center justify-center hover:bg-elegant-700 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:contato@polimentopedras.com.br" className="w-8 h-8 bg-elegant-600 rounded-full flex items-center justify-center hover:bg-elegant-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-elegant-300">Serviços</h4>
              <ul className="space-y-2 text-stone-300">
                <li>Polimento de Mármore</li>
                <li>Polimento de Granito</li>
                <li>Restauração de Pedras</li>
                <li>Limpeza Pós-Obra</li>
                <li>Aplicação de Rejunte</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-elegant-300">Palavras-chave</h4>
              <div className="flex flex-wrap gap-2">
                {['polimento', 'limpeza', 'rejunte', 'mármore', 'granito', 'restauração de pedras', 'tratamento de pisos'].map((keyword) => (
                  <Badge key={keyword} variant="outline" className="border-stone-600 text-stone-300">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2025 Polimento Pedras - Tratamento de Pedras. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Responsabilidade • Qualidade • Preço Justo • Excelentes Referências
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
