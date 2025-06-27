'use client';

import React from 'react';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { Buttons } from '@/components';

import { FormPageElement } from './FormPageItem';

const Divider = () => <div className={'w-10 bg-red-400'} />;

const renderFormPageElement = (page: FormPage, index: number, array: FormPage[]) => {
  const nextIndex = index + 1;
  const isBetweenElements = array[nextIndex];
  if (array.length === nextIndex) return <FormPageElement key={page.id} {...page} />;
  return (
    <React.Fragment key={page.id}>
      <FormPageElement {...page} />
      {isBetweenElements && <Divider />}
    </React.Fragment>
  );
};

export const FormPageHeader = () => {
  const { pages, onAddPage } = useFormPageContext();

  const onAdd = () => {
    onAddPage(pages[pages.length - 1].id, { title: 'Test' });
  };

  return (
    <div className="flex flex-row flex-nowrap w-full p-5">
      {pages.map(renderFormPageElement)}
      <Buttons.Base onClick={onAdd}>Add</Buttons.Base>
    </div>
  );
};
