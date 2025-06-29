import { useEffect } from 'react';

import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import { useFormPageContext } from './useFormPageContext';
import { isFormPageData } from './useItemsDropAndDrop';

export const useTrackItemsDrop = () => {
  const { order, onReorder } = useFormPageContext();

  useEffect(() => {
    return monitorForElements({
      canMonitor: ({ source }) => isFormPageData(source.data),
      onDrop({ location, source }) {
        const target = location.current.dropTargets[0];
        if (!target) return;

        const sourceData = source.data;
        const targetData = target.data;

        if (!isFormPageData(sourceData) || !isFormPageData(targetData)) return;

        const idOfSource = order.find((pageId) => pageId === sourceData.formPageId);
        const idOfTarget = order.find((pageId) => pageId === targetData.formPageId);

        if (!idOfSource || !idOfTarget) return;

        const closestEdgeOfTarget = extractClosestEdge(targetData);

        onReorder(idOfSource, idOfTarget, closestEdgeOfTarget === 'right' ? 'after' : 'before');
      },
    });
  }, [order, onReorder]);
};
