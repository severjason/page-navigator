import React from 'react';

export const ClipboardIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.667 3.167h2c.368 0 .666.298.666.666V13.5a.667.667 0 0 1-.666.667H4.333a.667.667 0 0 1-.666-.667V3.833c0-.368.298-.666.666-.666h2M7 4.833h3a.667.667 0 0 0 .667-.666V2.5A.667.667 0 0 0 10 1.833H7a.667.667 0 0 0-.667.667v1.667c0 .368.299.666.667.666Z"
    />
  </svg>
);

ClipboardIcon.displayName = 'ClipboardIcon';
