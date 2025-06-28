import * as React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

export const DropdownMenuSeparator: React.FC<React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Separator>> = ({
  className,
  ref,
  ...props
}) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={clsx('my-0 h-[0.5px] bg-secondary-200', className)}
    {...props}
  />
);

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
