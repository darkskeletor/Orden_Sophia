import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Lightbulb, Heart } from 'lucide-react';

const Guide = () => {
  const steps = [
    {
      title: '¿Por qué practicar?',
      description:
        'La práctica consciente favorece la claridad mental, reduce la tensión y fortalece el equilibrio emocional. Con el tiempo, transforma la manera en que percibes y respondes a la experiencia.',
      icon: <Heart className="h-6 w-6" />,
      benefits: [
        'Mejor calidad de descanso',
        'Reducción de la tensión y el estrés',
        'Mayor claridad y atención',
        'Estabilidad emocional',
      ],
    },
    {
      title: 'Cómo comenzar',
      description:
        'No se requiere experiencia previa. Busca un espacio tranquilo, adopta una postura cómoda y dirige la atención a la respiración. Nada más.',
      icon: <Lightbulb className="h-6 w-6" />,
      steps: [
        'Encuentra un lugar tranquilo y cómodo',
        'Siéntate o recuéstate según lo necesites',
        'Cierra suavemente los ojos',
        'Observa la respiración natural',
        'Cuando la mente divague, vuelve con calma a la respiración',
      ],
    },
    {
      title: 'Cultivar la constancia',
      description:
        'La comprensión se afianza mediante la práctica regular. Comienza con poco tiempo y permite que el hábito se asiente de forma natural.',
      icon: <CheckCircle className="h-6 w-6" />,
      tips: [
        'Comienza con cinco minutos',
        'Practica a la misma hora cada día',
        'Registra tus prácticas',
        'Sé paciente contigo',
        'Reconoce cada avance, por pequeño que sea',
      ],
    },
  ];

  return (
    <div className="from-secondary/10 via-background to-primary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center gap-4"
        >
          <a href="/">
            <button className="hover:bg-secondary/20 rounded-full p-2 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
          <div>
            <h1 className="font-heading text-foreground text-4xl font-bold">
              Guía inicial
            </h1>
            <p className="text-muted-foreground">
              Un primer acercamiento a la práctica consciente
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-card overflow-hidden rounded-2xl border-none shadow-lg transition-shadow hover:shadow-xl">
                <div className="p-8">
                  {/* Title */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                      {step.icon}
                    </div>
                    <div>
                      <h2 className="font-heading text-foreground text-2xl font-bold">
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Paso {idx + 1} de {steps.length}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Benefits / Steps / Tips */}
                  <div className="space-y-2">
                    {(step.benefits || step.steps || step.tips)?.map(
                      (item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary/10 mt-12 rounded-2xl p-8 text-center"
        >
          <h2 className="font-heading text-foreground mb-3 text-2xl font-bold">
            ¿Preparado para comenzar?
          </h2>
          <p className="text-muted-foreground mb-6">
            Inicia la práctica con el temporizador y elige un ritmo de respiración acorde a tu momento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/app">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:shadow-xl">
                Iniciar la práctica
              </button>
            </a>
            <a href="/explore">
              <button className="border-primary text-primary hover:bg-primary/10 rounded-full border-2 px-6 py-2 font-bold transition-colors">
                Explorar recursos
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guide;
