'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import styles from './CustomCursor.module.css';

interface CustomCursorProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export function CustomCursor({ containerRef }: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Use refs for mouse position to avoid rapid state updates
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  useGSAP(
    () => {
      if (isTouchDevice || !containerRef.current) return;

      const container = containerRef.current;

      // Move dot
      const moveDot = gsap.quickTo(dotRef.current, 'x', {
        duration: 0,
        ease: 'none',
      });
      const moveDotY = gsap.quickTo(dotRef.current, 'y', {
        duration: 0,
        ease: 'none',
      });

      // Move ring
      const moveRing = gsap.quickTo(ringRef.current, 'x', {
        duration: 0.15,
        ease: 'power2.out',
      });
      const moveRingY = gsap.quickTo(ringRef.current, 'y', {
        duration: 0.15,
        ease: 'power2.out',
      });

      const handleMouseMove = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };

        moveDot(e.clientX);
        moveDotY(e.clientY);
        moveRing(e.clientX);
        moveRingY(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      const handleMouseEnter = () => {
        setIsVisible(true);
        document.body.style.cursor = 'none';
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
        document.body.style.cursor = '';
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseover', handleMouseOver);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseover', handleMouseOver);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        document.body.style.cursor = '';
      };
    },
    { dependencies: [isTouchDevice, containerRef] }
  );

  // Handle hover animations
  useGSAP(
    () => {
      if (isTouchDevice) return;

      if (isHovering) {
        gsap.to(ringRef.current, {
          scale: 1.5,
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          duration: 0.2,
        });
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      } else {
        gsap.to(ringRef.current, {
          scale: 1,
          borderColor: '#ffffff',
          backgroundColor: 'transparent',
          duration: 0.2,
        });
        gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
      }
    },
    { dependencies: [isHovering, isTouchDevice] }
  );

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`${styles.ring} ${isVisible ? styles.visible : ''}`}
      />
      <div
        ref={dotRef}
        className={`${styles.dot} ${isVisible ? styles.visible : ''}`}
      />
    </>
  );
}
