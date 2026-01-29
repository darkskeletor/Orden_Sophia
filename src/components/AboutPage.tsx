import { motion } from 'framer-motion';
import { ArrowLeft, Heart, PawPrint } from 'lucide-react';

export default function About() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <a href="/">
            <button
              data-testid="button-back-about"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-center">
            {/*<PawPrint className="text-primary mx-auto h-12 w-12" />*/}
            <img src="/images/logo2.png" alt="Logo de la orden" className="mx-auto h-18 w-18" />
            <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              Sobre la Orden
            </h1>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-6 p-8 md:p-12">
              {/* Propósito */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground text-2xl font-bold">
                  Nuestro propósito
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  La Orden existe como un espacio de estudio, práctica y
                  reflexión para quienes buscan una comprensión más profunda de
                  sí mismos y de la realidad que habitan. No ofrecemos
                  respuestas prefabricadas, sino un marco donde la claridad
                  puede emerger a través de la experiencia directa.
                </p>
              </div>

              {/* Enfoque */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground text-2xl font-bold">
                  Nuestro enfoque
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  El camino que proponemos se basa en la atención consciente,
                  el discernimiento y la integración de lo comprendido en la
                  vida cotidiana. La quietud, el silencio y la observación
                  sostenida son considerados medios para acceder a una
                  comprensión más lúcida y estable.
                </p>
              </div>

              {/* Tradición velada */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground text-2xl font-bold">
                  Una tradición viva
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  La Orden se nutre de una tradición de sabiduría interior
                  transmitida a lo largo del tiempo, adaptada al presente sin
                  perder su esencia. Su estudio no es acumulativo, sino
                  transformador: lo comprendido debe hacerse vida.
                </p>
              </div>

              {/* Qué se ofrece */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground text-2xl font-bold">
                  Qué se cultiva aquí
                </h2>
                <ul className="space-y-3">
                  {[
                    'Prácticas de atención y respiración consciente',
                    'Espacios de estudio y reflexión guiada',
                    'Recursos para integrar la comprensión en lo cotidiano',
                    'Un Círculo basado en el respeto y el acompañamiento mutuo',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Heart className="text-primary mt-1 h-5 w-5 flex-shrink-0 fill-current" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cierre */}
              <div className="border-border/40 border-t pt-4">
                <p className="text-muted-foreground text-center italic">
                  La comprensión no se impone: se reconoce.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-about"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-bold"
              >
                Volver al inicio
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

