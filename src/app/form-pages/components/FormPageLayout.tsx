'use client';

import React, { ReactNode, useEffect, useState } from 'react';

import { FormPageHeader } from '@/app/form-pages/components/FormPageHeader';
import { FormPagesProvider } from '@/app/form-pages/hooks/useFormPageContext';
import { Loaders } from '@/components';

export const FormPageLayout = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loaders.Page />;

  return (
    <FormPagesProvider>
      <FormPageHeader />
      {children}
    </FormPagesProvider>
  );
};
