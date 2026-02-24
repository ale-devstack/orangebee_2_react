import { Link } from "react-router-dom";
import { Linkedin, Facebook, MessageCircle } from "lucide-react";

import logoAbeja from '/logo-abeja.webp';
import { SERVICES } from '../../data/services';
import { CONTACT, CONTACT_ITEMS } from '../../data/contact';

const quickLinks = [
  { name: "Inicio",    to: "/" },
  { name: "Servicios", to: "/servicios" },
  { name: "Nosotros",  to: "/nosotros" },
  { name: "Contacto",  to: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoAbeja} alt="OrangeBee" width={40} height={40} loading="lazy" decoding="async" className="w-10 h-10" />
              <span className="font-bold text-xl">
                <span className="text-orange-500">Orange</span>Bee
              </span>
            </Link>
            <p className="text-neutral-300/90 text-sm leading-relaxed mb-6">
              Gestión de cobranza profesional especializada en empresas, banca digital y FinTech.
              Recuperación efectiva con ética y transparencia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, to }) => (
                <li key={name}>
                  <Link to={to} className="text-neutral-300 hover:text-orange-400 transition-colors text-sm">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {SERVICES.map(({ id, title }) => (
                <li key={id}>
                  <Link to="/servicios" className="text-neutral-300 hover:text-orange-400 transition-colors text-sm">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, title, lines }) => (
                <li key={title} className="flex gap-3">
                  <Icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-400 text-sm">{lines[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-orange-500/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} OrangeBee. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/aviso-de-privacidad" className="text-neutral-400 hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
