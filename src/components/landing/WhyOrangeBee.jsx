import {
  CheckCircle2, Award, Clock, Headphones, BarChart3, Lock,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Equipo especializado",
    description: "Profesionales con más de 10 años de experiencia en recuperación."
  },
  {
    icon: BarChart3,
    title: "Resultados medibles",
    description: "Dashboards con métricas claras y seguimiento continuo de recuperación."
  },
  {
    icon: Lock,
    title: "Confidencialidad y cumplimiento",
    description: "Protección de datos conforme a LFPDPPP y lineamientos regulatorios."
  },
  {
    icon: Headphones,
    title: "Atención dedicada",
    description: "Ejecutivo de cuenta asignado y seguimiento estructurado."
  },
  {
    icon: Clock,
    title: "Inicio ágil de gestión",
    description: "Activación operativa en menos de 24 horas tras la asignación."
  },
  {
    icon: CheckCircle2,
    title: "Gestión ética y profesional",
    description: "Comunicación responsable alineada a normativas y mejores prácticas."
  },
];

export default function WhyOrangeBee() {
  return (
    <section id="nosotros" className="py-24 bg-white content-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative">
            <div className="aspect-square bg-[#0b0b0c] rounded-3xl overflow-hidden relative border border-orange-500/20">
              {/* Orange top accent line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

              {/* Subtle orange glow */}
              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-orange-500/[0.07] to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-7xl font-bold mb-2 text-orange-500">100%</div>
                  <div className="text-xl text-white/70">Gestión multicanal</div>
                  <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-orange-500">$0</div>
                      <div className="text-white/50 text-sm mt-1">Costos iniciales</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500">24h</div>
                      <div className="text-white/50 text-sm mt-1">Inicio de gestión</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Cumplimiento</div>
                  <div className="text-neutral-500 text-sm">CONDUSEF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">¿Por Qué OrangeBee?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
              La diferencia de trabajar con profesionales
            </h2>
            <p className="text-neutral-600 mb-10 leading-relaxed">
              En OrangeBee combinamos tecnología, experiencia y ética para ofrecer soluciones de cobranza
              que generan resultados reales y protegen la reputación de tu empresa.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{reason.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}