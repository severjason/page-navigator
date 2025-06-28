import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export const baseButtonStyles = clsx(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ',
  'tracking-tightest shrink-0  transition-all hover:cursor-pointer  transition-all',
  'focus-visible:ring-blue-600/25 focus:outline-none focus-visible:ring-2 focus-visible:border-blue-600',
  'disabled:pointer-events-none disabled:opacity-50',
  'border',
);

export const buttonTypes = {
  default: 'bg-white hover:bg-secondary-300 shadow-sm text-secondary-950',
  secondary: clsx(
    'bg-secondary-500/15 border-transparent hover:bg-secondary-500/35 text-secondary-600 ',
    'focus-visible:bg-white focus-visible:text-secondary-950',
  ),
};

export const buttonVariants = cva(baseButtonStyles, {
  variants: {
    variant: buttonTypes,
    size: {
      default: 'px-[9px] py-[5px]',
      lg: 'px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
