'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import styles from './CTASection.module.css';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Block Entrance
      gsap.fromTo(
        blockRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );

      // 2. Content Stagger (Fixed visibility logic)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockRef.current,
          start: 'top 75%',
        },
      });

      // We use fromTo to guarantee it ends at opacity 1
      tl.fromTo(
        `.${styles.statusBadge}, .${styles.title}, .${styles.buttonGroup}`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.roastBlock} ref={blockRef}>
        <div className={styles.statusBadge}>
          <span className={styles.pulse} />
          <span>Fresh Roast Available Now</span>
        </div>

        <h2 className={styles.title}>
          Bring the Theory of Perfection to Your Morning.
        </h2>

        <div className={styles.buttonGroup}>
          <a
            href="https://wa.me/628123456789?text=Hi! I want to order some coffee beans."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            <span>Order via WhatsApp</span>
            <span className={styles.icon}>↗</span>
          </a>
          <Link href="/products" className={styles.secondaryButton}>
            <span>Browse Full Store</span>
            <span className={styles.icon}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
