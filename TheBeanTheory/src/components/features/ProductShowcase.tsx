'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import type { Product } from '@/types';
import styles from './ProductShowcase.module.css';

interface ProductShowcaseProps {
  products: Product[];
}

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(`.${styles.slide}`);
      const currentSlide = slides[currentIndex] as HTMLElement;

      // Reset all slides
      gsap.set(slides, { opacity: 0, visibility: 'hidden', zIndex: 0 });

      // Setup current slide
      gsap.set(currentSlide, { opacity: 1, visibility: 'visible', zIndex: 10 });

      // Animate Image
      const img = currentSlide.querySelector(`.${styles.productImage}`);
      gsap.fromTo(
        img,
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' }
      );

      // Animate Content Stagger
      const content = currentSlide.querySelectorAll(
        `.${styles.contentSection} > *`
      );
      gsap.fromTo(
        content,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
          onComplete: () => setIsAnimating(false),
        }
      );
    },
    { dependencies: [currentIndex], scope: containerRef }
  );

  if (products.length === 0) return null;

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.showcase}>
        {products.map((product, index) => (
          <div
            key={product._id}
            className={`${styles.slide} ${index === currentIndex ? styles.slideActive : ''}`}
          >
            {/* Image Section */}
            <div className={styles.imageSection}>
              <img
                src={product.imageUrl || '/images/placeholder-bean.jpg'}
                alt={product.title}
                className={styles.productImage}
              />
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
              <span className={styles.caption}>
                Premium Selection — 0{index + 1}
              </span>
              <h2 className={styles.title}>{product.title}</h2>
              <span className={styles.origin}>{product.origin}</span>

              <div className={styles.details}>
                <div className={styles.notes}>
                  {product.notes.map((note, i) => (
                    <span key={i} className={styles.note}>
                      {note}
                    </span>
                  ))}
                </div>
                <div className={styles.badges}>
                  <span className={styles.note}>
                    {product.roastLevel} Roast
                  </span>
                  <span className={styles.note}>{product.process} Process</span>
                </div>
              </div>

              <div className={styles.footer}>
                <div className="mb-8">
                  <span className={styles.price}>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                    }).format(product.price)}
                  </span>
                </div>
                <a
                  href={
                    product.waLink ||
                    `https://wa.me/628123456789?text=Order ${product.title}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waButton}
                >
                  <span>Order via WhatsApp</span>
                  <span className={styles.icon}>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className={styles.nav}>
        <div className={styles.counter}>
          0{currentIndex + 1} <span>/ 0{products.length}</span>
        </div>
        <div className={styles.navButtons}>
          <button
            className={styles.navBtn}
            onClick={prevSlide}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className={styles.navBtn}
            onClick={nextSlide}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
