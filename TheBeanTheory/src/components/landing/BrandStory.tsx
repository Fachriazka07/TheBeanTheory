'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import styles from './BrandStory.module.css';

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
  const containerRef = useRef<HTMLElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Watermark Drift
      gsap.to(watermarkRef.current, {
        x: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // 2. Main Image Parallax (Applying to the inner Image element via ref)
      const mainImageElement = mainImageRef.current?.querySelector('img');
      if (mainImageElement) {
        gsap.to(mainImageElement, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Staggered Content Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });

      tl.from(`.${styles.caption}`, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          `.${styles.title}`,
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.6'
        )
        .from(
          `.${styles.description}`,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          '-=0.8'
        )
        .from(
          `.${styles.statItem}`,
          {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          },
          '-=0.8'
        )
        .from(
          `.${styles.button}`,
          {
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  return (
    <section className={styles.section} ref={containerRef}>
      {/* Kinetic Background Watermark */}
      <div className={styles.watermark} ref={watermarkRef}>
        CRAFTED WITH PRECISION
      </div>

      <div className={styles.container}>
        {/* Image Collage Section */}
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper} ref={mainImageRef}>
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt="Artisan Coffee Preparation"
              fill
              className={styles.mainImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className={styles.secondaryImageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop"
              alt="Roasted Coffee Beans Detail"
              fill
              className={styles.secondaryImage}
              sizes="20vw"
            />
          </div>
        </div>

        {/* Story Content Section */}
        <div className={styles.contentSection} ref={contentRef}>
          <header className={styles.header}>
            <span className={styles.caption}>Since 2024</span>
            <h2 className={styles.title}>
              The Science <br />
              of Senses
            </h2>
          </header>

          <p className={styles.description}>
            The Bean Theory isn&apos;t just a roastery; it&apos;s a laboratory
            of flavor. We explore the intricate chemical dance between heat,
            time, and origin to unlock the hidden stories within every single
            bean.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>12+</span>
              <span className={styles.statLabel}>Unique Origins</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Hand Roasted</span>
            </div>
          </div>

          <Link href="/products" className={styles.button}>
            Discover Our Method <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
