import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "../../data/contact";

export default function CTASection() {
  return (
    <section className="py-28 bg-[#0b0b0c] relative overflow-hidden border-t border-orange-500/15">
      {/* Orange atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/[0.11] rounded-full blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          ¿Listo para recuperar tu
          <span className="text-orange-500"> cartera vencida</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Agenda una llamada con nuestros especialistas y descubre
          cómo OrangeBee puede mejorar tu flujo de efectivo desde el primer día.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mb-10">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 text-lg rounded-xl shadow-[0_16px_40px_rgba(255,85,0,0.40)] transition-colors"
          >
            Iniciar conversación
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Contact pills */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/[0.08] rounded-xl px-6 py-3.5 transition-colors"
          >
            <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <div className="text-left">
              <div className="text-white/40 text-xs leading-none mb-1">Llámanos</div>
              <div className="text-white text-sm font-medium">{CONTACT.phone}</div>
            </div>
          </a>
          <a
            href={CONTACT.emailHref}
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/[0.08] rounded-xl px-6 py-3.5 transition-colors"
          >
            <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <div className="text-left">
              <div className="text-white/40 text-xs leading-none mb-1">Escríbenos</div>
              <div className="text-white text-sm font-medium">{CONTACT.email}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
