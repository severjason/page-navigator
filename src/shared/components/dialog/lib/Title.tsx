import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';

export const DialogTitle: React.FC<React.ComponentPropsWithRef<typeof SheetPrimitive.Title>> = ({
  className,
  ref,
  ...props
}) => (
  <SheetPrimitive.Title ref={ref} className={clsx('text-lg font-semibold text-foreground', className)} {...props} />
);

DialogTitle.displayName = SheetPrimitive.Title.displayName;
