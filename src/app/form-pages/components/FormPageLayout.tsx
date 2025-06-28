'use client';

import React, { ReactNode, useEffect, useState } from 'react';

import { Loaders } from 'src/shared/components';

import { FormPageHeader } from '@/app/form-pages/components/FormPageHeader';
import { AddPageProvider } from '@/app/form-pages/hooks/useAddPage';
import { FormPagesProvider } from '@/app/form-pages/hooks/useFormPageContext';

export const FormPageLayout = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loaders.Page />;

  return (
    <FormPagesProvider>
      <AddPageProvider>
        <FormPageHeader />
        {children}
      </AddPageProvider>
    </FormPagesProvider>
  );
};
