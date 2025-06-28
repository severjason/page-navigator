import React from 'react';

export const PlusIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2.4a.8.8 0 0 1 .8.8v4h4a.8.8 0 1 1 0 1.6h-4v4a.8.8 0 1 1-1.6 0v-4h-4a.8.8 0 1 1 0-1.6h4v-4a.8.8 0 0 1 .8-.8Z"
      clipRule="evenodd"
    />
  </svg>
);

PlusIcon.displayName = 'PlusIcon';
