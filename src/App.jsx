import { lazy, Suspense, useEffect, useCallback, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import logoAbeja from '/logo-abeja.webp';

// Carga perezosa (Code Splitting) de rutas
const Home           = lazy(() => import('./components/pages/Home'));
const ServicesPage   = lazy(() => import('./components/pages/ServicesPage'));
const AboutSection   = lazy(() => import('./components/pages/AboutSection'));
const ContactSection = lazy(() => import('./components/pages/ContactSection'));
const PageNotFound   = lazy(() => import('./components/lib/PageNotFound'));
const PrivacyPolicy  = lazy(() => import('./components/pages/PrivacyPolicy'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

/**
 * Se monta solo cuando el Suspense padre ha resuelto.
 * Dispara `callback` una única vez al aparecer en el DOM.
 */
function OnMountCallback({ callback }) {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

function App() {
  // ── Loader de carga inicial ──────────────────────────────────────────────
  const triggered  = useRef(false);
  const [loaderOut,  setLoaderOut]  = useState(false); // inicia fade-out
  const [loaderGone, setLoaderGone] = useState(false); // elimina del DOM

  const handleContentReady = useCallback(() => {
    if (triggered.current) return;
    triggered.current = true;
    // Pequeño delay para garantizar que el primer frame ya pintó
    const t1 = setTimeout(() => setLoaderOut(true),  80);
    const t2 = setTimeout(() => setLoaderGone(true), 680); // 80 + 600 ms fade
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // ── Prefetching inteligente de rutas en segundo plano ───────────────────
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
      <BrowserRouter>

        {/* ── Overlay de carga inicial (fuera del Suspense) ───────────── */}
        {!loaderGone && (
          <div
            aria-hidden="true"
            style={{
              position:       'fixed',
              inset:          0,
              zIndex:         200,
              background:     '#0b0b0c',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              opacity:        loaderOut ? 0 : 1,
              transition:     loaderOut ? 'opacity 0.6s ease' : 'none',
              pointerEvents:  'none',
            }}
          >
            <img
              src={logoAbeja}
              alt=""
              width={96}
              height={96}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ob-loader-pulse"
            />
          </div>
        )}

        <ScrollToTop />

        {/*
          Suspense: el fallback solo se activa en navegaciones subsiguientes
          a rutas que aún no se han cargado (Home ya está en el bundle inicial).
          El overlay de arriba cubre la carga del primer render.
        */}
        <Suspense fallback={
          <div className="fixed inset-0" style={{ background: '#0b0b0c' }} aria-hidden="true" />
        }>
          {/* Dispara el fade-out del overlay cuando Suspense resuelve */}
          <OnMountCallback callback={handleContentReady} />

          <Layout>
            <Routes>
              <Route path="/"                    element={<Home />} />
              <Route path="/servicios"           element={<ServicesPage />} />
              <Route path="/nosotros"            element={<AboutSection />} />
              <Route path="/contacto"            element={<ContactSection />} />
              <Route path="*"                    element={<PageNotFound />} />
              <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
            </Routes>
          </Layout>
        </Suspense>

      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
