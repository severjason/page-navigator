'use client';

import { v4 as uuid } from 'uuid';

import { FormPageActionType, useFormPagesReducer } from '@/app/form-pages/hooks/useFormPagesReducer';
import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { getPersistedData, usePersist } from '@/shared/hooks/usePersist';

const PERSIST_KEY = 'PERSISTED_PAGES';

export const DEFAULT_PAGES_STATE = [
  { id: uuid(), title: 'Info' },
  { id: uuid(), title: 'Details' },
];

export const useFormPages = () => {
  const pages = getPersistedData(DEFAULT_PAGES_STATE, PERSIST_KEY);
  const { state, dispatch } = useFormPagesReducer(pages);

  usePersist(state.pages, PERSIST_KEY);

  const onAddPage = (afterId: string, newFormPage: Omit<FormPage, 'id'>) => {
    dispatch({ type: FormPageActionType.insertAfter, afterId, ...newFormPage });
  };

  const onRemovePage = (id: string) => dispatch({ type: FormPageActionType.remove, id });

  const onReset = () => dispatch({ type: FormPageActionType.setPages, pages: DEFAULT_PAGES_STATE });

  const getPage = (id: string) => state.pages.find((p) => p.id === id);

  return {
    ...state,
    getPage,
    onAddPage,
    onRemovePage,
    onReset,
  };
};
