import React from 'react';

import { Viewport } from 'next';

import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width, shrink-to-fit=no',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} dir={'ltr'}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
