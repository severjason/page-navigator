'use client';

import React from 'react';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';

import { AddPageButton } from './AddPageButton';
import { AddPageDialog } from './AddPageDialog';
import { FormPageElement } from './FormPageItem';
import { FormPageItemDivider } from './FormPageItemDivider';
import { ResetStateButton } from './ResetStateButton';

export const FormPageHeader = () => {
  const { order, pages } = useFormPageContext();

  return (
    <div className="flex flex-row flex-nowrap w-full p-5 overflow-x-auto">
      {order.map((pageId, index) => (
        <React.Fragment key={pageId}>
          <FormPageElement {...pages[pageId]} index={index} isLast={index === order.length - 1} />
          <FormPageItemDivider prevItemId={pageId} />
        </React.Fragment>
      ))}
      <AddPageButton />
      <ResetStateButton />
      <AddPageDialog />
    </div>
  );
};
