import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';

import BoxTestimonials from './boxTestimonials';

export default function Testimonials() {
  return (
    <Container className="justify-center bg-[url(/depoimentos-desktop.webp)] bg-center">
      <SectionBox className="py-20 md:py-32">
        <h1 className="text-center text-2xl leading-tight font-extrabold uppercase md:text-3xl">
          O que nossos clientes dizem?
        </h1>
        <div className="flex w-full flex-wrap items-stretch justify-center gap-7">
          <BoxTestimonials
            name="Lucas Paiva"
            text="A automação transformou completamente nossa operação! Antes, perdíamos
        horas organizando tarefas manualmente. Agora, tudo flui de forma
        eficiente, permitindo que nossa equipe foque no crescimento do negócio."
          />
          <BoxTestimonials
            name="Lucas Paiva"
            text="Tínhamos dificuldades em monitorar a produtividade e otimizar processos. Depois de adotar a plataforma, conseguimos reduzir erros, melhorar o atendimento e aumentar nossa receita. Um investimento que vale a pena!"
          />
          <BoxTestimonials
            name="Lucas Paiva"
            text="O suporte da equipe faz toda a diferença. Sempre que precisamos, eles estão prontos para nos ajudar. Além disso, a personalização do plano Premium nos permitiu integrar a ferramenta às nossas necessidades específicas."
          />
        </div>
      </SectionBox>
    </Container>
  );
}
