import { ReactNode } from 'react';

type SectionBoxProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionBox({
  children,
  className = '',
}: SectionBoxProps) {
  return (
    <div
      className={`mx-auto flex max-w-[1240px] flex-col items-center justify-center gap-7 px-5 py-0 md:px-0 md:py-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
