import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Lightbulb, Wind, Heart, Sparkles } from 'lucide-react';

type Category = 'reflexiones' | 'respiracion' | 'afirmaciones';

interface Guide {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const categories: Record<Category, Guide[]> = {
    reflexiones: [
      {
        id: 'ref-1',
        title: 'El valor del silencio',
        description:
          'En la quietud se ordena la mente y se aclara la percepción. El silencio es el inicio de toda comprensión profunda.',
        icon: <Sparkles className="h-6 w-6" />,
        color: 'bg-amber-100',
      },
      {
        id: 'ref-2',
        title: 'Atención pausada',
        description:
          'Dirigir la atención con suavidad permite que el cuerpo y la mente entren en un estado de confianza y estabilidad.',
        icon: <Heart className="h-6 w-6" />,
        color: 'bg-pink-100',
      },
      {
        id: 'ref-3',
        title: 'Movimiento consciente',
        description:
          'Integrar estiramientos suaves ayuda a liberar tensiones y a preparar el cuerpo para la atención sostenida.',
        icon: <Wind className="h-6 w-6" />,
        color: 'bg-green-100',
      },
      {
        id: 'ref-4',
        title: 'Cuidar el entorno',
        description:
          'Un espacio sencillo y cómodo favorece la práctica y facilita el recogimiento interior.',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-blue-100',
      },
      {
        id: 'ref-5',
        title: 'La respiración como eje',
        description:
          'La respiración es un punto de retorno constante. Cuando la mente se dispersa, volver a ella restablece el equilibrio.',
        icon: <Wind className="h-6 w-6" />,
        color: 'bg-teal-100',
      },
      {
        id: 'ref-6',
        title: 'Reconocer lo recibido',
        description:
          'Comenzar la práctica reconociendo lo valioso orienta la mente hacia una disposición más clara y abierta.',
        icon: <Heart className="h-6 w-6" />,
        color: 'bg-fuchsia-100',
      },
      {
        id: 'ref-7',
        title: 'Contacto con lo natural',
        description:
          'Siempre que sea posible, practicar en contacto con la naturaleza refuerza la sensación de calma y pertenencia.',
        icon: <Sparkles className="h-6 w-6" />,
        color: 'bg-emerald-100',
      },
      {
        id: 'ref-8',
        title: 'Ritmo constante',
        description:
          'Sostener un horario regular ayuda al cuerpo y a la mente a asentarse con mayor facilidad en la práctica.',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-sky-100',
      },
    ],

    respiracion: [
      {
        id: 'resp-1',
        title: 'Respiración cuadrada',
        description:
          'Inhala, sostén, exhala y descansa en tiempos iguales. Un ritmo equilibrado que estabiliza la atención.',
        icon: <Wind className="h-6 w-6" />,
        color: 'bg-cyan-100',
      },
      {
        id: 'resp-2',
        title: 'Exhalación sonora',
        description:
          'Exhala con un sonido suave y continuo. La vibración ayuda a relajar el sistema nervioso.',
        icon: <Heart className="h-6 w-6" />,
        color: 'bg-purple-100',
      },
      {
        id: 'resp-3',
        title: 'Respiración equilibrada',
        description:
          'Inhalación, pausa, exhalación y reposo en proporciones iguales para inducir calma inmediata.',
        icon: <Sparkles className="h-6 w-6" />,
        color: 'bg-rose-100',
      },
      {
        id: 'resp-4',
        title: 'Exhalación prolongada',
        description:
          'Alargar la exhalación indica al cuerpo que puede soltar la tensión y entrar en reposo.',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-lime-100',
      },
      {
        id: 'resp-5',
        title: 'Respiración alterna',
        description:
          'Una técnica tradicional para equilibrar el sistema nervioso mediante la alternancia nasal.',
        icon: <Wind className="h-6 w-6" />,
        color: 'bg-violet-100',
      },
      {
        id: 'resp-6',
        title: 'Respiración abdominal',
        description:
          'Dirige la respiración hacia el abdomen y observa su movimiento natural para inducir calma.',
        icon: <Heart className="h-6 w-6" />,
        color: 'bg-pink-100',
      },
      {
        id: 'resp-7',
        title: 'Respiración coherente',
        description:
          'Un ritmo estable de inhalación y exhalación favorece la armonía entre cuerpo y mente.',
        icon: <Sparkles className="h-6 w-6" />,
        color: 'bg-amber-100',
      },
      {
        id: 'resp-8',
        title: 'Liberación activa',
        description:
          'Una exhalación firme y consciente ayuda a liberar tensión acumulada de forma inmediata.',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-orange-100',
      },
    ],

    afirmaciones: [
      {
        id: 'af-1',
        title: 'La respiración aquieta',
        description:
          'Con cada respiración, la mente se ordena y el ruido interno se disipa.',
        icon: <Heart className="h-6 w-6" />,
        color: 'bg-red-100',
      },
      {
        id: 'af-2',
        title: 'La lentitud esclarece',
        description:
          'Al reducir el ritmo, la percepción se vuelve más precisa y profunda.',
        icon: <Sparkles className="h-6 w-6" />,
        color: 'bg-yellow-100',
      },
      {
        id: 'af-3',
        title: 'El descanso es necesario',
        description:
          'Reconozco la importancia de respetar los ciclos del cuerpo y la mente.',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-indigo-100',
      },
      {
        id: 'af-4',
        title: 'Cada instante renueva',
        description:
          'En cada momento existe la posibilidad de recomenzar con mayor claridad.',
        icon: <Wind className="h-6 w-6" />,
        color: 'bg-orange-100',
      },
      {
        id: 'af-5',
        title: 'La mente se serena',
        description:
          'Al soltar la tensión, surge una quietud natural y estable.',
        icon: <Heart className="h-6 w-6" />,
        color: 'bg-rose-100',
      },
      {
        id: 'af-6',
        title: 'La calma se transmite',
        description:
          'Cuando cultivo la calma, esta se refleja en mi manera de estar con otros.',
        icon: <Sparkles className="h-6 w-6" />,
        color: 'bg-pink-100',
      },
      {
        id: 'af-7',
        title: 'La dificultad fortalece',
        description:
          'Cada desafío es una oportunidad de afianzar la comprensión.',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-cyan-100',
      },
      {
        id: 'af-8',
        title: 'La atención ordena',
        description:
          'Cuando la atención se sostiene, la experiencia se vuelve más clara y coherente.',
        icon: <Wind className="h-6 w-6" />,
        color: 'bg-lime-100',
      },
    ],
  };

  const categoryLabels: Record<
    Category,
    { name: string; icon: React.ReactNode }
  > = {
    reflexiones: { name: 'Reflexiones', icon: <Lightbulb className="h-5 w-5" /> },
    respiracion: {
      name: 'Respiración',
      icon: <Wind className="h-5 w-5" />,
    },
    afirmaciones: {
      name: 'Afirmaciones',
      icon: <Heart className="h-5 w-5" />,
    },
  };

  return (
    <div className="from-secondary/10 via-background to-primary/5 min-h-screen bg-gradient-to-br p-6">
      {/* Header */}
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-4"
        >
          <a href="/">
            <button
              data-testid="button-back-explore"
              className="hover:bg-secondary/20 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
          <div>
            <h1 className="font-heading text-foreground text-4xl font-bold">
              Explorar la práctica consciente
            </h1>
            <p className="text-muted-foreground">
              Profundiza en la práctica a través de enseñanzas atemporales
            </p>
          </div>
        </motion.div>

        {/* Category Selection */}
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {(Object.keys(categoryLabels) as Category[]).map(
                (category, idx) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    data-testid={`button-category-${category}`}
                    className="group"
                  >
                    <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-all hover:shadow-xl">
                      <div className="flex flex-col items-center gap-4 p-8 text-center">
                        <div className="bg-primary/10 group-hover:bg-primary/20 text-primary flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                          {categoryLabels[category].icon}
                        </div>
                        <h3 className="font-heading text-foreground text-2xl font-bold">
                          {categoryLabels[category].name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category === 'tips' && 'Learn meditation wisdom'}
                          {category === 'breathing' &&
                            'Master breathing techniques'}
                          {category === 'affirmations' && 'Empower your mind'}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ),
              )}
            </motion.div>
          ) : (
            /* Content View */
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Back Button */}
              <motion.button
                onClick={() => setSelectedCategory(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary hover:text-primary/80 mb-4 flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver a las secciones
              </motion.button>

              {/* Header */}
              <div>
                <h2 className="font-heading text-foreground mb-2 text-3xl font-bold">
                  {categoryLabels[selectedCategory].name}
                </h2>
                <p className="text-muted-foreground">
                  {selectedCategory === 'tips' &&
                    'Wisdom from the wisdom keepers - cats 🐱'}
                  {selectedCategory === 'breathing' &&
                    'Techniques to calm your mind and body'}
                  {selectedCategory === 'affirmations' &&
                    'Affirmations to start your day with zen'}
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <AnimatePresence>
                  {categories[selectedCategory].map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: idx * 0.05 }}
                      data-testid={`card-${selectedCategory}-${item.id}`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-all hover:shadow-xl">
                        <div className="flex h-full flex-col gap-4 p-8">
                          <div
                            className={`text-primary flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-heading text-foreground mb-2 text-xl font-bold">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Explore;
