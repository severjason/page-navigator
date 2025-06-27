'use client';

import React from 'react';

import { AppLayout } from './AppLayout';

export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AppLayout>{children}</AppLayout>
);
