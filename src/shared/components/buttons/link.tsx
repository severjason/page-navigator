'use client';

import React from 'react';

import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';

import { buttonVariants } from './styles';

export type LinkButtonProps = React.ComponentPropsWithRef<typeof Link> & VariantProps<typeof buttonVariants>;

export const LinkButton: React.FC<LinkButtonProps> = ({ variant, size, className, ...props }) => {
  const classes = clsx(buttonVariants({ variant, size, className }));
  return <Link className={classes} {...props} />;
};
