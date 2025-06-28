import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';

export const DialogDescription: React.FC<React.ComponentPropsWithRef<typeof SheetPrimitive.Description>> = ({
  className,
  ref,
  ...props
}) => <SheetPrimitive.Description ref={ref} className={clsx('text-sm text-muted-foreground', className)} {...props} />;

DialogDescription.displayName = SheetPrimitive.Description.displayName;
