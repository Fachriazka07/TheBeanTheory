'use client';

import { useState } from 'react';
import styles from './ProductFilter.module.css';

interface ProductFilterProps {
  onFilterChange: (category: string) => void;
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Origins' },
    { id: 'light', label: 'Light Roast' },
    { id: 'medium', label: 'Medium Roast' },
    { id: 'dark', label: 'Dark Roast' },
  ];

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
    onFilterChange(id);
  };

  return (
    <nav className={styles.filterWrapper}>
      <div className={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.activeBtn : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
