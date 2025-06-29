'use client';

import { useReducer } from 'react';

import { v4 as uuid } from 'uuid';

import { FormPage } from '@/app/form-pages/interfaces/formPage';

export type PositionedPage = FormPage & { position: number };

export enum FormPageActionType {
  insertAfter = 'INSERT_PAGE_AFTER',
  remove = 'REMOVE_PAGE',
  reorder = 'REORDER_PAGES',
  setPages = 'SET_PAGES',
}

type InsertPageAction = {
  type: FormPageActionType.insertAfter;
  afterId: string;
  title: string;
};

type RemovePageAction = {
  type: FormPageActionType.remove;
  id: string;
};

type ReorderPageAction = {
  type: FormPageActionType.reorder;
  fromId: string;
  toAfterId: string;
};

type SetPagesAction = {
  type: FormPageActionType.setPages;
  pages: State['pages'];
};

type Action = InsertPageAction | RemovePageAction | ReorderPageAction | SetPagesAction;

interface State {
  pages: Record<string, PositionedPage>;
  order: string[];
}

export const pagesPositionSort = (a: PositionedPage, b: PositionedPage) => a.position - b.position;

const generateInitialState = (initialPages: State['pages']): State => {
  const order = Object.values(initialPages)
    .sort(pagesPositionSort)
    .reduce<string[]>((res, page) => {
      res.push(page.id);
      return res;
    }, []);
  return { pages: initialPages, order };
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case FormPageActionType.insertAfter: {
      const newId = uuid();
      const baseOrder = [...state.order];
      const index = baseOrder.indexOf(action.afterId);
      const insertPos = index < 0 ? 0 : index + 1;
      baseOrder.splice(insertPos, 0, newId);
      const pages = {
        ...state.pages,
        [newId]: { id: newId, title: action.title, position: insertPos } as PositionedPage,
      };
      const order = baseOrder.reduce<string[]>((res, id, i) => {
        pages[id] = { ...pages[id], position: i };
        res.push(id);
        return res;
      }, []);
      return { pages, order };
    }

    case FormPageActionType.remove: {
      const pagesWithout = Object.entries(state.pages).reduce<Pick<State, 'pages'>>(
        (res, [id, page]) => {
          if (id !== action.id) res.pages[id] = page;
          return res;
        },
        { pages: {} },
      );
      const order = state.order.filter((id) => id !== action.id);
      const pages = Object.values(pagesWithout.pages).reduce<Record<string, PositionedPage>>((res, page, index) => {
        res[page.id] = { ...page, position: index };
        return res;
      }, {});
      return { pages, order };
    }

    case FormPageActionType.reorder: {
      const baseOrder = state.order.filter((id) => id !== action.fromId);
      const index = baseOrder.indexOf(action.toAfterId);
      const insertPos = index < 0 ? 0 : index + 1;
      baseOrder.splice(insertPos, 0, action.fromId);
      const pages = { ...state.pages };
      const order = baseOrder.reduce<string[]>((res, id, i) => {
        pages[id] = { ...pages[id], position: i };
        res.push(id);
        return res;
      }, []);
      return { pages, order };
    }

    case FormPageActionType.setPages: {
      return generateInitialState(action.pages);
    }

    default:
      return state;
  }
}

export function useFormPagesReducer(initialPages: State['pages']) {
  const [state, dispatch] = useReducer(reducer, initialPages, generateInitialState);
  return { state, dispatch };
}
