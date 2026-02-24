import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

import heroDesktop from '/hero-desktop.avif';
import heroMobile from '/hero-mobile.avif';
import Services from '../landing/Services';
import WhyOrangeBee from '../landing/WhyOrangeBee';
import CTASection from '../landing/CTASection';
import { usePageTitle } from '../../hooks/usePageTitle';

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 ob-dark-hero">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[70px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/[0.03] rounded-full blur-[80px]" />
        
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} width={1440} height={900} />
          <img
            src={heroMobile}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            width={390}
            height={844}
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
        </picture>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 ob-hero-title">
              Impulsamos la recuperación de tu
              <span className="block text-orange-500">cartera vencida</span>
            </h1>
            <p className="text-lg text-neutral-300 mb-10 max-w-xl leading-relaxed ob-hero-body">
              Gestión profesional con procesos definidos, métricas claras y enfoque ético en cada etapa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ob-hero-cta">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              >
                Iniciar conversación <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-lg rounded-xl font-semibold transition-colors"
              >
                Conocer Servicios
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block ob-hero-card">
            <div className="relative">
              <div className="bg-white/10 border border-white/15 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: Shield,     title: 'Cobranza ética',       desc: 'Procesos respetuosos que preservan relaciones comerciales' },
                    { icon: TrendingUp, title: 'Alta recuperación',    desc: 'Metodologías probadas para maximizar resultados' },
                    { icon: Users,      title: 'Equipo especializado', desc: 'Profesionales certificados en gestión de cobranza' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                    <div key={item.title} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-neutral-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
              <div className="absolute -bottom-9 -left-6 bg-orange-500 rounded-2xl px-4 py-6 shadow-xl shadow-orange-500/30 flex items-center gap-3">
                <div className="text-white font-bold text-lg">Covertura nacional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
  usePageTitle();

  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <WhyOrangeBee />
      <CTASection />
    </main>
  );
}