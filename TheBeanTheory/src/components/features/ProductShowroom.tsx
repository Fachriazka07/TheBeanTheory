'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import type { Product } from '@/types';
import styles from './ProductShowroom.module.css';

gsap.registerPlugin(ScrollTrigger);

interface ProductShowroomProps {
  products: Product[];
}

export function ProductShowroom({ products }: ProductShowroomProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blocks = gsap.utils.toArray(`.${styles.productBlock}`);

      blocks.forEach((block: any) => {
        const image = block.querySelector(`.${styles.image}`);
        const container = block.querySelector(`.${styles.imageContainer}`);
        const bgNumber = block.querySelector(`.${styles.bgNumber}`);

        // 1. Entrance & Parallax Animations
        gsap.fromTo(
          image,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.to(bgNumber, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: block,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        // 2. Interactive 3D Magnetic Tilt (Mouse only)
        const isMouse = window.matchMedia('(pointer: fine)').matches;

        const handleMouseMove = (e: MouseEvent) => {
          if (!isMouse) return;
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Calculate rotation (max 15 degrees)
          const rotateX = ((y - centerY) / centerY) * -15;
          const rotateY = ((x - centerX) / centerX) * 15;

          gsap.to(container, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: true,
          });

          gsap.to(image, {
            filter: `drop-shadow(${rotateY * -2}px ${rotateX * 2}px 80px rgba(44, 24, 16, 0.3))`,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(container, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
            overwrite: true,
          });

          gsap.to(image, {
            filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.15))',
            duration: 0.8,
            ease: 'power2.out',
          });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
      });
    },
    { dependencies: [products], scope: containerRef }
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
    <div className={styles.showroom} ref={containerRef}>
      {products.map((product, i) => (
        <section
          key={product._id}
          className={`${styles.productBlock} ${i % 2 !== 0 ? styles.reversed : ''}`}
        >
          <div className={styles.bgNumber}>0{i + 1}</div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img
                src={product.imageUrl || '/images/placeholder-bean.jpg'}
                alt={product.title}
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.contentSection}>
            <span className={styles.caption}>{product.process} Process</span>
            <h2 className={styles.title}>{product.title}</h2>
            <span className={styles.origin}>{product.origin}</span>

            <p className={styles.description}>
              Experience the depth of {product.origin} through our signature{' '}
              {product.roastLevel} roast. Each bean is selected for its
              exceptional quality and unique flavor profile.
            </p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Roast Level</span>
                <span className={styles.metaValue}>{product.roastLevel}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Notes</span>
                <span className={styles.metaValue}>
                  {product.notes.join(', ')}
                </span>
              </div>
            </div>

            <div className={styles.footer}>
              <span className={styles.price}>
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(product.price)}
              </span>
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
        </section>
      ))}
    </div>
  );
}
