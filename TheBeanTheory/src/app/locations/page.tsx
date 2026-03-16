import { Suspense } from 'react';
import { getLocations } from '@/lib/queries';
import { LocationsPageClient } from './components/LocationsPageClient';

export const metadata = {
  title: 'Our Locations | The Bean Theory',
  description: 'Visit our roasteries in Jakarta and experience specialty coffee.',
};

export default async function LocationsPage() {
  const initialLocations = await getLocations();

  const fallbackLocations = [
    {
      _id: '1',
      branchName: 'TBT Sudirman',
      address: 'Jl. Jenderal Sudirman No. 123, Jakarta Selatan 12190',
      coordinates: { _type: 'geopoint', lat: -6.2247, lng: 106.8077 },
      openingHours: [{ day: 'Mon-Sun', open: '08:00', close: '22:00' }],
    },
    {
      _id: '2',
      branchName: 'TBT Kemang',
      address: 'Jl. Kemang Raya No. 45, Jakarta Selatan 12730',
      coordinates: { _type: 'geopoint', lat: -6.2737, lng: 106.8113 },
      openingHours: [{ day: 'Mon-Sun', open: '09:00', close: '23:00' }],
    },
    {
      _id: '3',
      branchName: 'TBT BSD',
      address: 'Jl. BSD Green Office Park No. 7, Tangerang 15345',
      coordinates: { _type: 'geopoint', lat: -6.3016, lng: 106.6535 },
      openingHours: [{ day: 'Mon-Sun', open: '08:00', close: '21:00' }],
    },
  ];

  const locations = initialLocations.length > 0 ? initialLocations : fallbackLocations;

  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={
        <div className="py-32 text-center font-mono text-xs uppercase tracking-widest text-stone-400">
          Preparing Locations...
        </div>
      }>
        <LocationsPageClient locations={locations} />
      </Suspense>
    </main>
  );
}
