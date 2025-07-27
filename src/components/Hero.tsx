import { Button } from '@/components/ui/button';
import { Sparkles, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-florist.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Composizioni floreali eleganti" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 opacity-30 animate-pulse">
        <span className="text-6xl">🌿</span>
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-30 animate-pulse delay-1000">
        <span className="text-4xl">🌸</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-accent mr-2" size={24} />
            <span className="text-accent font-medium tracking-wide uppercase">Eleganza Naturale</span>
            <Sparkles className="text-accent ml-2" size={24} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="text-botanical-gradient block">Dove i Fiori</span>
            <span className="text-foreground">Diventano Arte</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Creazioni floreali uniche che trasformano ogni momento in un ricordo indimenticabile. 
            Passione, artigianalità e bellezza naturale in ogni composizione.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              onClick={() => scrollToSection('catalog')}
              size="lg"
              className="btn-botanical group relative overflow-hidden"
            >
              <span className="relative z-10">Scopri le Creazioni</span>
              <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="btn-floral border-accent/30 hover:bg-accent/10"
            >
              Contattaci
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-1/4 opacity-20 animate-float">
        <div className="w-8 h-8 bg-accent/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-20 animate-float delay-500">
        <div className="w-6 h-6 bg-primary/30 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;