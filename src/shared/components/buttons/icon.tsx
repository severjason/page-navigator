'use client';

import React, { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

import { baseButtonStyles, buttonTypes } from './styles';

const buttonVariants = cva(clsx(baseButtonStyles.replace('rounded-lg', 'rounded-full'), ''), {
  variants: {
    variant: {
      ...buttonTypes,
    },
    size: {
      default: 'h-8 w-8',
      sm: 'h-4 w-4 [&>svg]:h-2 [&>svg]:w-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type IconButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> &
  VariantProps<typeof buttonVariants> & {
    icon: ReactNode;
    isLoading?: boolean;
    ref?: React.ForwardedRef<HTMLButtonElement>;
  };

export const IconButton: React.FC<IconButtonProps> = ({ ref, children, ...props }) => {
  const { icon, className, variant, size, isLoading, disabled, ...rest } = props;
  const classes = clsx(buttonVariants({ variant, size, className }));
  return (
    <button role="button" disabled={isLoading || disabled} tabIndex={0} className={classes} ref={ref} {...rest}>
      {isLoading ? <Loader2 className="animate-spin" /> : icon}
      {children}
    </button>
  );
};

IconButton.displayName = 'IconButton';
