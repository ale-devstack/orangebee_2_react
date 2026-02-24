import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoAbeja from '/logo-abeja.webp';
import { cn } from "../../utils/cn"; // Importamos nuestra nueva utilidad

const navLinks = [
  { name: "Inicio",    to: "/",          chunk: null },
  { name: "Nosotros",  to: "/nosotros",  chunk: () => import('../pages/AboutSection') },
  { name: "Servicios", to: "/servicios", chunk: () => import('../pages/ServicesPage') },
  { name: "Contacto",  to: "/contacto",  chunk: () => import('../pages/ContactSection') },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Función Throttle para no saturar el Main Thread con el Scroll
  useEffect(() => {
    let lastCall = 0;
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastCall < 100) return; // Se ejecuta máximo cada 100ms
      lastCall = now;
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-black/75 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)] py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={logoAbeja} alt="OrangeBee logo" width={40} height={40} className="w-10 h-10" />
              <span className="font-bold text-xl text-white">
                <span className="text-orange-500">Orange</span>Bee
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onMouseEnter={() => link.chunk?.()}
                  onFocus={() => link.chunk?.()}
                  className={({ isActive }) =>
                    cn(
                      "font-medium transition-colors",
                      isActive ? "text-orange-500" : "text-white/80 hover:text-orange-400"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <NavLink
                to="/contacto"
                onMouseEnter={() => import('../pages/ContactSection')}
                className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 bg-orange-500 hover:bg-orange-600 shadow-[0_10px_30px_rgba(255,85,0,0.35)] text-white font-medium transition-colors"
              >
                Optimiza tu recuperación
              </NavLink>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-white"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 border-t border-white/10",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  cn("block py-2 font-medium", isActive ? "text-orange-500" : "text-white/70 hover:text-orange-500")
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contacto"
              className="block text-center bg-orange-500 hover:bg-orange-600 shadow-[0_10px_30px_rgba(255,85,0,0.35)] text-white rounded-xl py-3 font-medium mt-4 transition-colors"
            >
              Optimiza tu recuperación
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}