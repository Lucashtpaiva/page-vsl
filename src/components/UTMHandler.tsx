'use client';

import { useEffect } from 'react';

export default function UTMHandler() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);

      const utmParams = {
        utm_source:
          searchParams.get('utm_source') ||
          sessionStorage.getItem('utm_source') ||
          'Nenhum',
        utm_medium:
          searchParams.get('utm_medium') ||
          sessionStorage.getItem('utm_medium') ||
          'Orgânico',
        utm_campaign:
          searchParams.get('utm_campaign') ||
          sessionStorage.getItem('utm_campaign') ||
          'Nenhum',
        utm_content:
          searchParams.get('utm_content') ||
          sessionStorage.getItem('utm_content') ||
          'Nenhum',
        utm_term:
          searchParams.get('utm_term') ||
          sessionStorage.getItem('utm_term') ||
          'Nenhum',
      };

      Object.entries(utmParams).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
      });
    }
  }, []);

  return null;
}
