import { Button } from '@/components/button';
import Container from '@/components/container';
import SectionBox from '@/components/sectionBox';
import { ArrowRight } from 'lucide-react';

export default function Player() {
  return (
    <Container className="justify-center bg-[url(/video-desktop.webp)]">
      <SectionBox className="py-20 md:py-32">
        <h1 className="max-w-[60rem] text-center text-2xl font-extrabold uppercase antialiased md:text-3xl md:leading-12">
          Inovação para seu negócio!
        </h1>
        <div className="aspect-video w-full max-w-[860px] md:h-[500px]">
          <iframe
            src="https://www.youtube.com/embed/c5rWB_fS5ao?si=w-InpASwuXmv3GxT"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="h-full w-full rounded-lg"
          ></iframe>
        </div>

        <Button>
          Fale conosco
          <ArrowRight />
        </Button>
      </SectionBox>
    </Container>
  );
}
