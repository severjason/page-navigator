import React from 'react';

import clsx from 'clsx';
import { LoaderCircle } from 'lucide-react';

export const Loader: React.FC<React.ComponentPropsWithRef<typeof LoaderCircle>> = ({ className, ref, ...props }) => (
  <LoaderCircle className={clsx('animate-spin text-primary-900 duration-700', className)} {...props} ref={ref} />
);

Loader.displayName = 'Loader';
