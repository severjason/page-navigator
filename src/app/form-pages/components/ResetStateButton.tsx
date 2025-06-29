import React from 'react';

import { Buttons } from 'src/shared/components';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { DEFAULT_PAGES_STATE } from '@/app/form-pages/hooks/useFormPages';
import { pagesPositionSort } from '@/app/form-pages/hooks/useFormPagesReducer';

export const ResetStateButton: React.FC = () => {
  const { pages, order, onReset } = useFormPageContext();
  const contextPages = order
    .map((pageId) => JSON.stringify({ title: pages[pageId].title, position: pages[pageId].position }))
    .join();

  const defaultPages = Object.values(DEFAULT_PAGES_STATE)
    .sort(pagesPositionSort)
    .map(({ title, position }) => JSON.stringify({ title, position }))
    .join();

  if (contextPages === defaultPages) return null;

  return (
    <span className={'fixed bottom-11 right-5 z-20 animate-in slide-in-from-right'}>
      <Buttons.Base onClick={onReset}>Reset state</Buttons.Base>
    </span>
  );
};
