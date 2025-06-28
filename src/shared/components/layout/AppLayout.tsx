'use client';

import React from 'react';

import { Footer } from '@/shared/components';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <div className={'flex flex-1 max-w-screen-xl m-auto w-full'}>
      <main className={'relative flex flex-col flex-1 w-full'}>{children}</main>
    </div>
    <Footer />
  </>
);
