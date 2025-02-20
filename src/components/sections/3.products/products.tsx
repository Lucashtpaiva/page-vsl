import CardBox from '@/components/cardBox';
import Container from '@/components/container';
import IconText from '@/components/iconText';
import SectionBox from '@/components/sectionBox';
import { CircleCheckBig, Star } from 'lucide-react';

export default function Products() {
  return (
    <Container className="justify-center bg-[url(/products-desktop.webp)] bg-top">
      <SectionBox className="py-20 md:py-28">
        <h1 className="max-w-[60rem] text-center text-2xl leading-tight font-extrabold uppercase md:text-3xl">
          Escolha a Melhor Solução para Impulsionar Seu Negócio no Mundo Digital
        </h1>
        <div className="flex flex-wrap items-stretch justify-center gap-10">
          <CardBox>
            <h1 className="text-2xl font-bold text-white">
              Plano Basic – Automação Essencial
            </h1>
            <div className="flex flex-col gap-5">
              <IconText
                icon={CircleCheckBig}
                text="Gestão de tarefas automatizada"
              />
              <IconText icon={CircleCheckBig} text="Relatórios inteligentes" />
              <IconText
                icon={CircleCheckBig}
                text="Integração com principais ferramentas"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">Apenas</h3>
              <h1 className="text-4xl font-bold">R$199,00/mês</h1>
              <p className="text-base">ou R$999,00/ano (2meses grátis)</p>
            </div>
          </CardBox>
          <CardBox>
            <h1 className="text-2xl font-bold text-white">
              Plano Premium – Experiência Completa e Avançada!
            </h1>
            <div className="flex flex-col gap-5">
              <IconText
                icon={Star}
                text="Todos os benefícios do Basic, com vantagens exclusivas"
              />
              <IconText
                icon={CircleCheckBig}
                text="Monitoramento de desempenho em tempo real"
              />
              <IconText icon={CircleCheckBig} text="Personalização avançada" />
              <IconText
                icon={CircleCheckBig}
                text="IA para otimização de processos"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">Apenas</h3>
              <h1 className="text-4xl font-bold">R$199,00/mês</h1>
              <p className="text-base">ou R$1.999,00/ano (2meses grátis)</p>
            </div>
          </CardBox>
        </div>
      </SectionBox>
    </Container>
  );
}
