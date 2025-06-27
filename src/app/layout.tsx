import React from 'react';

import '@/styles/globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} dir={'ltr'}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
