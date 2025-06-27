'use client';

import { v4 as uuid } from 'uuid';

import { FormPageActionType, useFormPagesReducer } from '@/app/form-pages/hooks/useFormPagesReducer';
import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { getPersistedData, usePersist } from '@/hooks/usePersist';

const PERSIST_KEY = 'PERSISTED_PAGES';

const DEFAULT_PAGES = [
  { id: uuid(), title: 'Info' },
  { id: uuid(), title: 'Details' },
];

export const useFormPages = () => {
  const pages = getPersistedData(DEFAULT_PAGES, PERSIST_KEY);
  const { state, dispatch } = useFormPagesReducer(pages);

  usePersist(state.pages, PERSIST_KEY);

  const onAddPage = (afterId: string, newFormPage: Omit<FormPage, 'id'>) => {
    dispatch({ type: FormPageActionType.insertAfter, afterId, ...newFormPage });
  };

  return {
    ...state,
    onAddPage,
  };
};
