import { useState, useCallback } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { usePageTitle } from "../../hooks/usePageTitle";
import { CONTACT_ITEMS } from "../../data/contact";
import logoAbeja from '/logo-abeja.webp';

const inputClass = "w-full rounded-xl border border-neutral-300 p-3 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 transition-all";
const labelClass = "block text-sm font-medium text-neutral-700 mb-1";

export default function ContactSection() {
  usePageTitle('Contacto');

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", serviceType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler unificado — evita crear un nuevo objeto en cada keystroke
  // y re-renderizar todos los campos al mismo tiempo
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nuevo Lead: ${formData.company || 'Sin Empresa'} - ${formData.serviceType || 'General'}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", serviceType: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Error en la respuesta de la API");
      }
    } catch (error) {
      console.error("Error enviando el formulario", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto">
      {/* Hero */}
      <div className="ob-dark-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Hablemos de tu cartera
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Agenda una llamada y descubre cómo OrangeBee puede
            ayudarte a recuperar tu cartera vencida.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-neutral-500 mb-8">
              Te contactaremos en menos de 24 horas.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-neutral-500">
                  Un asesor se comunicará contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Nombre completo</label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Juan García"
                      className={inputClass}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Correo electrónico</label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      placeholder="juan@empresa.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>Teléfono</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      placeholder="+52 55 1234 5678"
                      className={inputClass}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>Empresa</label>
                    <input
                      id="contact-company"
                      name="company"
                      placeholder="Mi Empresa S.A."
                      className={inputClass}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className={labelClass}>Tipo de empresa</label>
                  <select
                    id="contact-service"
                    name="serviceType"
                    className={inputClass}
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Empresa Comercial</option>
                    <option>Banco / Financiera</option>
                    <option>FinTech</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>Mensaje</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu cartera..."
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Información de contacto
              </h2>
              <p className="text-neutral-500">
                Estamos disponibles para atenderte.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-neutral-200"
                >
                  <item.icon className="w-6 h-6 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-neutral-500 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-black rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                  <img
                    src={logoAbeja}
                    alt="Logo OrangeBee"
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">
                    <span className="text-orange-500">Orange</span><span className="text-white">Bee</span>
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    Cobranza Inteligente
                  </p>
                </div>
              </div>

              <p className="text-neutral-300 mb-6">
                Somos tu socio estratégico para la recuperación de cartera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}