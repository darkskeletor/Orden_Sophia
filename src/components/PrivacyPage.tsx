import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
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
              data-testid="button-back-privacy"
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
          <div>
            <h1 className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Política de privacidad
            </h1>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-6 p-8 md:p-12">
              {/* Datos recogidos */}
              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Datos que se recogen
                </h2>
                <p className="text-muted-foreground">
                  Solo se recopilan direcciones de correo electrónico cuando la
                  persona decide contactar o recibir comunicaciones. No se
                  solicitan datos de pago ni información sensible. Ciertos datos
                  de uso básico pueden almacenarse localmente en el navegador
                  para el correcto funcionamiento de la aplicación.
                </p>
              </div>

              {/* Uso de los datos */}
              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Uso de la información
                </h2>
                <p className="text-muted-foreground">
                  El correo electrónico se utiliza exclusivamente para responder
                  a consultas o enviar comunicaciones relacionadas con la
                  actividad de la Orden. La información no se vende ni se cede a
                  terceros. En cualquier momento puede solicitarse el cese de
                  dichas comunicaciones.
                </p>
              </div>

              {/* Datos de sesión */}
              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Datos de uso
                </h2>
                <p className="text-muted-foreground">
                  Las prácticas realizadas y ciertos ajustes pueden almacenarse
                  de forma local en el dispositivo del usuario para mejorar la
                  experiencia. No se realiza seguimiento externo ni análisis de
                  comportamiento. El control de estos datos permanece en todo
                  momento en el propio dispositivo.
                </p>
              </div>

              {/* Seguridad */}
              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Seguridad
                </h2>
                <p className="text-muted-foreground">
                  Se aplican medidas razonables para proteger la información y
                  preservar la privacidad. El sitio sigue prácticas habituales
                  de seguridad web y se mantiene actualizado para reducir
                  riesgos.
                </p>
              </div>

              {/* Contacto */}
              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Contacto
                </h2>
                <p className="text-muted-foreground">
                  Para cualquier cuestión relacionada con la privacidad o el
                  tratamiento de los datos, puede contactarse directamente a
                  través del correo facilitado en la sección de contacto.
                </p>
              </div>

              {/* Fecha */}
              <div className="border-border/40 text-muted-foreground border-t pt-4 text-sm">
                Última actualización: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-privacy"
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

