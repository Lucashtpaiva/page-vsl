import Link from 'next/link';

import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full">
      <Container className="bg-black">
        <SectionBox className="py-10 md:py-20">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-3xl font-extrabold uppercase">Logo</h3>
            <div className="flex items-center gap-2">
              <Link
                href="https://www.instagram.com/lucashtpaiva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-6 w-6 text-white transition-colors hover:text-gray-400" />
              </Link>
              <Link
                href="https://www.linkedin.com/lucashtpaiva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-6 w-6 text-white transition-colors hover:text-gray-400" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base">
              O uso desta plataforma está sujeito aos termos e condições
              estabelecidos. Embora nossos serviços sejam projetados para
              melhorar a eficiência operacional, os resultados podem variar
              conforme o modelo de negócio, nível de implementação e outros
              fatores externos.
            </p>

            <div className="my-0 border-t border-white"></div>

            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base">
                Copyright © 2025 . Todos os direitos reservados.
              </p>
              <p className="text-base">Desenvolvido por Lucas Paiva</p>
            </div>
          </div>
        </SectionBox>
      </Container>
    </footer>
  );
}
