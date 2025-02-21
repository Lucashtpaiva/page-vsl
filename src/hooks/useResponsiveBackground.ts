'use client';

import { useEffect, useState } from 'react';

export function useResponsiveBackground(
  mobileImage: string,
  desktopImage: string,
) {
  const getBackground = () =>
    typeof window !== 'undefined' && window.innerWidth >= 768
      ? desktopImage
      : mobileImage;

  const [backgroundImage, setBackgroundImage] = useState(getBackground);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(getBackground());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return backgroundImage;
}
