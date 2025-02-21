'use client';

import { useEffect } from 'react';

export default function UTMHandler() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.sessionStorage) return;

    const searchParams = new URLSearchParams(window.location.search);
    let hasChanges = false;

    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
    ];
    const defaultValues: Record<string, string> = {
      utm_source: 'Nenhum',
      utm_medium: 'Orgânico',
      utm_campaign: 'Nenhum',
      utm_content: 'Nenhum',
      utm_term: 'Nenhum',
    };

    utmKeys.forEach((key) => {
      const urlValue = searchParams.get(key);
      const storedValue = sessionStorage.getItem(key);
      const finalValue = urlValue || storedValue || defaultValues[key];

      if (storedValue !== finalValue) {
        sessionStorage.setItem(key, finalValue);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      console.log('UTMs atualizadas:', sessionStorage);
    }
  }, []);

  return null;
}
