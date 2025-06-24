'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

import { Product } from '@/types';
import { AddToCartButton } from '@/components/cart/AddToCartButton';

// --- Star Rating Sub-component ---
const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => (
  <div className="flex items-center gap-1">
    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
    <span className="font-bold text-xs sm:text-sm text-slate-700">{rating.toFixed(1)}</span>
    <span className="hidden sm:inline text-xs text-slate-500">({reviewCount})</span>
  </div>
);

// --- The Main Product Card Component with Always-Visible Button ---
export const InfoRichProductCard = ({ product, index, tenant }: { product: Product; index: number; tenant: string }) => {
  // We no longer need `motion` or `index` as props if we remove the entry animation
  // const params = useParams();
  // const tenant = typeof params.tenant === 'string' ? params.tenant : '';
  console.log(index);
  return (
    <div className="h-full">
      <Card className="w-full h-full overflow-hidden flex flex-col">
        {/* The Link now wraps only the top content, not the button */}
        <Link href={`/${tenant}/products/${product.id}`} className="block">
          {/* --- Image Section --- */}
          <div className="relative w-full aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* --- Top Content Section --- */}
          <div className="p-3 sm:p-4">
            <h3 className="font-semibold text-sm sm:text-base text-slate-800 leading-snug line-clamp-2">
              {product.name}
            </h3>
            <div className="hidden sm:block mt-2">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
          </div>
        </Link>
        
        {/* --- Bottom Content Section (Always Visible) --- */}
        <div className="p-3 sm:p-4 pt-0 mt-auto flex flex-col">
          {/* Price */}
          <div className="mb-2">
            <p className="text-base sm:text-xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
            {product.wasPrice && (
              <p className="text-xs text-slate-400 line-through">${product.wasPrice.toFixed(2)}</p>
            )}
          </div>
          {/* Add to Cart Button */}
          <AddToCartButton product={product} />
        </div>
      </Card>
    </div>
  );
};