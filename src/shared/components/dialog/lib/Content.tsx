import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { X } from 'lucide-react';

import { Buttons } from '@/shared/components';

import { DialogOverlay } from './Overlay';
import { Portal } from './index';

const sheetVariants = cva('fixed z-50 gap-4 bg-gray-50 p-6 pt-3 shadow-lg transition ease-in-out ', {
  variants: {
    side: {
      center: 'rounded-lg fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
    },
    size: {
      xl: 'w-[90vw] max-h-[85vh] max-w-xl',
      lg: 'w-[90vw] max-h-[85vh] max-w-lg',
      md: 'w-[90vw] max-h-[85vh] max-w-md',
      sm: 'w-[90vw] max-h-[85vh] max-w-sm',
      full: 'w-[100vw] h-[100vh] rounded-none',
      none: 'max-w-none',
    },
  },
  defaultVariants: {
    side: 'center',
    size: 'lg',
  },
});

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  ref?: React.Ref<HTMLDivElement>;
}

export const DialogContent: React.FC<SheetContentProps> = ({ side, ref, className, size, children, ...props }) => (
  <Portal>
    <DialogOverlay />
    <SheetPrimitive.Content ref={ref} className={clsx(sheetVariants({ side, size, className }))} {...props}>
      <div className={'absolute top-0 right-0 flex w-full items-center justify-end px-2 h-12'}>
        <SheetPrimitive.Close asChild>
          <Buttons.Icon icon={<X />}>
            <span className="sr-only">Close</span>
          </Buttons.Icon>
        </SheetPrimitive.Close>
      </div>
      {children}
    </SheetPrimitive.Content>
  </Portal>
);

DialogContent.displayName = SheetPrimitive.Content.displayName;
