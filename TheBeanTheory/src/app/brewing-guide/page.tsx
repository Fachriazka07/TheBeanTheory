import { Suspense } from 'react';
// import { MethodSelector } from '@/components/features/MethodSelector';
// import { StepByStep } from '@/components/features/StepByStep';
import { BrewingSkeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Brewing Guide | The Bean Theory',
  description: 'Master the art of brewing with our step-by-step guides.',
};

export default function BrewingGuidePage() {
  return (
    <main className="pt-24 px-8 max-w-[1024px] mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-playfair text-charcoal mb-4">
          Master the Pour
        </h1>
        <p className="text-stone text-lg max-w-xl mx-auto">
          Elevate your daily ritual with our curated brewing recipes.
        </p>
      </header>

      <Suspense fallback={<BrewingSkeleton />}>
        {/* <MethodSelector /> */}
        {/* <StepByStep /> */}
        <section className="min-h-[50vh]">
          <p className="text-stone text-center">
            Brewing guide content will be implemented here.
          </p>
        </section>
      </Suspense>
    </main>
  );
}
