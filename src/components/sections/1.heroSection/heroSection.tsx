'use client';

import Image from 'next/image';

import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { useResponsiveBackground } from '@/hooks/useResponsiveBackground';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const backgroundImage = useResponsiveBackground(
    '/hero-mob.webp',
    '/bg-desktop.webp',
  );

  return (
    <Container className="relative min-h-[90dvh] justify-center">
      <Image
        src={backgroundImage}
        alt="Imagem de fundo"
        fill
        priority
        sizes="100vw"
        className="z-[-1] object-cover object-bottom"
      />
      <SectionBox className="md:py-8">
        <h3 className="text-center text-3xl font-extrabold uppercase">Logo</h3>
        <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-4xl md:leading-12">
          Plataforma de Automação Empresarial
        </h1>
        <h4 className="text-white-500 max-w-[41rem] text-center text-lg">
          A tecnologia que impulsiona seu negócio para o próximo nível.
          Automatize processos, economize tempo e aumente sua produtividade!
        </h4>
        <Button href={'#products'}>
          Comece agora mesmo
          <ArrowRight />
        </Button>
      </SectionBox>
    </Container>
  );
}
