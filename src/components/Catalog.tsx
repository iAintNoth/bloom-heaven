import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Star, Flower } from 'lucide-react';
import weddingImage from '@/assets/wedding-bouquet.jpg';
import birthdayImage from '@/assets/birthday-arrangement.jpg';
import sympathyImage from '@/assets/sympathy-flowers.jpg';

const Catalog = () => {
  const categories = [
    {
      id: 'weddings',
      title: 'Matrimoni',
      subtitle: 'Per il giorno più bello',
      description: 'Bouquet da sposa, centrotavola e decorazioni floreali per rendere indimenticabile il vostro matrimonio.',
      image: weddingImage,
      icon: Heart,
      color: 'dusty-rose',
      price: 'da €80',
      features: ['Bouquet da sposa', 'Boutonnière', 'Centrotavola', 'Decorazioni cerimonia']
    },
    {
      id: 'birthdays',
      title: 'Compleanni',
      subtitle: 'Festa di colori',
      description: 'Composizioni allegre e colorate per celebrare ogni compleanno con gioia e originalità.',
      image: birthdayImage,
      icon: Gift,
      color: 'sage-green',
      price: 'da €35',
      features: ['Bouquet colorati', 'Composizioni in vaso', 'Decorazioni festa', 'Biglietto personalizzato']
    },
    {
      id: 'sympathy',
      title: 'Cerimonie',
      subtitle: 'Con rispetto e delicatezza',
      description: 'Composizioni eleganti e discrete per momenti di raccoglimento e ricordo.',
      image: sympathyImage,
      icon: Star,
      color: 'forest-green',
      price: 'da €50',
      features: ['Composizioni funebri', 'Corone', 'Cuscini floreali', 'Consegna discreta']
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Flower className="text-accent mr-2" size={24} />
            <span className="text-accent font-medium tracking-wide uppercase">Le Nostre Creazioni</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-botanical-gradient">
            Fiori per Ogni Occasione
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Scopri le nostre collezioni pensate per accompagnare i momenti più importanti della tua vita 
            con eleganza e personalità.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={category.id} className="group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-botanical transition-all duration-500 overflow-hidden fade-in-up">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-${category.color}/20 text-${category.color} border-${category.color}/30`}>
                    <category.icon size={14} className="mr-1" />
                    {category.subtitle}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {category.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-serif text-botanical-gradient flex items-center">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full btn-botanical group"
                >
                  <span className="relative z-10">Richiedi Preventivo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <Card className="bg-gradient-botanical border-none text-primary-foreground max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Hai un'occasione speciale in mente?
              </h3>
              <p className="mb-6 opacity-90">
                Creiamo composizioni personalizzate per ogni evento. Raccontaci la tua visione e 
                la trasformeremo in realtà con i nostri fiori più belli.
              </p>
              <Button 
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Progetto Personalizzato
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Catalog;