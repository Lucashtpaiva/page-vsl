import Link from 'next/link';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<typeof Link> {}

export function Button({ href, className, children, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-white-700 text-black-600 hover:bg-white-500 flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-2 text-center font-bold uppercase transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
