import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <Container className="min-h-[90dvh] justify-center bg-[url(/hero-mob.webp)] md:bg-[url(/bg-desktop.webp)]">
      <SectionBox className="md:py-8">
        <h3 className="text-center text-3xl font-extrabold uppercase">Logo</h3>
        <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-4xl md:leading-12">
          Impulsione o crescimento da sua empresa com inovação, automação e
          tecnologia digital de última geração!
        </h1>
        <Button>
          Quero impulsionar minhas vendas
          <ArrowRight />
        </Button>
      </SectionBox>
    </Container>
  );
}
