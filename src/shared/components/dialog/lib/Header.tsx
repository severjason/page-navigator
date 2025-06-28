import * as React from 'react';

import clsx from 'clsx';

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('flex flex-col space-y-2 text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';
