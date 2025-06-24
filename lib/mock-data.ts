// This file is now the single source of truth for our product data and types.

// Define the shared Product type
export type Product = {
  id: number;
  name: string;
  unit: string;
  price: number;
  wasPrice?: number | null;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  stockStatus: string;
  tags?: string[];
  details: string;
};

// Export the mock data array
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'YieldMax All-Purpose Granular Fertilizer (10-10-10)',
    unit: '50 lb bag',
    price: 34.99,
    wasPrice: 39.99,
    imageUrl: '/images/TerraBoost_bag.png',
    rating: 4.9,
    reviewCount: 215,
    stockStatus: 'In Stock',
    tags: ['Sale', 'Top Seller'],
    details: 'N-P-K: 10-10-10'
  },
  {
    id: 2,
    name: 'GreenGro Liquid Gold Plant Food',
    unit: '1 Gallon Concentrate',
    price: 45.50,
    wasPrice: null,
    imageUrl: '/images/GreenGrowBottle.png',
    rating: 4.8,
    reviewCount: 150,
    stockStatus: 'In Stock',
    tags: ['Organic'],
    details: 'For hydroponics & soil'
  },
  {
    id: 3,
    name: 'Harvest Roots Organic Compost',
    unit: '2 cu ft bag',
    price: 19.99,
    wasPrice: null,
    imageUrl: '/images/compostbag.png',
    rating: 4.7,
    reviewCount: 98,
    stockStatus: 'In Stock',
    tags: ['Organic', 'Soil Amendment'],
    details: 'OMRI Listed for organic use'
  },
];