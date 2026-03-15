import { Suspense } from 'react';
// import { MapContainer } from '@/components/features/MapContainer';
// import { BranchList } from '@/components/features/BranchList';
import { LocationsSkeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Locations | The Bean Theory',
  description: 'Find a The Bean Theory roastery near you.',
};

export default function LocationsPage() {
  return (
    <main className="pt-24 px-8 max-w-[1440px] mx-auto min-h-screen">
      <header className="mb-12">
        <h1 className="text-5xl font-playfair text-charcoal mb-4">Visit Us</h1>
        <p className="text-stone text-lg max-w-2xl">
          Experience our specialty coffee in person at one of our locations.
        </p>
      </header>

      <Suspense fallback={<LocationsSkeleton />}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            {/* <BranchList /> */}
            <p className="text-stone">Branch list will be implemented here.</p>
          </div>
          <div className="w-full lg:w-2/3 h-[500px] lg:h-[700px] bg-cream rounded-lg overflow-hidden">
            {/* <MapContainer /> */}
            <p className="text-stone p-8 text-center mt-32">
              Interactive map will be implemented here.
            </p>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
