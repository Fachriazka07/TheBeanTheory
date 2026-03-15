import { Suspense } from 'react';
import {
  HeroSection,
  FeaturedProducts,
  BrandStory,
  CTASection,
} from '@/components/landing';
import { HomeSkeleton } from '@/components/ui/skeleton';
import { getFeaturedProducts } from '@/lib/queries';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main>
      <Suspense fallback={<HomeSkeleton />}>
        <HeroSection />
        <FeaturedProducts products={featuredProducts} />
        <BrandStory />
        <CTASection />
      </Suspense>
    </main>
  );
}
