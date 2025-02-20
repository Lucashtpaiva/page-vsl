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
      className={`mx-auto flex max-w-[1240px] flex-col items-center justify-center gap-7 px-5 md:px-0 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
