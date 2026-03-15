'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import { ProductCard } from '@/components/features/ProductCard';
import type { Product } from '@/types';
import styles from './FeaturedProducts.module.css';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const containerRef = useRef<HTMLElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);

  const displayProducts =
    products.length > 0
      ? products
      : [
          {
            _id: '1',
            title: 'Gayo Mountain',
            slug: { current: 'gayo-mountain' },
            origin: 'Aceh, Sumatra',
            roastLevel: 'medium' as const,
            process: 'natural' as const,
            price: 85000,
            isReady: true,
            notes: [],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            image: { asset: { _ref: 'local-gayo' } } as any,
            imageUrl: '/images/Product/Gayo Mountain.png',
            waLink: '',
          },
          {
            _id: '2',
            title: 'Toraja Sapan',
            slug: { current: 'toraja-sapan' },
            origin: 'Sulawesi',
            roastLevel: 'dark' as const,
            process: 'washed' as const,
            price: 92000,
            isReady: true,
            notes: [],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            image: { asset: { _ref: 'local-toraja' } } as any,
            imageUrl: '/images/Product/Toraja Sapan.png',
            waLink: '',
          },
          {
            _id: '3',
            title: 'Flores Bajawa',
            slug: { current: 'flores-bajawa' },
            origin: 'NTT',
            roastLevel: 'light' as const,
            process: 'honey' as const,
            price: 78000,
            isReady: true,
            notes: [],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            image: { asset: { _ref: 'local-flores' } } as any,
            imageUrl: '/images/Product/Flores Bajawa.png',
            waLink: '',
          },
        ];

  useGSAP(
    () => {
      // Continuous background drift (slow and steady)
      gsap.to(driftRef.current, {
        x: '-10%',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });

      // Parallax background drift (additional movement on scroll)
      gsap.to(driftRef.current, {
        x: '-25%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Synchronized bloom reveal for the 3-card set
      const cards = gsap.utils.toArray(`.${styles.cardWrapper}`);
      
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      // Header reveal
      gsap.from(`.${styles.header}`, {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="featured-products"
      className={styles.section}
      ref={containerRef}
    >
      <div ref={driftRef} className={styles.driftText}>
        THE BEAN THEORY
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.caption}>The Featured Trilogy</span>
          <h2 className={styles.title}>Selected Origins</h2>
        </div>

        <div className={styles.grid}>
          {displayProducts.slice(0, 3).map((product, i) => (
            <div key={product._id} className={styles.cardWrapper}>
              <div className={styles.cardNumber}>0{i + 1}</div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/products" className={styles.viewAllButton}>
            View Full Collection <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
