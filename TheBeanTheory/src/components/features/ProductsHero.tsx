'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import styles from './ProductsHero.module.css';

export function ProductsHero() {
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

      // 2. Entrance Animation
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
        OUR FINEST SELECTION
      </div>
      <div className={styles.content}>
        <span className={styles.caption}>The Curated Shelf</span>
        <h1 className={styles.title}>Explore Our Beans</h1>
        <p className={styles.description}>
          Discover the unique flavors of the Indonesian archipelago through our
          meticulously sourced and roasted single-origin coffees.
        </p>
      </div>
    </header>
  );
}
