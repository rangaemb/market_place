import Image from 'next/image';
import { mockProducts } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { HomePageClient } from './HomePageClient';

const backgroundImage = '/images/farm_1.png';

// ✅ params is now a Promise
export type PageProps = {
  params: Promise<{ tenant: string }>;
};

export default async function TenantHomePage({ params }: PageProps) {
  // You must await params before using it
  const { tenant } = await params;
  const products = mockProducts;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-left bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-bold text-primary">ADVANCED CROP NUTRITION</span>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Maximize Your Yield Potential
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-600">
              High-performance fertilizers, soil amendments, and nutrients engineered for professional growers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">Shop Fertilizers</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Soil Testing Kits</Button>
            </div>
          </div>

          <div className="hidden md:block relative aspect-video">
            <Image
              src={backgroundImage}
              alt="High-quality fertilizer bags"
              fill
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
          Shop by Application
        </h2>
        <div className="flex flex-wrap gap-3">
          {['Granular', 'Liquid', 'Soil Amendments', 'Organic', 'Pest Control'].map(category => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full text-sm sm:text-base px-4 py-2 sm:px-5"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Client component */}
      <HomePageClient products={products} tenant={tenant} />
    </div>
  );
}
