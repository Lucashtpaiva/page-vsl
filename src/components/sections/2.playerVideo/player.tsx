'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { ArrowRight } from 'lucide-react';

export default function Player() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleClick = () => setLoaded(true);

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Container className="justify-center bg-[url(/video-desktop.webp)] bg-center">
      <SectionBox className="py-20 md:py-32">
        <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-3xl md:leading-12">
          Inovação para seu negócio!
        </h1>

        <div className="relative aspect-video w-full max-w-[860px] md:h-[500px]">
          {!loaded && (
            <div className="absolute inset-0 flex animate-pulse items-center justify-center rounded-lg bg-gray-800 p-5">
              <p className="text-lg font-semibold text-white">
                Clique em qualquer lugar para carregar o vídeo...
              </p>
            </div>
          )}

          {loaded && (
            <iframe
              src="https://www.youtube.com/embed/c5rWB_fS5ao?si=w-InpASwuXmv3GxT&rel=0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="h-full w-full rounded-lg"
            ></iframe>
          )}
        </div>

        <Button>
          Fale conosco
          <ArrowRight />
        </Button>
      </SectionBox>
    </Container>
  );
}
