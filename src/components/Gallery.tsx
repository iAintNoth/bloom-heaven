import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Camera, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import weddingImage from '@/assets/wedding-bouquet.jpg';
import birthdayImage from '@/assets/birthday-arrangement.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      image: gallery1,
      title: 'Composizione Rustica',
      category: 'Decorazione',
      description: 'Elegante mix di rose e peonie in contenitore vintage'
    },
    {
      image: gallery2,
      title: 'Bouquet da Sposa',
      category: 'Matrimonio',
      description: 'Orchidee bianche con cascata di verde naturale'
    },
    {
      image: gallery3,
      title: 'Primavera Fresca',
      category: 'Stagionale',
      description: 'Tulipani e narcisi per celebrare la primavera'
    },
    {
      image: gallery4,
      title: 'Design Moderno',
      category: 'Contemporaneo',
      description: 'Terrarium geometrico con succulente e rose'
    },
    {
      image: weddingImage,
      title: 'Bouquet Classico',
      category: 'Matrimonio',
      description: 'Rose bianche e rosa con tocchi di verde'
    },
    {
      image: birthdayImage,
      title: 'Festa di Colori',
      category: 'Compleanno',
      description: 'Gerbere colorate per un compleanno speciale'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-accent mr-2" size={24} />
            <span className="text-accent font-medium tracking-wide uppercase">Le Nostre Opere</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-botanical-gradient">
            Galleria delle Creazioni
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ogni composizione racconta una storia unica. Scopri alcune delle nostre creazioni 
            più amate e lasciati ispirare per la tua occasione speciale.
          </p>
        </div>

        <div className="relative mb-8 fade-in-up">
          <Card className="overflow-hidden shadow-botanical border-border/50">
            <div className="relative h-96 lg:h-[500px]">
              <img 
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              

              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
                  {galleryItems[currentIndex].category}
                </Badge>
                <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-primary-foreground/90 max-w-md">
                  {galleryItems[currentIndex].description}
                </p>
              </div>

              {/* Zoom Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="sm"
                    variant="secondary"
                    className="absolute top-6 right-6 bg-background/90 hover:bg-background"
                  >
                    <Maximize2 size={16} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img 
                    src={galleryItems[currentIndex].image}
                    alt={galleryItems[currentIndex].title}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>

              {/* Navigation Arrows */}
              <Button
                onClick={prevSlide}
                size="sm"
                variant="secondary"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button
                onClick={nextSlide}
                size="sm"
                variant="secondary"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 fade-in-up">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-primary scale-105 shadow-botanical' 
                  : 'hover:scale-105 hover:shadow-soft'
              }`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'bg-primary/20' : 'bg-background/40 hover:bg-background/20'
              }`}></div>
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16 fade-in-up">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-botanical-gradient">
                Ti è piaciuta una creazione?
              </h3>
              <p className="text-muted-foreground mb-6">
                Possiamo realizzare composizioni simili personalizzate per te. 
                Ogni creazione è unica e adattata alle tue esigenze.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-botanical"
              >
                Richiedi la Tua Composizione
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
