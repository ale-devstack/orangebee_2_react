import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[OrangeBee] Error no controlado:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-neutral-50">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-2">
              <div className="text-5xl">⚠️</div>
              <h1 className="text-2xl font-bold text-neutral-900">Algo salió mal</h1>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Ocurrió un error inesperado. Por favor recarga la página o vuelve al inicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Recargar página
              </button>
              <a
                href="/OB-React/"
                onClick={() => this.setState({ hasError: false })}
                className="px-5 py-2.5 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-xl hover:bg-neutral-50 transition-colors"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
