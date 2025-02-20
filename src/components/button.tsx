import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-white-700 text-black-600 hover:bg-white-500 flex cursor-pointer items-center justify-between gap-2 rounded-lg px-5 py-2 font-bold transition-colors duration-300"
      {...props}
    />
  );
}
