'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import styles from './BrewingHero.module.css';

export function BrewingHero() {
  const containerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Continuous slow drift
      gsap.to(watermarkRef.current, {
        xPercent: -10,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });

      // 2. Watermark Scroll Parallax
      gsap.to(watermarkRef.current, {
        x: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // 3. Entrance Animation
      gsap.from(
        `.${styles.caption}, .${styles.title}, .${styles.description}`,
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power4.out',
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <header className={styles.hero} ref={containerRef}>
      <div className={styles.watermark} ref={watermarkRef}>
        THE ART OF EXTRACTION
      </div>
      <div className={styles.content}>
        <span className={styles.caption}>Rituals of Extraction</span>
        <h1 className={styles.title}>Master the Pour</h1>
        <p className={styles.description}>
          Elevate your daily ritual with our curated brewing recipes and professional
          techniques to unlock every note of flavor.
        </p>
      </div>
    </header>
  );
}
