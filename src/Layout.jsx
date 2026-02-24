import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from './data/contact';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Saltar al contenido
      </a>
      <Header />
      <div id="main-content" className="flex-1">
        {children}
      </div>
      <Footer />
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] transition-colors"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
