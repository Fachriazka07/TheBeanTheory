'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import type { BrewingGuide } from '@/types';
import styles from './MethodCardGrid.module.css';

interface MethodCardGridProps {
  guides: BrewingGuide[];
  onSelect: (id: string) => void;
}

export function MethodCardGrid({ guides, onSelect }: MethodCardGridProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Create a specific context for the cards to ensure they don't get trapped in opacity: 0
      const cards = gsap.utils.toArray(`.${styles.card}`);
      if (cards.length === 0) return;

      gsap.fromTo(cards, 
        { 
          y: 60, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%', // Trigger slightly earlier so it's less prone to getting missed
            toggleActions: 'play none none none' // Play once and NEVER hide them again
          },
        }
      );
    },
    { scope: containerRef }
  );

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'v60': return '☕';
      case 'aeropress': return '🧪';
      case 'french press': return '🏺';
      case 'cold brew': return '❄️';
      default: return '☕';
    }
  };

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <div className={styles.header}>
          <span className={styles.subtitle}>
            Equipment Choice
          </span>
          <h3 className={styles.title}>
            Choose Your <br /> Method
          </h3>
          <div className={styles.divider} />
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {guides.map((guide) => (
            <button
              key={guide._id}
              onClick={() => onSelect(guide._id)}
              className={styles.card}
            >
              {/* Animated Background Sweep for Premium Interactiveness */}
              <div className={styles.cardBackground} />

              <div className={styles.cardContent}>
                {/* Premium Icon Container */}
                <div className={styles.iconWrapper}>
                  {getIcon(guide.methodName)}
                </div>
                
                {/* Method Title */}
                <h4 className={styles.cardTitle}>
                  {guide.methodName}
                </h4>
                
                {/* Premium Layout Badge for Difficulty */}
                <div className={styles.badge}>
                  <span className={styles.badgeText}>
                    {guide.difficulty}
                  </span>
                </div>
                
                {/* Description */}
                <p className={styles.description}>
                  Technical guide for high-clarity {guide.methodName} brewing.
                </p>
              </div>

              {/* Bottom Gold Accent */}
              <div className={styles.accent} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
