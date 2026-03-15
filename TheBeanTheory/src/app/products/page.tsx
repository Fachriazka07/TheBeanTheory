import { Suspense } from 'react';
// import { ProductFilter } from '@/components/features/ProductFilter';
// import { ProductGrid } from '@/components/features/ProductGrid';
import { ProductsSkeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Our Beans | The Bean Theory',
  description: 'Explore our selection of specialty coffee beans.',
};

export default function ProductsPage() {
  return (
    <main className="pt-24 px-8 max-w-[1440px] mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-playfair text-charcoal mb-4">
          Our Selection
        </h1>
        <p className="text-stone text-lg max-w-2xl">
          Single origin and signature blends, roasted with precision in Jakarta.
        </p>
      </header>

      <Suspense fallback={<ProductsSkeleton />}>
        {/* <ProductFilter /> */}
        {/* <ProductGrid /> */}
        <section className="min-h-[50vh]">
          <p className="text-stone">Products grid will be implemented here.</p>
        </section>
      </Suspense>
    </main>
  );
}
