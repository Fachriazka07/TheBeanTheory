import { Suspense } from 'react';
import { getProducts } from '@/lib/queries';
import { ProductsPageClient } from '@/components/features/ProductsPageClient';
import { ProductsSkeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Our Beans | The Bean Theory',
  description: 'Explore our selection of specialty coffee beans.',
};

export default async function ProductsPage() {
  const initialProducts = await getProducts();

  // Fallback for demo if no products in Sanity yet
  const fallbackProducts = [
    {
      _id: '1',
      title: 'Gayo Mountain',
      slug: { current: 'gayo-mountain' },
      origin: 'Aceh, Sumatra',
      roastLevel: 'medium' as const,
      process: 'natural' as const,
      price: 85000,
      isReady: true,
      notes: ['Dark Chocolate', 'Floral'],
      image: { asset: { _ref: 'local-gayo' } } as any,
      imageUrl: '/images/Product/Gayo Mountain.png',
      waLink: '',
    },
    {
      _id: '2',
      title: 'Toraja Sapan',
      slug: { current: 'toraja-sapan' },
      origin: 'Sulawesi',
      roastLevel: 'dark' as const,
      process: 'washed' as const,
      price: 92000,
      isReady: true,
      notes: ['Spices', 'Nutty'],
      image: { asset: { _ref: 'local-toraja' } } as any,
      imageUrl: '/images/Product/Toraja Sapan.png',
      waLink: '',
    },
    {
      _id: '3',
      title: 'Flores Bajawa',
      slug: { current: 'flores-bajawa' },
      origin: 'NTT',
      roastLevel: 'light' as const,
      process: 'honey' as const,
      price: 78000,
      isReady: true,
      notes: ['Caramel', 'Fruity'],
      image: { asset: { _ref: 'local-flores' } } as any,
      imageUrl: '/images/Product/Flores Bajawa.png',
      waLink: '',
    },
  ];

  const products =
    initialProducts.length > 0 ? initialProducts : fallbackProducts;

  return (
    <main>
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsPageClient initialProducts={products} />
      </Suspense>
    </main>
  );
}
