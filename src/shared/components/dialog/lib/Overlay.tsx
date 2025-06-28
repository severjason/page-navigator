import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';

export const DialogOverlay: React.FC<React.ComponentPropsWithRef<typeof SheetPrimitive.Overlay>> = ({
  className,
  ref,
  ...props
}) => (
  <SheetPrimitive.Overlay
    className={clsx(
      `fixed inset-0 z-50 bg-black/60  data-[state=open]:animate-in data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
      className,
    )}
    {...props}
    ref={ref}
  />
);

DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
