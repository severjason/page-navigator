import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export const buttonVariants = cva(
  clsx(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium tracking-tightest',
    'hover:cursor-pointer',
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ',
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'border shadow border-transparent ',
  ),
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-gray-100/90',
      },
      size: {
        default: 'px-2.5 py-1.5',
        lg: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
