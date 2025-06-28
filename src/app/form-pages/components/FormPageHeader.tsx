'use client';

import React from 'react';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';

import { AddPageButton } from './AddPageButton';
import { AddPageDialog } from './AddPageDialog';
import { FormPageElement } from './FormPageItem';
import { FormPageItemDivider } from './FormPageItemDivider';
import { ResetStateButton } from './ResetStateButton';

export const FormPageHeader = () => {
  const { pages } = useFormPageContext();

  return (
    <div className="flex flex-row flex-nowrap w-full p-5 overflow-x-auto">
      {pages.map((page, index) => (
        <React.Fragment key={page.id}>
          <FormPageElement {...page} index={index} isLast={index === pages.length - 1} />
          <FormPageItemDivider prevItemId={page.id} />
        </React.Fragment>
      ))}
      <AddPageButton />
      <ResetStateButton />
      <AddPageDialog />
    </div>
  );
};
