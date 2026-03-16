'use client';

import { ProductsHero } from './ProductsHero';
import { ProductShowroom } from './ProductShowroom';
import type { Product } from '@/types';

interface ProductsPageClientProps {
  initialProducts: Product[];
}

export function ProductsPageClient({
  initialProducts,
}: ProductsPageClientProps) {
  return (
    <div style={{ backgroundColor: '#fafaf7' }}>
      <ProductsHero />
      <section className="pb-32">
        <ProductShowroom products={initialProducts} />
      </section>
    </div>
  );
}
