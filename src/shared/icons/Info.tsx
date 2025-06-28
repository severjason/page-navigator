import React from 'react';

export const InfoIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.958 9.167H10v4.375M17.708 10a7.708 7.708 0 1 1-15.416 0 7.708 7.708 0 0 1 15.416 0Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth=".25"
      d="M10 6.125A.542.542 0 1 1 10 7.208.542.542 0 0 1 10 6.125Z"
    />
  </svg>
);

InfoIcon.displayName = 'InfoIcon';
