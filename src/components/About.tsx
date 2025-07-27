import { Heart, Award, Users, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/assets/about-us.jpg';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Passione Autentica",
      description: "Ogni composizione nasce dall'amore per la bellezza naturale e dall'attenzione ai dettagli."
    },
    {
      icon: Award,
      title: "Qualità Artigianale",
      description: "Utilizziamo solo i fiori più freschi e di qualità, selezionati dai migliori fornitori."
    },
    {
      icon: Users,
      title: "Su Misura",
      description: "Ogni creazione è personalizzata per esprimere al meglio le tue emozioni e il tuo stile."
    },
    {
      icon: Leaf,
      title: "Sostenibilità",
      description: "Rispettiamo l'ambiente scegliendo fornitori locali e metodi eco-compatibili."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <div className="mb-6">
              <span className="text-accent font-medium tracking-wide uppercase">La Nostra Storia</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mt-2 mb-4 text-botanical-gradient">
                Una Passione che Fiorisce da Generazioni
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bloom Heaven nasce dalla passione per i fiori che si tramanda da tre generazioni nella nostra famiglia. 
                Ogni giorno creiamo composizioni uniche che raccontano storie, celebrano momenti speciali e 
                portano bellezza nella vita delle persone.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-foreground leading-relaxed">
                La nostra filosofia si basa sull'artigianalità, sulla qualità e sull'attenzione personalizzata 
                per ogni cliente. Non vendiamo solo fiori, ma emozioni trasformate in arte naturale. 
                Ogni composizione è un pezzo unico, pensato e realizzato con cura per esprimere al meglio 
                i sentimenti che volete comunicare.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-botanical rounded-lg flex items-center justify-center">
                        <feature.icon className="text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up relative">
            <div className="relative">
              <img 
                src={aboutImage}
                alt="Fiorista al lavoro"
                className="w-full rounded-2xl shadow-botanical"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-sunset rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-botanical rounded-full opacity-40 blur-xl"></div>
            </div>
            
            {/* Decorative Quote */}
            <div className="absolute -bottom-8 left-8 right-8 bg-card/90 backdrop-blur-md rounded-xl p-6 shadow-soft border border-border/50">
              <blockquote className="text-center">
                <p className="text-foreground font-medium italic mb-2">
                  "I fiori sono le parole silenziose del cuore"
                </p>
                <footer className="text-sm text-muted-foreground">— Maria Rossi, Fondatrice</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;