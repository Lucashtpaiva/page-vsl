import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <Container className="min-h-[90dvh] justify-center bg-[url(/hero-mob.webp)] bg-bottom md:bg-[url(/bg-desktop.webp)]">
      <SectionBox className="md:py-8">
        <h3 className="text-center text-3xl font-extrabold uppercase">Logo</h3>
        <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-4xl md:leading-12">
          Plataforma de Automação Empresarial
        </h1>
        <h4 className="text-white-500 max-w-[41rem] text-center text-lg">
          A tecnologia que impulsiona seu negócio para o próximo nível.
          Automatize processos, economize tempo e aumente sua produtividade!
        </h4>
        <Button>
          COMEÇAR AGORA
          <ArrowRight />
        </Button>
      </SectionBox>
    </Container>
  );
}
