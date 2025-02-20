import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function CardBox({ children }: CardProps) {
  return (
    <div className="flex max-w-[30rem] flex-col gap-7 border-r border-l border-transparent bg-gradient-to-b from-[rgba(0,0,0,0.10)] via-[rgba(96,0,134,0.25)] to-[rgba(0,0,0,0.10)] px-5 py-30 backdrop-blur-md md:px-10 md:py-60">
      {children}
    </div>
  );
}
