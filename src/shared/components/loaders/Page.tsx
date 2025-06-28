import React from 'react';

import { Loader } from './Loader';

export const PageLoader: React.FC = () => (
  <Loader className={'text-primary-900/20 w-[50px] h-[50px] text-center m-auto'} />
);

PageLoader.displayName = 'PageLoader';
