import { Suspense } from 'react';
import { getBrewingGuides } from '@/lib/queries';
import { BrewingPageClient } from './components/BrewingPageClient';
import { BrewingSkeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Brewing Guide | The Bean Theory',
  description: 'Master the art of coffee brewing with our step-by-step guides.',
};

export default async function BrewingGuidePage() {
  const initialGuides = await getBrewingGuides();

  const fallbackGuides = [
    {
      _id: 'v60',
      methodName: 'V60',
      difficulty: 'intermediate' as const,
      icon: null as any,
      instructions: [
        { children: [{ text: 'Bloom: Pour 30g of water and wait 30 seconds.' }], imageUrl: '1497935586351-b67a49e012bf' },
        { children: [{ text: 'First Pour: Pour 120g of water in a circular motion.' }], imageUrl: '1511920170033-f8396924c348' },
        { children: [{ text: 'Final Pour: Add the remaining 100g of water.' }], imageUrl: '1497935586351-b67a49e012bf' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=aTC_RNYtEb0',
    },
    {
      _id: 'fp',
      methodName: 'French Press',
      difficulty: 'beginner' as const,
      icon: null as any,
      instructions: [
        { children: [{ text: 'Steep: Add coarse grounds and hot water, wait 4 minutes.' }], imageUrl: '1497935586351-b67a49e012bf' },
        { children: [{ text: 'Plunge: Press down slowly and consistently.' }], imageUrl: '1497935586351-b67a49e012bf' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=aTC_RNYtEb0',
    },
    {
      _id: 'ap',
      methodName: 'AeroPress',
      difficulty: 'advanced' as const,
      icon: null as any,
      instructions: [
        { children: [{ text: 'Setup: Invert the AeroPress and add 15g of fine coffee.' }], imageUrl: '1497935586351-b67a49e012bf' },
        { children: [{ text: 'Brew: Add 200g of water, stir, and wait 2 minutes.' }], imageUrl: '1497935586351-b67a49e012bf' },
        { children: [{ text: 'Press: Plunge into your favorite mug.' }], imageUrl: '1497935586351-b67a49e012bf' },
      ],
      videoUrl: 'https://www.youtube.com/watch?v=aTC_RNYtEb0',
    },
  ];

  const guides = initialGuides.length > 0 ? initialGuides : fallbackGuides;

  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<BrewingSkeleton />}>
        <BrewingPageClient guides={guides} />
      </Suspense>
    </main>
  );
}
