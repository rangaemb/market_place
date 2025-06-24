'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCartState } from '@/context/CartContext';
import { CartItem } from './CartItem';

export const CartButton = () => {
  const { items } = useCartState();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>My Cart ({itemCount} items)</SheetTitle>
        </SheetHeader>
        
        {items.length > 0 ? (
          <>
            <div className="flex-grow overflow-y-auto pr-4 -mr-4 mt-4">
              <div className="flex flex-col gap-4">
                {items.map(item => <CartItem key={item.id} item={item} />)}
              </div>
            </div>

            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <Button size="lg" className="w-full">Proceed to Checkout</Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="h-20 w-20 text-slate-300" />
            <p className="mt-4 text-center text-slate-500">Your cart is empty.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};