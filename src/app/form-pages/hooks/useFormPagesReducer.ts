'use client';

import { useReducer } from 'react';

import { v4 as uuid } from 'uuid';

import { FormPage } from '@/app/form-pages/interfaces/formPage';

export enum FormPageActionType {
  insertAfter = 'INSERT_PAGE_AFTER',
  remove = 'REMOVE_PAGE',
  reorder = 'REORDER_PAGES',
  setPages = 'SET_PAGES',
}

type InsertPageAction = { type: FormPageActionType.insertAfter; afterId: string; title: string };
type RemovePageAction = { type: FormPageActionType.remove; id: string };
type ReorderPageAction = { type: FormPageActionType.reorder; from: number; to: number };
type SetPagesAction = { type: FormPageActionType.setPages; pages: State['pages'] };

type Action = InsertPageAction | RemovePageAction | ReorderPageAction | SetPagesAction;

type State = { pages: FormPage[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case FormPageActionType.insertAfter: {
      const idx = state.pages.findIndex((p) => p.id === action.afterId);
      const newPage = { id: uuid(), title: action.title };
      const newPages = [...state.pages];
      newPages.splice(idx + 1, 0, newPage);
      return { ...state, pages: newPages };
    }

    case FormPageActionType.remove:
      return {
        ...state,
        pages: state.pages.filter((p) => p.id !== action.id),
      };

    case FormPageActionType.setPages:
      return {
        ...state,
        pages: action.pages,
      };

    case FormPageActionType.reorder: {
      const newPages = [...state.pages];
      const [moved] = newPages.splice(action.from, 1);
      newPages.splice(action.to, 0, moved);
      return { ...state, pages: newPages };
    }

    default:
      return state;
  }
}

export function useFormPagesReducer(initialPages: FormPage[]) {
  const [state, dispatch] = useReducer(reducer, { pages: initialPages });

  return { state, dispatch };
}
