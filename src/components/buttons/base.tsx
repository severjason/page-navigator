'use client';

import React from 'react';

import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

import { buttonVariants } from './styles';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
  };

const ButtonLoader = ({ isLoading, children }: Pick<ButtonProps, 'isLoading' | 'children'>) => {
  if (!isLoading) return children;

  return (
    <>
      <Loader2 className="animate-spin absolute" />
      <span className="invisible ">{children}</span>
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({
  className,
  isLoading,
  disabled,
  children,
  ref,
  variant,
  size,
  ...rest
}) => {
  const classes = clsx(buttonVariants({ variant, size, className }));
  return (
    <button role="button" disabled={isLoading || disabled} tabIndex={0} className={classes} ref={ref} {...rest}>
      <ButtonLoader isLoading={isLoading}>
        <span>{children}</span>
      </ButtonLoader>
    </button>
  );
};
