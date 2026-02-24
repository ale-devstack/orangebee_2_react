import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Award,
  Users,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { usePageTitle } from "../../hooks/usePageTitle";
import logoAbeja from '/logo-abeja.webp';

const values = [
  {
    icon: Shield,
    title: "Ética",
    description:
      "Actuamos con integridad y respeto en todas nuestras gestiones de cobranza.",
  },
  {
    icon: Award,
    title: "Transparencia",
    description:
      "Comunicación clara y reportes detallados sobre el avance de cada caso.",
  },
  {
    icon: Heart,
    title: "Efectividad",
    description:
      "Resultados medibles y comprobables en la recuperación de cartera.",
  },
  {
    icon: Users,
    title: "Profesionalismo",
    description:
      "Equipo capacitado y certificado en las mejores prácticas del sector.",
  },
];

const stats = [
  { value: "24h", label: "Inicio de gestión" },
  { value: "3", label: "Fases de recuperación" },
  { value: "0", label: "Costos iniciales" },
  { value: "100%", label: "Cumplimiento normativo" },
];

export default function AboutSection() {
  usePageTitle('Nosotros');

  return (
    <section id="nosotros">
      {/* Hero */}
      <div className="ob-dark-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            Sobre Nosotros
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Conoce a OrangeBee
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Gestión de cobranza profesional especializada en empresas, banca digital y FinTech.
            Recuperación efectiva con ética y transparencia.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900">
                {stat.value}
              </div>
              <div className="text-neutral-500 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Nuestra Historia
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
              Gestión estructurada para una nueva etapa de cobranza
            </h3>

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                OrangeBee nace con un enfoque claro:
                profesionalizar la recuperación de cartera a través de procesos
                estructurados, métricas claras y gestión ética.
              </p>
              <p>
                Fundada por especialistas con experiencia en el sector financiero,
                la firma fue creada para ofrecer a las empresas un modelo de cobranza más estratégico,
                medible y alineado a normativas vigentes.
              </p>
              <p>
                Operamos bajo estándares regulatorios y mejores prácticas del sector, priorizando el control, la trazabilidad y la protección reputacional de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-black rounded-3xl flex items-center justify-center text-center p-8">
              <div className="text-white">
                <img
                  src={logoAbeja}
                  alt="Logo OrangeBee"
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 mx-auto mb-6"
                />
                <div className="text-5xl font-bold mb-2">
                  <span className="text-orange-500">Orange</span><span className="text-white">Bee</span>
                </div>
                <div className="text-neutral-300">Cobranza Inteligente</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="font-bold text-neutral-900">Cumplimiento</div>
                  <div className="text-neutral-500 text-sm">CONDUSEF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-[#0b0b0c] rounded-3xl p-10 border border-white/[0.06]">
            <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nuestra Misión
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Estructurar y profesionalizar la gestión de cobranza en México mediante un modelo basado en control, trazabilidad y ejecución estratégica.
            </p>
          </div>

          <div className="bg-neutral-100 rounded-3xl p-10 border border-neutral-200">
            <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Ser referente en recuperación empresarial por nuestro enfoque estructurado, cumplimiento regulatorio y capacidad de ejecución.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Nuestros Valores
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
              Principios que nos Definen
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-neutral-200/70"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/25 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para trabajar con nosotros?
          </h3>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10">
            Descubre cómo OrangeBee puede ayudarte a recuperar tu cartera
            vencida de manera efectiva y profesional.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Contáctanos hoy
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
