import React from 'react';

import type { Edge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/types';
import clsx from 'clsx';

type DropIndicatorProps = {
  edge: Edge;
  isFirst?: boolean;
};

export const DropIndicator: React.FC<DropIndicatorProps> = ({ edge, isFirst }) => {
  const dotClasses = 'absolute rounded-full w-1.5 h-1.5 bg-secondary-300';
  return (
    <div
      className={clsx(
        'absolute w-0.5 h-full bg-secondary-300 ',
        edge === 'right' && 'left-full ml-[9px]',
        edge === 'left' && `right-full ${isFirst ? 'mr-[2px]' : 'mr-[9px]'}`,
      )}
    >
      <div className={clsx(dotClasses, 'top-0 left-1/2 -translate-1/2')} />
      <div className={clsx(dotClasses, 'bottom-0 left-1/2 -translate-1/2 translate-y-1/2')} />
    </div>
  );
};
