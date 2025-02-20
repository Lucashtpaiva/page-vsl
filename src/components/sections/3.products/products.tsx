import CardBox from '@/components/cardBox';
import Container from '@/components/container';
import IconText from '@/components/iconText';
import SectionBox from '@/components/sectionBox';
import { CircleCheckBig, Star } from 'lucide-react';

export default function Products() {
  return (
    <Container className="justify-center bg-[url(/products-desktop.webp)] bg-top">
      <SectionBox className="py-20 md:py-28">
        <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-3xl">
          Escolha a Melhor Solução para Impulsionar Seu Negócio no Mundo Digital
        </h1>
        <div className="flex flex-wrap items-stretch justify-center gap-10">
          <CardBox>
            <h1 className="text-2xl font-bold text-white">
              Plano Basic – Performance Eficiente e Segura!
            </h1>
            <div className="flex flex-col gap-5">
              <IconText
                icon={CircleCheckBig}
                text="Ideal para pequenas empresas e empreendedores digitais."
              />
              <IconText
                icon={CircleCheckBig}
                text="Ideal para pequenas empresas e empreendedores digitais."
              />
              <IconText
                icon={CircleCheckBig}
                text="Ideal para pequenas empresas e empreendedores digitais."
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">Apenas</h3>
              <h1 className="text-5xl font-bold">R$297,00</h1>
              <p>ou até 10x de R$30,00</p>
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
                text="Ideal para pequenas empresas e empreendedores digitais."
              />
              <IconText
                icon={CircleCheckBig}
                text="Ideal para pequenas empresas e empreendedores digitais."
              />
              <IconText
                icon={CircleCheckBig}
                text="Ideal para pequenas empresas e empreendedores digitais."
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">Apenas</h3>
              <h1 className="text-5xl font-bold">R$597,00</h1>
              <p>ou até 10x de R$60,00</p>
            </div>
          </CardBox>
        </div>
      </SectionBox>
    </Container>
  );
}
