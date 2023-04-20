import { useRef, useState, useCallback, useEffect } from 'react';
import { useCanvasPositioning } from './useCanvasPositioning';

export type ContextMenuData = {
  x: number;
  y: number;
  data: {
    type: string;
    element: HTMLElement;
  } | null;
};

export const useContextMenu = () => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuData, setContextMenuData] = useState<ContextMenuData>({ x: 0, y: 0, data: null });
  const { clientToCanvasPosition } = useCanvasPositioning();

  const handleContextMenu = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      const data = getContextMenuDataFromTarget(event.target as HTMLElement);

      setShowContextMenu(true);

      console.dir({
        clientX: event.clientX,
        clientY: event.clientY,
        canvasPosition: clientToCanvasPosition(event.clientX, event.clientY),
      });
      setContextMenuData({ ...clientToCanvasPosition(event.clientX, event.clientY), data });
    },
    [clientToCanvasPosition],
  );

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      // Close context menu if clicked outside of it
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
        setShowContextMenu(false);
      }
    };

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [contextMenuRef]);

  return {
    contextMenuRef,
    showContextMenu,
    contextMenuData,
    handleContextMenu,
    setContextMenuData,
    setShowContextMenu,
  };
};

const getContextMenuDataFromTarget = (target: HTMLElement | null): ContextMenuData['data'] | null => {
  while (target && !target.dataset.contextmenutype) {
    target = target.parentElement;
  }
  return target ? { type: target.dataset.contextmenutype!, element: target } : null;
};