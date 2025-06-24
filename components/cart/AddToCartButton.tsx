'use client';

import { useCartState, useCartDispatch } from '@/context/CartContext';
import { Product } from '@/types';
import { Button } from '../ui/button';
import { Minus, Plus, ShoppingBag } from 'lucide-react';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { items } = useCartState();
  const dispatch = useCartDispatch();
  
  const itemInCart = items.find(item => item.id === product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const handleUpdateQuantity = (e: React.MouseEvent, quantity: number) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity } });
  };

  if (!itemInCart) {
    return (
      <Button 
        onClick={handleAdd}
        className="w-full mt-2" // <-- New: Full width and margin-top
        aria-label="Add to cart"
      >
        <ShoppingBag className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    );
  }

  return (
    <div 
      className="flex items-center justify-between bg-slate-100 rounded-lg p-1 mt-2" // <-- New: Standard block styles
    >
      <Button onClick={(e) => handleUpdateQuantity(e, itemInCart.quantity - 1)} variant="ghost" size="icon" className="h-8 w-8">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="font-bold text-lg">{itemInCart.quantity}</span>
      <Button onClick={(e) => handleUpdateQuantity(e, itemInCart.quantity + 1)} variant="ghost" size="icon" className="h-8 w-8">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};