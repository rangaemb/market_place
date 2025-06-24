'use client';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types';
import { Button } from '../ui/button';

export const CartItem = ({ item }: { item: CartItemType }) => {
  const dispatch = useCartDispatch();

  const handleUpdateQuantity = (quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-semibold line-clamp-2 leading-tight">{item.name}</h3>
        <p className="text-sm font-bold text-slate-800 mt-1">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        {/* Quantity Selector */}
        <div className="flex items-center border rounded-md mt-2 w-fit">
          <Button onClick={() => handleUpdateQuantity(item.quantity - 1)} variant="ghost" size="icon" className="h-7 w-7">
            <Minus className="h-3 w-3" />
          </Button>
          <span className="px-3 text-sm font-bold">{item.quantity}</span>
          <Button onClick={() => handleUpdateQuantity(item.quantity + 1)} variant="ghost" size="icon" className="h-7 w-7">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="self-start">
        <Button onClick={() => handleUpdateQuantity(0)} variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:bg-red-50 hover:text-red-600">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};