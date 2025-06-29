import { useEffect, useRef, useState } from 'react';

import {
  type Edge,
  attachClosestEdge,
  extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { pointerOutsideOfPreview } from '@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview';
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview';

import { FormPage } from '@/app/form-pages/interfaces/formPage';

const pageDataKey = Symbol('page');

type PageDNDData = { [pageDataKey]: true; formPageId: FormPage['id'] };

function getFormPageData(formPage: FormPage): PageDNDData {
  return { [pageDataKey]: true, formPageId: formPage.id };
}

export function isFormPageData(data: Record<string | symbol, unknown>): data is PageDNDData {
  return data[pageDataKey] === true;
}

export enum PageDragType {
  idle = 'idle',
  preview = 'preview',
  isDragging = 'is-dragging',
  isDraggingOver = 'is-dragging-over',
}

type PageDragState =
  | { type: PageDragType.idle }
  | { type: PageDragType.preview; container: HTMLElement }
  | { type: PageDragType.isDragging }
  | { type: PageDragType.isDraggingOver; closestEdge: Edge | null };

const initialState: PageDragState = { type: PageDragType.idle };

export const useItemsDropAndDrop = (page: FormPage) => {
  const [state, setState] = useState<PageDragState>(initialState);
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return combine(
      draggable({
        element,
        getInitialData: () => getFormPageData(page),
        onGenerateDragPreview({ nativeSetDragImage }) {
          setCustomNativeDragPreview({
            nativeSetDragImage,
            getOffset: pointerOutsideOfPreview({ x: '8px', y: '8px' }),
            render: ({ container }) => setState({ type: PageDragType.preview, container }),
          });
        },
        onDragStart: () => setState({ type: PageDragType.isDragging }),
        onDrop: () => setState(initialState),
      }),
      dropTargetForElements({
        element,
        canDrop({ source }) {
          if (source.element === element) return false;
          return isFormPageData(source.data);
        },
        getData({ input }) {
          const data = getFormPageData(page);
          return attachClosestEdge(data, { element, input, allowedEdges: ['left', 'right'] });
        },
        getIsSticky: () => true,
        onDragEnter({ self }) {
          const closestEdge = extractClosestEdge(self.data);
          setState({ type: PageDragType.isDraggingOver, closestEdge });
        },
        onDrag({ self }) {
          const closestEdge = extractClosestEdge(self.data);

          setState((current) => {
            if (current.type === PageDragType.isDraggingOver && current.closestEdge === closestEdge) return current;
            return { type: PageDragType.isDraggingOver, closestEdge };
          });
        },
        onDragLeave: () => setState(initialState),
        onDrop: () => setState(initialState),
      }),
    );
  }, [page]);

  return {
    state,
    ref,
  };
};
