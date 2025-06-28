import * as React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

export const DropdownMenuItem: React.FC<
  React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
> = ({ className, inset, ref, ...props }) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={clsx(
      `relative flex cursor-pointer leading-4 select-none items-center p-3 text-sm outline-none transition-colors
       rounded-0 focus:bg-accent hover:bg-secondary-50
        data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
