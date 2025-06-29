'use client';

import { v4 as uuid } from 'uuid';

import { FormPageActionType, PositionedPage, useFormPagesReducer } from '@/app/form-pages/hooks/useFormPagesReducer';
import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { getPersistedData, usePersist } from '@/shared/hooks/usePersist';

export const PAGES_PERSIST_KEY = 'PAGES_PERSIST_KEY';

const infoId = uuid();
const detailsId = uuid();
export const DEFAULT_PAGES_STATE = {
  [infoId]: { title: 'Info', id: infoId, position: 0 },
  [detailsId]: { title: 'Details', id: detailsId, position: 1 },
} satisfies Record<string, PositionedPage>;

export const useFormPages = () => {
  const pages = getPersistedData(DEFAULT_PAGES_STATE, PAGES_PERSIST_KEY);

  const { state, dispatch } = useFormPagesReducer(pages);

  usePersist(state.pages, PAGES_PERSIST_KEY);

  const onAddPage = (afterId: string, newFormPage: Omit<FormPage, 'id'>) => {
    dispatch({ type: FormPageActionType.insertAfter, afterId, ...newFormPage });
  };

  const onRemovePage = (id: string) => dispatch({ type: FormPageActionType.remove, id });

  const onReorder = (sourceId: string, targetId: string, insertPosition: 'before' | 'after') =>
    dispatch({
      type: FormPageActionType.reorder,
      fromId: sourceId,
      ...(insertPosition === 'before' ? { toBeforeId: targetId } : { toAfterId: targetId }),
    });

  const onSetAsFirstPage = (sourceId: string) => onReorder(sourceId, state.order[0], 'before');

  const onReset = () => dispatch({ type: FormPageActionType.setPages, pages: DEFAULT_PAGES_STATE });

  const getPage = (id: string) => state.pages[id];

  return {
    ...state,
    getPage,
    onAddPage,
    onRemovePage,
    onReset,
    onReorder,
    onSetAsFirstPage,
  };
};
