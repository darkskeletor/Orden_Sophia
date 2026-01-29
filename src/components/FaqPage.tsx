import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs = [
    {
      id: 'faq-1',
      question: '¿Cuánto tiempo debería dedicar a la práctica cada día?',
      answer:
        'Comienza con cinco minutos diarios. Una práctica breve, cuando es constante, resulta eficaz. Con el tiempo, puedes ampliar a diez, veinte o treinta minutos según lo sientas necesario.',
    },
    {
      id: 'faq-2',
      question: 'Mi mente se dispersa constantemente. ¿Lo estoy haciendo mal?',
      answer:
        'En absoluto. Que la mente se disperse es algo natural. La práctica consiste precisamente en reconocerlo y volver con suavidad a la atención. Ese gesto es ya parte del proceso.',
    },
    {
      id: 'faq-3',
      question: '¿Cuál es el mejor momento del día para practicar?',
      answer:
        'Para muchas personas, las primeras horas del día son propicias. Aun así, el mejor momento es aquel en el que puedas sostener la práctica con regularidad. La constancia es más importante que el horario.',
    },
    {
      id: 'faq-4',
      question: '¿Necesito un lugar especial para practicar?',
      answer:
        'No es imprescindible. Un entorno tranquilo y cómodo facilita la práctica, pero esta puede realizarse en cualquier lugar: en casa, al aire libre o incluso durante un trayecto. Encuentra lo que mejor se adapte a ti.',
    },
    {
      id: 'faq-5',
      question: '¿Esta práctica pertenece a alguna creencia concreta?',
      answer:
        'La práctica de la atención ha estado presente en diversas tradiciones a lo largo del tiempo. Aquí se aborda como una experiencia directa y accesible, abierta a cualquier persona, independientemente de sus creencias.',
    },
    {
      id: 'faq-6',
      question: '¿Cuánto tiempo pasa hasta notar cambios?',
      answer:
        'Algunos efectos, como una mayor calma, pueden aparecer en pocos días. Cambios más profundos requieren semanas o meses de práctica sostenida. Confía en el proceso y mantén la constancia.',
    },
    {
      id: 'faq-7',
      question: '¿Qué ocurre si me quedo dormido durante la práctica?',
      answer:
        'No es un problema. A veces el cuerpo necesita descanso. Si sucede con frecuencia, prueba a practicar en otro momento del día o en una postura más erguida.',
    },
    {
      id: 'faq-8',
      question: '¿Puedo practicar mientras camino?',
      answer:
        'Sí. La práctica en movimiento es una forma válida y eficaz. Atiende a cada paso, a la respiración y al entorno, caminando de manera pausada y consciente.',
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
              FAQ
            </h1>
            <p className="text-muted-foreground">
              Respuestas a preguntas sobre la práctica
            </p>
          </div>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              data-testid={`faq-item-${faq.id}`}
            >
              <div className="border-border/40 bg-card overflow-hidden rounded-xl border shadow-lg transition-shadow hover:shadow-xl">
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  className="bg-card hover:bg-card/80 w-full p-6 text-left transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-foreground text-lg font-bold">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-border/40 overflow-hidden border-t"
                    >
                      <p className="text-muted-foreground p-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary/10 mt-12 rounded-2xl p-8 text-center"
        >
          <p className="text-muted-foreground mb-4">
            ¿Aún tienes preguntas? Estaremos atentos a leerte.
          </p>
          <a href="mailto:sophia_info@consultant.com?subject=Consulta&body=Hola,%20quiero%20información">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:shadow-xl">
              Contactanos
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
