import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { ArrowRight } from 'lucide-react';

export default function PaginaObrigado() {
  return (
    <main>
      <Container className="min-h-[90dvh] justify-center bg-[url(/hero-mob.webp)] bg-bottom md:bg-[url(/bg-desktop.webp)]">
        <SectionBox className="md:py-8">
          <h3 className="text-center text-3xl font-extrabold uppercase">
            Logo
          </h3>
          <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-4xl md:leading-12">
            Parabéns pela sua aquisição!
          </h1>
          <h4 className="text-white-500 max-w-[41rem] text-center text-lg">
            Sua compra foi confirmada com sucesso! Agora você está pronto para
            levar seu negócio a um novo nível com nossa plataforma de automação.
          </h4>
          <Button href={'#'}>
            Entrar
            <ArrowRight />
          </Button>
        </SectionBox>
      </Container>
    </main>
  );
}
