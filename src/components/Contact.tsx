import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageSquare,
  Send
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Messaggio inviato!",
      description: "Ti contatteremo presto per discutere la tua richiesta.",
    });
    setFormData({ name: '', email: '', phone: '', occasion: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openingHours = [
    { days: 'Lunedì - Venerdì', hours: '9:00 - 19:00' },
    { days: 'Sabato', hours: '9:00 - 18:00' },
    { days: 'Domenica', hours: '10:00 - 17:00' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="text-accent mr-2" size={24} />
            <span className="text-accent font-medium tracking-wide uppercase">Contattaci</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-botanical-gradient">
            Realizziamo Insieme la Tua Visione
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Raccontaci la tua occasione speciale e creeremo la composizione floreale perfetta per te. 
            Siamo qui per trasformare le tue idee in realtà.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in-up">
            <Card className="shadow-botanical border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-botanical-gradient">
                  Richiedi un Preventivo
                </CardTitle>
                <p className="text-muted-foreground">
                  Compila il form e ti risponderemo entro 24 ore con un preventivo personalizzato.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nome *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Il tuo nome"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="la-tua-email@email.com"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Telefono
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+39 123 456 789"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Occasione
                      </label>
                      <Input
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleInputChange}
                        placeholder="Matrimonio, compleanno, ecc."
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Messaggio *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descrivi la tua visione: colori preferiti, stile, budget approssimativo, data dell'evento..."
                      rows={5}
                      required
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-botanical group">
                    <Send size={16} className="mr-2" />
                    <span className="relative z-10">Invia Richiesta</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 fade-in-up">
            {/* Location & Hours */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-botanical-gradient">
                  <MapPin size={20} className="mr-2" />
                  Dove Trovarci
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-foreground">
                  <p className="font-medium">Flora & Arte</p>
                  <p className="text-muted-foreground">Via dei Fiori, 123</p>
                  <p className="text-muted-foreground">20121 Milano, Italia</p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center mb-3">
                    <Clock size={16} className="mr-2 text-accent" />
                    <span className="font-medium text-foreground">Orari di Apertura</span>
                  </div>
                  <div className="space-y-2">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{schedule.days}</span>
                        <span className="text-foreground font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-botanical-gradient">Contatti Diretti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-botanical rounded-lg flex items-center justify-center">
                    <Phone className="text-primary-foreground" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">+39 123 456 789</p>
                    <p className="text-xs text-muted-foreground">Chiamaci o WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center">
                    <Mail className="text-accent-foreground" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">info@floraeart.it</p>
                    <p className="text-xs text-muted-foreground">Risposta entro 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-botanical-gradient">Seguici</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
                    <Instagram size={20} />
                    <span className="text-sm">@floraeart_milano</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
                    <Facebook size={20} />
                    <span className="text-sm">Flora & Arte</span>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Scopri le nostre creazioni quotidiane e trai ispirazione per i tuoi eventi!
                </p>
              </CardContent>
            </Card>

            {/* Emergency Badge */}
            <Badge className="w-full justify-center p-3 bg-accent/20 text-accent border-accent/30">
              <span className="text-sm">🚀 Consegna urgente disponibile</span>
            </Badge>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 fade-in-up">
          <Card className="overflow-hidden shadow-botanical border-border/50">
            <div className="bg-gradient-earth h-64 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="text-accent mx-auto mb-2" size={32} />
                <p className="text-foreground font-medium">Mappa Integrata</p>
                <p className="text-muted-foreground text-sm">Via dei Fiori, 123 - Milano</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;