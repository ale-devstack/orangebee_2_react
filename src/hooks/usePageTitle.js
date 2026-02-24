import { useEffect } from 'react';

const BASE = 'OrangeBee';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${BASE}`
      : `${BASE} | Cobranza Inteligente y Recuperación de Cartera`;
  }, [title]);
}
