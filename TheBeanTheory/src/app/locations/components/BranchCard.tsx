'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import type { Location } from '@/types';
import styles from './BranchCard.module.css';

interface BranchCardProps {
  location: Location;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export function BranchCard({ location, isActive, onClick, index }: BranchCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current || !iconRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Magnetic intensity
    const intensity = 15;
    const moveX = ((x - centerX) / centerX) * intensity;
    const moveY = ((y - centerY) / centerY) * intensity;
    
    gsap.to(iconRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!iconRef.current) return;
    gsap.to(iconRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${styles.card} ${isActive ? styles.cardActive : ''} reveal-card`}
    >
      <div className={styles.bgLabel}>0{index + 1}</div>
      
      <div className={styles.header}>
        <div className={styles.iconWrapper} ref={iconRef}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={styles.directionsBtn}
        >
          Directions ↗
        </a>
      </div>

      <h4 className={styles.branchName}>{location.branchName}</h4>
      <p className={styles.address}>{location.address}</p>

      <div className={styles.footer}>
        <div>
          <span className={styles.hoursLabel}>Opening Hours</span>
          <span className={styles.hoursValue}>
            {location.openingHours[0]?.open} — {location.openingHours[0]?.close}
          </span>
        </div>
      </div>
    </button>
  );
}
