import { Button } from '@/components/ui/button';
import { Star, CheckCircle, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { mockProducts, Product } from '@/lib/mock-data';

async function getProductById(id: string): Promise<Product | undefined> {
  // In a real app, this would be an API call: `await fetch(...)`
  const product = mockProducts.find(p => p.id === parseInt(id));
  return product;
}

const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <span className="text-slate-600">({reviewCount} Reviews)</span>
  </div>
);

const ProductInfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between border-b py-3">
    <span className="text-slate-500">{label}</span>
    <span className="font-semibold text-slate-800">{value}</span>
  </div>
);

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ productId: string; tenant: string }> 
}) {
  const { productId } = await params;

  if (!productId) {
    return <div>Error: Product ID is missing.</div>;
  }

  const product = await getProductById(productId);

  if (!product) {
    return <div>Product with ID {productId} not found!</div>;
  }

  // ... (JSX for the page remains the same)
  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{product.name}</h1>
          
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.wasPrice && (
              <span className="text-xl text-slate-400 line-through">${product.wasPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="border-t pt-4">
            <p className="text-slate-600">
              A brief, engaging description of the product would go here. It highlights the key benefits and uses of {product.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center border rounded-lg">
              <Button variant="ghost" size="icon"><Minus className="h-4 w-4" /></Button>
              <span className="px-6 font-bold text-lg">1</span>
              <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
            </div>
            <Button size="lg" className="flex-grow">Add to Cart</Button>
          </div>

          <div className="flex items-center gap-2 text-green-600 font-semibold pt-2">
            <CheckCircle className="h-5 w-5" />
            <span>{product.stockStatus}</span>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">Product Specifications</h3>
            <div className="space-y-2">
              <ProductInfoRow label="Unit Size" value={product.unit} />
              <ProductInfoRow label="N-P-K Ratio" value={product.details} />
              <ProductInfoRow label="Application" value={product.tags?.join(', ') || 'N/A'} />
              <ProductInfoRow label="Item SKU" value={`SKU-${product.id.toString().padStart(6, '0')}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}