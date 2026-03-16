'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { LocationsHero } from './LocationsHero';
import { BranchCard } from './BranchCard';
import type { Location } from '@/types';
import dynamic from 'next/dynamic';
import styles from './LocationsPageClient.module.css';

const BranchMap = dynamic(() => import('./BranchMap'), { 
  ssr: false,
  loading: () => (
    <div className={styles.mapContainer}>
      <div className="w-full h-full animate-pulse flex items-center justify-center bg-stone-100">
        <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
          Loading Interactive Map...
        </span>
      </div>
    </div>
  )
});

interface LocationsPageClientProps {
  locations: Location[];
}

export function LocationsPageClient({ locations }: LocationsPageClientProps) {
  const [activeId, setActiveId] = useState<string | null>(locations[0]?._id || null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Entrance Stagger Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      tl.from(`.${styles.header} > *`, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
      })
      .from(mapRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.reveal-card', {
        x: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
      }, '-=1.2');

    },
    { scope: containerRef }
  );

  const handleCardClick = (id: string) => {
    setActiveId(id);
    
    // Smooth scroll for the active card into view within its scroll container if needed
    // (Optional enhancement)
  };

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <LocationsHero />
      
      {/* Finder Section - Split View Layout */}
      <section className={styles.finderSection}>
        {/* Left Side - Interactive Map */}
        <div className={styles.mapWrapper} ref={mapRef}>
          <div className={styles.mapContainer}>
            <BranchMap 
              locations={locations} 
              activeId={activeId} 
              onMarkerClick={handleCardClick} 
            />
          </div>
        </div>

        {/* Right Side - Information & Scrollable Cards */}
        <div className={styles.cardsWrapper}>
          <div className={styles.header}>
            <span className={styles.caption}>Our Presence</span>
            <h3 className={styles.title}>The Roasteries</h3>
          </div>

          <div className={styles.scrollList}>
            {locations.map((loc, index) => (
              <BranchCard
                key={loc._id}
                index={index}
                location={loc}
                isActive={activeId === loc._id}
                onClick={() => handleCardClick(loc._id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
