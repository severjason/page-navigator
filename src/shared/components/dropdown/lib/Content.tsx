import * as React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

export const DropdownMenuContent: React.FC<React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content>> = ({
  className,
  ref,
  sideOffset = 4,
  ...props
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={clsx(
        `z-50 min-w-60 overflow-hidden bg-white rounded-xl border border-gray-200 bg-popover p-0 
        text-popover-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
