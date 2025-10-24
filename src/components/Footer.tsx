import { Heart, Leaf, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl">🌿</span>
              <div>
                <h3 className="text-2xl font-serif font-bold text-botanical-gradient">
                  Bloom Heaven
                </h3>
                <p className="text-sm text-muted-foreground">Fiorista Artigianale</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Da tre generazioni creiamo composizioni floreali uniche che trasformano 
              ogni momento in un ricordo indimenticabile. Passione, qualità e 
              bellezza naturale in ogni creazione.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-botanical rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-botanical transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center text-accent-foreground hover:shadow-glow transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:info@floraeart.it" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <Leaf size={16} className="mr-2 text-accent" />
              Link Rapidi
            </h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Chi Siamo
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Catalogo
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Galleria
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contatti
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <Heart size={16} className="mr-2 text-accent" />
              Contatti
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Via dei Fiori, 123</p>
                  <p className="text-muted-foreground">20121 Milano, Italia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">+39 123 456 789</p>
                  <p className="text-muted-foreground">Lun-Sab 9:00-19:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">info@bloomheaven.it</p>
                  <p className="text-muted-foreground">Risposta in 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl mb-2">🌸</div>
              <h5 className="font-medium text-foreground">Consegna a Domicilio</h5>
              <p className="text-sm text-muted-foreground">Portamo i tuoi fiori dove vuoi tu</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl mb-2">🎨</div>
              <h5 className="font-medium text-foreground">Progetti Personalizzati</h5>
              <p className="text-sm text-muted-foreground">Ogni composizione è unica</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl mb-2">💚</div>
              <h5 className="font-medium text-foreground">Fiori Freschi</h5>
              <p className="text-sm text-muted-foreground">Selezionati quotidianamente</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <p>© {currentYear} Bloom Heaven "iAintNoth". Tutti i diritti riservati.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termini di Servizio
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground italic">
              "I fiori sono la musica della terra" - Fatto con {' '}
              <Heart size={12} className="inline-block text-accent" /> a Milano
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
