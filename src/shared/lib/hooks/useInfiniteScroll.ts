import { RefObject, useEffect } from 'react';

export interface useInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: RefObject<HTMLElement>;
  wrapperRef: RefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef } :useInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef?.current || null;

    if (!triggerElement) return undefined;

    const options = {
      root: wrapperElement,
      threshold: 0.1,
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      observer.unobserve(triggerElement);
      observer.disconnect();
    };
  }, [triggerRef, wrapperRef, callback]);
}
