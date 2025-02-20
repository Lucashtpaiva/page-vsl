'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import VideoPlayer from '@/components/videoPlayer';
import { useResponsiveBackground } from '@/hooks/useResponsiveBackground';
import { ArrowRight } from 'lucide-react';

export default function Player() {
  const [loaded, setLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoId = 'c5rWB_fS5ao';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const backgroundImage = useResponsiveBackground(
    '/mobile/player-mob.webp',
    '/desktop/video-desktop.webp',
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container className="relative justify-center">
      <Image
        src={backgroundImage}
        alt="Imagem de fundo"
        fill
        sizes="100vw"
        className="z-[-1] object-cover object-center"
        loading="lazy"
      />
      <SectionBox className="py-20 md:py-32">
        <h1 className="max-w-[34rem] text-center text-2xl leading-tight font-extrabold uppercase md:text-3xl">
          Automação inteligente para mais eficiência
        </h1>

        <div className="relative h-[400px] w-full max-w-[860px] md:aspect-video md:h-[500px]">
          {!loaded && showVideo && (
            <div
              className="relative h-full w-full cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setLoaded(true)}
            >
              <Image
                src={thumbnailUrl}
                alt="Clique para carregar o vídeo"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 6v12l10-6z" />
                </svg>
              </div>
            </div>
          )}

          {loaded && <VideoPlayer videoId={videoId} />}
        </div>

        <Button href={'#products'}>
          Comece agora mesmo
          <ArrowRight />
        </Button>
      </SectionBox>
    </Container>
  );
}
