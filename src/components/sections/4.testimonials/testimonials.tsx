'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { useResponsiveBackground } from '@/hooks/useResponsiveBackground';

const BoxTestimonials = dynamic(() => import('./boxTestimonials'), {
  ssr: true,
  loading: () => <p>Carregando...</p>,
});

export default function Testimonials() {
  const backgroundImage = useResponsiveBackground(
    '/mobile/depoimentos-mob.webp',
    '/desktop/depoimentos-desktop.webp',
  );

  const testimonials = [
    {
      name: 'Lucas Paiva',
      text: 'A automação transformou completamente nossa operação! Antes, perdíamos horas organizando tarefas manualmente. Agora, tudo flui de forma eficiente, permitindo que nossa equipe foque no crescimento do negócio.',
    },
    {
      name: 'Lucas Paiva',
      text: 'Tínhamos dificuldades em monitorar a produtividade e otimizar processos. Depois de adotar a plataforma, conseguimos reduzir erros, melhorar o atendimento e aumentar nossa receita. Um investimento que vale a pena!',
    },
    {
      name: 'Lucas Paiva',
      text: 'O suporte da equipe faz toda a diferença. Sempre que precisamos, eles estão prontos para nos ajudar. Além disso, a personalização do plano Premium nos permitiu integrar a ferramenta às nossas necessidades específicas.',
    },
  ];

  return (
    <Container className="relative justify-center">
      <Image
        src={backgroundImage}
        alt="Imagem de fundo"
        fill
        priority
        sizes="100vw"
        className="z-[-1] object-cover object-bottom"
      />
      <SectionBox className="py-20 md:py-32">
        <h1 className="text-center text-2xl leading-tight font-extrabold uppercase md:text-3xl">
          O que nossos clientes dizem?
        </h1>
        <div className="flex w-full flex-wrap items-stretch justify-center gap-7">
          {testimonials.map((testimonial, index) => (
            <BoxTestimonials
              key={index}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
      </SectionBox>
    </Container>
  );
}
