'use client';

import { Button } from '@/components/ui/button';
import { InfoRichProductCard } from '@/components/InfoRichProductCard';
import { Product } from '@/lib/mock-data'; // Import the Product type

// This component receives simple props, no `params` object
type HomePageClientProps = {
  products: Product[];
  tenant: string;
};

export function HomePageClient({ products, tenant }: HomePageClientProps) {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Featured Products</h2>
        <Button variant="link" className="text-primary self-start sm:self-auto -ml-4 sm:ml-0">View All →</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <InfoRichProductCard key={product.id} product={product} index={index} tenant={tenant}/>
        ))}
      </div>
    </section>
  );
}