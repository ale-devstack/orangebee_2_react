import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import ErrorBoundary from './components/common/ErrorBoundary';

// Carga perezosa (Code Splitting) de rutas
const Home           = lazy(() => import('./components/pages/Home'));
const ServicesPage   = lazy(() => import('./components/pages/ServicesPage'));
const AboutSection   = lazy(() => import('./components/pages/AboutSection'));
const ContactSection = lazy(() => import('./components/pages/ContactSection'));
const PageNotFound   = lazy(() => import('./components/lib/PageNotFound'));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));

// Corrección: Componente para hacer scroll al inicio al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  // Prefetching inteligente de rutas en segundo plano
  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const shouldPrefetch = !(connection?.saveData || /2g/.test(connection?.effectiveType || ''));

    if (!shouldPrefetch) return undefined;

    const prefetch = () => {
      import('./components/pages/ServicesPage');
      import('./components/pages/AboutSection');
      import('./components/pages/ContactSection');
    };

    let idleId;
    let prefetchTimer;

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(prefetch, { timeout: 3000 });
    } else {
      prefetchTimer = setTimeout(prefetch, 2000);
    }

    return () => {
      if (prefetchTimer) clearTimeout(prefetchTimer);
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter basename="/orangebee_2_react">
        <ScrollToTop />
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#0b0b0c' }} aria-label="Cargando página">
            <div
              style={{
                width: 40,
                height: 40,
                border: '3px solid rgba(255,85,0,0.25)',
                borderTopColor: '#ff5500',
                borderRadius: '50%',
                animation: 'spin 0.7s linear infinite',
              }}
              role="status"
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        }>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/nosotros" element={<AboutSection />} />
              <Route path="/contacto" element={<ContactSection />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;