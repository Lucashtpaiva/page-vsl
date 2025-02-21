'use client';

import Image from 'next/image';

import { Button } from '@/components/button';
import CardBox from '@/components/cardBox';
import Container from '@/components/container';
import IconText from '@/components/iconText';
import SectionBox from '@/components/sectionBox';
import { useResponsiveBackground } from '@/hooks/useResponsiveBackground';
import { CircleCheckBig } from 'lucide-react';

export default function Products() {
  const backgroundImage = useResponsiveBackground(
    '/mobile/products-mob.webp',
    '/desktop/products-desktop.webp',
  );

  const plans = [
    {
      title: 'Plano Basic – Automação Essencial',
      features: [
        'Gestão de tarefas automatizada',
        'Relatórios inteligentes',
        'Integração com principais ferramentas',
      ],
      price: 'R$99,00/mês',
      yearlyPrice: 'R$999,00/ano (2 meses grátis)',
      buttonText: 'EU QUERO O PLANO BASIC',
      icon: CircleCheckBig,
    },
    {
      title: 'Plano Premium – Experiência Completa e Avançada!',
      features: [
        'Todos os benefícios do Basic, com vantagens exclusivas',
        'Monitoramento de desempenho em tempo real',
        'Personalização avançada',
        'IA para otimização de processos',
      ],
      price: 'R$199,00/mês',
      yearlyPrice: 'ou R$1.999,00/ano (2 meses grátis)',
      buttonText: 'EU QUERO O PLANO PREMIUM',
      icon: CircleCheckBig,
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
        className="z-[-1] object-cover object-top"
      />
      <SectionBox className="py-20 md:py-28">
        <h1 className="max-w-[60rem] text-center text-2xl leading-tight font-extrabold uppercase md:text-3xl">
          Escolha a Melhor Solução para Impulsionar Seu Negócio no Mundo Digital
        </h1>
        <div
          className="flex flex-wrap items-stretch justify-center gap-10"
          id="products"
        >
          {plans.map((plan, index) => (
            <CardBox key={index}>
              <h1 className="text-2xl font-bold text-white">{plan.title}</h1>
              <div className="flex flex-col gap-5">
                {plan.features.map((feature, idx) => (
                  <IconText key={idx} icon={plan.icon} text={feature} />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-white">Apenas</h3>
                <h1 className="text-4xl font-bold">{plan.price}</h1>
                <p className="text-base">{plan.yearlyPrice}</p>
              </div>
              <Button href={'/pagina-de-obrigado'}>{plan.buttonText}</Button>
            </CardBox>
          ))}
        </div>
      </SectionBox>
    </Container>
  );
}
