import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`flex w-full flex-col items-center bg-cover bg-no-repeat ${className}`.trim()}
    >
      {children}
    </div>
  );
}
