'use client';

import React from 'react';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { useTrackItemsDrop } from '@/app/form-pages/hooks/useTrackItemsDrop';

import { AddPageButton } from './AddPageButton';
import { AddPageDialog } from './AddPageDialog';
import { DraggableFormPageElement } from './FormPageItem';
import { FormPageItemDivider } from './FormPageItemDivider';
import { ResetStateButton } from './ResetStateButton';

export const FormPageHeader = () => {
  const { order, pages } = useFormPageContext();

  useTrackItemsDrop();

  return (
    <div className="flex flex-row flex-nowrap w-full p-5 overflow-x-auto">
      {order.map((pageId, index) => (
        <React.Fragment key={pageId}>
          <DraggableFormPageElement page={pages[pageId]} index={index} isLast={index === order.length - 1} />
          <FormPageItemDivider prevItemId={pageId} />
        </React.Fragment>
      ))}
      <AddPageButton />
      <ResetStateButton />
      <AddPageDialog />
    </div>
  );
};
