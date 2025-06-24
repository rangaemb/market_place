'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation'; // <-- Step 1: Import the hook
import { CartProvider } from '@/context/CartContext'; // Import the provider
import { CartButton } from '@/components/cart/CartButton'; // Import the new component
import { Leaf, X, Menu } from 'lucide-react';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Features from '@/components/Features';


export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) { // <-- Step 2: Remove `params` from the props
  const params = useParams(); // <-- Step 3: Call the hook to get params
  const tenant = typeof params.tenant === 'string' ? params.tenant : ''; // Type-safe access

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <CartProvider>
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Now use the `tenant` variable from the hook */}
          <Link href={`/${tenant}`} className="flex items-center space-x-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="text-xl sm:text-2xl font-bold text-slate-800">
              Yasangi
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href={`/${tenant}/`} className="block">
              <Button variant="link">Browse Products</Button> </Link>
            {/* <Button variant="outline">Browse Products</Button> */}
            {/* <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button> */}
            <CartButton />
            <Button variant="secondary">Log In</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* ... (Mobile Menu Drawer remains the same) ... */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="flex flex-col space-y-2 p-4">
                <Button variant="ghost" className="justify-start">Browse Products</Button>
                <Button variant="ghost" className="justify-start">Shopping Cart</Button>
                <Button variant="secondary">Log In / Sign Up</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
        <Features />
        <Newsletter />
        <Footer />
      <footer className="border-t bg-white py-6 mt-12">
        <div className="container mx-auto text-center text-slate-500">
          <p>© {new Date().getFullYear()} Yasangi Supply. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    </CartProvider>
  );
}