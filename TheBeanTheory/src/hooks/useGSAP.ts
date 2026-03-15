'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for GSAP animations with automatic cleanup.
 * Uses gsap.context() for proper React 18+ cleanup.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const containerRef = useRef<HTMLDivElement>(null);
 *   const { contextSafe } = useGSAP(containerRef);
 *
 *   const handleClick = contextSafe(() => {
 *     gsap.to('.box', { x: 100 });
 *   });
 *
 *   return <div ref={containerRef}>...</div>;
 * }
 * ```
 */
export function useGSAP(
  callback: () => void | (() => void),
  options: {
    scope?: React.RefObject<HTMLElement | null>;
    dependencies?: React.DependencyList;
  } = {}
) {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    contextRef.current = gsap.context(
      callback,
      options.scope?.current || undefined
    );

    return () => {
      contextRef.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, options.dependencies || []);

  const contextSafe = useCallback(
    <T extends (...args: unknown[]) => unknown>(fn: T): T => {
      if (!contextRef.current) return fn;
      return contextRef.current.add(fn) as T;
    },
    []
  );

  return { context: contextRef, contextSafe };
}
