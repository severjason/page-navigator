'use client';

import React, { ReactNode } from 'react';

import { FormPageHeader } from '@/app/form-pages/components/FormPageHeader';
import { AddPageProvider } from '@/app/form-pages/hooks/useAddPage';
import { FormPagesProvider } from '@/app/form-pages/hooks/useFormPageContext';

const FormPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <FormPagesProvider>
      <AddPageProvider>
        <FormPageHeader />
        {children}
      </AddPageProvider>
    </FormPagesProvider>
  );
};

export default FormPageLayout;
