import { useCallback, useRef, useEffect } from 'react';

export const usePagination = (incrementPage) => {
  const elementRef = useRef(null);

  const lastElementRef = useCallback(
    (node) => {
      // Remove previous observer if exists and disconnect it
      if (elementRef.current) elementRef.current.disconnect();
      if (!node) return;

      elementRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          incrementPage();
          elementRef.current.disconnect();
        }
      });

      elementRef.current.observe(node);
    },
    [incrementPage]
  );

  // Cleanup function to disconnect the observer when the component unmounts
  useEffect(() => {
    return () => {
      if (!elementRef.current) return;
      elementRef.current.disconnect();
    };
  }, []);

  return {
    lastElementRef,
  };
};
