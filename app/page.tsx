"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Verifika
            </span>
          </div>
          <a
            href="https://wa.me/573173253124"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:from-indigo-500 hover:to-blue-500 hover:-translate-y-0.5"
          >
            Solicitar demo
          </a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-20 h-40 w-40 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute right-1/4 bottom-20 h-40 w-40 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute left-10 bottom-32 h-32 w-32 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute right-10 top-40 h-32 w-32 rounded-full bg-purple-500 opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 md:gap-20 items-center">
            {/* Contenido de texto */}
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl animate-slide-in-up">
                Deja de perder dinero con empleados que dicen estar en sitio... pero no están
              </h1>
              <p className="mb-10 text-lg text-gray-300 md:text-xl animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                Control de asistencia en tiempo real con prueba fotográfica y ubicación GPS. 
                Sin mentiras, sin excusas, sin pérdidas.
              </p>
              <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:flex-row animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                <a
                  href="https://wa.me/573173253124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all hover:from-indigo-500 hover:to-blue-500 hover:shadow-xl hover:-translate-y-1 sm:w-auto"
                >
                  Solicitar demo gratis
                </a>
                <a
                  href="#como-funciona"
                  className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900 hover:-translate-y-1 sm:w-auto"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
            
            {/* Screenshot de la app */}
            <div className="animate-slide-in-up max-w-[250px] mx-auto " style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Efecto de brillo de fondo */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-500/20 to-transparent blur-2xl"></div>
                
                {/* Imagen con borde y sombra */}
                <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 bg-white/5 p-1.5 shadow-2xl backdrop-blur-sm mx-auto">
                  <Image
                    src="/images/screenshot1.jpeg" 
                    alt="Captura de pantalla de Verifika mostrando el dashboard de control de asistencia"
                    className="w-full h-auto rounded-lg shadow-xl"
                    width={300}
                    height={600}
                    priority
                  />
                  {/* Overlay de brillo animado */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Te suena familiar?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Estos son los problemas diarios que enfrentan supervisores como tú
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProblemCard 
              icon="⏰"
              title="Reportan entrada... desde su casa"
              description="Tus empleados marcan asistencia pero llegan 30 minutos tarde al sitio real de trabajo."
            />
            <ProblemCard 
              icon="📍"
              title="No sabes dónde están realmente"
              description="Envías a 3 técnicos a diferentes zonas y al final del día descubres que uno ni siquiera fue."
            />
            <ProblemCard 
              icon="🤷"
              title="Ellos dicen una cosa, la realidad es otra"
              description="El cliente te reclama que nadie llegó a las 9 AM, pero tu empleado jura que sí estuvo ahí."
            />
            <ProblemCard 
              icon="📞"
              title="Pierdes tiempo llamando a cada uno"
              description="En lugar de trabajar, te la pasas marcando para confirmar si ya llegaron o siguen en camino."
            />
            <ProblemCard 
              icon="💰"
              title="Pagas por horas que no trabajaron"
              description="Al final del mes, te das cuenta que pagaste jornadas completas por medios días de trabajo."
            />
            <ProblemCard 
              icon="😤"
              title="Discusiones sin evidencias"
              description="Él dice que sí, tú dices que no. Sin pruebas concretas, no puedes tomar decisiones justas."
            />
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 px-6 py-20 lg:py-28">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-20 h-40 w-40 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute right-1/3 bottom-20 h-40 w-40 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              La solución: control real, evidencia real
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Un sistema simple que elimina la incertidumbre y te da control total sobre tu equipo en campo
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <SolutionCard
              icon="✅"
              title="Check-in con foto obligatoria"
              description="Tu empleado debe tomarse una foto al registrar entrada. Sin foto, no hay registro."
            />
            <SolutionCard
              icon="🌍"
              title="Ubicación GPS automática"
              description="Cada check-in captura la ubicación exacta. Sabes desde dónde se registró y en qué momento."
            />
            <SolutionCard
              icon="📊"
              title="Panel de control en tiempo real"
              description="Ve quién ya llegó, quién sigue en camino y quién no se ha registrado. Todo en un solo lugar."
            />
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="relative overflow-hidden px-6 py-20 lg:py-28">
        <div className="relative mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Tan simple que cualquiera puede usarlo
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              En 3 pasos tus empleados registran su asistencia con prueba verificable
            </p>
          </motion.div>

          {/* Screenshot */}
          <div className="animate-slide-in-up max-w-[200px] mx-auto mb-16" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Efecto de brillo de fondo */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-500/20 to-transparent blur-2xl"></div>
              
              {/* Imagen con borde y sombra */}
              <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 bg-slate-800 p-1 shadow-2xl backdrop-blur-sm mx-auto">
                <Image
                  src="/images/screenshot2.jpeg" 
                  alt="Captura de pantalla de Verifika mostrando el dashboard de control de asistencia"
                  className="w-full h-auto rounded-lg shadow-xl"
                  width={300}
                  height={600}
                  priority
                />
                {/* Overlay de brillo animado */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="relative">
              <StepCard
                number="1"
                title="Empleado hace check-in"
                description="Al llegar al sitio de trabajo, abre la app y presiona 'Registrar entrada'. Debe tomarse una foto obligatoria."
              />
              {/* Línea conectora en desktop */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-12 bg-gradient-to-r from-indigo-600 to-transparent md:block"></div>
            </div>
            <div className="relative">
              <StepCard
                number="2"
                title="Sistema captura ubicación"
                description="Automáticamente se registran la latitud, longitud y hora exacta del check-in. Sin intervención manual."
              />
              {/* Línea conectora en desktop */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-12 bg-gradient-to-r from-blue-600 to-transparent md:block"></div>
            </div>
            <StepCard
              number="3"
              title="Tú supervisas desde el panel"
              description="En tu dashboard ves todos los registros: foto, ubicación en mapa, hora. Historial completo por empleado."
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 px-6 py-20 lg:py-28">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-10 h-32 w-32 rounded-full bg-white opacity-5 animate-ping"></div>
          <div className="absolute right-1/4 bottom-10 h-32 w-32 rounded-full bg-white opacity-5 animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Beneficios reales para tu empresa
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-50">
              Más que una herramienta, es tranquilidad para ti y profesionalismo para tu equipo
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <BenefitCard
              icon="🎯"
              title="Control real sin micromanagement"
              description="Ya no necesitas estar llamando o persiguiendo. Confías, pero verificas con datos concretos."
            />
            <BenefitCard
              icon="📸"
              title="Evidencia que no se puede inventar"
              description="Foto + ubicación + hora = prueba irrefutable. Si hay reclamo del cliente o duda interna, tienes todo documentado."
            />
            <BenefitCard
              icon="⏱️"
              title="Ahorra horas de supervisión"
              description="Lo que antes te tomaba llamadas y mensajes, ahora lo ves en 30 segundos desde tu celular o computadora."
            />
            <BenefitCard
              icon="🤝"
              title="Menos conflictos con empleados"
              description="No hay espacio para malentendidos. Las reglas son claras y la evidencia habla por sí sola. Relaciones más profesionales."
            />
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl md:p-12"
          >
            <div className="mb-6 flex items-center gap-1 text-amber-500">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            </div>
            <blockquote className="mb-6 text-xl italic text-gray-700 md:text-2xl">
              "Antes perdíamos fácil 2 horas al día solo confirmando que todos llegaran a sus rutas. 
              Con Verifika ahora en 5 minutos veo todo. Y cuando un cliente reclama, tenemos foto y ubicación para respaldar a nuestro equipo."
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900">Carlos Mendoza</div>
              <div className="text-gray-600">Gerente de Operaciones</div>
              <div className="text-sm text-gray-500">ServiciosTécnicos Pro • 25 empleados en campo</div>
              <div className="mt-4 text-xs text-gray-400">(Testimonio de ejemplo con fines ilustrativos)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="demo" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-20 lg:py-32">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-10 h-40 w-40 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute right-1/3 bottom-10 h-40 w-40 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Comienza a tener control real hoy mismo
          </h2>
          <p className="mb-10 text-lg text-gray-300 md:text-xl">
            Sin compromiso. Sin tarjeta de crédito. Solo 15 minutos para ver cómo funciona con tu equipo.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/573173253124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all hover:from-indigo-500 hover:to-blue-500 hover:shadow-xl hover:-translate-y-1 sm:w-auto"
            >
              Solicitar demo gratis
            </a>
            <a
              href="https://wa.me/573173253124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900 hover:-translate-y-1 sm:w-auto"
            >
              Hablar con ventas
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            ✓ Configuración en menos de 10 minutos &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Soporte en español &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Prueba sin riesgo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Verifika
              </span>
            </div>
            <p className="text-gray-600">Control de asistencia con geolocalización y prueba fotográfica</p>
            <p className="text-sm text-gray-500">&copy; 2026 Verifika. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componentes auxiliares
function ProblemCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function SolutionCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-xl bg-white/15 p-8 shadow-xl transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{icon}</div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative text-center"
    >
      <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 text-2xl font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
        {number}
        <div className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-75"></div>
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-xl bg-white/15 p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-125">{icon}</div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-white/90">{description}</p>
    </motion.div>
  );
}
