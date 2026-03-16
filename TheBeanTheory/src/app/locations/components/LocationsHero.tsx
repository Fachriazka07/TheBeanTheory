'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import styles from './LocationsHero.module.css';

export function LocationsHero() {
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
        OUR ROASTERIES
      </div>
      <div className={styles.content}>
        <span className={styles.caption}>── Visit Us ──</span>
        <h1 className={styles.title}>Find Our Locations</h1>
        <p className={styles.description}>
          Drop by one of our roasteries to experience specialty coffee at its finest.
          Each space is designed for the perfect sensory exploration.
        </p>
      </div>
    </header>
  );
}
