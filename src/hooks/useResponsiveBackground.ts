'use client';

import { useEffect, useState } from 'react';

export function useResponsiveBackground(
  mobileImage: string,
  desktopImage: string,
) {
  const [backgroundImage, setBackgroundImage] = useState(mobileImage);

  useEffect(() => {
    const getBackground = () =>
      window.innerWidth >= 1024 ? desktopImage : mobileImage;

    setBackgroundImage(getBackground());

    const handleResize = () => {
      setBackgroundImage(getBackground());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileImage, desktopImage]);

  return backgroundImage;
}
