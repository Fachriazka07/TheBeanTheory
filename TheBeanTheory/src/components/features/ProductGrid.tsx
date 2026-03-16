'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gridRef.current?.children;
      if (!cards || cards.length === 0) return;

      // Animate in
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true,
        }
      );
    },
    { dependencies: [products], scope: gridRef }
  );

  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <h3 className={styles.emptyTitle}>No Beans Found</h3>
        <p className={styles.emptyText}>Try selecting another roast level.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid} ref={gridRef}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
