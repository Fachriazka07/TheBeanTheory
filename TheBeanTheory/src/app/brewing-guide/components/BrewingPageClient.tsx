'use client';

import { useState } from 'react';
import { BrewingHero } from './BrewingHero';
import { MethodCardGrid } from './MethodCardGrid';
import { MethodDetail } from './MethodDetail';
import type { BrewingGuide } from '@/types';

interface BrewingPageClientProps {
  guides: BrewingGuide[];
}

export function BrewingPageClient({ guides }: BrewingPageClientProps) {
  const [selectedId, setSelectedId] = useState(guides[0]?._id || '');

  const selectedGuide = guides.find((g) => g._id === selectedId);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Smooth scroll to detail
    setTimeout(() => {
      const element = document.getElementById('method-detail');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <BrewingHero />
      
      <div className="w-full">
        <MethodCardGrid 
          guides={guides} 
          onSelect={handleSelect} 
        />
      </div>

      {selectedGuide && (
        <MethodDetail guide={selectedGuide} />
      )}
    </main>
  );
}
