import { useEffect, useRef, useState } from 'react';

interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

export function useUTM() {
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: 'Nenhum',
    utm_medium: 'Orgânico',
    utm_campaign: 'Nenhum',
    utm_content: 'Nenhum',
    utm_term: 'Nenhum',
  });

  const previousUTMs = useRef<UTMParams | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Evita erro no SSR

    const searchParams = new URLSearchParams(window.location.search);

    const storedUTMs: UTMParams = {
      utm_source:
        sessionStorage.getItem('utm_source') ||
        searchParams.get('utm_source') ||
        'Nenhum',
      utm_medium:
        sessionStorage.getItem('utm_medium') ||
        searchParams.get('utm_medium') ||
        'Orgânico',
      utm_campaign:
        sessionStorage.getItem('utm_campaign') ||
        searchParams.get('utm_campaign') ||
        'Nenhum',
      utm_content:
        sessionStorage.getItem('utm_content') ||
        searchParams.get('utm_content') ||
        'Nenhum',
      utm_term:
        sessionStorage.getItem('utm_term') ||
        searchParams.get('utm_term') ||
        'Nenhum',
    };

    if (
      !previousUTMs.current ||
      JSON.stringify(previousUTMs.current) !== JSON.stringify(storedUTMs)
    ) {
      setUtmParams(storedUTMs);

      previousUTMs.current = storedUTMs;

      Object.entries(storedUTMs).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
      });
    }
  }, []);

  return utmParams;
}
