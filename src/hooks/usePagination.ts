import { useCallback, useRef, useEffect, RefCallback } from 'react';

export const usePagination = (incrementPage: () => void) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef: RefCallback<HTMLDivElement> = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      if (!node) return;

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          incrementPage();
          observerRef.current?.disconnect();
        }
      });

      observerRef.current.observe(node);
    },
    [incrementPage]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    lastElementRef,
  };
};
