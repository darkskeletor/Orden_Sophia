import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Menu,
  X,
  PawPrint,
  Users,
  BookOpen,
  Compass,
  Star,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'community', 'wisdom', 'cta'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Filosofía', id: 'features' },
    { href: '#community', label: 'El Circulo', id: 'community' },
      { href: '#wisdom', label: 'Conocimiento', id: 'wisdom' },
    ];

  return (
    <nav className="bg-background/80 border-border/40 relative sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
      <a
        href="/"
        className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        {/* <PawPrint className="h-8 w-8" />*/}
        <img
          src="/images/logo2.png"
          alt="Logo de la orden"
          className="h-15 w-15 object-contain"
        />
        <span className="font-heading text-foreground text-2xl font-bold">
          Orden Sophia
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            data-testid={`link-${link.id}`}
            className={`relative w-fit transition-colors ${
              activeSection === link.id
                ? 'text-primary font-bold'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="bg-primary absolute right-0 bottom-0 left-0 h-1 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          </a>
        ))}
        <a href="mailto:sophia_info@consultant.com?subject=Consulta&body=Hola,%20quiero%20información">
          <button
            data-testid="button-join-nav"
            className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Enviar un e-mail
          </button>
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="text-foreground bg-primary/10 hover:bg-primary/25 rounded-full p-2 transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-card border-border/60 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                data-testid={`link-${link.id}-mobile`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                whileHover={{ x: 4 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary font-bold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="border-border/40 border-t pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: navLinks.length * 0.08 + 0.1,
                duration: 0.25,
              }}
            >
              <a
                href="/join"
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    data-testid="button-join-mobile"
                    className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full py-4 font-medium shadow-lg transition-all hover:shadow-xl"
                  >
                    Join the Clowder
                  </button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center overflow-hidden px-6 py-12 md:flex-row md:px-12 lg:px-24"
    >
      {/* Decorative Blobs */}
      <div className="bg-primary/10 absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-accent/30 absolute right-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="relative z-10 w-full space-y-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-hand text-primary mb-4 inline-block -rotate-2 text-2xl">
            Bienvenido viajero. Has cruzado el umbral de la Orden!
          </span>
          <h1 className="font-heading text-foreground mb-6 text-5xl leading-[1.1] font-bold md:text-7xl">
            Donde la{' '}
            <span className="text-primary relative inline-block">
              comprensión interior
              <svg
                className="text-accent absolute -bottom-1 left-0 -z-10 h-3 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{' '}
            <br />
            guía el camino
          </h1>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed md:text-xl">
            La Orden Sophia ofrece un espacio de estudio, contemplación y práctica para quienes sienten el llamado a conocer más allá de lo aparente. 
            Aquí se aprende a silenciar el ruido, afinar la percepción y reconectar con la sabiduría que habita en lo profundo.
          </p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Star, label: 'Sabiduría custodiada', color: 'text-yellow-600' },
              { icon: Lock, label: 'Acceso consciente', color: 'text-green-600' },
              {
                icon: CheckCircle,
                label: 'Camino practicado',
                color: 'text-purple-600',
              },
              { icon: Heart, label: 'Fraternidad consciente', color: 'text-red-600' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-secondary/30 border-border/40 flex items-center justify-center gap-2 rounded-full border px-3 py-2"
              >
                <badge.icon
                  className={`h-4 w-4 flex-shrink-0 ${badge.color}`}
                />
                <span className="text-foreground text-xs font-semibold">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <img
            src="/images/banner_ast.png"
            alt="Banner de la orden Sophia"
            className="h-auto w-full transform rounded-[3rem] shadow-2xl transition-transform duration-700 hover:rotate-0 md:rotate-3"
          />

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="bg-card absolute -bottom-8 -left-4 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:left-10"
          >
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Claridad interior</p>
              <p className="text-muted-foreground text-xs">Atención plena</p>
            </div>
          </motion.div>

          {/* Second Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="bg-card absolute -top-4 -right-4 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:-right-8"
          >
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <Users size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Círculo de estudio</p>
              <p className="text-muted-foreground text-xs">Aprendizaje colectivo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  desc,
  img,
  delay,
  testId,
}: {
  title: string;
  desc: string;
  img: string;
  delay: number;
  testId: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    data-testid={testId}
  >
    <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col p-0">
        <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
          <motion.img
            src={img}
            alt={title}
            className="h-32 w-auto object-contain drop-shadow-md"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="flex flex-1 flex-col items-center p-8 text-center">
          <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section
      id="features"
      className="relative bg-white/50 px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Los fundamentos del camino
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            El sendero de la comprensión
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            title="Comprensión interior"
            desc="El cultivo de la lucidez interior, el discernimiento y el reconocimiento consciente de la realidad."
            img="/images/service-2-ast.png"
            delay={0.1}
            testId="card-feature-knowledge"
          />
          <FeatureCard
            title="Unión consciente"
            desc="La fraternidad como espacio de encuentro, estudio y acompañamiento mutuo en el camino."
            img="/images/service-1-ast.png"
            delay={0.2}
            testId="card-feature-union"
          />
          <FeatureCard
            title="Propósito vivido"
            desc="La integración de la comprensión en la vida cotidiana, dando dirección, sentido y coherencia a la acción."
            img="/images/service-3-ast.png"
            delay={0.3}
            testId="card-feature-nourishment"
          />
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  const testimonials = [
    {
      name: 'Li Mei García',
      role: 'Ingeniero de software',
      quote:
        'Este espacio me ayudó a ir más allá de la técnica. Aprendí a observar con mayor claridad y a sostener la práctica desde un lugar más consciente y estable.',
      image: '/images/sarah_chen_meditation_teacher_portrait.png',
    },
    {
      name: 'Javier Morales',
      role: 'Profesor de secundaria',
      quote:
        'Aquí encontré un enfoque sobrio y honesto. La simplicidad, el estudio y la presencia compartida cambiaron mi manera de comprender y actuar.',
      image: '/images/marcus_johnson_wellness_coach_portrait.png',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Directora creativa',
      quote:
        "La integración de lo aprendido en la vida diaria fue clave. El Círculo y el trabajo compartido me ayudaron a encontrar dirección y sentido en mi proceso personal",
      image: '/images/elena_rodriguez_creative_director_portrait.png',
    },
  ];

  return (
    <section id="community" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Experiencias compartidas dentro del Círculo
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Voces del camino
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-card h-full rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="flex h-full flex-col p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-heading text-foreground font-bold">
                        {person.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex-1 leading-relaxed italic">
                    "{person.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section
      id="wisdom"
      className="bg-secondary/20 flex items-center justify-center px-6 py-24 text-center"
    >
      <motion.div
        className="relative max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3
          data-testid="text-quote"
          className="font-hand text-foreground/80 text-3xl leading-relaxed md:text-5xl"
        >
          La luz no se busca fuera: se recuerda dentro.
        </h3>

        <div className="font-heading text-primary mt-8 font-bold">
          — Voz del camino
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="from-secondary/5 via-background to-primary/5 border-border/40 relative border-t bg-gradient-to-br px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Left Column: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-3"
          >
            <div className="flex items-center gap-3">
              {/*<PawPrint className="text-primary h-7 w-7" />*/}

              <img src="images/logo2.png" alt="Logo de la orden" className='h-12 w-12' />
              <h3 className="font-heading text-foreground text-lg font-bold">
                Orden Sophia
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un camino de atención y comprensión interior.
              La práctica consciente como vía hacia la claridad y la calma.
            </p>
          </motion.div>

          {/* Center Column: Links by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Learn */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Cultiva la comprensión</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/guide"
                  data-testid="link-footer-guide"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Inicia el camino
                </a>
                <a
                  href="/faq"
                  data-testid="link-footer-faq"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Community */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">
                  El Círculo
                </span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <div
                  className="text-muted-foreground w-fit text-sm transition-colors"
                >
                  Contactanos aquí: <b>sophia_info@consultant.com</b>
                </div>
                <a
                  href="/about"
                  data-testid="link-footer-about-community"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Sobre la orden
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Legal</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/privacy"
                  data-testid="link-footer-privacy"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Politica de privacidad
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h4 className="font-heading text-foreground font-bold">
                Contactar con la Orden
              </h4>
              <p className="text-muted-foreground text-sm">
                Inicia una conversación desde el respeto y la intención consciente.
              </p>
            </div>
            <a href="mailto:sophia_info@consultant.com?subject=Consulta&body=Hola,%20quiero%20información" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-footer-cta"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full px-6 py-3 font-bold shadow-lg transition-all hover:shadow-xl"
              >
                Escribenos
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-border/40 my-8 border-t" />

        {/* Bottom: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 flex flex-col items-center justify-between gap-4 text-center text-xs md:flex-row"
        >
          <p>
            &copy; {new Date().getFullYear()} Orden Sophia. Todos los derechos registrados.
            reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Construido con <Heart className="h-3 w-3 text-red-400" /> y propósito
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Community />
      <QuoteSection />
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4 text-center"
          >
            <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              ¿Preparado para iniciar el camino?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Elige tu recorrido y comienza hoy tu proceso de comprensión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: 'cta-start-app',
                title: 'Iniciar la práctica',
                description:
                  'Un espacio para la atención y la respiración consciente. Comienza con una práctica guiada y cultiva la calma.',
                href: '/app',
                testId: 'button-cta-app',
                icon: <Heart className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-guide',
                title: 'Iniciar el estudio',
                description:
                  'Los fundamentos de la práctica consciente. Una guía paso a paso para quienes comienzan y desean profundizar.',
                href: '/guide',
                testId: 'button-cta-guide',
                icon: <BookOpen className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-explore',
                title: 'Explorar recursos',
                description:
                  'Textos, prácticas y orientaciones para profundizar en la atención, la respiración y la comprensión interior.',
                href: '/explore',
                testId: 'button-cta-explore',
                icon: <Compass className="text-primary h-8 w-8" />,
              },
            ].map((cta, idx) => (
              <motion.div
                key={cta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-card flex h-full flex-col items-center gap-4 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
                  {cta.icon}
                </div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  {cta.title}
                </h3>
                <p className="text-muted-foreground flex-1">
                  {cta.description}
                </p>
                <a href={cta.href}>
                  <button
                    data-testid={cta.testId}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer rounded-full px-6 py-2 text-sm font-bold shadow-md transition-colors"
                  >
                    Primeros pasos
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
