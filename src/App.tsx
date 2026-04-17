import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  BrainCircuit, 
  Workflow, 
  Lightbulb,
  Search,
  PenTool,
  Code,
  TrendingUp,
  BarChart3,
  Clock,
  ShieldCheck,
  CheckCircle,
  Menu,
  X,
  Linkedin,
  Mail
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-surface/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-sm">
              <div className="w-3 h-3 bg-surface rounded-full"></div>
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-primary">Artiplent</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#diensten" className="text-text-muted hover:text-primary hover:underline font-medium px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all">Diensten</a>
            <a href="#werkwijze" className="text-text-muted hover:text-primary hover:underline font-medium px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all">Werkwijze</a>
            <a href="#impact" className="text-text-muted hover:text-primary hover:underline font-medium px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all">Impact</a>
            <a href="#waarom-ons" className="text-text-muted hover:text-primary hover:underline font-medium px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all">Waarom Artiplent</a>
            <a href="#contact" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all border-2 border-transparent hover:border-accent-hover shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-text-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <a href="#diensten" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-text-muted hover:text-primary hover:bg-background rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Diensten</a>
          <a href="#werkwijze" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-text-muted hover:text-primary hover:bg-background rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Werkwijze</a>
          <a href="#impact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-text-muted hover:text-primary hover:bg-background rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Impact</a>
          <a href="#waarom-ons" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-text-muted hover:text-primary hover:bg-background rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Waarom Artiplent</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 text-base font-medium text-center text-white bg-accent hover:bg-accent-hover rounded-lg border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-border text-primary text-sm font-semibold tracking-wide mb-8 shadow-sm">
              Samen vooruit met data en AI
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main tracking-tight leading-tight mb-8">
              Realistische oplossingen <br className="hidden md:block" />
              <span className="text-primary">met een duidelijke scope.</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              Wij helpen organisaties met op maat gemaakte, realistische oplossingen. Geen overdreven beloftes, maar bevlogen experts die met u meedenken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-medium transition-all border-2 border-transparent hover:border-accent-hover shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
                Plan een kennismaking
                <ArrowRight size={20} />
              </a>
              <a href="#diensten" className="inline-flex items-center justify-center gap-2 bg-surface text-primary border-2 border-primary hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
                Bekijk onze diensten
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Strategie & Analytics",
      description: "Heldere inzichten uit uw data. Wij bouwen overzichtelijke dashboards voor betere, geïnformeerde besluitvorming."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      title: "AI Implementatie",
      description: "Praktische AI-toepassingen die passen bij uw situatie en direct waarde toevoegen aan uw dagelijkse operatie."
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Procesautomatisering",
      description: "Minder repetitief werk. Wij stroomlijnen uw digitale workflows zodat uw team zich kan richten op wat echt telt."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Digitale Transformatie",
      description: "Een realistische roadmap voor uw digitale toekomst. Wij begeleiden uw organisatie stap voor stap."
    }
  ];

  return (
    <section id="diensten" className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Onze diensten</h2>
          <p className="text-lg text-text-muted">
            Praktische toepassingen van technologie, afgestemd op uw specifieke vraagstuk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-primary group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 mb-6 group-hover:scale-105 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-main mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Diagnose",
      description: "Samen analyseren we uw huidige processen en data om de juiste scope te bepalen."
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: "Ontwerp",
      description: "We creëren een realistische architectuur, afgestemd op uw bedrijfsdoelstellingen."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Bouw",
      description: "Onze bevlogen experts ontwikkelen de oplossing met geduld en oog voor detail."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Optimalisatie",
      description: "We monitoren en begeleiden uw team voor een duurzaam en werkend resultaat."
    }
  ];

  return (
    <section id="werkwijze" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">Onze werkwijze</h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Met geduld en betrokkenheid werken we in overzichtelijke stappen naar een tastbaar resultaat. Geen verrassingen achteraf.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">
              Start uw project <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-8 relative">
              {/* Connecting lines for desktop */}
              <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0"></div>
              <div className="hidden sm:block absolute top-0 left-1/2 w-px h-full bg-border -translate-x-1/2 z-0"></div>
              
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface p-8 rounded-2xl border border-border shadow-sm relative z-10"
                >
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text-main mb-3 flex items-center gap-3">
                    <span className="text-sm font-bold text-accent bg-orange-50 px-2 py-1 rounded border border-orange-100">Stap {index + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-text-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const metrics = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      value: "Tijdswinst",
      label: "Efficiëntere processen",
      description: "Door geautomatiseerde workflows houdt uw team tijd over voor belangrijk werk."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: "Inzicht",
      label: "Betere beslissingen",
      description: "Met overzichtelijke dashboards stuurt u op basis van feiten in plaats van gevoel."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      value: "Kwaliteit",
      label: "Minder fouten",
      description: "Dankzij slimme controles en validatie verhoogt u de betrouwbaarheid van uw data."
    }
  ];

  return (
    <section id="impact" className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Wat u mag verwachten</h2>
          <p className="text-lg text-text-muted">
            Realistische resultaten die uw organisatie direct verder helpen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="w-16 h-16 mx-auto bg-white border border-border rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-text-main mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-primary mb-3">{metric.label}</h3>
              <p className="text-text-muted">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: "Betrokken & Op maat",
      description: "We luisteren naar uw specifieke behoeften en leveren oplossingen die écht passen bij uw organisatie."
    },
    {
      title: "Realistisch & Duidelijke scope",
      description: "Geen eindeloze trajecten. We bakenen projecten helder af zodat u precies weet waar u aan toe bent."
    },
    {
      title: "Enthousiast & Bevlogen",
      description: "We houden van ons vak en brengen die energie mee naar elk project, samen met uw team."
    }
  ];

  return (
    <section id="waarom-ons" className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">Waarom Artiplent?</h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              We combineren enthousiasme met een nuchtere, realistische blik op technologie. Samen bouwen we aan de toekomst.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-main mb-2">{reason.title}</h3>
                    <p className="text-text-muted leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm">
              <div className="aspect-square rounded-2xl overflow-hidden relative bg-background border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Lightbulb className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-text-main mb-2">Samen Vooruit</h4>
                  <p className="text-text-muted">Met een heldere visie en praktische stappen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-blue-50 to-background rounded-3xl p-8 md:p-16 shadow-sm border border-border relative">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                Laten we samenwerken
              </h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Klaar voor de volgende stap? Neem contact op voor een eerlijk en realistisch adviesgesprek over uw data en processen.
              </p>
              
              <div className="flex items-center gap-4 text-text-main font-medium mb-4 bg-white p-4 rounded-xl border border-border inline-flex shadow-sm">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@artiplent.nl</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <form className="bg-surface rounded-2xl p-8 shadow-md border border-border" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold text-text-main mb-6">Neem contact op</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1">Naam</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">E-mailadres</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="naam@bedrijf.nl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1">Bericht</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                      placeholder="Waar kunnen we u mee helpen?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 px-4 rounded-lg transition-all border-2 border-transparent hover:border-accent-hover shadow-sm hover:shadow-md flex justify-center items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  >
                    Verstuur Aanvraag
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-sm">
                <div className="w-3 h-3 bg-surface rounded-full"></div>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-primary">Artiplent</span>
            </div>
            <p className="text-text-muted max-w-md mb-6 leading-relaxed">
              Wij helpen organisaties stap voor stap vooruit met heldere data-inzichten en realistische AI-toepassingen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-sm">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:info@artiplent.nl" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-sm">
                <Mail size={20} />
                <span className="sr-only">E-mail</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-4">Diensten</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Data Strategie</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">AI Implementatie</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Procesautomatisering</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Digitale Transformatie</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              <li><a href="#werkwijze" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Werkwijze</a></li>
              <li><a href="#impact" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Impact</a></li>
              <li><a href="#waarom-ons" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Over Ons</a></li>
              <li><a href="#contact" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Artiplent. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 text-sm transition-colors">Privacybeleid</a>
            <a href="#" className="text-text-muted hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 text-sm transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Impact />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
