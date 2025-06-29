'use client';

import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';
import { Layouts } from 'src/shared/components';

const FormPageLayout = dynamic(() => import('@/app/form-pages/components/FormPageLayout'), {
  ssr: false,
});

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Layouts.Public>
      <FormPageLayout>{children}</FormPageLayout>
    </Layouts.Public>
  );
}
