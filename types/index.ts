export type CartItem = {
  id: number; // This will be the product's ID
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

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