import React from 'react';

export const DoubleSquaresIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.667 5.167v-2c0-.369.298-.667.666-.667h7c.368 0 .667.298.667.667v7.006a.667.667 0 0 1-.667.667h-2M3 5.833v7c0 .368.298.667.667.667h7a.667.667 0 0 0 .666-.667v-7a.667.667 0 0 0-.666-.666h-7A.667.667 0 0 0 3 5.833Z"
    />
  </svg>
);

DoubleSquaresIcon.displayName = 'DoubleSquaresIcon';
