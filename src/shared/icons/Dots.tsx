import React from 'react';

export const DotsIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M8 3.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 14.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 3.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 14.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
    />
  </svg>
);

DotsIcon.displayName = 'DotsIcon';
