import React from 'react';

import { Buttons } from 'src/shared/components';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { DEFAULT_PAGES_STATE } from '@/app/form-pages/hooks/useFormPages';

export const ResetStateButton: React.FC = () => {
  const { pages, onReset } = useFormPageContext();
  const pageTitles = pages.map((page) => page.title).join();
  const defaultPageTitles = DEFAULT_PAGES_STATE.map((page) => page.title).join();

  if (pageTitles === defaultPageTitles) return null;

  return (
    <span className={'fixed bottom-11 right-5 z-20 animate-in slide-in-from-right'}>
      <Buttons.Base onClick={onReset}>Reset state</Buttons.Base>
    </span>
  );
};
