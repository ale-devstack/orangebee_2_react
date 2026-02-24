import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Phone,
  TrendingUp, Users, FileSearch, Gavel,
} from "lucide-react";
import { cn } from "../../utils/cn";
import { usePageTitle } from "../../hooks/usePageTitle";
import { SERVICES } from "../../data/services";
import { CONTACT } from "../../data/contact";

const process = [
  {
    step: "01",
    title: "Análisis de cartera",
    description: "Evaluamos detalladamente tu cartera vencida para diseñar la estrategia óptima de recuperación.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Diseño de estrategia",
    description: "Creamos un plan de acción personalizado basado en el perfil de deudores y tipo de adeudo.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "Gestión activa",
    description: "Implementamos la estrategia con nuestro equipo especializado utilizando múltiples canales.",
    icon: Users,
  },
  {
    step: "04",
    title: "Seguimiento legal",
    description: "En casos necesarios, procedemos con acciones legales para garantizar la recuperación.",
    icon: Gavel,
  },
];

function ServiceRow({ service, isEven }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* TEXT */}
      <div className={cn("order-1", isEven ? "lg:order-1" : "lg:order-2")}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center flex-shrink-0">
            <service.icon className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900">{service.title}</h2>
        </div>
        <p className="text-neutral-600 text-lg mb-8 leading-relaxed">{service.description}</p>
        <ul className="grid sm:grid-cols-2 gap-4 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl px-6 py-3 font-medium transition-colors"
        >
          Solicitar información
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CARD */}
      <div className={cn("order-2", isEven ? "lg:order-2" : "lg:order-1")}>
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-3xl overflow-hidden relative border border-orange-500/20">
          <img
            src={service.imageUrl}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
            <div className="text-3xl font-bold text-white mb-1">{service.stat.value}</div>
            <div className="text-white/70 text-sm">{service.stat.label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  usePageTitle('Servicios');

  return (
    <main>
      {/* HERO */}
      <section className="ob-dark-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Nuestros Servicios</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Soluciones integrales de cobranza</h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Portafolio completo de servicios de recuperación de cartera para empresas, banca digital y FinTechs en México.
          </p>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {SERVICES.map((service, idx) => (
            <ServiceRow key={service.id} service={service} isEven={idx % 2 === 0} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Nuestro Proceso</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">Metodología de trabajo</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Proceso estructurado que garantiza la máxima efectividad en la recuperación de tu cartera vencida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-neutral-100 rounded-2xl p-8 relative border border-neutral-200">
                <div className="absolute -top-4 left-8 bg-orange-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                  {step.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesitas recuperar tu cartera vencida?</h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10">
            Solicita un análisis inicial de tu cartera y recibe una propuesta de gestión personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Agendar llamada <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-xl font-medium transition-colors"
            >
              <Phone className="h-5 w-5" /> Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
